import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "meedii6464@gmail.com",
    pass: "omuunkmldzpjmglw",
  },
});



export default async (req, res) => {
  // console.log(req.body)
  const { name, email, number, subject, text } = req.body;

  const mailOptions = {
    from: '"Esthetix - Dental Center" <email@example.com>',
    to: "hammadshamir7@gmail.com",
    subject: "Hi there",
    text: text,
    html: `
      <b>From:</b> ${name} <br /> 
      <b>Email:</b> ${email} <br /> 
      <b>Number:</b> ${number} <br /> 
      <b>Message:</b> ${text} 
    `,
  };
  mailOptions.subject = subject;
  try {
    const response = await transporter.sendMail(mailOptions);
    console.log(response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error processing email");
  }
};
