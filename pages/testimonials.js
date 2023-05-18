import React, { useState } from "react";
import Navbar from "../components/_App/Navbar";
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import { testimonials } from "../components/information/data"

const Testimonials = () => {

    const [testimonial, setTestimonial] = useState(testimonials)

    const [initial, setInitial] = useState(0)
    const [cut, setCut] = useState(2);
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Testimonials"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Testimonials"
                imgClass="bg-3"
            />

            <div className="client-area ptb-100">
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

                    <div className="row">


                        {testimonial.slice(initial, initial + cut).map(client => (

                            <div className="col-lg-6 col-md-6">
                                <div className="single-client mr-0 ml-0">
                                    <img src={client.img} alt={client.name} />

                                    <p>
                                        {client.message}
                                    </p>

                                    <ul>
                                        {[...Array(client.rating)].map(index => (

                                            <li>
                                                <i className="bx bxs-star"></i>
                                            </li>


                                        ))}
                                    </ul>

                                    <h3>{client.name}</h3>
                                    <span>{client.designation}</span>
                                </div>
                            </div>
                        ))}






                        <div className="col-lg-12">
                            <div className="page-navigation-area">
                                <nav aria-label="Page navigation example text-center">
                                    <ul className="pagination">
                                        <li className="page-item"
                                            onClick={(e) =>
                                                initial != 0 ? setInitial(initial - cut) : e.preventDefault()
                                            }>
                                            <a className="page-link page-links" >
                                                <i className="bx bx-chevrons-left"></i>
                                            </a>
                                        </li>
                                        {[...Array(Math.ceil(testimonial.length / cut))].map((val, index) => (
                                            <li key={index} className={(index * cut == initial) ? `page-item active` : `page-item`} onClick={() => setInitial(index * cut)}>
                                                <a className="page-link" >
                                                    {index + 1}
                                                </a>
                                            </li>
                                        ))}

                                        <li className="page-item"
                                            onClick={
                                                (e) => ((testimonial.length - initial) > cut ? setInitial(initial + cut) : e.preventDefault())
                                            } >
                                            <a className="page-link">
                                                <i className="bx bx-chevrons-right"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default Testimonials;
