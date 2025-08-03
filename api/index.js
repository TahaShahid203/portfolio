import express from 'express';
import { createServer } from 'http';
import nodemailer from 'nodemailer';
import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(1, "Message is required")
});

// Create Express app for serverless function
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add your contact route
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = contactFormSchema.parse(req.body);
    
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "tahashahid203@gmail.com",
        pass: process.env.EMAIL_PASSWORD || process.env.GMAIL_APP_PASSWORD
      }
    });

    const mailOptions = {
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
    };

    await transporter.sendMail(mailOptions);
    
    res.json({
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
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Catch all for API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API route not found", path: req.path });
});

// For non-API routes, redirect to your frontend
app.get("*", (req, res) => {
  // This should serve your built React app
  res.redirect(301, '/');
});

export default app;