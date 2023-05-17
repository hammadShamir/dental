import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { testimonials } from "../information/data"
const TestimonialStyleOne = () => {
  return (
    <>
      <div className="client-area c-bg pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="top-title">Testimonials</span>
            <h2>What Our Client’s Say</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A facilis
              vel consequatur tempora atque blanditiis exercitationem incidunt,
              alias corporis quam assumenda dicta, temporibus.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="client-slide"
          >
            {
              testimonials && testimonials.map((item) => {
                return (
                  <SwiperSlide>
                    <div className="single-client">
                      <img src={item.img} alt="img" />

                      <p>
                        {item.message}
                      </p>

                      <ul>
                        {[...Array(item.rating)].map((_, index) => (
                          <li key={index}>
                            <i className="bx bxs-star"></i>
                          </li>
                        ))}
                      </ul>

                      <h3>{item.name}</h3>
                      <span>{item.designation}</span>
                    </div>
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialStyleOne;
