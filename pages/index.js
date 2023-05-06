import React from 'react'
import NavbarFour from "../components/_App/NavbarFour"
import MainBanner from "../components/HomeEight/MainBanner"
import Facility from "../components/HomeEight/Facility";
import AboutUs from "../components/HomeTwo/AboutUs";
import Department from "../components/HomeEight/Department";
import FunFactStyleThree from "../components/Common/FunFactStyleOne";
import OurServices from "../components/HomeThree/OurServices";
import DoctorsStyleFour from "../components/Common/DoctorsStyleOne";
import Pricing from "../components/HomeEight/Pricing";
import Faqs from "../components/Common/Faqs";
import AppointmentForm from "../components/HomeOne/AppointmentForm";
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne";
import NewsStyleTwo from "../components/Common/NewsStyleOne";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const index = () => {
  return (
    <>
    {/* completed */}
      <NavbarFour />

      <MainBanner />

      <Facility />

      <AboutUs />

      <Department />

      <FunFactStyleThree />

      <OurServices />

{/* Completed */}
      <div className="bg-color">
        <DoctorsStyleFour />
      </div>

      <Pricing />

      <Faqs />

      <AppointmentForm />

      <TestimonialStyleOne />

      <NewsStyleTwo />

      <Subscribe />

      <Footer />
    </>
  )
}

export default index