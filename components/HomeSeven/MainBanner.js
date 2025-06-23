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
                backgroundImage: `url(/img/home-eight/home-eight-banner2.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="">
                  <div className="container">
                    <div className="slider-text two">
                      <span className="top-title">Welcome to Esthetix  Dental Center</span>
                      <h1>Perfect Smile, Perfect You</h1>
                      <p>
                        We are committed to provide world class dental treatment in a spaciously  designed modern clinic where quality and care is given utmost importance
                      </p>

                      <div className="slider-btn">
                        <Link href="/about" className="default-btn">
                          Know More
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
                backgroundImage: `url(/img/home-eight/home-eight-banner1.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="">
                  <div className="container">
                    <div className="slider-text one">
                      <h3 className="top-title">World Class Dental Treatments</h3>
                      <h1>
                        Quality & Affortable
                      </h1>
                      <p>
                        Excellence in Cosmetic, Reconstructive,  Implant and General Dentistry.
                      </p>

                      <div className="slider-btn">
                        <Link href="/services" className="default-btn">
                          Our Services
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
                backgroundImage: `url(/img/home-eight/newBanner.jpg)`,
              }}
            >
              <div className="d-table">
                <div className="">
                  <div className="container">
                    <div className="slider-text one">
                      <h3 className="top-title">Regain Your Confidence</h3>
                      <h1>
                        Dazzling smile that brightens your life.
                      </h1>
                      <p>
                        Our professional friendly staff is knowledgeable in all areas of dentistry to give you the best possible results that last.
                      </p>

                      <div className="slider-btn">
                        <Link href="/doctors" className="default-btn">
                          Our Team
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
