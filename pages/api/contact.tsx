import nodemailer from "nodemailer";

export default async function Contact(req, res) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: "OAuth2",
      user: process.env.NEXT_PUBLIC_USER,
      accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
      refreshToken: process.env.NEXT_PUBLIC_REFRESH_TOKEN,
      expires: 3599,
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NEXT_PUBLIC_USER,
    to: `cordenbrock@gmail.com`,
    subject: `Contact form message from ${name}`,
    text: `${message} | Sent from: ${email}`,
    html: `<div>${message}</div><p>Sent from: ${email}</p>`,
  };

  try {
    await transporter.sendMail(mailData);
    console.log("success");
  } catch (err) {
    return res.status(500).json({ error: err.message || err.toString() });
  }

  res.status(200).json(req.body);
}
