

import React, { useState } from 'react';
import "./air.css";
import doctorImg from "../assets/Byair.png";
import dentistImage from "../assets/Private-plne.jpg";
import { FaClock, FaGlobe, FaFileAlt, FaHeadset, FaUserMd, FaPlaneDeparture, FaAmbulance, FaHospitalAlt } from "react-icons/fa";
import { 
  HeartPulse, 
  Plane, 
  MapPin, 
  Building2, 
  FileText, 
  PhoneCall, 
  CheckCircle2, 
  Users 
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import ContactUs from '../components/ContactUs';

const Air = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What documents are needed for dead body transport by air?",
      answer: "Death certificate, embalming certificate, coffin certificate, ID proofs, NOC from authorities."
    },
    {
      question: "2. How much does dead body transport by flight cost in India?",
      answer: "Domestic costs vary from ₹25,000–₹60,000 depending on airline and distance. International costs vary based on country and airline."
    },
    {
      question: "3. Can Air India carry human remains internationally?",
      answer: "Yes, Air India and other international airlines provide human remains cargo handling services."
    },
    {
      question: "4. How long does air repatriation take?",
      answer: "Domestic transfers are completed within the same day. International repatriation takes 1–3 days depending on documentation."
    }
  ];

  const services = [
    {
      icon: FileText,
      title: "Medical & Embalming Certificates",
      description: "Issued as per airline standards.",
      color: "red"
    },
    {
      icon: Plane,
      title: "Airport Formalities",
      description: "Liaison with authorities and cargo clearance.",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "International Documentation",
      description: "Coordination with consulates & embassies.",
      color: "green"
    },
    {
      icon: Building2,
      title: "Arrival Handling",
      description: "Smooth reception at the destination airport.",
      color: "purple"
    }
  ];

  const steps = [
    { step: "1", title: "Domestic Air Transfers", desc: "Fast intercity transfers with ambulance pickup/drop." },
    { step: "2", title: "International Repatriation", desc: "Human remains airplane cargo with consulate coordination." },
    { step: "3", title: "Air Cargo Handling", desc: "Secure packaging and clearance at airports." },
    { step: "4", title: "Insurance & Legal Guidance", desc: " Assistance with repatriation insurance and embassy paperwork." },
    { step: "5", title: "Final Handover", desc: "Ambulance services at departure and arrival locations." },
  ];

  return (
    <>
      {/* ===================start banner section==================  */}
      <section className="air-repatriation">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-section">
              <h1>Dead Body Transport by Air – Reliable Human Remains Air Cargo & Repatriation Services</h1>
              <p>Secure and professional dead body transport by air in India and abroad. Affordable human remains air cargo, repatriation of mortal remains, and complete air transport arrangements.</p>
              <a href="tel: +919833444040">
                <button className="btn btn-danger">More Info</button>
              </a>
            </div>
            {/* Right Side Image */}
            <div className="col-md-6 image-section">
              <img src={doctorImg} alt="Doctor with airplane" className="img-fluid" />
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
                <div className="icon blue"><FaClock /></div>
                <div>
                  <h5>Fastest Mode</h5>
                  <p>Ideal for long-distance or international transfers where time is critical.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon pink"><FaGlobe /></div>
                <div>
                  <h5>Worldwide Network</h5>
                  <p>Tied up with major airlines including Air India for human remains cargo</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon orange"><FaFileAlt /></div>
                <div>
                  <h5>Complete Documentation</h5>
                  <p>From NOC to embalming and coffin certification.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon green"><FaHeadset /></div>
                <div>
                  <h5>24/7 Assistance</h5>
                  <p>Immediate support for air transport arrangements.</p>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="col-lg-6 text-center">
              <div className="image-box">
                <img src={dentistImage} alt="Air Transport" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========================= end why choose us========================  */}

      {/* ================start process Section================= */}
      <section className="process-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="process-section-title">Our Air Transport Services (Quick & Hassle-Free)</h2>
            <p className="section-subtitle">
              We provide complete solutions for dead body transport by flight across India and abroad.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((item, index) => (
              <div className="process-card" key={index}>
                <div className="icon-wrapper">
                  <span className="step-number">{item.step}</span>
                </div>
                <h5 className="mt-3">{item.title}</h5>
                <p>{item.desc}</p>
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
              <h2 className="health-title"> Cost of Dead Body Transport by Air</h2>
              <p className="health-desc">
                The dead body transport by air cost depends on distance, airline charges, documentation, and type of coffin/cargo. We provide a clear quotation within 20 minutes of request, ensuring transparency in pricing.
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

      {/* ================start experties Section================= */}
      <section className="services-section py-5">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-5">
            <h2 className="mb-3">End-to-End Assistance (Air Transfers)</h2>
            <p className="mx-auto" style={{ maxWidth: "700px" }}>
              Complete care for human remains transfer by air with expert support.
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
      {/* ================end experties Section================= */}

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
      <section className="faq-section">
        <div className="container" id='faqs-width'>
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFAQ(index)}>
                  {faq.question}
                  <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9660;</span>
                </button>
                {openIndex === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
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
            Call us now for 24/7 air ambulance and human remains repatriation support. Our experts will provide you with a clear cost estimate within 20 minutes and guide you through every step.
          </p>
          <a href="/contact" className="cta-button">Contact Us Today</a>
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
