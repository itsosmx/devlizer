const FormHTMLTemplate = () => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission - Devlizer</title>
    <style>
        /* CSS Variables matching the app theme */
        :root {
            --primary: oklch(0.74 0.16 34.57);
            --primary-foreground: oklch(1 0 0);
            --secondary: oklch(0.96 0.02 28.97);
            --secondary-foreground: oklch(0.56 0.13 32.65);
            --muted: oklch(0.97 0.02 44.86);
            --muted-foreground: oklch(0.49 0.05 27.86);
            --accent: oklch(0.83 0.11 57.89);
            --accent-foreground: oklch(0.34 0.01 7.89);
            --destructive: oklch(0.61 0.21 22.21);
            --border: oklch(0.93 0.04 40.57);
            --background: oklch(0.99 0.01 67.74);
            --foreground: oklch(0.34 0.01 7.89);
            --card: oklch(1 0 0);
            --card-foreground: oklch(0.34 0.01 7.89);
            --radius: 0.625rem;
            --font-sans: Montserrat, sans-serif;
            --shadow: 0 1px 3px 0px oklch(0 0 0 / 0.1), 0 1px 2px -1px oklch(0 0 0 / 0.1);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: var(--font-sans), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;
            line-height: 1.6;
            color: var(--foreground);
            background: linear-gradient(135deg, var(--background) 0%, var(--muted) 100%);
            padding: 20px;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: var(--card);
            border-radius: var(--radius);
            box-shadow: var(--shadow);
            overflow: hidden;
        }

        .header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            color: var(--primary-foreground);
            padding: 40px 30px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
            opacity: 0.1;
            animation: float 20s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(2deg); }
        }

        .logo {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }

        .content {
            padding: 40px 30px;
        }

        .form-title {
            font-size: 24px;
            font-weight: 600;
            color: var(--foreground);
            margin-bottom: 10px;
            text-align: center;
        }

        .form-subtitle {
            color: var(--muted-foreground);
            text-align: center;
            margin-bottom: 30px;
            font-size: 16px;
        }

        .field-group {
            margin-bottom: 25px;
        }

        .field-row {
            display: flex;
            gap: 20px;
            margin-bottom: 25px;
        }

        .field-half {
            flex: 1;
        }

        .field-label {
            display: block;
            font-weight: 600;
            color: var(--foreground);
            margin-bottom: 8px;
            font-size: 14px;
        }

        .field-value {
            display: block;
            width: 100%;
            padding: 12px 16px;
            background: var(--muted);
            border: 2px solid var(--border);
            border-radius: 8px;
            color: var(--foreground);
            font-size: 15px;
            line-height: 1.5;
            transition: all 0.3s ease;
            min-height: 50px;
            display: flex;
            align-items: center;
        }

        .field-value.message {
            min-height: 120px;
            align-items: flex-start;
            padding-top: 16px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }

        .field-value:hover {
            border-color: var(--primary);
            background: var(--background);
        }

        .project-type-badge {
            display: inline-flex;
            align-items: center;
            padding: 6px 12px;
            background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
            color: var(--primary-foreground);
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }

        .timestamp {
            text-align: center;
            color: var(--muted-foreground);
            font-size: 13px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid var(--border);
        }

        .footer {
            background: var(--muted);
            padding: 30px;
            text-align: center;
            border-top: 1px solid var(--border);
        }

        .footer-text {
            color: var(--muted-foreground);
            font-size: 14px;
            margin-bottom: 15px;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            color: var(--foreground);
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
        }

        .contact-item:hover {
            color: var(--primary);
        }

        .icon {
            width: 16px;
            height: 16px;
            fill: currentColor;
        }

        .divider {
            height: 3px;
            background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 50%, var(--primary) 100%);
            margin: 30px 0;
            border-radius: 2px;
        }

        /* Responsive Design */
        @media (max-width: 640px) {
            body {
                padding: 10px;
            }

            .header {
                padding: 30px 20px;
            }

            .content {
                padding: 30px 20px;
            }

            .footer {
                padding: 20px;
            }

            .field-row {
                flex-direction: column;
                gap: 15px;
            }

            .contact-info {
                flex-direction: column;
                gap: 15px;
            }

            .logo {
                font-size: 28px;
            }

            .form-title {
                font-size: 20px;
            }
        }

        /* Dark mode support */
        @media (prefers-color-scheme: dark) {
            :root {
                --background: oklch(0.26 0.02 351.79);
                --foreground: oklch(0.94 0.01 48.7);
                --card: oklch(0.32 0.02 339.89);
                --card-foreground: oklch(0.94 0.01 48.7);
                --muted: oklch(0.32 0.02 339.89);
                --muted-foreground: oklch(0.84 0.02 50.14);
                --border: oklch(0.36 0.02 342.33);
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">Devlizer</div>
            <div class="header-subtitle">New Contact Form Submission</div>
        </div>

        <!-- Main Content -->
        <div class="content">
            <h1 class="form-title">Get In Touch Form Submission</h1>
            <p class="form-subtitle">You've received a new message from your website contact form</p>

            <div class="divider"></div>

            <!-- Contact Information -->
            <div class="field-row">
                <div class="field-half">
                    <label class="field-label">First Name</label>
                    <div class="field-value"></div>
                </div>
                <div class="field-half">
                    <label class="field-label">Last Name</label>
                    <div class="field-value">{{lastName}}</div>
                </div>
            </div>

            <div class="field-group">
                <label class="field-label">Email Address</label>
                <div class="field-value">{{email}}</div>
            </div>

            <div class="field-group">
                <label class="field-label">Project Type</label>
                <div class="field-value">
                    <span class="project-type-badge">{{projectType}}</span>
                </div>
            </div>

            <div class="field-group">
                <label class="field-label">Message</label>
                <div class="field-value message">{{message}}</div>
            </div>

            <!-- Timestamp -->
            <div class="timestamp">
                <strong>Received:</strong> {{timestamp}}
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p class="footer-text">
                This email was automatically generated from your contact form submission.
            </p>
            
            <div class="contact-info">
                <a href="mailto:hi@devlizer.com" class="contact-item">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    hi@devlizer.com
                </a>
                
                <a href="#" class="contact-item">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    @devlizer
                </a>
                
                <a href="#" class="contact-item">
                    <svg class="icon" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    Premium Support
                </a>
            </div>
        </div>
    </div>
</body>
</html>`