import React, { useState } from "react";
import Navbar from "../components/_App/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from "next/link";
import { teamInfo } from '../components/information/data'

const Doctors1 = () => {

    const [team, setTeam] = useState(teamInfo);

    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Doctors Style One"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Doctors Style One"
                imgClass="bg-1"
            />

            <div className="doctors-area-two ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Our Doctors</span>
                        <h2>Our Specialist Doctors</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
                            vel consequatur tempora atque blanditiis exercitationem incidunt,
                            alias corporis quam assumenda dicta, temporibus.
                        </p>
                    </div>

                    <div className="row">

                        {
                            team.map(member => (
                                <div className="col-lg-4 col-sm-6">
                                    <div className="single-doctor">
                                        <img src={`${member.image}`} alt={`${member.name}`} />
                                        <h3><Link href={`/doctors/${member.name.replace(/\s/g, '')}`}>{member.name}</Link></h3>
                                        <span className="top-title">{member.designation}</span>
                                        <p>
                                            {member[`detail`].substring(0, 90)}. . .
                                        </p>

                                        <ul>

                                            <li>
                                                <a href={member.facebook ? member.facebook : '#'} target="_blank">
                                                    <i className="bx bxl-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={member.linkedin ? member.linkedin : "#"} target="_blank">
                                                    <i className="bx bxl-linkedin"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href={member.instagram ? member.instagram : "#"} target="_blank">
                                                    <i className="bx bxl-instagram"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }




                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <a className="page-link page-links" href="#">
                                                <i className="bx bx-chevrons-left"></i>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                <i className="bx bx-chevrons-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
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

export default Doctors1;
