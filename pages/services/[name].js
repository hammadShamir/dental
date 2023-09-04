import React, { useMemo } from "react";
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
            {service && (<>
                <PageBanner
                    pageTitle={service.name}
                    homePageUrl="/services"
                    homePageText="services"
                    activePageText="Services Details"
                    imgClass="bg-service"
                />
            </>
            )
            }
            <div className="services-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="services-img d-flex justify-content-center align-items-center ">
                                {/* todo */}
                                <div className="single-work">
                                    <img src="/img/new/esthetix-dental-center-procedures.png" alt="Image" />

                                    <h3 className="work-title" style={{ bottom: "0", top: "25%", transform: "translateY(-50%)", padding: "20px 0px", height: "75px" }}>
                                        <i className="flaticon-kidney"></i>
                                        {service && service.name}
                                    </h3>

                                    <div className="work-content-wrap">
                                        <div className="work-content">
                                            <h3 style={{ marginBottom: "0px" }}>{service && service.name}</h3>
                                            <p>
                                                {service && service.desc}
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
                                                <div className="services-item ">
                                                    <img
                                                        src={url + item.url}
                                                        alt="Image"
                                                        className="w-100 "
                                                        style={{ aspectRatio: '5.6/3.3' }}
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
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default ServicesDetails;
