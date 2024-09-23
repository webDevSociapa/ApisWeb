const nodemailer = require('nodemailer');
const mongoose = require('mongoose');

// MongoDB schema and model
const contactSchema = new mongoose.Schema({
  fullName: String,
  cityLocation: String,
  emailAddress: String,
  phoneNumber: String,
  message: String,
});

const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

// Connect to MongoDB
const connectToDb = async () => {
  if (mongoose.connection.readyState === 1) return;
  
  await mongoose.connect('mongodb+srv://webdev:<hGLLhqLzS3Ar4UnA>@apisindia.38dfp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default async function (req, res) {
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

  // Create a new contact entry
  try {
    const newContact = new Contact({
      fullName,
      cityLocation,
      emailAddress,
      phoneNumber,
      message,
    });
    await newContact.save();
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Failed to save data to the database.' });
  }

  // Setup email transport and options
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'khanrobin7071@gmail.com',
      pass: 'hgvu hwmq lnfh xqxa',
    },
  });

  const mailOptions = {
    from: emailAddress,
    to: 'khanrobin7071@gmail.com', // Replace with your email
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
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
