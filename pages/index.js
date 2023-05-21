import React from 'react'
import Navbar from "../components/_App/NavbarFour"
import MainBanner from "../components/HomeSeven/MainBanner"
import Facility from "../components/HomeEight/Facility";
import AboutUs from "../components/HomeEight/AboutUs";
import FunFactStyleThree from "../components/Common/FunFactStyleOne";
import OurServices from "../components/HomeEight/OurServices";
import DoctorsStyleOne from "../components/Common/DoctorsStyleOne";

import Faqs from "../components/Common/Faqs";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const index = () => {
  return (
    <>

      <Navbar />

      <MainBanner />

      <Facility />

      <AboutUs />

      <OurServices cards={6} />

      <FunFactStyleThree />

      <div className="bg-color">
        <DoctorsStyleOne />
      </div>

      <TestimonialStyleOne />

      {/* <Pricing /> */}

      <Faqs />

      <AppointmentForm />

      <NewsStyleTwo blogNum={3} />

      <Subscribe />

      <Footer />
    </>
  )
}

export default index