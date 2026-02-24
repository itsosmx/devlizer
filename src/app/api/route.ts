import { NextRequest } from "next/server";
import path from "path";
import fs from 'fs/promises';
import { Resend } from "resend";


export const resendClient = new Resend(process.env.RESEND_API_KEY!)


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

    // Send the email
    const info = await resendClient.emails.send({
      from: `App Contact Form <contact@notifications.devlizer.com>`,
      to: `contact@dorobjano.resend.app`,
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
    });
    
    return new Response("Email sent successfully!", {
      status: 200
    })

  } catch (error) {
    console.error("Error in POST request:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}