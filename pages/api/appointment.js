import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "hammadshamir7@gmail.com",
        pass: "sqqgfmfavndccjrc",
    },
});

export default async (req, res) => {
    const {
        name,
        email,
        phone,
        selectedService,
        appointmentDate,
        selectedTime,
        message,
    } = req.body;

    const mailOptions = {
        from: `"Esthetix - Dental Center" ${email}`,
        to: "esthetixdentalcenter@gmail.com", // Change this to the recipient's email address
        subject: "Appointment Request",
        text: message,
        html: `
        <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #f5f5f5; padding: 20px; border-radius: 5px; box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);">
        <tr>
          <td>
            <h1 style="color: #333;">Appointment Request</h1>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone Number:</b> ${phone}</p>
            <p><b>Service:</b> ${selectedService}</p>
            <p><b>Appointment Date:</b> ${appointmentDate}</p>
            <p><b>Time:</b> ${selectedTime}</p>
            <p><b>Message:</b> ${message}</p>
          </td>
        </tr>
      </table>  
    `,
    };

    try {
        const response = await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        res.status(500).send("Error processing appointment request email");
    }
};
