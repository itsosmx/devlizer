"use server";
import nodemailer from 'nodemailer';
import fs from 'fs/promises';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});

export async function sendEmail(formData: FormData) {
  // "use server";

  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const projectType = formData.get("projectType") as string;
  const message = formData.get("message") as string;
  console.log("Received form data:", {
    firstName,
    lastName,
    email,
    projectType,
    message
  });

  // Validation
  if (!firstName || !lastName || !email || !projectType || !message) {
    throw new Error("All fields are required.");
  }

  try {
    // Read the HTML template
    const templatePath = path.join(process.cwd(), 'email-template.html');
    let htmlTemplate = await fs.readFile(templatePath, 'utf-8');

    // Replace placeholders with actual data
    const timestamp = new Date().toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZoneName: 'short'
    });

    htmlTemplate = htmlTemplate
      .replace(/{{firstName}}/g, firstName)
      .replace(/{{lastName}}/g, lastName)
      .replace(/{{email}}/g, email)
      .replace(/{{projectType}}/g, projectType)
      .replace(/{{message}}/g, message)
      .replace(/{{timestamp}}/g, timestamp);

    // Email options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType}`,
      html: `${htmlTemplate}`,
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Project Type: ${projectType}
Message: ${message}

Received: ${timestamp}
      `.trim()
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent successfully:", info.messageId);
    return { success: true, message: "Email sent successfully!" };

  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email. Please try again.");
  }


}