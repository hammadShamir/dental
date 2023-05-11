import React from 'react'
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import FunFactStyleOne from "../components/Common/FunFactStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const about = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="About"
                homePageUrl="/"
                homePageText="Home"
                activePageText="About"
                imgClass="bg-1"
            />

            <div className="about-area about-page pb-130" >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src="/img/about/about1.jpg" alt="Image" />

                                <div className="shape-1">
                                    <img src="/img/about/about-shape-1.png" alt="Image" />
                                </div>

                                <div className="shape-2">
                                    <img src="/img/about/about-shape-2.png" alt="Image" />
                                </div>

                                <div className="shape-3">
                                    <img src="/img/about/about-shape-3.png" alt="Image" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span className="top-title">About Us</span>
                                <h2>Welcome to Esthetix Dental Center</h2>
                                <p>
                                    <strong>
                                        Leading Multispecialty Oral Healthcare Clinic in Dubai
                                    </strong> <br />
                                    We, at Esthetix Dental Center, are committed to provide world class dental treatment in a spaciously designed modern clinic where quality and care is given utmost importance. Esthetix Dental Center, Dubai assures its patients a holistic personalized dental experience through its team of internationally trained dental specialists, world class dental equipment and technology and patient centered treatment plans.
                                </p>

                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Scientific skills for getting a better result
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>A good environment for work
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Professional doctors
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Digital laboratory
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Emergency services
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FunFactStyleOne />

            <div className="about-area four abouts-six" style={{ padding: "50px 0px" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-content ml-auto">
                                <span className="top-title">About Us</span>
                                <h2>Free Medical Camp Importance & Objectives</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                                    maecenas accumsan lacus vel facilisis.
                                </p>

                                <ul>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Registration of Deserving Cases for Surgeries
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Hepatitis B & C Screening Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Consultation & Medicine
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Blood Pressure Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Free Diabetes Test
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Childbirth
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="about-img about-img-2"></div>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    )
}

export default about
