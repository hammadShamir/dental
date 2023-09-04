import React from "react";
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";


const Testimonials = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Success Stories"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Success Stories"
                imgClass="bg-success"
            />

            <div className="doctors-area-two pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="top-title">Our Clients</span>
                        <h2>Our Success Stories</h2>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-6 col-sm-12">
                            <iframe style={{ width: `100%`, height: `400px` }} src="https://www.youtube.com/embed/5gh4m7FtqwQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <iframe style={{ width: `100%`, height: `400px` }} src="https://www.youtube.com/embed/Sa8FpyORDsI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <iframe style={{ width: `100%`, height: `400px` }} src="https://www.youtube.com/embed/-4o_u0VSREY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
                        </div>

                        <div className="col-lg-6 col-sm-12">
                            <iframe style={{ width: `100%`, height: `400px` }} src="https://www.youtube.com/embed/GjSbvENvuCI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen=""></iframe>
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
