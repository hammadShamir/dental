import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

const AboutUs = () => {
  return (
    <>
      <div className="about-area-three pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <span style={{ background: `#0CB8B6`, color: `#fff`, borderRadius: `10px`, marginTop: `2rem` }} className="top-title p-2">Our Mission</span>
                <h2> Make a difference in a patient’s life</h2>
                <p>
                  Our Mission is to make a difference in a patient’s life, We deeply care about our patients and everything we do to help them maintain their dental health for a lifetime. We will continue to grow in our professional skills through lifelong education and commitment to being the best.
                </p>
              </div>
              <div className="about-content">
                <span style={{ background: `#0CB8B6`, color: `#fff`, borderRadius: `10px`, marginTop: `2rem` }} className="top-title p-2">Our Vision</span>
                <h2>Change the way you think about Dentistry</h2>
                <p>
                  Esthetix Dental Center is committed to changing the way you think about dentistry. It’s our goal to make every visit for every patient comfortable. Our focus is to provide both general dental and specialty dental services in a professional and relaxing environment. Our team of dental experts not only love what they do, but also love the patients they serve.
                </p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-img">
                <Swiper
                  navigation={true}
                  effect={"fade"}
                  modules={[Navigation, EffectFade]}
                  className="about-img-slide"
                >
                  <SwiperSlide>
                    <div className="about-item">
                      <img
                        src="/img/home-three/vision1.jpg"
                        alt="Image"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="about-item">
                      <img
                        src="/img/home-three/vision2.jpg"
                        alt="Image"
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="shape-3">
                  <img src="/img/about/about-shape-3.png" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
