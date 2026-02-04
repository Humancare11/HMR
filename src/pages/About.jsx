import React from 'react';
import "./About.css";
import doctorImg from "../assets/About-page.jpg";
import { FaHeart, FaShieldAlt, FaClock, FaAward, FaPlane, FaMapMarkerAlt, FaPhoneAlt, FaBook } from "react-icons/fa";

const About = () => {
  const services = [
    {
      icon: FaMapMarkerAlt,
      title: "India-Wide Coverage",
      description: "Operations across all major cities with access to airports, railways, and highways.",
      color: "red"
    },
    {
      icon: FaPlane,
      title: "International Repatriation",
      description: " Partnerships with airlines, embassies, and global agencies for smooth cross-border transfers.",
      color: "blue" 
    },
    {
      icon: FaBook,
      title: "Medical & Legal Compliance",
      description: " Adherence to WHO, IATA, and country-specific rules for embalming, coffin sealing, and permits.",
      color: "green"
    },
    {
    icon: FaPhoneAlt,
      title: "24/7 Support System",
      description: "Real-time assistance for families and coordination with authorities round the clock.",
      color: "purple"
    }
  ];

  return (
    <>
      {/* ========================== Banner Section ======================== */}
      <section className="air-repatriation">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-section">
              <h1>About Us – Human Care Worldwide
</h1>
              <p>
               Trusted Partners in Safe & Dignified Repatriation
              </p>
               <a href="tel: +919833444040">
        <button className="btn btn-danger">More Info</button></a>
            </div>
            {/* Right Side Image */}
            <div className="col-md-6 image-section">
              <img src={doctorImg} alt="Doctor with airplane" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= Core Values Section ======================= */}
      <section className="cv-section py-5">
        <div className="container text-center">
          <h2 className="cv-title mb-3">Our Core Values</h2>
          {/* <p className="cv-subtitle mb-5">
            The principles that guide everything we do and shape our commitment to
            exceptional medical care and patient service.
          </p> */}

          <div className="row g-4">
            <div className="col-12 col-sm-6 col-md-3">
              <div className="cv-card p-4 h-100">
                <div className="cv-icon mb-3"><FaHeart /></div>
                <h5 className="cv-card-title mb-2">Integrity in Every Step</h5>
                <p className="cv-card-text"> Transparent communication, legal compliance, and ethical practices in every transfer.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="cv-card p-4 h-100">
                <div className="cv-icon mb-3"><FaShieldAlt /></div>
                <h5 className="cv-card-title mb-2">Respect & Dignity</h5>
                <p className="cv-card-text">Ensuring every departed soul is handled with the highest respect and cultural sensitivity.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="cv-card p-4 h-100">
                <div className="cv-icon mb-3"><FaClock /></div>
                <h5 className="cv-card-title mb-2">Reliability & Timeliness</h5>
                <p className="cv-card-text">Rapid response with accurate coordination to minimize delays during critical moments.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-md-3">
              <div className="cv-card p-4 h-100">
                <div className="cv-icon mb-3"><FaAward /></div>
                <h5 className="cv-card-title mb-2">Professional Expertise</h5>
                <p className="cv-card-text"> Trained staff, certified doctors, and global experience to manage complex transfers smoothly.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Mission Vision Section ======================= */}
      <section className="mission-vision-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Our Mission */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-text">
               At Human Care Worldwide, our mission is to provide safe, reliable, and dignified dead body transport services across India and internationally.
 We strive to ease the challenges families face by offering end-to-end support — from documentation to final delivery — with utmost precision.
              </p>
              <ul className="mission-list list-unstyled">
                <li>Quick response and 24/7 availability</li>
                <li>Legal and medical compliance in all transfers</li>
                <li> Door-to-door coordination within India and abroad</li>
                <li>Affordable and transparent pricing</li>
              </ul>
            </div>

            {/* Our Vision */}
            <div className="col-lg-6">
              <div className="vision-box p-4 rounded">
                <h3 className="vision-title">Our Expertise</h3>
                <p className="vision-text">
              With years of specialized experience, Human Care Worldwide has managed thousands of successful transfers across India and overseas.
 From air ambulance and road ambulance to train cargo and international repatriation, our team ensures seamless coordination, certified embalming, coffin services, and global clearances.
 We are trusted by families, hospitals, embassies, and insurance providers for our accuracy and professionalism.
                </p>
                {/* <div className="vision-stats d-flex mt-4">
                  <div className="stat text-center me-4">
                    <h4>10,000+</h4>
                    <p>Lives Saved</p>

                  </div>
                  <div className="stat text-center">
                    <h4>500+</h4>
                    <p>Medical Staff</p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Expertise Section ======================= */}
      <section className="services-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="mb-3">Our Global Network</h2>
            {/* <p className="mx-auto" style={{ maxWidth: "700px" }}>
              Comprehensive medical solutions designed to meet your every healthcare need,
              delivered with excellence and compassion across the globe.
            </p> */}
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className="col-lg-3 col-md-6 col-sm-12">
                <div className="service-card h-100 text-center">
                  <div className={`icon-box mx-auto ${service.color}`}>
                    <service.icon size={32} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
