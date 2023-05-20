import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className="about-area-seven pb-70">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-content">
                <h2>
                  Leading Multispecialty Oral Healthcare Clinic in Dubai</h2>
                <p>
                  We, at Esthetix Dental Center, are committed to provide world class dental treatment in a spaciously designed modern clinic where quality and care is given utmost importance. Esthetix Dental Center, Dubai assures its patients a holistic personalized dental experience through its team of internationally trained dental specialists, world class dental equipment and technology and patient centered treatment plans.
                </p>

                <p>
                  Esthetix Dental Center is a unique center of excellence in Cosmetic, Reconstructive, Implant and General Dentistry. Using the latest in advanced dental technology. We create dazzling smile that brightens your life. It’s our priority to create a warm comfortable and welcoming environment for our patients and deliver treatment with knowledge and care. We understand the finer points of quality, service, and hospitality.
                </p>

                <div className="about-btn">
                  <Link href="/about" className="default-btn">
                    About Us
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6">
                  <div className="about-img-1"></div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="about-img mb-30">
                        <img
                          src="/img/home-eight/home-eight-about2.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="about-img">
                        <img
                          src="/img/home-eight/home-eight-about3.jpg"
                          alt="Image"
                        />
                      </div>
                    </div>
                  </div>
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
