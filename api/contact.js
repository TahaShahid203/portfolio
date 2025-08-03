import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required")
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = contactFormSchema.parse(req.body);
    
    // Fix: createTransport not createTransporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "tahashahid203@gmail.com",
        pass: process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD
      }
    });

    await transporter.sendMail({
      from: email,
      to: "tahashahid203@gmail.com",
      subject: `Portfolio Contact: Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>This message was sent from your portfolio website contact form.</small></p>
      `,
      replyTo: email
    });
    
    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon."
    });
  } catch (error) {
    console.error("Email sending error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all fields correctly."
      });
    }
    
    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again or contact me directly at tahashahid203@gmail.com"
    });
  }
}