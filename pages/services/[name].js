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
    const { name } = router.query;

    const service = useMemo(() => serviceInfo.filter(item => item.name.replace(/\s/g, '') == name)[0], [name])

    return (
        <>
            <Navbar />
            {
                service && (
                    <>
                        <PageBanner
                            pageTitle={service.name && service.name}
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
                            <div className="services-img d-flex justify-content-center align-items-center mt-5">
                                {/* todo */}
                                <div className="single-work">
                                    <img src="/img/work1.jpg" style={{ filter: 'grayscale(1)' }} alt="Image" />

                                    <h3 className="work-title " style={{ top: '50%', bottom: 'auto', left: '50%', right: 'auto', width: 'fit-content', transform: `translate(-50%,-50%)` }}>
                                        <i className="flaticon-kidney"></i>
                                        {service.name}
                                    </h3>

                                    <div className="work-content-wrap">
                                        <div className="work-content">
                                            <h3>{service.name}</h3>
                                            <p>
                                                {service.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* todo */}
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
                                                <div className="services-item " style={{ marginTop: '50px' }}>
                                                    <img
                                                        src={url + item.url}
                                                        alt="Image"
                                                        className="w-100 "
                                                        style={{ aspectRatio: '4/3.3', transform: 'scale(0.7)' }}
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
