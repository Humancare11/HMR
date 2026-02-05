import React, { useState } from 'react';
import "./air.css";
import doctorImg from "../assets/Location.jpg";
import dentistImage from "../assets/Indiamap.png";
import { FaTooth, FaClock, FaSmile, FaShieldAlt } from "react-icons/fa";
import { FaHome, FaGlobeAmericas, FaFileAlt, FaHeadset } from "react-icons/fa";
// import { Phone, FileCheck, Plane, CheckCircle, Users, MapPin } from "lucide-react";
import { 
  Heart, 
  Plane as PlaneIcon, 
  MapPin as MapPinIcon, 
  Building, 
  Cross, 
  Stethoscope,
  ArrowRight,
  Phone,
  FileCheck,
  CheckCircle,
  Users,
  Contact
} from "lucide-react";
import { FaRegCircle } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { CgTab } from 'react-icons/cg';
import ContactUs from '../components/ContactUs';
import { Helmet } from "react-helmet";




const TransferByLocation = () => {
const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "1. How much does dead body transport by air cost in India?",
    answer: " Costs depend on the airline, distance, coffin weight, and documentation. We provide a transparent cost breakdown within 15–20 minutes."
  },
  {
    question: "2. Can you transport a dead body by train in India?",
    answer: " Yes. We arrange dead body transport by train with full coordination at railway stations."
  },
  {
    question: "3. What is required for international repatriation of human remains?",
    answer: " Essential documents include a death certificate, embalming certificate, NOC, consulate clearance, and passport copy of the deceased."
  },
  {
    question: " 4. Do you provide funeral and cremation services?",
    answer: " Yes. We offer funeral homes, cremation arrangements, and burial planning guides to help families during this difficult time."
  },
  {
    question: "5. Which cities do you serve in India?",
    answer: " We operate nationwide including Mumbai, Bangalore, Faridabad, Delhi, Kolkata, Chennai, and all major Indian cities."
  }
 
];

    const services = [
    {
      icon: Heart,
      title: "Human Remains Airplane & Cargo Handling",
      description: "Secure and compliant airline transfers.",
      color: "red"
    },
    {
      icon: PlaneIcon,
      title: "Repatriation of Mortal Remains Insurance",
      description: "Assistance with insurance claims for overseas body transfer.",
      color: "blue"
    },
    {
      icon: MapPinIcon,
      title: "Burial & Cremation Arrangements Abroad",
      description: "Support for funeral services outside India.",
      color: "green"
    },
    {
      icon: Building,
      title: "Complete Documentation",
      description: "Death certificates, embalming, NOC, consulate clearances handled smoothly.",
      color: "purple"
    },
    // {
    //   icon: Cross,
    //   title: "Mortal Remains Services",
    //   description: "Dignified and respectful repatriation services with full documentation and cultural considerations.",
    //   color: "orange"
    // },
    // {
    //   icon: Stethoscope,
    //   title: "Hospital Assistance",
    //   description: "24/7 hospital coordination, bed booking, and medical facility liaison services worldwide.",
    //   color: "teal"
    // }
  ];


  const steps = [
  { step: "1", title: "24/7 Support", desc: "Our helpline is always open, providing guidance and updates anytime, day or night." },
  { step: "2", title: "Affordable Pricing", desc: "Clear, transparent cost breakdowns for dead body transport by air cost, funerals, and cremations." },
  { step: "3", title: "End-to-End Handling ", desc: "From human remains air cargo to burial planning guides, we handle every detail." },
  { step: "4", title: "Religious & Cultural Sensitivity", desc: "Expertise in repatriation religious wise—Hindu, Muslim, Christian, Sikh, and other customs." },
  { step: "5", title: "Global Network", desc: "Strong tie-ups with airlines, airports, and authorities for seamless international transfers." },
];
  return (
  <>
     <Helmet>
      <title>Deceased Body Transport Services Across India & International</title>

      <meta
        name="description"
        content="Pan-India & international deceased body transport services. Safe human remains transportation across cities, states & countries."
      />

      <meta
        name="keywords"
        content="dead body transportation services,
        human remains transfer,
        deceased transportation services, 
        human remains transportation, 
        transportation of dead bodies,
        "
      />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/transferbylocation"
        />
    </Helmet>
       {/* ===================start banner section==================  */}
     
      <section className="air-repatriation">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Text */}
      <div className="col-md-6 text-section">
        <h1>Dead Body Transfer Services Across India & International</h1>
        <p>Compassionate and reliable dead body transport by air in India and international repatriation services. Affordable, 24/7 support for human remains air transport, funeral planning, cremation, and repatriation worldwide.</p>
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

  {/* ===================end banner section==================  */}
  {/* ==========================About section============================= */}
     <section className="about-section py-5" id="about">
      <div className="container text-center">
        

        {/* Our Mission */}
        <div className="mission-box mt-5 p-4">
          <h3 className="mission-title">Dignified Dead Body Transport by Air</h3>
          <p className="mission-text mt-3">
            When tragedy strikes, arranging the safe and respectful transport of a loved one can feel overwhelming. At Humancare World Wide, we provide dead body transport by air in India and abroad, ensuring dignity, transparency, and compassionate support throughout the process. Whether you need human remains air transport, dead body transport by flight, funeral arrangements, or international repatriation services, our 24/7 team is here to guide families every step of the way.
          </p>
          <div className="mission-line"></div>
        </div>

        {/* Core Values Section from JSON */}

      </div>
    </section>


  {/* ========================= start why choose us========================  */}
 <section className="why-choose py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">
          Our Core Dead Body Transport Services
          <span className="underline"></span>
        </h2>
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="feature-box">
              <div className="icon blue"><FaClock /></div>
              <div>
                <h5>Dead Body Transport by Air in India</h5>
                <p>
                 Fast and reliable arrangements for human remains across Indian cities via airlines and air cargo.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon pink"><FaTooth /></div>
              <div>
                <h5>International Repatriation Services</h5>
                <p>
                   Safe transport of mortal remains across countries with complete documentation support.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon orange"><FaShieldAlt /></div>
              <div>
                <h5>Dead Body Transport by Road & Train</h5>
                <p>
                 Affordable ground transfers with ambulance and train services across India.

                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon green"><FaSmile /></div>
              <div>
                <h5>Funeral & Cremation Services</h5>
                <p>
              Burial, cremation, and funeral planning guides tailored to cultural and religious needs.
                </p>
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
    {/* ========================= end why choose us========================  */}

{/* ================start process Section================= */}

    {/* <section className="process-section">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            Step-by-step guidance throughout the entire journey
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
    </section> */}


    <section className="process-section">
  <div className="container py-5">
    <div className="text-center mb-5">
      <h2 className="process-section-title">Why Choose Us – Trusted by Families Humancare</h2>
      <p className="section-subtitle">
      Compassionate Care, Transparent Pricing, 24/7 Assistance
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
            <h2 className="health-title">Dead Body Transport in India</h2>
            <p className="health-desc">
              Families within India can rely on us for dead body transport by air, train, or road. Whether it’s Mumbai, Bangalore, Delhi, Hydrabad, Chennai, Kochi, Bhopal, Patna, Faridabad or any other city, we ensure timely, respectful, and affordable transportation with ambulance and train dead body services.
            </p>
            {/* <ul className="health-list">
              <li>
                <FaCheckCircle className="icon" /> Certified Medical Professionals
              </li>
              <li>
                <FaCheckCircle className="icon" /> State-of-the-Art Equipment
              </li>
              <li>
                <FaCheckCircle className="icon" /> 24/7 Emergency Response
              </li>
            </ul> */}
          </div>

          {/* Right Side */}
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-card">
                  <h3>10,000+</h3>
                  <p>Lives Saved</p>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-card">
                  <h3>500+</h3>
                  <p>Medical Professionals</p>
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
      <h2 className="mb-3">International Repatriation Services</h2>
      <p className="mx-auto" style={{ maxWidth: "700px" }}>
       Safe & Dignified Repatriation of Human Remains Across Borders
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
      <h1 className="text-center mb-5">Service Coverage – Local to Global</h1>

      <div className="row g-4">
        {/* Domestic */}
        <div className="col-md-6">
          <div className="card custom-card h-100">
            <h2>Dead Body Transport in India</h2>
            {/* <p className="sub">Respectful, end-to-end coordination within India</p> */}
            <ul className="list-unstyled list">
              <li className="item d-flex align-items-start">
                <div className="icon-box blue">⏰</div>
                <div className="item-content">
                  <strong>Nationwide Reach</strong>
                  <span> Ambulance, train, and air transfers in every Indian city.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box pink">⚰️</div>
                <div className="item-content">
                  <strong>Affordable Solutions</strong>
                  <span>Transparent dead body transport cost breakdowns.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box orange">📑</div>
                <div className="item-content">
                  <strong>Funeral Planning</strong>
                  <span>End-to-end cremation, burial, and funeral transport services.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box green">🛫</div>
                <div className="item-content">
                  <strong>Local Support</strong>
                  <span>Quick arrangements in Mumbai, Bangalore, Faridabad, Delhi, and beyond.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* International */}
        <div className="col-md-6">
          <div className="card custom-card h-100">
            <h2>International Repatriation Services</h2>
            {/* <p className="sub">Specialized handling across borders per embassy & airline rules</p> */}
            <ul className="list-unstyled list">
              <li className="item d-flex align-items-start">
                <div className="icon-box blue">🌍</div>
                <div className="item-content">
                  <strong>Worldwide Repatriation</strong>
                  <span>Human remains transfers from and to India globally.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box pink">📜</div>
                <div className="item-content">
                  <strong>Air India & Other Airlines</strong>
                  <span>Coordination with major airlines for cargo handling.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box orange">🛃</div>
                <div className="item-content">
                  <strong>Legal & Documentation Help</strong>
                  <span>Streamlined process with embassies, consulates, and airports.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box green">🤝</div>
                <div className="item-content">
                  <strong>Affordable & Transparent</strong>
                  <span>Cost-effective solutions for families in distress.</span>
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
          <h2>FAQs – Dead Body Transport Services
</h2>
          {/* <p>
            We understand you may have many questions during this difficult time. 
            Here are answers to the most common concerns families have about our repatriation services.
          </p> */}
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
   {/* ==========================start Faqs Section========================== */}

{/* =====================start Cta Section====================   */}

<section className="cta-section">
      <div className="cta-container">
        <h2>Call to Action – We’re Here for You 24/7
</h2>
        <p>
          When every moment matters, trust Humancare World Wide for compassionate and reliable dead body transport services in India and internationally.
        </p>
        <a href="/contact" className="cta-button">Contact Us Today</a>
      </div>
    </section>
{/* =====================end Cta Section====================   */}

{/* =====================start Contact Us Section======================   */}
<ContactUs />
{/* =====================end Contact Us Section======================   */}



 



  


      
    </>
  )
}

export default TransferByLocation