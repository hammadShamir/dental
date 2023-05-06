import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const teamInfo = [
  {
    name: `Dr. Ranjeet Kumar`,
    designation: `Cheif Executive Officer`,
    detail: `I am delighted to welcome you to Esthetix Dental Center, a multispeciality oral healthcare clinic with a mission to help people across the world feel confident in their smile by providing them with the best dental care possible.

                      As CEO of a team of skilled healthcare professionals, I aim to lead our organization in fulfillment of its mission. The healthcare provided at Esthetix Dental Center is all about people, namely you, our valued customers.
                      
                      As your community polyclinic, we feel a deep sense of respect and commitment to each and every one of you that place your confidence in our care. To stay well positioned, we work hard to invest in new services, healthcare providers and technology.
                      
                      I welcome you to explore our website anytime you need additional information regarding you or your loved one's dental health. Please contact us if we can help you in any way.`,
    image: `/img/doctors/1.png`,
    facebook: `https://www.facebook.com/profile.php?id=100075964581664&mibextid=ZbWKwL`,
    linkedin: `https://www.linkedin.com/in/dr-ranjeet-kumar123`,
    instagram: `https://instagram.com/iamdrrk___?igshid=Mzc0YWU1OWY=`
  }, {
    name: `Dr. Priya Ahuja`,
    designation: `Cheif Operating Officer`,
    detail: `Dr. Priya Ahuja has more than 12 years of experience in the field of dentistry with multiple reputed dental practices in Pakistan and UAE.
                    She has also worked as Data Analyst in a well know healthcare company in UAE.
                    
                    She completed her bachelor in Dental Surgery in 2011 and did Diploma in Health management and Leadership from Westford university.
                    She has been working with Esthetix Dental Center as Chief Operating Officer.`,
    image: `/img/doctors/2.png`,
    facebook: ``,
    linkedin: `https://www.linkedin.com/in/priya-ahuja-172839108`,
    instagram: ``
  }, {
    name: `Dr. Naresh Kumar`,
    designation: `Quality Manager`,
    detail: `Dr. Naresh Kumar has more than 13 years of experience in the field of dentistry with multiple reputed dental practices in Pakistan and UAE. During his job as a General Dentist, he also performed duties as a Senior Quality Officer with a well known organisation in UAE.

                    He has been working with Esthetix Dental Center as Quality Manager.`,
    image: `/img/doctors/3.png`,
    facebook: `https://www.facebook.com/profile.php?id=100085633116927&mibextid=LQQJ4d`,
    linkedin: `https://www.linkedin.com/in/naresh-kumar-60b81467`,
    instagram: ``
  }, {
    name: `Dr. Manoj Kumar`,
    designation: `MD, General Dentist (Maxillofacial Surgeon)`,
    detail: `Dr. Manoj Kumar with more than 12 years of experience has been working as a General Dentist and Oral and Maxillofacial surgeon at multiple reputed dental practices in Pakistan and UAE.

                    He is well experienced in General and Surgical procedures.
                    
                    CLINICAL EXPERTISE IN
                    . General dentistry
                    . Endodontics
                    . Teeth Extractions
                    . Wisdom Tooth and Impacted Tooth
                    . Crowns and Bridges
                    . Partial and Complete Dentures
                    . Veneers and Smile Designing
                    . Hollywood Smile
                    . Teeth Whitening
                    . Tooth colored fillings
                    
                    LANGUAGES
                    . English
                    . Urdu
                    . Hindi
                    . Sindhi`,
    image: `/img/doctors/4.png`,
    facebook: `https://www.facebook.com/profile.php?id=100088239647342&mibextid=ZbWKwL`,
    linkedin: `https://www.linkedin.com/in/dr-manoj-kumar-69378b102`,
    instagram: `https://instagram.com/manojkumar_dentist?igshid=YmJhNjkzNzY=`
  }, {
    name: `Dr. Asirvatha Christina`,
    designation: `Specialist Orthodontist`,
    detail: `Dr. Asirvatha Christina with more than 12 years of experience has been working with children and adults at multiple reputed dental practices in India and UAE.

                    As a Specialist Orthodontist Dr. Christina’s expertise lies in Orthodontic procedure, functional and fixed functional therapies, surgical Orthognathic procedures, Aesthetic Dentistry, Preventive and interceptive orthodontics.
                    She speaks English, Tamil, Kannada, Hindi and minor Arabic.`,
    image: `/img/doctors/5.png`,
    facebook: ``,
    linkedin: `https://instagram.com/christina_dubaiorthodontist?igshid=MDM4ZDc5MmU=`,
    instagram: ``
  }, {
    name: `Dr. Reshma Samir Naik`,
    designation: `Specialist Implantologist  `,
    detail: `Dr. Reshma Samir Naik, is a UK accredited Licensed Specialist Implantologist, holding British Nationality.

                    Dr. Reshma S. Naik with more than 26 years of experience has been working as an Implantologist at multiple reputed dental practices in London and Dubai.
                    
                    Dr. Reshma completed her BDS from india and PG diploma in Implantology from university of Cambridge. She has also completed her Master level full mouth rehabilitation course from Poland in 2018.
                    
                    She has attended many courses and workshops internationally in the field of her specialization in world class dental education institutes.
                    
                    Dr. Reshma has a vast experience in the field of teaching to undergraduate students, house officers and Dental nurses as well.
                    
                    She has special interest in Dental implants and Full mouth rehabilitation. She is routinely doing complex implant cases including bone grafting and sinus lift. She is passionate of doing Full mouth rehabilitation in severe tooth wear cases and is successfully doing. She speaks English, Hindi, Urdu and a bit of Arabic.`,
    image: `/img/doctors/6.png`,
    facebook: ``,
    linkedin: ``,
    instagram: ``
  }, {
    name: `Dr. Vaishali Jindam`,
    designation: `General & Aesthetic Dentist`,
    detail: `Dr vaishali is a General and Aesthetic Dentist with 5+ years of experience.

                    She has completed the fellowship in Advanced Aesthetic Dentistry and Soft Tissue Lasers from Greifswald University of Medicine, Germany.
                    
                    CLINICAL EXPERTISE IN
                    . General dentistry
                    . Endodontics
                    . Teeth extractions
                    . Crowns and Bridges
                    . Partial and Complete Dentures
                    . Veneers and Smile Designing
                    . Hollywood Smile
                    . Tooth colored fillings
                    . Teeth Whitening
                    . Soft Tissue Laser Surgeries
                    
                    LANGUAGES
                    . English
                    . Urdu
                    . Hindi
                    . Telugu
                    . Marathi
                    . Kannada`,
    image: `/img/doctors/7.png`,
    facebook: ``,
    linkedin: ``,
    instagram: ``
  }, {
    name: `Dr. Vishal Shah`,
    designation: `General & Cosmetic Dentist`,
    detail: `Dr. Vishal is a General and Aesthetic Dentist With a rich experience of 9+ years. He has completed his fellowship in Endodontic and Aesthetic Dentistry.

                    He is well experienced in surgical, aesthetic and endodontic procedures and has a great understanding of patients.
                    
                    CLINICAL EXPERTISE IN
                    . General Dentistry
                    . Endodontics
                    . Teeth Extractions
                    . Crowns and Bridges
                    . Partial and Complete Dentures
                    . Veneers and Smile Designing
                    . Hollywood Smile
                    . Teeth Whitening
                    . Tooth Colored Fillings
                    
                    LANGUAGES
                    . English
                    . Urdu
                    . Hindi
                    . Gujrati`,
    image: `/img/doctors/8.png`,
    facebook: ``,
    linkedin: ``,
    instagram: ``
  }, {
    name: `Mr. Vishal Kumar`,
    designation: `HR Executive`,
    detail: `Mr. Vishal Kumar started his career with Esthetix Dental Center as Administrator Assistant.

                    His tired less work for the company got him into operations as Operation Assistant. Currently he is serving as HR Executive.`,
    image: `/img/doctors/9.png`,
    facebook: ``,
    linkedin: `https://www.linkedin.com/in/vishal-rejhra-697238204`,
    instagram: ``
  }
]



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
                  <h3>{member.name}</h3>
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
