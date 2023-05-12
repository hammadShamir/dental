import React, { useState } from "react";
import {teamInfo} from '../information/data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import Link from "next/link";





const DoctorsStyleOne = () => {

  const [team, setTeam] = useState(teamInfo);


  return (
    <>
      <div className="doctors-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Our Team</span>
            <h2>Meet Our Doctors</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation, Autoplay]}
            className="doctors-slide"
          >

            {team.map(member => (
              <SwiperSlide>
                <div className="single-doctor">
                  <img src={`${member.image}`} alt={`${member.name}`} />
                  <h3><Link href={`/doctors/${member.name.replace(/\s/g, '')}`}>{member.name}</Link></h3>
                  <span className="top-title">{member.designation}</span>
                  <p>
                    {member[`detail`].substring(0, 90)}. . .
                  </p>

                  <ul>
                    {member.facebook &&
                      (<li>
                        <a href={member.facebook} target="_blank">
                          <i className="bx bxl-facebook"></i>
                        </a>
                      </li>
                      )}

                    {member.linkedin &&
                      (<li>
                        <a href={member.linkedin} target="_blank">
                          <i className="bx bxl-linkedin"></i>
                        </a>
                      </li>
                      )}

                    {member.instagram && 
                    (<li>
                      <a href={member.instagram} target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    )}

                  </ul>
                </div>
              </SwiperSlide>
            )
            )}

          </Swiper>
        </div>
      </div>
    </>
  );
};

export default DoctorsStyleOne;
