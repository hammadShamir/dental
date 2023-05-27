import React from "react";
import { BsWhatsapp } from 'react-icons/bs'

const TopHeader = () => {
  return (
    <>
      <div className="top-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-9 col-sm-6">
              <ul className="header-content-left">
                <li>
                  <i className="bx bx-time"></i>
                  Mon-sun 9am-10pm
                </li>
                <li>
                  <a href="tel:+822456974">
                    <i className="bx bx-phone-call"></i>
                    Call Us: +971-4-5294-421
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@info.com">
                    <i className="bx bxs-paper-plane"></i>
                    Email: info@esthetixdentalcenters.com
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-3 col-sm-6">
              <ul className="header-content-right">
                <li>
                  <a href="https://www.facebook.com/people/Esthetix-Dental-Center/100082956321235/?mibextid=ZbWKwL" target="_blank">
                    <i className="bx bxl-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/esthetix-dental-center/" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/esthetixdentalcenter/?igshid=ZDdkNTZiNTM=" target="_blank">
                    <i className="bx bxl-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="d-flex align-items-center justify-content-center" href="https://wa.me/+971561140462" target="_blank" >
                    <BsWhatsapp />
                  </a>
                </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
