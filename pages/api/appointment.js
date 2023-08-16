import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "info@esthetixdentalcenters.com",
        pass: "ijazncsdzpwywqed",
    },
});

export default async (req, res) => {
    console.log("Effectedddd");
    const {
        name,
        email,
        number,
        selectedService,
        appointmentDate,
        selectedTime,
        message,
    } = req.body;

    const mailOptions = {
        from: '"Esthetix - Dental Center" <email@example.com>',
        to: "meedii6464@gmail.com", // Change this to the recipient's email address
        subject: "Appointment Request",
        text: message,
        html: `
      <b>Name:</b> ${name} <br /> 
      <b>Email:</b> ${email} <br /> 
      <b>Phone Number:</b> ${number} <br />
      <b>Service:</b> ${selectedService} <br />
      <b>Appointment Date:</b> ${appointmentDate} <br />
      <b>Time:</b> ${selectedTime} <br />
      <b>Message:</b> ${message}
    `,
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        console.log(response);
        res.status(200).send("Appointment request email sent successfully");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error processing appointment request email");
    }
};
