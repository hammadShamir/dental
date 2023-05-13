import React from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleTwo from "../components/Common/DoctorsStyleTwo";

const Testimonials = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Our Galley"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Gallery"
                imgClass="bg-3"
            />

            <div className="doctors-area-two pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Our Doctors</span>
                        <h2>Our Gallery</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
                            vel consequatur tempora atque blanditiis exercitationem incidunt,
                            alias corporis quam assumenda dicta, temporibus.
                        </p>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-doctors-two">
                                <div className="doctor-img">
                                    <img src="/img/doctors/doctor4.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-doctors-two">
                                <div className="doctor-img">
                                    <img src="/img/doctors/doctor5.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-doctors-two">
                                <div className="doctor-img">
                                    <img src="/img/doctors/doctor6.jpg" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default Testimonials;
