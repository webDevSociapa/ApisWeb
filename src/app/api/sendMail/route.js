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

const apis_db = mongoose.models.apis_db || mongoose.model('apis_db', contactSchema);

// Connect to the database 
// const connectToDb = async () => {
  
// };

// Handle POST requests
export async function POST(req) {
  try {
    const { fullName, cityLocation, emailAddress, phoneNumber, message } = await req.json();

    // Connect to the database
    if (mongoose.connection.readyState === 1) return;
  try {
    await mongoose.connect("mongodb+srv://webdev:<rWCtZ7Yq08NhDIyf>@apis-project.bn5ur.mongodb.net/apis_db?retryWrites=true&w=majority&appName=Apis-Project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    throw new Error('MongoDB connection failed');
  }

    // Save the contact form data to MongoDB
    const newContact = new Contact({
      fullName,
      cityLocation,
      emailAddress,
      phoneNumber,
      message,
    });
    await newContact.save();

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
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error handling POST request:', error);
    return new Response(JSON.stringify({ success: false, message: 'Failed to send email' }), {
      status: 500,
    });
  }
}
