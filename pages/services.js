import React from 'react'
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
const services = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
                imgClass="bg-2"
            />

            <div className="second-facility-area two pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon1.png" alt="Image" />
                                <h3>Qualified Doctors</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon2.png" alt="Image" />
                                <h3>Emergency Helicopter</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="second-facility-item">
                                <img src="/img/facility-img/facility-icon3.png" alt="Image" />
                                <h3>Leading Technology</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="services-area pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Our Services</span>
                        <h2>Our Healthcare Service</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
                            vel consequatur tempora atque blanditiis exercitationem incidunt,
                            alias corporis quam assumenda dicta, temporibus.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-man"></span>
                                <h3>Cancer Service</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-liver"></span>
                                <h3>Liver Transport</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-kidney"></span>
                                <h3>Kidney Transport</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-heart"></span>
                                <h3>Cardiac Arrhythmia</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-brain"></span>
                                <h3>Neurology Care</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-services">
                                <span className="flaticon-walker"></span>
                                <h3>Orthopedic Care</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore dolore
                                </p>

                                <Link href="/service-details" className="read-more">
                                    Read More <i className="bx bx-plus"></i>
                                </Link>

                                <div className="services-shape">
                                    <img src="/img/services-card-shape.png" alt="Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    )
}

export default services
