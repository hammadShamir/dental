import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area two ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-img">
                <img src="/img/about-two/about-two1.png" alt="Image" />

                <div className="shape-1">
                  <img src="/img/about-two/about-two-shape2.png" alt="Image" />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="about-content">
                <span className="top-title">Welcome to Esthetix Dental Center</span>
                <h2>About Us</h2>
                <p>
                  Esthetix Dental Center is a leading multispecialty oral healthcare clinic in Dubai. <br />We, at Esthetix Dental Center, are committed to provide world class dental treatment in a spaciously designed modern clinic where quality and care is given utmost importance. Esthetix Dental Center, Dubai assures its patients a holistic personalized dental experience through its team of internationally trained dental specialists, world class dental equipment and technology and patient centered treatment plans.
                </p>
                <strong>
                  Providing comprehensive dental services with a focus on quality, affordability, and the latest technology.
                </strong>

                <ul>
                  <li>
                    <i className="flaticon-tick"></i>
                    Our Doctors are providing high quality care as not only a professional responsibility but also as their passion.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    Come and benefit from our free dental check-up and talk to our highly specialized Dentists. Open to all.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    We professional, affordable, and the best dental care in town. Providing a comprehensive range of dental services in Dubai.
                  </li>
                  <li>
                    <i className="flaticon-tick"></i>
                    We use latest technology & employ some of the UAE's best, internationally accredited dentists to provide you with a range of dental treatments.
                  </li>
                </ul>

                <Link href="/about" className="default-btn">
                  Know Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
