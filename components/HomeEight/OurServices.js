import React, { useState } from "react";
import Link from "next/link";
import { serviceInfo } from '../information/data'
const OurServices = ({ cards }) => {
  const [data, setData] = useState(serviceInfo)
  return (
    <>
      <div className="services-area-eight pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Services</span>
            <h2>Our Dental Service</h2>
            <p>
              Affortable and Quality Dental Care At Esthetix Dental Center
            </p>
          </div>

          <div className="row">
            {
              serviceInfo && serviceInfo.slice(0, cards && cards).map((item, index) => {
                return (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <div className="single-services">
                      <span>
                        <img src={`/img/home-eight/${item.icon}`} alt="Image" />
                      </span>
                      <h3>{item.name}</h3>
                      <p>
                        {item.desc.substring(0, 120) + "..."}
                      </p>

                      <Link href={`/services/${item.id}`} className="read-more">
                        Read More <i className="bx bx-plus"></i>
                      </Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default OurServices;
