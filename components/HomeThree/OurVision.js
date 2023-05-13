import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper";

const AboutUs = () => {
  return (
    <>
      <div className="about-area four abouts-six pb-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content ml-auto">
                <span className="top-title">Our Mission</span>
                <h2>Make a difference in a patient’s life</h2>
                <p>
                  Our Mission is to make a difference in a patient’s life, We deeply care about our patients and everything we do to help them maintain their dental health for a lifetime. We will continue to grow in our professional skills through lifelong education and commitment to being the best.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Registration of Deserving Cases for Surgeries
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Hepatitis B & C Screening Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Consultation & Medicine
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Blood Pressure Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Free Diabetes Test
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Childbirth
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 pr-0">
              <div className="about-img about-img-2"></div>
            </div>
          </div>
        </div>
      </div>



      <div className="about-area pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/home-five/home-five-about1.jpg" alt="Image" />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Our Vision</span>
                <h2>Change the way you think about Dentistry</h2>
                <p>
                  Esthetix Dental Center is committed to changing the way you think about dentistry. It’s our goal to make every visit for every patient comfortable. Our focus is to provide both general dental and specialty dental services in a professional and relaxing environment. Our team of dental experts not only love what they do, but also love the patients they serve.
                </p>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Scientific skills for getting a better result
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>A good environment for work
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Professional doctors
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Emergency services
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Digital laboratory
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
