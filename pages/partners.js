import React from 'react'
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import Link from 'next/link';
const partners = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Our Parners"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Our Partner"
                imgClass="bg-partner"
            />
            <div className="second-facility-area pt-100 pb-70">
                <div className="container">
                    <div className="row justify-content-center">
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://www.fmcnetwork.net/'} className="second-facility-item" style={{ display: "block" }} target='_blank'>
                                <img src="/img/Partners/img1.jpg" alt="Image" style={{ maxWidth: "200px" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://tabby.ai/en-AE'} className="second-facility-item" style={{ display: "block" }} target='_blank'>
                                <img src="/img/Partners/img4.png" alt="Image" style={{ maxWidth: "200px" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'http://www.careservices.ae/'} className="second-facility-item" style={{ display: "block" }} target='_blank'>
                                <img src="/img/Partners/img6.png" alt="Image" style={{ maxWidth: "200px" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://drclinica.org/'} className="second-facility-item" style={{ display: "block" }} target='_blank'>
                                <img src="/img/Partners/img7.png" alt="Image" style={{ maxWidth: "200px" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://rhgdubai.ae/'} className="second-facility-item" style={{ display: "block", height: "200px" }} target='_blank'>
                                <img src="/img/Partners/img3.png" alt="Image" style={{ maxWidth: "200px", height: "100%" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://ngi.ae/'} className="second-facility-item" style={{ display: "block", height: "200px" }} target='_blank'>
                                <img src="/img/Partners/img8.png" alt="Image" style={{ maxWidth: "200px", height: "100%" }} />
                            </Link>
                        </div>
                        <div
                            className="col-lg-4 col-sm-6"
                            data-aos="fade-up"
                            data-aos-delay="100"
                            data-aos-duration="1200"
                        >
                            <Link href={'https://toothpickapp.com/home/en/toothpay/'} className="second-facility-item" style={{ display: "block", height: "200px" }} target='_blank'>
                                <img src="/img/Partners/img9.svg" alt="Image" style={{ maxWidth: "200px", height: "100%" }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    )
}

export default partners
