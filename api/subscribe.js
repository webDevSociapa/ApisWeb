const nodemailer = require('nodemailer');

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Invalid request method.' });
  }

  const { email } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'khanrobin7071@gmail.com', 
        pass: 'hgvu hwmq lnfh xqxa',
      },
  });

  const mailOptions = {
    from: email,
    to: 'khanrobin7071@gmail.com', // Replace with the email address where you want to receive the subscription notifications
    subject: 'New Newsletter Subscription',
    text: `New subscription from: ${email}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
}
