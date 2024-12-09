import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function createGuestUser() {

}

export async function createAdminUser(){

}

export async function createEmailTemplate(){

    const emailTemplateVerificationMail = await prisma.emailTemplate.create({
        data: {
            name: "verification-mail",
            subject: "Verify Your Email Address",
            from: "onboarding@bsamaritan.com",
            html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Email Verification</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 0;
                            color: #333333;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            padding: 10px 0;
                            background-color: #4CAF50;
                            color: #ffffff;
                            border-radius: 8px 8px 0 0;
                        }
                        .header h1 {
                            margin: 0;
                            font-size: 24px;
                        }
                        .content {
                            padding: 20px;
                            text-align: center;
                        }
                        .content p {
                            font-size: 16px;
                            margin-bottom: 20px;
                        }
                        .button {
                            display: inline-block;
                            padding: 10px 20px;
                            font-size: 16px;
                            color: #ffffff;
                            background-color: #4CAF50;
                            text-decoration: none;
                            border-radius: 5px;
                        }
                        .footer {
                            margin-top: 30px;
                            font-size: 12px;
                            color: #777777;
                            text-align: center;
                        }
                        .footer p {
                            margin: 0;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Verify Your Email</h1>
                        </div>
                        <div class="content">
                            <p>Hello,</p>
                            <p>Thank you for registering with us! Please click the button below to verify your email address:</p>
                            <a href="{{verification_link}}" class="button">Verify Email</a>
                            <p>If the button above doesn't work, copy and paste the following link into your browser:</p>
                            <p><a href="{{verification_link}}" style="color: #4CAF50;">{{verification_link}}</a></p>
                            <p>If you did not create an account, no further action is required.</p>
                        </div>
                        <div class="footer">
                            <p>&copy; 2024 Your Company. All rights reserved.</p>
                            <p>If you have any questions, feel free to <a href="mailto:support@yourcompany.com" style="color: #4CAF50;">contact us</a>.</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        }
    });
    
}