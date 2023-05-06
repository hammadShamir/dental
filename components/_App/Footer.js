import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-top-area f-bg pt-100 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="100"
                data-aos-duration="1200"
              >
                <Link href="/">
                  {/* <img src="/img/logo.png" alt="Image" /> */}
                  Esthentix Dental Center
                </Link>

                <p>
                  We, at Esthetix Dental Center, are committed to provide world class dental treatment in a spaciously designed modern clinic where quality and care is given utmost importance.
                </p>

                <div className="social-area">
                  <ul>
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
                      <a href="https://www.linkedin.com/" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebyoutubeook.com/"
                        target="_blank"
                      >
                        <i className="bx bxl-youtube"></i>
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
            </div>

            <div className="col-lg-2 col-md-6">
              <div
                className="single-widget"
                data-aos="fade-in"
                data-aos-delay="200"
                data-aos-duration="1200"
              >
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <Link href="#">Dental Implants</Link>
                  </li>
                  <li>
                    <Link href="#"> Dental Implants</Link>
                  </li>
                  <li>
                    <Link href="#">Orthodontic Braces</Link>
                  </li>
                  <li>
                    <Link href="#">Invisible Aligners</Link>
                  </li>
                  <li>
                    <Link href="#">Pediatric Dentistry</Link>
                  </li>
                  <li>
                    <Link href="#">Veneers</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-widget open-time"
                data-aos="fade-in"
                data-aos-delay="300"
                data-aos-duration="1200"
              >
                <h3>Opening Hours</h3>
                <ul>
                  <li>
                    <span>All 7 Days:</span>
                    <span className="right">9:00 AM - 10:00 PM</span>
                  </li>
                  {/* <li>
                    <span>Wed-Thu:</span>
                    <span className="right">6:00 AM - 10:00 PM</span>
                  </li>
                  <li>
                    <span>Fry:</span>
                    <span className="right">6:00 AM - 04:00 PM</span>
                  </li>
                  <li>
                    <span>Sun:</span>
                    <span className="right">Closed</span>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div
                className="single-widget contact"
                data-aos="fade-in"
                data-aos-delay="400"
                data-aos-duration="1200"
              >
                <h3>Get In Touch</h3>
                <ul>
                  <li>
                    <a href="tel:+822456974">
                      <i className="bx bx-phone-call"></i>
                      <span>Hotline:</span>
                      Phone: +971 4 5294 421
                    </a>
                  </li>
                  <li>
                    <a href="mailto:hello@corf.com">
                      <i className="bx bx-envelope"></i>
                      <span>Email:</span>
                      info@esthetixdentalcenters.com
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-location-plus"></i>
                    <span>Address:</span>
                    Al Barsha 1 - Dubai, U.A.E.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-bottom-area">
        <div className="container">
          <div className="copy-right">
            <p>
              Copyright &copy; {currentYear} Esthetix Designed by{" "}
              <a href="" target="blank">
                Hammad Shamir
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
