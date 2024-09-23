import connectToDb from '../../../lib/db'; // Your MongoDB connection function
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

// MongoDB schema and model
const contactSchema = new mongoose.Schema({
  fullName: String,
  cityLocation: String,
  emailAddress: String,
  phoneNumber: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid request method.' });
  }

  const { fullName, cityLocation, emailAddress, phoneNumber, message } = req.body;

  // Connect to the database
  try {
    await connectToDb();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to connect to the database.' });
  }

  // Save the contact form data to MongoDB
  try {
    const newContact = new Contact({ fullName, cityLocation, emailAddress, phoneNumber, message });
    await newContact.save();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to save data to the database.' });
  }

  // Setup email transport and options
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
      user: 'khanrobin7071@gmail.com', 
      pass: 'hgvu hwmq lnfh xqxa',
    },
  });

  const mailOptions = {
    from: emailAddress,
    to: 'khanrobin7071@gmail.com',
    subject: 'New Message from Contact Form',
    text: `
      Full Name: ${fullName}
      City Location: ${cityLocation}
      Email Address: ${emailAddress}
      Phone Number: ${phoneNumber}
      
      Message:
      ${message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Email sending failed:', error);
    return res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
