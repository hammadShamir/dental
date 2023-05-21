import React from "react";
import Navbar from "../components/_App/NavbarFour"
import PageBanner from "../components/Common/PageBanner";
import Subscribe from "../components/Common/Subscribe";
import Footer from "../components/_App/Footer";

const TermsConditions = () => {
    return (
        <>
            <Navbar />

            <PageBanner
                pageTitle="Terms & Conditions"
                homePageUrl="/"
                homePageText="Home"
                activePageText="Terms & Conditions"
                imgClass="bg-1"
            />

            <div className="terms-conditions ptb-100">
                <div className="container">
                    <div className="single-privacy">
                        <h1 className="mt-0 text-center mb-3">Welcome To Esthetix Dental Center's Terms Conditions</h1>

                        <div class="section mt-5">
                            <h5>1. Treatment Plan</h5>
                            <p>Once your treatment plan has been agreed with the Dentist, we will provide printed details of your plan. If
                                this plan changes due to radiographic or clinical findings, we will inform you and discuss this with you.</p>
                        </div>

                        <div class="section mt-3">
                            <h5>2. Consent Form</h5>
                            <p>Certain treatments require completion of a written consent form. This is in order to explain the treatment,
                                aftercare, and any risk to you thoroughly before any of these treatments are carried out.</p>
                        </div>
 
                        <div class="section mt-3">
                            <h5>3. Fees for Treatment</h5>
                            <p>Fees for treatment are due on the day the treatment is provided. Where treatment requires laboratory
                                procedures, a minimum of 50% of the total fee is due at the appointment where impressions are taken. Another
                                50% is due at the time of insertion of prosthesis. Fees for certain treatments like Braces are taken in
                                staged payments at each visit.</p>
                        </div>

                        <div class="section mt-3">
                            <h5>4. Payment Methods</h5>
                            <p>Esthetix Dental does not accept any payments by cheque.</p>
                        </div>

                        <div class="section mt-3">
                            <h5>5. Appointment Cancellation</h5>
                            <p>We require a minimum of 48 business hours notice for cancellation of any arranged appointment to avoid a fine
                                of 100 AED. When we schedule an appointment for a patient, we are booking the surgery time off for that
                                patient's treatment.</p>
                        </div>

                        <div class="section mt-3">
                            <h5>6. Medical History</h5>
                            <p>It is very important that you give a full medical history and details of any medication you take. It is very
                                important for you to tell your Dentist.</p>
                        </div>

                        <div class="section mt-3">
                            <h5>7. Complaints</h5>
                            <p>At Esthetix Dental, we always take complaints about any aspects of our services very seriously in order to
                                ensure that every patient has only the very best experience at all times.</p>
                        </div>


                    </div>
                </div>
            </div>

            <Subscribe />

            <Footer />
        </>
    );
};

export default TermsConditions;
