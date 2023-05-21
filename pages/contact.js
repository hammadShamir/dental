import React from 'react'
import Navbar from "../components/_App/NavbarFour"
import PageBanner from "../components/Common/PageBanner";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactForm from "../components/ContactUs/ContactForm";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const contact = () => {

    return (
        <>
            <Navbar />
            <PageBanner
                pageTitle="Contact Us"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Contact us"
                imgClass="bg-2"
            />

            <ContactInfo />

            <ContactForm />

            <Subscribe />
            <Footer />
        </>
    )
}

export default contact