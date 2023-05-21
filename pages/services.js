import React from 'react'
import Navbar from "../components/_App/NavbarFour"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";
import OurServices from '../components/HomeEight/OurServices';
import Facility from '../components/HomeEight/Facility';
const services = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Services"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Services"
                imgClass="bg-2"
            />

            <Facility />



            <div className="services-area pb-70">
                <div className="container">
                    <OurServices />
                </div>
            </div >

            <Subscribe />

            <Footer />
        </>
    )
}

export default services
