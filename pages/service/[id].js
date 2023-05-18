import React, { useMemo, useRef, useEffect, useState } from "react";
import Navbar from "../../components/_App/Navbar";
import { useRouter } from "next/router";
import PageBanner from "../../components/Common/PageBanner";
import Subscribe from "../../components/Common/Subscribe";
import Footer from "../../components/_App/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { serviceInfo } from '../../components/information/data'


const ServicesDetails = () => {

    const router = useRouter();
    const { id } = router.query;

    const service = useMemo(() => serviceInfo.filter(item => item.id == id)[0], [id])

    return (
        <>
            <Navbar />
            {
                service && (
                    <>
                        <PageBanner
                            pageTitle={service.name}
                            homePageUrl="/services"
                            homePageText="services"
                            activePageText="Services Details"
                            imgClass="bg-1"
                        />
                    </>
                )
            }




            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-img mb-4">
                                <img
                                    src="/img/service-details/service-details1.jpg"
                                    alt="Image"
                                />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <Swiper
                                slidesPerView={1}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="services-item-wrap"
                            >
                                {
                                    service && service.img.map((item) => {
                                        const url = "/img/service-details/"
                                        return (
                                            <SwiperSlide>
                                                <div className="services-item">
                                                    <img
                                                        src={url + item.url}
                                                        alt="Image"
                                                        className="w-100"
                                                        style={{ aspectRatio: '4/3.3' }}
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })
                                }

                            </Swiper>
                        </div>
                    </div>

                    <div className="services-details-text">
                        <h2>{service && service.title}</h2>

                        <div dangerouslySetInnerHTML={{ __html: service && service.content }}>
                        </div>

                    </div>

                    {/* <div className="scrives-item-2 mt-4 ">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="services-img">
                                    <img
                                        src="/img/service-details/service-details5.jpg"
                                        alt="Image"
                                    />
                                </div>
                            </div>

                            <div className="col-lg-8">
                                <h3>Cardiac Arrhythmia</h3>
                                <p>
                                    There are many variations of passages of Lorem Ipsum
                                    available, but the majority have suffered alteration in some
                                    form, by injected humour, or randomised words which don't look
                                    even slightly believable. If you are going to use a passage of
                                    Lorem Ipsum, you need to be sure there isn't anything
                                    embarrassing hidden in the middle of text. All the Lorem Ipsum
                                    generators on the Internet tend to repeat predefined chunks as
                                    necessary, making this the first true generator on the
                                    Internet. It uses a dictionary of over 200 Latin words,
                                    combined with a handful of model sentence structures, to
                                    generate Lorem Ipsum which looks reasonable. The generated
                                    Lorem Ipsum is therefore always free from repetition, injected
                                    humour, or non-characteristic words etc generators on the
                                    Internet tend to repeat predefined chunks as necessary, making
                                    this the first generator dictionary of over 200 Latin words,
                                    combined with a handful of model sentence structures, to
                                    generate Lorem Ipsum which looks.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="scrives-item-3 mt-4">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="social">
                                    <ul className="social-link">
                                        <li>
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i className="bx bxl-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.twitter.com/" target="_blank">
                                                <i className="bx bxl-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.pinterest.com/" target="_blank">
                                                <i className="bx bxl-pinterest-alt"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i className="bx bxl-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="share">
                                    <a href="#">
                                        <i className="bx bx-share-alt"></i> Share
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default ServicesDetails;
