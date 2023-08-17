import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { serviceInfo } from '../information/data'
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";
import { format } from 'date-fns';
import axios from "axios";

const AppointmentForm = () => {
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
      const url = `${baseUrl}/api/appointment`;
      const { name, email, phone, selectedService, appointmentDate, selectedTime, message } = formData;
      const payload = { name, email, phone, selectedService, appointmentDate, selectedTime, message };
      const response = await axios.post(url, payload);
      alertContent();
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectedService: '',
        appointmentDate: new Date(),
        selectedTime: '',
        message: '',
      })
    } catch (error) {
      console.error('Error:', error);
    }
  };



  const alertContent = () => {
    MySwal.fire({
      title: "Congratulations!",
      text: "Your message was successfully send and will back to you soon",
      icon: "success",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };



  return (
    <>
      <div className="appointment-area jarallax ptb-50">
        <div className="container">
          <div className="appointment-here-form">
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
                      <option value="09.00 AM To 10.00 AM">09.00 AM To 10.00 AM</option>
                      <option value="10.00 AM To 11.00 AM">10.00 AM To 11.00 AM</option>
                      <option value="11.00 AM To 12.00 PM">11.00 AM To 12.00 PM</option>
                      <option value="12.00 PM To 01.00 PM">12.00 PM To 01.00 PM</option>
                      <option value="01.00 PM To 03.00 PM">01.00 PM To 03.00 PM</option>
                      <option value="04.00 PM To 06.00 PM">04.00 PM To 06.00 PM</option>
                      <option value="07.00 PM To 10.00 PM">07.00 PM To 10.00 PM</option>
                      <option value="10.00 PM To 11.00 PM">10.00 PM To 11.00 PM</option>
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
    </>
  );
};

export default AppointmentForm;
