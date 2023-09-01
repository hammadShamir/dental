import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "esthetixdentaldubai@gmail.com",
    pass: "mdyhhwpwccankvsj",
  },
});



export default async (req, res) => {
  const { name, email, number, subject, text } = req.body;

  const mailOptions = {
    from: '"Esthetix - Dental Center" <email@example.com>',
    to: "esthetixdentalcenter@gmail.com",
    subject: "Hi there",
    text: text,
    html: `
    <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);">
    <tr>
      <td>
        <h1 style="color: #333;">Client Contact</h1>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone Number:</b> ${number}</p>
        <p><b>Message:</b> ${text}</p>
      </td>
    </tr>
  </table>  
    `,
  };
  mailOptions.subject = subject;
  try {
    const response = await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error processing email");
  }
};
