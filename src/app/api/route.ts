import { NextRequest } from "next/server";
import nodemailer from 'nodemailer';
import path from "path";
import fs from 'fs/promises';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  }
});
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    let name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const projectType = formData.get("projectType") as string;
    const message = formData.get("message") as string;

    // Validation
    if (!email || !message) {
      throw new Error("All fields are required.");
    }


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
      .replace(/{{name}}/g, name)
      .replace(/{{email}}/g, email)
      .replace(/{{projectType}}/g, projectType)
      .replace(/{{message}}/g, message)
      .replace(/{{timestamp}}/g, timestamp);

    // Email options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType}`,
      html: `${htmlTemplate}`,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Message: ${message}

Received: ${timestamp}
      `.trim()
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response("Email sent successfully!", {
      status: 200
    })

  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}