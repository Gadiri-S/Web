require('dotenv').config();

const nodemailer = require('nodemailer');

async function sendEmail(data) {
  const transporter = nodemailer.createTransport({
    host:  process.env.EMAIL_SMTP_HOST,
    port: process.env.EMAIL_SMTP_PORT,
    auth: {
      user: process.env.EMAIL_SMTP_USER,
      pass: process.env.EMAIL_SMTP_PASS,
    },
  });

  const message = {
    from: 'BusinessProWebSolutions@gmail.com',
    to: 'BusinessProWebSolutions@gmail.com',
    subject: 'New Form Submission',
    html: `
      <p>Firstname: ${data.firstname}</p>
      <p>Lastname: ${data.lastname}</p>
      <p>Email: ${data.email}</p>
      <p>Phone: ${data.phone}</p>
      <p>Business: ${data.business}</p>
      <p>Message: ${data.message}</p>
    `,
  };

  const info = await transporter.sendMail(message);

  console.log(`Email sent: ${info.messageId}`);
}

module.exports = { sendEmail };