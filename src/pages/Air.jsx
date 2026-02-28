import React, { useState } from "react";
import "./air.css";
import doctorImg from "../assets/Byair.webp";
import dentistImage from "../assets/Private-plne.webp";
import {
  FaClock,
  FaGlobe,
  FaFileAlt,
  FaHeadset,
  FaUserMd,
  FaPlaneDeparture,
  FaAmbulance,
  FaHospitalAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  HeartPulse,
  Plane,
  MapPin,
  Building2,
  FileText,
  PhoneCall,
  CheckCircle2,
  Users,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import ContactUs from "../components/ContactUs";
import { Helmet } from "react-helmet";

const Air = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What documents are needed for dead body transport by air?",
      answer:
        "Death certificate, embalming certificate, coffin certificate, ID proofs, NOC from authorities.",
    },
    {
      question: "2. How much does dead body transport by flight cost in India?",
      answer:
        "Domestic costs vary from ₹25,000–₹60,000 depending on airline and distance. International costs vary based on country and airline.",
    },
    {
      question: "3. Can Air India carry human remains internationally?",
      answer:
        "Yes, Air India and other international airlines provide human remains cargo handling services.",
    },
    {
      question: "4. How long does air repatriation take?",
      answer:
        "Domestic transfers are completed within the same day. International repatriation takes 1–3 days depending on documentation.",
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Medical & Embalming Certificates",
      description: "Issued as per airline standards.",
      color: "red",
    },
    {
      icon: Plane,
      title: "Airport Formalities",
      description: "Liaison with authorities and cargo clearance.",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "International Documentation",
      description: "Coordination with consulates & embassies.",
      color: "green",
    },
    {
      icon: Building2,
      title: "Arrival Handling",
      description: "Smooth reception at the destination airport.",
      color: "purple",
    },
  ];

  const steps = [
    {
      step: "1",
      title: "Domestic Air Transfers",
      desc: "Fast intercity transfers with ambulance pickup/drop.",
    },
    {
      step: "2",
      title: "International Repatriation",
      desc: "Human remains airplane cargo with consulate coordination.",
    },
    {
      step: "3",
      title: "Air Cargo Handling",
      desc: "Secure packaging and clearance at airports.",
    },
    {
      step: "4",
      title: "Insurance & Legal Guidance",
      desc: " Assistance with repatriation insurance and embassy paperwork.",
    },
    {
      step: "5",
      title: "Final Handover",
      desc: "Ambulance services at departure and arrival locations.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Dead Body Transport by Air | Human Remains Air Cargo Services
        </title>

        <meta
          name="description"
          content="Reliable dead body transport by air with documentation & airline coordination. Human remains air cargo & repatriation services."
        />

        <meta
          name="keywords"
          content="dead body transport by air, 
        deceased body transportation, 
        funeral transport service
        human remains air cargo, 
        human remains cargo handling, 
        repatriation of human remains
        "
        />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/transfer-by-mode/air"
        />
      </Helmet>
      {/* ===================start banner section==================  */}
      <section className="air-repatriation">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-section">
              <h1>
                Dead Body Transport by Air – Reliable Human Remains Air Cargo &
                Repatriation Services
              </h1>
              <p>
                Secure and professional dead body transport by air in India and
                abroad. Affordable human remains air cargo, repatriation of
                mortal remains, and complete air transport arrangements.
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
      {/* ===================end banner section==================  */}

      {/* ========================= start why choose us========================  */}
      <section className="why-choose py-5">
        <div className="container">
          <h2 className="section-title text-center mb-5">
            Why Choose Air Transport for Human Remains
            <span className="underline"></span>
          </h2>
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="feature-box">
                <div className="icon blue">
                  <FaClock />
                </div>
                <div>
                  <h5>Fastest Mode</h5>
                  <p>
                    Ideal for long-distance or international transfers where
                    time is critical.
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon pink">
                  <FaGlobe />
                </div>
                <div>
                  <h5>Worldwide Network</h5>
                  <p>
                    Tied up with major airlines including Air India for human
                    remains cargo
                  </p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon orange">
                  <FaFileAlt />
                </div>
                <div>
                  <h5>Complete Documentation</h5>
                  <p>From NOC to embalming and coffin certification.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon green">
                  <FaHeadset />
                </div>
                <div>
                  <h5>24/7 Assistance</h5>
                  <p>Immediate support for air transport arrangements.</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 text-center">
              <div className="image-box">
                <img
                  src={dentistImage}
                  alt="Air Transport"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= end why choose us========================  */}

      {/* ================start process Section================= */}
      <section className="hc-air-process-section">
        <div className="hc-air-container">
          <div className="hc-air-header">
            <h2 className="hc-air-title">
              Our Air Transport Services (Quick & Hassle-Free)
            </h2>
            <p className="hc-air-subtitle">
              We provide complete solutions for dead body transport by flight
              across India and abroad.
            </p>
          </div>

          <div className="hc-air-grid">
            {steps.map((item, index) => (
              <div className="hc-air-item" key={index}>
                <div className="hc-air-card">
                  <div className="hc-air-icon-wrapper">
                    <span className="hc-air-step">{item.step}</span>
                  </div>
                  <h5 className="hc-air-card-title">{item.title}</h5>
                  <p className="hc-air-card-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================end process Section================= */}

      {/* =======================start health section==================  */}
      <section className="health-section py-5">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="health-title">
                {" "}
                Cost of Dead Body Transport by Air
              </h2>
              <p className="health-desc">
                The dead body transport by air cost depends on distance, airline
                charges, documentation, and type of coffin/cargo. We provide a
                clear quotation within 20 minutes of request, ensuring
                transparency in pricing.
              </p>
            </div>

            {/* Right Side */}
            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-card">
                    <h3>10,000+</h3>
                    <p>Families Assisted</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <h3>500+</h3>
                    <p>Airline Partners</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Emergency Support</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <h3>99.9%</h3>
                    <p>Success Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================end health section==================  */}

      {/* ================start experties Section (custom)================= */}
      <section className="hc-air-services-section">
        <div className="hc-air-services-container">
          {/* Section Header */}
          <div className="hc-air-services-header">
            <h2 className="hc-air-services-title">
              End-to-End Assistance (Air Transfers)
            </h2>
            <p className="hc-air-services-subtitle">
              Complete care for human remains transfer by air with expert
              support.
            </p>
          </div>

          {/* Services Grid */}
          <div className="hc-air-services-grid">
            {services.map((service, index) => (
              <div key={index} className="hc-air-services-item">
                <article className="hc-air-service-card">
                  <div
                    className={`hc-air-service-icon hc-color-${service.color}`}
                  >
                    <service.icon size={28} />
                  </div>
                  <h3 className="hc-air-service-title">{service.title}</h3>
                  <p className="hc-air-service-desc">{service.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================end experties Section (custom)================= */}

      {/* =======================start Domestic & International Repatriation==================== */}
      <section>
        <div className="container py-5">
          <h1 className="text-center mb-5">How Air Transport Works</h1>

          <div className="row g-4">
            {/* Domestic */}
            <div className="col-md-6">
              <div className="card custom-card h-100">
                <h2>Domestic Dead Body Transport by Air</h2>
                {/* <p className="sub">Respectful, end-to-end coordination within India</p> */}
                <ul className="list-unstyled list">
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box blue">⏰</div> */}
                    <div className="item-content">
                      <strong>Pickup by ambulance </strong>
                      {/* <span>Hospital, police/NOC, and municipal departments across states.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box pink">⚰️</div> */}
                    <div className="item-content">
                      <strong>Embalming & Coffin sealing</strong>
                      {/* <span>Embalming (where required), hermetic sealing, coffin boxing for air carriage.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box orange">📑</div> */}
                    <div className="item-content">
                      <strong>Flight booking</strong>
                      {/* <span>AWB/air cargo booking, fit-to-fly and mortuary certificates per airline SOPs.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box green">🛫</div> */}
                    <div className="item-content">
                      <strong> Cargo clearance </strong>
                      {/* <span>Cargo acceptance, security screening, and swift handover on arrival.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="item-content">
                      <strong> Drop at arrival city. </strong>
                      {/* <span>Cargo acceptance, security screening, and swift handover on arrival.</span> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* International */}
            <div className="col-md-6">
              <div className="card custom-card h-100">
                <h2>International Human Remains Repatriation</h2>
                {/* <p className="sub">Specialized handling across borders per embassy & airline rules</p> */}
                <ul className="list-unstyled list">
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box blue">🌍</div> */}
                    <div className="item-content">
                      <strong> Legal clearance </strong>
                      {/* <span>Coordinating with foreign embassies and local authorities.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box pink">📜</div> */}
                    <div className="item-content">
                      <strong>Consulate approvals</strong>
                      {/* <span>Arranging embalming, sealing, and documentation per guidelines.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box orange">🛃</div> */}
                    <div className="item-content">
                      <strong>Human remains air cargo</strong>
                      {/* <span>Managing customs processes at both departure and arrival airports.</span> */}
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box green">🤝</div> */}
                    <div className="item-content">
                      <strong>estination country coordination</strong>
                      {/* <span>Working with funeral homes worldwide for smooth final delivery.</span> */}
                    </div>
                  </li>

                  <li className="item d-flex align-items-start">
                    {/* <div className="icon-box green">🤝</div> */}
                    <div className="item-content">
                      <strong>Local transfer at arrival</strong>
                      {/* <span>Working with funeral homes worldwide for smooth final delivery.</span> */}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =======================end Domestic & International Repatriation==================== */}

      {/* ==========================start Faqs Section========================== */}
      <section className="hc-faq-section">
        <div className="hc-faq-container" id="faqs-width">
          <div className="hc-faq-header">
            <h2 className="hc-faq-title">Frequently Asked Questions</h2>
          </div>

          <div className="hc-faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="hc-faq-item">
                <button
                  className={`hc-faq-question-btn ${openIndex === index ? "open" : ""}`}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="hc-faq-qtext">{faq.question}</span>
                  <span className="hc-faq-icon">
                    {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </span>
                </button>

                <div
                  className={`hc-faq-answer ${openIndex === index ? "open" : ""}`}
                >
                  <div className="hc-faq-answer-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==========================end Faqs Section========================== */}

      {/* =====================start Cta Section====================   */}
      <section className="cta-section">
        <div className="cta-container">
          <h2>Need Immediate Air Transport Support?</h2>
          <p>
            Call us now for 24/7 air ambulance and human remains repatriation
            support. Our experts will provide you with a clear cost estimate
            within 20 minutes and guide you through every step.
          </p>
          <a href="/contact" className="cta-button">
            Contact Us Today
          </a>
        </div>
      </section>
      {/* =====================end Cta Section====================   */}

      {/* =====================start Contact Us Section======================   */}
      <ContactUs />
      {/* =====================end Contact Us Section======================   */}
    </>
  );
};

export default Air;
