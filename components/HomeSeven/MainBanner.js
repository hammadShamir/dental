import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

const MainBanner = () => {
  return (
    <>
      <div className="hero-slider-area hero-slider-area-seven">
        <Swiper
          spaceBetween={30}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
          className="hero-slider-slide"
        >
          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-Eight/home-Eight-banner1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text one">
                      <h3 className="top-title">Regain Your Confidence</h3>
                      <h1>
                        Dazzling Smile that brightens your Life
                      </h1>
                      <p>
                        We are committed to provide world class dental treatment in a spaciously designed modern clinic where quality and care is given utmost importance
                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                          Book An Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="slider-item"
              style={{
                backgroundImage: `url(/img/home-Eight/home-Eight-banner2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="d-table-cell">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">Welcome to Exthetix Dental Center</span>
                      <h1>We Ensure Safe Diagnoses And Effective Therapies</h1>
                      <p>
                        Perfect Smile & Perfect You
                      </p>

                      <div className="slider-btn">
                        <Link href="/appointment" className="default-btn">
                          Book An Appointment
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainBanner;
