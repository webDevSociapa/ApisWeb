const nodemailer = require('nodemailer');

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid request method.' });
  }

  const { fullName, cityLocation, emailAddress, phoneNumber, message } = req.body;

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

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
