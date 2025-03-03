const nodemailer = require("nodemailer");
require("dotenv").config();

// Configure transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_AUTH_USER,
    pass: process.env.EMAIL_AUTH_PASS,
  },
});

const sendEmail = async ( subject, htmlContent) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_AUTH_USER,
      to:process.env.EMAIL_ADMIN,
      subject,
      html: htmlContent,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
