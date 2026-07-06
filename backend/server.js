import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Target recipient email address
const BRAND_EMAIL = 'arhatechnologies5@gmail.com';

// Setup email transporter helper
let transporter = null;
async function getEmailTransporter() {
  if (transporter) return transporter;

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = parseInt(process.env.SMTP_PORT || '587');

  if (user && pass) {
    console.log(`Using configured SMTP server: ${host}:${port} for email delivery.`);
    transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });
  } else {
    console.log('No SMTP credentials found in environment. Creating temporary Ethereal test account...');
    const testAccount = await nodemailer.createTestAccount();
    transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    // Store credentials for reference
    process.env.ETHEREAL_USER = testAccount.user;
    process.env.ETHEREAL_PASS = testAccount.pass;
  }

  return transporter;
}

// Unified email sending handler
async function sendNotificationEmail({ subject, htmlContent }) {
  try {
    const activeTransporter = await getEmailTransporter();
    const isEthereal = !process.env.SMTP_USER;

    const mailOptions = {
      from: `"Arha Web Portal" <${process.env.SMTP_USER || 'arha.portal@gmail.com'}>`,
      to: BRAND_EMAIL,
      subject: subject,
      html: htmlContent,
    };

    const info = await activeTransporter.sendMail(mailOptions);
    console.log(`Email successfully processed. MessageId: ${info.messageId}`);

    if (isEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log(`[TEST EMAIL PREVIEW URL]: ${previewUrl}`);
      return { success: true, previewUrl };
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to send notification email:', error);
    return { success: false, error: error.message };
  }
}

// Helper function to append data to a JSON file
async function appendToJsonFile(filePath, newData) {
  try {
    let currentData = [];
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      currentData = JSON.parse(fileContent);
    } catch (readError) {
      // File might not exist or be empty, ignore and start with an empty array
    }
    
    const id = Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
    const timestamp = new Date().toISOString();
    
    currentData.push({
      id,
      timestamp,
      ...newData
    });
    
    await fs.writeFile(filePath, JSON.stringify(currentData, null, 2), 'utf-8');
    return id;
  } catch (error) {
    console.error(`Error writing to ${filePath}:`, error);
    return null;
  }
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Arha Technologies backend is running smoothly.' });
});

// Endpoint for contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please provide name, email, and message.' });
  }

  const submission = { name, email, phone, subject, message };
  const filePath = path.join(__dirname, 'contacts.json');
  const submissionId = await appendToJsonFile(filePath, submission);

  if (submissionId) {
    console.log(`New contact submission from ${name} (${email}) saved in contacts.json.`);

    // Build rich HTML email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #3b82f6; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Contact Message Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
            <td style="padding: 8px 0;">${subject || 'General Inquiry'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
            <td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.5;">${message}</td>
          </tr>
        </table>
        <div style="margin-top: 25px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          Received on: ${new Date().toLocaleString()} | ID: ${submissionId}
        </div>
      </div>
    `;

    // Send email alert
    const emailResult = await sendNotificationEmail({
      subject: `[Contact Form] - ${name}: ${subject || 'New Inquiry'}`,
      htmlContent: emailHtml
    });

    res.json({ 
      success: true, 
      message: 'Thank you for contacting Arha Technologies! We will reach out to you shortly.',
      previewUrl: emailResult.previewUrl || null
    });
  } else {
    res.status(500).json({ success: false, message: 'An error occurred while saving your message. Please try again later.' });
  }
});

// Endpoint for job applications
app.post('/api/apply', async (req, res) => {
  const { name, email, phone, position, portfolioUrl, message } = req.body;

  if (!name || !email || !position) {
    return res.status(400).json({ success: false, message: 'Please fill in the required fields (name, email, and position).' });
  }

  const submission = { name, email, phone, position, portfolioUrl, message };
  const filePath = path.join(__dirname, 'applications.json');
  const submissionId = await appendToJsonFile(filePath, submission);

  if (submissionId) {
    console.log(`New job application for ${position} from ${name} (${email}) saved in applications.json.`);

    // Build rich HTML email template
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #06b6d4; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">New Job Application Received</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; width: 150px;">Applicant Name:</td>
            <td style="padding: 8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Applied Position:</td>
            <td style="padding: 8px 0; font-weight: bold; color: #06b6d4;">${position}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Resume/Portfolio:</td>
            <td style="padding: 8px 0;">
              ${portfolioUrl ? `<a href="${portfolioUrl}" target="_blank">${portfolioUrl}</a>` : 'Not provided'}
            </td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Cover Message:</td>
            <td style="padding: 8px 0; white-space: pre-wrap; line-height: 1.5;">${message || 'No additional statement provided.'}</td>
          </tr>
        </table>
        <div style="margin-top: 25px; font-size: 11px; color: #64748b; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 10px;">
          Received on: ${new Date().toLocaleString()} | ID: ${submissionId}
        </div>
      </div>
    `;

    // Send email alert
    const emailResult = await sendNotificationEmail({
      subject: `[Job Application] - ${name} applied for ${position}`,
      htmlContent: emailHtml
    });

    res.json({ 
      success: true, 
      message: 'Application submitted successfully! Our HR team will review and get back to you.',
      previewUrl: emailResult.previewUrl || null
    });
  } else {
    res.status(500).json({ success: false, message: 'An error occurred while submitting your application. Please try again.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
