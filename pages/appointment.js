import React, { useState } from 'react';
import Navbar from '../components/_App/Navbar';
import DatePicker from 'react-datepicker';
import PageBanner from '../components/Common/PageBanner';
import Subscribe from '../components/Common/Subscribe';
import Footer from '../components/_App/Footer';
import Link from 'next/link';
import FunFactStyleOne from '../components/Common/FunFactStyleOne';
import { serviceInfo } from '../components/information/data';
import baseUrl from "../utils/baseUrl";
import { format } from 'date-fns';
const Appointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [service, setService] = useState(serviceInfo);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        selectedService: '',
        appointmentDate: new Date(),
        selectedTime: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        const formattedDate = format(date, "dd/MM/yyyy");
        setStartDate(date);
        setFormData((prevData) => ({
            ...prevData,
            appointmentDate: formattedDate,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${baseUrl}/api/appointment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Email sent successfully');
            } else {
                console.error('Error sending email');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Appointment"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Appointment"
                imgClass="bg-1"
            />

            <div className="appointment-area ptb-50 jarallax">
                <div className="container">
                    <div className="appointment-here-form m-auto">
                        <span className="top-title">Make An Appointment</span>
                        <h2>We Are Here For You</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <label>Your Name</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Name"
                                            name="name"
                                            placeholder="Enter Your Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                        <i className="flaticon-account"></i>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <label>Your Email</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Email"
                                            name="email"
                                            placeholder="Enter Your Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        <i className="flaticon-email"></i>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <label>Your Phone</label>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="Phone"
                                            name="phone"
                                            placeholder="Enter Your Phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                        <i className="flaticon-smartphone"></i>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <label>Select Service</label>
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            name="selectedService"
                                            value={formData.selectedService}
                                            onChange={handleSelectChange}
                                        >
                                            <option value="">-- Select Service --</option>
                                            {service &&
                                                service.map((ser, index) => (
                                                    <option key={index} value={ser.title}>
                                                        {ser.title}
                                                    </option>
                                                ))}
                                        </select>
                                        <i className="flaticon-heart"></i>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6">
                                    <label>Appointment Date</label>
                                    <div className="form-group">
                                        <div className="input-group date">
                                            <DatePicker
                                                selected={startDate}
                                                onChange={handleDateChange}
                                                className="form-control"
                                            />
                                        </div>
                                        <i className="flaticon-appointment"></i>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <label>Time</label>
                                    <div className="form-group">
                                        <select
                                            className="form-control"
                                            name="selectedTime"
                                            value={formData.selectedTime}
                                            onChange={handleSelectChange}
                                        >
                                            <option value="0">Select Time</option>
                                            <option value="1">09.00 AM To 10.00 AM</option>
                                            <option value="2">10.00 AM To 11.00 AM</option>
                                            <option value="3">11.00 AM To 12.00 PM</option>
                                            <option value="4">12.00 PM To 01.00 PM</option>
                                            <option value="5">01.00 PM To 03.00 PM</option>
                                            <option value="6">04.00 PM To 06.00 PM</option>
                                            <option value="7">07.00 PM To 10.00 PM</option>
                                            <option value="8">10.00 PM To 11.00 PM</option>
                                        </select>
                                        <i className="flaticon-clock"></i>
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <label>Message</label>
                                    <div className="form-group">
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            id="Message"
                                            cols="30"
                                            rows="8"
                                            placeholder="Your Message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        <i className="flaticon-edit"></i>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <button type="submit" className="default-btn">
                                        Send Request
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className="shape">
                            <img src="/img/shape/appointment-shape.png" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>

            <FunFactStyleOne />

            <Subscribe />

            <Footer />
        </>
    );
}

export default Appointment;
