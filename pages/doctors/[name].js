import React, { useState, useMemo } from "react";
import DatePicker from "react-datepicker";
import Navbar from "../../components/_App/Navbar"
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import Link from "next/link";
import { useRouter } from 'next/router';
import { teamInfo } from '../../components/information/data'


const DoctorDetails = () => {
  const [startDate, setStartDate] = useState(new Date());

  const router = useRouter();
  const { name } = router.query;

  const member = useMemo(() => teamInfo.filter(member => member.name.replace(/\s/g, '') === name)[0], [name])

  return (
    <>
      <Navbar />
      {member && (<>
        <PageBanner
          pageTitle={member.designation}
          homePageUrl="/"
          homePageText="Home"
          activePageText={member.name}
          imgClass="bg-3"
        />


        <div className="doctors-details-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="doctors-sidebar">
                  <div className="doctors-img">
                    <img src={member.image} alt="Image" />

                    <ul>
                      {member.facebook && (
                        <li>
                          <a href={member.facebook} target="_blank">
                            <i className="bx bxl-facebook"></i>
                          </a>
                        </li>

                      )}

                      {member.linkedin && (
                        <li>
                          <a href={member.linkedin} target="_blank">
                            <i className="bx bxl-linkedin"></i>
                          </a>
                        </li>
                      )}
                      {member.instagram && (
                        <li>
                          <a href={member.instagram} target="_blank">
                            <i className="bx bxl-instagram"></i>
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="availability">
                    <h3>
                      <i className="bx bx-time"></i>
                      Availability
                    </h3>

                    <ul>
                      <li>
                        Monday - Sunday
                        <span>9AM - 10PM</span>
                      </li>
                    </ul>

                    <Link href="#" className="default-btn mt-4">
                      Request An Appointment
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <div className="doctors-detailss">
                  <div className="doctors-history">
                    <h2>{member.name}</h2>
                    <span>{member.designation}</span>

                    <p>
                      {member.detail}
                    </p>
                    {member.education.length > 0 && (
                      <div className="row borders">
                        <div className="col-lg-3 pl-0">
                          <div className="left-title">
                            <h3>Education</h3>
                          </div>
                        </div>

                        <div className="col-lg-9">
                          <div className="right-title">
                            <ul>
                              {member.education.map(edu => (
                                <li>
                                  <i className="bx bxs-hand-right"></i>
                                  {edu}
                                </li>

                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {member.experience.length > 0 && (
                      <div className="row borders">
                        <div className="col-lg-3 pl-0">
                          <div className="left-title">
                            <h3>Experience</h3>
                          </div>
                        </div>

                        <div className="col-lg-9">
                          <div className="right-title">
                            <ul>

                              {member.experience.map(exp => (
                                <li>
                                  <i className="bx bxs-hand-right"></i>
                                  {exp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {member.speciality.length > 0 && (
                      <div className="row borders">
                        <div className="col-lg-3 pl-0">
                          <div className="left-title">
                            <h3>Specialty</h3>
                          </div>
                        </div>

                        <div className="col-lg-9">
                          <div className="right-title">
                            <ul>
                              {
                                member.speciality.map((speciality) => (
                                  <li>
                                    <i className="bx bxs-hand-right"></i>
                                    {speciality}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="appointment-here-form">
                    <span className="top-title">Make An Appointment</span>
                    <h2>We Are Here For You</h2>

                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <label>Your Name</label>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="Name"
                              placeholder="Enter Your Name"
                            />
                            <i className="flaticon-account"></i>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <label>Your Email</label>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="Email"
                              placeholder="Enter Your Email"
                            />
                            <i className="flaticon-email"></i>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <label>Your Phone</label>
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="Phone"
                              placeholder="Enter Your Phone"
                            />
                            <i className="flaticon-smartphone"></i>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <label>Select Service</label>
                          <div className="form-group">
                            <select className="form-control">
                              <option value="0">Select Service</option>
                              <option value="1">Another option</option>
                              <option value="2">A option</option>
                              <option value="3">Potato</option>
                            </select>
                            <i className="flaticon-heart"></i>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <label>Appointment Date</label>
                          <div className="form-group">
                            <DatePicker
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              className="form-control"
                            />
                            <i className="flaticon-appointment"></i>
                          </div>
                        </div>

                        <div className="col-lg-6">
                          <label>Time</label>
                          <div className="form-group">
                            <select className="form-control">
                              <option value="0">Seclect Time</option>
                              <option value="1">Another option</option>
                              <option value="2">A option</option>
                              <option value="3">Potato</option>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      )}
      <Subscribe />

      <Footer />
    </>
  );
};

export default DoctorDetails;
