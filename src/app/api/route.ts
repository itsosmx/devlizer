import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs/promises';
import { Resend } from "resend";



const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT = 1; // Max requests per window
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(ip: string) {
  const now = Date.now();
  const userRecord = rateLimitMap.get(ip);

  if (!userRecord) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (now - userRecord.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return true;
  }

  if (userRecord.count >= RATE_LIMIT) {
    return false;
  }

  userRecord.count += 1;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    const resendClient = new Resend(process.env.RESEND_API_KEY!)
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const isAllowed = checkRateLimit(ip);

    if (!isAllowed) {
      return NextResponse.json({ message: "Too Many Requests. please wait before trying again." }, { status: 429 });
    }

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
    await resendClient.emails.send({
      from: `App Contact Form <${process.env.DEFAULT_FORM_EMAIL}>`,
      to: process.env.DEFAULT_TO_EMAIL!,
      replyTo: email,
      subject: `New Contact Form Submission - ${projectType}`,
      html: `${htmlTemplate}`,
      cc: process.env.DEFAULT_CC_EMAIL,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Project Type: ${projectType}
Message: ${message}

Received: ${timestamp}
      `.trim()
    });

    return NextResponse.json({ message: "Email sent successfully!" }, {
      status: 200
    })

  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}