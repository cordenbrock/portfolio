import nodemailer from 'nodemailer';

export default async function Contact(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.NEXT_PUBLIC_USER,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NEXT_PUBLIC_USER,
    to: `cordenbrock@gmail.com`,
    subject: `Contact form message from ${name}`,
    text: message + " | Sent from: " + email,
    html: `<div>${message}</div><p>Sent from:
    ${email}</p>`,
  };

  try {
    const emailRes = await transporter.sendMail({mailData})
    console.log("Message Sent");
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
}