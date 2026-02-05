import React, { useState } from "react";
import Servicessec from "../components/Homecomponents/Servicessec";
import doctorImg from "../assets/Service-banner.jpg";
import dentistImage from "../assets/banner.jpeg";
import ContactUs from "../components/ContactUs";

import {
  FaUserTie,
  FaGlobe,
  FaClipboardCheck,
  FaPrayingHands,
  FaHandsHelping,
  FaPlaneDeparture,
  FaGlobeAmericas,
  FaChurch,
} from "react-icons/fa";

const Servicespage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // ✅ Updated services with relevant icons
  const services = [
    {
      icon: FaHandsHelping,
      title: "Compassionate Support",
      description:
        "We provide emotional guidance and logistical support throughout the repatriation process.",
      color: "red",
    },
    {
      icon: FaPlaneDeparture,
      title: "Global Air Transfer",
      description:
        "Trusted international partnerships for safe and timely transport of human remains.",
      color: "blue",
    },
    {
      icon: FaGlobeAmericas,
      title: "Worldwide Network",
      description:
        "Presence in 180+ countries ensures seamless coordination wherever required.",
      color: "green",
    },
    {
      icon: FaChurch,
      title: "Funeral Home Assistance",
      description:
        "We work closely with funeral homes to ensure smooth arrangements on arrival.",
      color: "orange",
    },
  ];

  const faqs = [
    {
      question: "1. What documents are required for a body transfer within India?",
      answer:
        " You will generally need a death certificate, embalming certificate, and police NOC. Our team helps arrange and verify all necessary paperwork.",
    },
    {
      question: "2. How long does an international repatriation process take?",
      answer:
        "On average, 2–5 working days depending on embassy clearances, airline schedules, and destination country rules. In urgent cases, we expedite the process.",
    },
    {
      question: "3. Can you arrange funeral services for specific religions?",
      answer:
        " Yes. We cater to Hindu, Muslim, Christian, Sikh, Jain, Parsi, Buddhist, and interfaith rituals with appropriate arrangements.",
    },
    {
      question: "4. Is it possible to send ashes abroad?",
      answer:
        " Yes. We provide urn transfer services that include secure packaging, airline clearance, and customs compliance for international delivery.",
    },
    {
      question: "5. Do you provide end-to-end funeral support?",
      answer:
        " Absolutely. From venue booking and priest arrangements to floral décor and dead body transport, we manage everything while keeping families involved in decisions.",
    },
    {
      question: "6. Are your services available at night or on weekends?",
      answer:
        " Yes. We operate 24/7, all 365 days of the year, ensuring assistance at any time of need.",
    },
    {
      question: "7. How do I get a quote?",
      answer:
        " Simply call our 24/7 helpline or fill out the “Request a Quote” form. Our team responds within 15–20 minutes with complete details.",
    },
  ];

  return (
    <>

     <Helmet>
      <title>Human Remains Transportation & Funeral Services in India</title>

      <meta
        name="description"
        content="End-to-end Human Remains Corpse transportation services including ambulance, air cargo, train & road funeral transport across India."
      />

      <meta
        name="keywords"
        content="corpse transportation service,
        dead body transportation services,
        funeral transport services,
        deceased transportation services,
        dead body ambulance service,
        mortuary transport services
        "
      />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/services"
        />
    </Helmet>
      {/* ========================== Banner Section ======================== */}
      <section className="air-repatriation">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-section">
              <h1>Cremation, Burial & Repatriation Services Made Simple</h1>
              <p>
                We provide end-to-end support for human remains transfer, funeral
                planning, and international documentation—anytime, anywhere.
              </p>
              <a href="tel: +919833444040">
                <button className="btn btn-danger">More Info</button>
              </a>
            </div>
            {/* Right Side Image */}
            <div className="col-md-6 image-section">
              <img
                src={doctorImg}
                alt="Doctor with airplane"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <Servicessec />

      {/* ========================= Why Choose Us ======================== */}
      <section className="why-choose py-5">
        <div className="container">
          <h2 className="section-title text-center ">
            Humancare World Wide Services: Why Choose It?
          </h2>
          <p className=" text-center mb-5 service-subtitle">
            Families need dependability, empathy, and commitment while looking
            for funeral help, cremation support, or the transfer of human
            remains. We are trusted both domestically and abroad since we are
            available around-the-clock, as crises don't wait for regular work
            hours.
          </p>
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="feature-box">
                <div className="icon blue">
                  <FaUserTie />
                </div>
                <div>
                  <h5>Professionals with Training</h5>
                  <p>Caring employees who are certified to handle transfers.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon pink">
                  <FaGlobe />
                </div>
                <div>
                  <h5>Nationwide and Global Network</h5>
                  <p>Guaranteeing smooth coordination wherever it may be.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon orange">
                  <FaClipboardCheck />
                </div>
                <div>
                  <h5>Clear Instructions</h5>
                  <p>We guide you through each step so you never feel lost.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon green">
                  <FaPrayingHands />
                </div>
                <div>
                  <h5>Religious and Cultural Sensitivity</h5>
                  <p>Honoring diverse customs and individual beliefs.</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 text-center">
              <div className="image-box">
                <img src={dentistImage} alt="Dentist" className="img-fluid" />
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
            <h2 className="mb-3">How We Support Families – Beyond Services</h2>
            <p className="mx-auto" style={{ maxWidth: "700px" }}>
              We believe our role goes beyond just logistics. What makes us
              different is human touch and empathy.
            </p>
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

      {/* ===================== CTA Section ==================== */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Trusted by Families Nationwide & Internationally</h2>
          <p>
            Our services extend across India and overseas, making us a reliable
            choice for families living abroad or away from their hometowns.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us Today
          </a>
        </div>
      </section>

      {/* ===================== FAQs Section ==================== */}
      <section className="faq-section">
        <div className="container" id="faqs-width">
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
            <p>
              We understand you may have many questions during this difficult
              time. Here are answers to the most common concerns families have
              about our repatriation services.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <span
                    className={`arrow ${openIndex === index ? "open" : ""}`}
                  >
                    &#9660;
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactUs />
    </>
  );
};

export default Servicespage;
