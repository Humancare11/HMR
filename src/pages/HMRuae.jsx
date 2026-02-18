import React, { useState } from "react";
import "./HMRIndia.css";
import heroImage from "../assets/ads/heroimg.webp";
import aboutImage from "../assets/ads/about.jpg";
import trustImage from "../assets/ads/trust.webp";
// import Testimonial from "../component/Testimonial";
// import TalkUs from "../component/TalkUs";
import { Phone } from "lucide-react";

import { MdEmail } from "react-icons/md";
// import "./AirAmbulanceIndia.css";

import logo from "../assets/humancare.webp";
import {
    FaWhatsapp,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
    FaYoutube,
    FaCheck,
    FaQuoteRight,
    FaPlay,
    FaPause,
    FaPlus,
    FaMinus,
    FaPhone,
} from "react-icons/fa6";

const MortalRemains = () => {

    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };


    const steps = [
        {
            number: "1",
            title: "24/7 First Response",
            text: "We’re available anytime, anywhere",
        },
        {
            number: "2",
            title: "Information & Documents",
            text: "We guide you on exactly what’s needed",
        },
        {
            number: "3",
            title: "Approvals & Clearances",
            text: "Liaison with authorities, embassies & airlines",
        },
        {
            number: "4",
            title: "Preparation",
            text: "Embalming, sealing, and packaging as per regulations",
        },
        {
            number: "5",
            title: "Transportation",
            text: "Smooth transfer by commercial cargo or charter",
        },
        {
            number: "6",
            title: "Final Handover",
            text: "To the family or funeral director at the destination",
        },
    ];


    const serveData = [
        {
            title: "B2B",
            text: "Funeral directors, insurance companies, airlines, travel assistance firms",
        },
        {
            title: "B2I",
            text: "International repatriation partners & funeral agencies",
        },
        {
            title: "B2G",
            text: "Government bodies & diplomatic missions",
        },
        {
            title: "B2C",
            text: "Directly supporting families in their time of need",
        },
    ];


    return (
        <>

        <section className="one-stop-header">
        {/* Top contact bar with numbers and social icons */}
        <div className="top-bar">
          <div className="top-bar-inner one-stop-container">
            <div className="top-contacts">
              <div className="contact-item">
                <a
                  href="tel:+971585787878"
                  className="contact-details top-contact"
                >
                  <Phone size={18} className="contact-icon" />
                  <span className="contact-label">Global Alarm Center:</span>
                  <span className="contact-number">+971585787878</span>
                </a>
              </div>

              <div className="contact-item">
                <a
                  href="https://wa.me/971509720339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-details top-contact"
                >
                  <FaWhatsapp size={18} className="contact-icon whatsapp" />
                  <span className="contact-label">Whats App:</span>
                  <span className="contact-number">+971509720339</span>
                </a>
              </div>
            </div>

            <div className="top-socials">
              <div className="social-icons-group">
                <a
                  href="https://www.facebook.com/humancareworldwide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="https://x.com/wwhumancare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/company/human-care-world-wide/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaLinkedinIn size={18} />
                </a>
                <a
                  href="https://wa.me/971509720339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="https://www.instagram.com/humancareworldwideofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="https://www.youtube.com/@HumancareWorldWide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaYoutube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main header row: logo left, enquire & hamburger right */}
        <div className="main-bar one-stop-container">
          <div className="one-stop-logo">
            <img src={logo} alt="HUMANCARE WORLD WIDE" />
          </div>

          <div className="main-actions">
            <a
              href="https://wa.me/971509720339"
              target="_blank"
              rel="noopener noreferrer"
              className="enquire-button"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>
            <section className="hero">
                <div className="hero-container">
                    <div className="hero-left">
                        <h1>
                           Mortal Remains Services – Humancare World Wide (UAE & International)
                        </h1>

                        <p>
                            Compassionate mortal remains services by Humancare World Wide, offering dignified, legal, and reliable repatriation across UAE and international destinations.
                        </p>

<a href="tel:971585787878">
  <button className="hero-btn">More Info</button>
</a>
                    </div>

                    <div className="hero-right">
                        <img src={heroImage} alt="Mortal Remains Transfer" />
                    </div>
                </div>
            </section>

            {/* =======================About section========================= */}

            <section className="about">
                <div className="about-container">

                    <div className="about-left">
                        <img src={aboutImage} alt="Mortal Remains Service" />
                    </div>

                    <div className="about-right">
                        <h2>

Dignity. Compassion. Global Expertise.                        </h2>

                      <p>When a loved one passes away far from home, the journey of bringing them back or arranging their final rites requires not just speed, but absolute care and respect. At Humancare World Wide, we specialise in end-to-end mortal remains repatriation and funeral assistance services from the UAE to destinations across the globe — delivering each case with professional precision and cultural sensitivity.</p>
                    </div>

                </div>
            </section>

            <section className="services">

                <div className="services-container">

                    <h2 className="services-title">Our Core Services</h2>

                    <div className="services-cards">
                        <div className="service-card">
                          Mortal Remains Transfer – Domestic within UAE & International
                        </div>

                        <div className="service-card">
Cremation & Burial Assistance – In accordance with religious and cultural traditions                        </div>

                        <div className="service-card">
Urn Transfer Services – Safe, respectful, and discreet handling of ashes
                        </div>
                    </div>

                    <h2 className="transfer-title">
Two Ways We Transfer Mortal Remains
                    </h2>

                    <div className="transfer-wrapper">

                        <div className="transfer-box">
                            <h3>Commercial Airline (Cargo Transfer)</h3>
                            <ol>
                                <li>Partnership with leading domestic & international carriers</li>
                                <li>IATA-compliant coffin and packaging standards</li>
                                <li>Priority airport clearances for minimal delays</li>
                            </ol>
                        </div>

                        <div className="transfer-box">
                            <h3>Private Chartered Flight</h3>
                            <ol>
                                <li>Immediate availability for urgent or special requests</li>
                                <li>Direct routing to remote or difficult destinations</li>
                                <li>Exclusive handling from collection to delivery</li>
                            </ol>
                        </div>

                    </div>

                </div>

            </section>

            <section className="trust">
                <div className="trust-container">

                    <div className="trust-left">
                        <h2 className="section-title">
Why Families & Partners Trust Us
                        </h2>

                        <ul className="trust-list">
                            <li>
                                <strong>Compassion Meets Professionalism</strong> – Experienced teams who treat each case with utmost care
                            </li>

                            <li>
 <strong>Religious & Cultural Sensitivity </strong>  – Services customised to Islamic, Christian, Hindu, Buddhist, and other faith requirements                            </li>

                            <li>
                                <strong>Complete Paperwork & Permissions</strong> – Death certificates, embalming, police NOCs, airport, customs & consular clearances all handled by us
                            </li>

                            <li>
                                <strong>Truly End-to-End</strong> – From the place of passing to the final resting place
                            </li>

                            <li>
                                <strong>Global Compliance</strong> – ICAO, IATA, and WHO standards followed in every case
                            </li>
                        </ul>
                    </div>

                    <div className="trust-right">
                        <img src={trustImage} alt="Funeral Service" />
                    </div>

                </div>
            </section>

            <section className="process">
                <div className="process-container">

                    <h2 className="section-title process-title">
                        Our Simple & Seamless Process
                    </h2>

                    <div className="process-grid">
                        {steps.map((step, index) => (
                            <div className="process-card" key={index}>
                                <div className="process-number">{step.number}</div>
                                <p>
                                    <strong>{step.title}</strong> – {step.text}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            <section className="serve">
                <div className="serve-container">
                    <h2 className="section-title serve-title">Who We Serve</h2>

                    <div className="serve-grid">
                        {serveData.map((item, index) => (
                            <div className="serve-card" key={index}>
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="serve-cta">
                <div className="serve-cta-container">
                    <h2>Your Trusted Partner in a Time of Loss</h2>

                    <p>
                        From India to the world, <strong>Humancare World Wide</strong> delivers not just a service,
                        but a promise that your loved one will be treated with the
                        <strong> honour, respect, and dignity</strong> they deserve.
                    </p>

                    <p className="serve-highlight">
                        Because bringing them home is more than a process it’s a final journey that deserves perfection
                    </p>
                </div>
            </section>

            {/* <Testimonial /> */}

            <section className="faq-section">
                <div className="faq-container">
                    <h2 className="faq-title">Frequently Asked Questions</h2>

                    <div className="faq-list">

                        {/* 0 */}
                        <div className={`faq-item ${openFaq === 0 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(0)}>
                                {openFaq === 0 ? <FaMinus /> : <FaPlus />}
                                <span>What documents are required for repatriating mortal remains within India or internationally?</span>
                            </button>
                            {openFaq === 0 && (
                                <div className="faq-answer">
                                    <p>
                                        You will generally need a death certificate, embalming certificate, police NOC, passport of the deceased, and clearance from local authorities. For international repatriations, consular and customs approvals may also be required. Our team guides you through each step.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 1 */}
                        <div className={`faq-item ${openFaq === 1 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(1)}>
                                {openFaq === 1 ? <FaMinus /> : <FaPlus />}
                                <span>How long does it take to transfer mortal remains?</span>
                            </button>
                            {openFaq === 1 && (
                                <div className="faq-answer">
                                    <p>
                                        Domestic transfers are usually completed within **24–48 hours** (subject to approvals). International transfers can take **2–5 days**, depending on consular processes, flight schedules, and documentation
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 2 */}
                        <div className={`faq-item ${openFaq === 2 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(2)}>
                                {openFaq === 2 ? <FaMinus /> : <FaPlus />}
                                <span>Do you provide embalming and coffin preparation services?</span>
                            </button>
                            {openFaq === 2 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. All embalming, sealing, and IATA-approved coffin/packaging are done by certified professionals, ensuring compliance with international standards.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 3 */}
                        <div className={`faq-item ${openFaq === 3 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(3)}>
                                {openFaq === 3 ? <FaMinus /> : <FaPlus />}
                                <span>Can you handle religious and cultural funeral requirements?</span>
                            </button>
                            {openFaq === 3 && (
                                <div className="faq-answer">
                                    <p>
                                        Absolutely. We respect and accommodate Hindu, Muslim, Christian, Sikh, Buddhist, and other traditions, ensuring rituals and final rites are performed in line with family wishes.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 4 */}
                        <div className={`faq-item ${openFaq === 4 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(4)}>
                                {openFaq === 4 ? <FaMinus /> : <FaPlus />}
                                <span>What are the options for transporting mortal remains?</span>
                            </button>
                            {openFaq === 4 && (
                                <div className="faq-answer">
                                    <ul className="faq-points">
                                        <li>We offer two main options:</li>
                                        <li> Commercial Airline Cargo Transfer– Cost-effective and widely available. </li>
                                        <li> Private Charter Flights – For urgent or remote locations requiring immediate handling. </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 5 */}
                        <div className={`faq-item ${openFaq === 5 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(5)}>
                                {openFaq === 5 ? <FaMinus /> : <FaPlus />}
                                <span>How much does a mortal remains transfer cost?</span>
                            </button>
                            {openFaq === 5 && (
                                <div className="faq-answer">
                                    <p>
                                        Costs vary depending on destination, airline, coffin type, and consular fees. We provide transparent, competitive quotes with no hidden charges.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 6 */}
                        <div className={`faq-item ${openFaq === 6 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(6)}>
                                {openFaq === 6 ? <FaMinus /> : <FaPlus />}
                                <span>Can family members travel on the same flight?</span>
                            </button>
                            {openFaq === 6 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes, in most cases, families can book passenger tickets on the same commercial airline. For chartered flights, arrangements can be customized.
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* 7 */}
                        <div className={`faq-item ${openFaq === 7 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(7)}>
                                {openFaq === 7 ? <FaMinus /> : <FaPlus />}
                                <span>Do you coordinate with embassies and consulates?</span>
                            </button>
                            {openFaq === 7 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. Our team manages the entire liaison process with embassies, consulates, customs, and airline authorities to minimize delays.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`faq-item ${openFaq === 8 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(8)}>
                                {openFaq === 8 ? <FaMinus /> : <FaPlus />}
                                <span>Do you provide support outside India as well?</span>
                            </button>
                            {openFaq === 8 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. We have global partners across Asia, Middle East, Africa, Europe, and North America, allowing us to manage both incoming and outgoing repatriations
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`faq-item ${openFaq === 9 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(9)}>
                                {openFaq === 9 ? <FaMinus /> : <FaPlus />}
                                <span>What if my loved one passed away abroad — can you bring them back to India?</span>
                            </button>
                            {openFaq === 9 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. We specialize in international repatriations to India, handling all overseas formalities, embalming, clearances, and transport until final delivery.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`faq-item ${openFaq === 10 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(10)}>
                                {openFaq === 10 ? <FaMinus /> : <FaPlus />}
                                <span>Do you provide urn/ashes transfer services?</span>
                            </button>
                            {openFaq === 10 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. We offer discreet, safe, and compliant transfer of cremated remains (urns) both domestically and internationally.
                                    </p>
                                </div>
                            )}
                        </div>

                        <div className={`faq-item ${openFaq === 11 ? "open" : ""}`}>
                            <button className="faq-question" onClick={() => toggleFaq(11)}>
                                {openFaq === 11 ? <FaMinus /> : <FaPlus />}
                                <span>Are your services available 24/7?</span>
                            </button>
                            {openFaq === 11 && (
                                <div className="faq-answer">
                                    <p>
                                        Yes. Our Global Coordination Center operates round-the-clock to provide immediate assistance and guidance.
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </section>


            {/* <TalkUs /> */}
                  <footer className="footer-bottom">
                    <div className="footer-container">
                      {/* Copyright Text */}
                      <p className="footer-text">
                        © Copyright 2026. All Rights Reserved - humancareworldwide
                      </p>
            
                      {/* Social Icons */}
                      <div className="footer-social">
                        <a href="https://www.facebook.com/humancareworldwide/">
                          <FaFacebookF />
                        </a>
                        <a href="https://x.com/wwhumancare">
                          <FaTwitter />
                        </a>
                        <a href="https://www.linkedin.com/company/human-care-world-wide/">
                          <FaLinkedinIn />
                        </a>
                        <a href="https://wa.me/919699999065">
                          <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/humancareworldwideofficial/">
                          <FaInstagram />
                        </a>
                        <a href="https://www.youtube.com/@HumancareWorldWide">
                          <FaYoutube />
                        </a>
                      </div>
                    </div>
                  </footer>
        </>
    );
};

export default MortalRemains;
