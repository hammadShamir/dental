import React from "react";

const ContactInfo = () => {
  return (
    <>
      <div className="contact-info-area">
        <div className="container-fluid">
          <div className="col-lg-8 row m-auto mt-5">


            <div className="col-lg-5 p-0">
              <div className="single-contact-info">
                <i className="bx bx-location-plus"></i>
                <h3>Dubai - UAE</h3>
                <p><a href="https://www.google.com/maps/place/Floor+3,+Dusseldorf+Business+Point+Building,+Al+Barsha-1,+Dubai-UAE" target="_blank">#305, Floor 3, Dusseldorf Business Point Building, Al Barsha-1, Dubai-UAE</a></p>
                <span>Email: <a href="mailto:info@esthetixdentalcenters.com">info@esthetixdentalcenters.com</a>
                </span>
                <span>Tel: <a href="tel:+97145294421">+971-4-5294-421</a></span>
                <span>Tel: <a href="tel:+971561140462">+971-56-114-0462</a></span>
              </div>
            </div>
            <div className="col-lg-1"></div>

            <div className="col-lg-5 p-0">
              <div className="single-contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.6245113260247!2d55.20248017386603!3d25.11456893504533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b3df30fd003%3A0x587e27bc4f2f72c6!2sEsthetix%20Dental%20Center!5e0!3m2!1sen!2s!4v1683822895037!5m2!1sen!2s"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
