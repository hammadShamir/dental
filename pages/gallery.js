import React, { useState } from "react";
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import DoctorsStyleTwo from "../components/Common/DoctorsStyleTwo";
import { gallery } from "../components/information/data";
const Testimonials = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');



    const handleCloseModal = () => {
        setModalOpen(false);
    };
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
                        {
                            gallery && gallery.map((img, index) => {
                                return (
                                    <div className="col-lg-4 col-sm-6" key={index}>
                                        <div className="single-doctors-two" style={{ cursor: "pointer" }} onClick={() => {
                                            setSelectedImageUrl(img.url);
                                            setModalOpen(true);
                                        }}>
                                            <div className="doctor-img">
                                                <img src={img.url} alt="Image" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {modalOpen && (
                            <div id="myModal" className="modal" onClick={handleCloseModal}>
                                <span className="close">&times;</span>
                                <img className="modal-content" id="img01" src={selectedImageUrl} />
                            </div>
                        )}

                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />

        </>
    );
};

export default Testimonials;