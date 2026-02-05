import React, { useState } from 'react';
import "./air.css";
import doctorImg from "../assets/road-1.jpg";
import dentistImage from "../assets/road-2.jpg";
import { FaAmbulance, FaRupeeSign, FaShieldAlt, FaUserMd } from "react-icons/fa";
import { 
  Heart, 
  Plane as PlaneIcon, 
  MapPin as MapPinIcon, 
  Building, 
  FileCheck,
  CheckCircle,
  Users,
  Phone,
  Globe,
  FileText,
  Shield,
  Truck,
  Hospital,
  Clock,
  Cross,
} from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import ContactUs from '../components/ContactUs';
import { Helmet } from "react-helmet";


const Road = () => {
const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
  {
    question: "How much does air transfer of mortal remains cost?",
    answer: "Costs vary based on origin/destination countries, documentation requirements, and specific services needed. We provide transparent, all-inclusive quotes with no hidden fees. Most international repatriations range from $3,000-$8,000 USD. We accept insurance claims and can discuss payment arrangements during your consultation."
  },
  {
    question: "What documents are required for international repatriation?",
    answer: "Required documents typically include: death certificate, embalming certificate, consular mortuary certificate, export/import permits, and transit documents. Our team handles all documentation preparation and submission to ensure full compliance with international regulations. We coordinate directly with embassies and authorities."
  },
  {
    question: "How long does the air transfer process take?",
    answer: "Most international repatriations are completed within 5-10 business days, depending on documentation processing times and flight availability. Emergency services can be expedited to 3-5 days when circumstances require. We provide regular updates throughout the process and work to minimize delays."
  },
  {
    question: "Do you provide repatriation from all countries?",
    answer: "Yes, we have a global network covering over 180 countries. Some locations may have specific regulatory requirements or longer processing times, but we maintain partnerships and expertise to handle repatriation from virtually anywhere in the world, including remote locations."
  },
  {
    question: "Is emergency or urgent repatriation available?",
    answer: "Absolutely. Our 24/7 emergency service team can coordinate urgent repatriation when time-sensitive circumstances require expedited handling. Emergency services include priority documentation processing, charter flight arrangements when needed, and dedicated case management to minimize delays."
  },
  {
    question: "What happens if there are complications or delays?",
    answer: "We proactively monitor all cases and immediately address any potential issues. Our experienced team has contingency plans for various scenarios. In rare cases of delays, we maintain constant communication with families, cover any additional costs when delays are beyond your control, and provide alternative solutions."
  },
  {
    question: "Can you assist with funeral home coordination?",
    answer: "Yes, we work closely with funeral directors worldwide and can coordinate directly with your chosen funeral home. We can also provide recommendations for reputable funeral homes in your area and ensure seamless transfer of remains and documentation upon arrival."
  },
  {
    question: "Are your services covered by travel insurance?",
    answer: "Many travel insurance policies include repatriation coverage. We can work directly with your insurance provider, submit necessary documentation, and often receive direct payment. We also accept various payment methods and can discuss payment arrangements for families without insurance coverage."
  }
];

    const services = [
    {
      icon: Heart,
      title: "One-Stop Medical Solutions",
      description: "Comprehensive medical care coordination from diagnosis to treatment, ensuring seamless healthcare delivery.",
      color: "red"
    },
    {
      icon: PlaneIcon,
      title: "Air Medical Repatriation",
      description: "State-of-the-art air ambulance services with fully equipped medical aircraft for critical patient transport.",
      color: "blue"
    },
    {
      icon: MapPinIcon,
      title: "Medical Value Travel",
      description: "Cost-effective medical tourism solutions with premium healthcare facilities and comprehensive support.",
      color: "green"
    },
    {
      icon: Building,
      title: "Corporate Medical Solutions",
      description: "Tailored healthcare programs for businesses, including employee medical coverage and emergency protocols.",
      color: "purple"
    },
  ];


  const steps = [
  { step: "1", title: "Initial Contact", desc: "Reach out to us for immediate support and guidance." },
  { step: "2", title: "Documentation", desc: "We assist with all necessary paperwork and permits." },
  { step: "3", title: "Coordination", desc: "Arranging transport and clearances with authorities." },
  { step: "4", title: "Transfer", desc: "Safe and respectful transfer to the destination." },
  { step: "5", title: "Final Handover", desc: "Delivery with dignity and complete support to families." },
];

  return (
    <>

     <Helmet>
      <title>Dead Body Transport by Road | Ambulance & Vehicle Services</title>

      <meta
        name="description"
        content="24/7 dead body ambulance service for road transportation. Transparent deceased body transportation cost across India."
      />

      <meta
        name="keywords"
        content="dead body ambulance service,
        dead body transport by road,
human remains transportation, 
deceased body transportation, 
funeral transport service
transporting deceased from state to state,
mortuary transport services
        "
      />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/transferbymode/road"
        />
    </Helmet>
    
       {/* ===================start banner section==================  */}
      <section className="air-repatriation">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Text */}
      <div className="col-md-6 text-section">
        <h1>Dead Body Transport by Road – Ambulance & Vehicle Services Across India</h1>
        <p>Affordable and reliable dead body transport by road with ambulance and mortuary van services. 24/7 deceased body vehicle transport across India with full documentation support.</p>
        <a href="tel: +919833444040"></a>
        <button className="btn btn-danger">More Info</button>
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
       Why Choose Road Transport
          <span className="underline"></span>
        </h2>
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="feature-box">
              <div className="icon blue"><FaRupeeSign /></div>
              <div>
                <h5>Affordable</h5>
                <p>
                  Low-cost and reliable services tailored to your budget with transparent pricing.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon pink"><FaAmbulance /></div>
              <div>
                <h5>Quick & Efficient</h5>
                <p>
                  Fast ambulance and mortuary van deployment across all states in India.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon orange"><FaShieldAlt /></div>
              <div>
                <h5>Safe & Secure</h5>
                <p>
                  Safety and dignity ensured during every transfer with certified handling.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <div className="icon green"><FaUserMd /></div>
              <div>
                <h5>Professional Care</h5>
                <p>
                  Experienced medical and logistics staff providing full support to families.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="col-lg-6 text-center">
            <div className="image-box">
              <img src={dentistImage} alt="Ambulance" className="img-fluid" />
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
      <h2 className="section-title-road">Our Process</h2>
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
</section>

    {/* ================end process Section================= */}

{/* =======================start health section==================  */}

    <section className="health-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Side */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="health-title">Your Health, Our Priority</h2>
            <p className="health-desc">
              With over a decade of experience in emergency medical services,
              HumanCare has been a trusted name in healthcare assistance. We
              combine advanced medical technology with compassionate care to
              ensure the best possible outcomes for our patients.
            </p>
            <ul className="health-list">
              <li>
                <FaCheckCircle className="icon" /> Certified Medical Professionals
              </li>
              <li>
                <FaCheckCircle className="icon" /> State-of-the-Art Equipment
              </li>
              <li>
                <FaCheckCircle className="icon" /> 24/7 Emergency Response
              </li>
            </ul>
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
      <h2 className="mb-3">Our Expertise in Air Transfers</h2>
      <p className="mx-auto" style={{ maxWidth: "700px" }}>
        Comprehensive medical solutions designed to meet your every healthcare need, 
        delivered with excellence and compassion across the globe.
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
      <h1 className="text-center mb-5">Domestic & International Repatriation</h1>

      <div className="row g-4">
        {/* Domestic */}
        <div className="col-md-6">
          <div className="card custom-card h-100">
            <h2>Domestic Road Transfers</h2>
            <p className="sub">Respectful, end-to-end coordination within India</p>
            <ul className="list-unstyled list">
              <li className="item d-flex align-items-start">
                <div className="icon-box blue"><Clock size={20}/></div>
                <div className="item-content">
                  <strong>Coordination with local authorities</strong>
                  <span>Hospital, police/NOC, and municipal departments across states.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box pink"><Truck size={20}/></div>
                <div className="item-content">
                  <strong>Preparation & sealing</strong>
                  <span>Embalming (where required), hermetic sealing, coffin boxing for safe carriage.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box orange"><FileText size={20}/></div>
                <div className="item-content">
                  <strong>Documentation support</strong>
                  <span>Transit permits, fit-to-transfer, and mortuary certificates per SOPs.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box green"><Shield size={20}/></div>
                <div className="item-content">
                  <strong>Secure handling</strong>
                  <span>Safety, dignity, and timely handover on arrival.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* International */}
        <div className="col-md-6">
          <div className="card custom-card h-100">
            <h2>International Air Transfers (Repatriation)</h2>
            <p className="sub">Specialized handling across borders per embassy & airline rules</p>
            <ul className="list-unstyled list">
              <li className="item d-flex align-items-start">
                <div className="icon-box blue"><Globe size={20}/></div>
                <div className="item-content">
                  <strong>Embassy & consulate liaison</strong>
                  <span>Coordinating with foreign embassies and local authorities.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box pink"><FileCheck size={20}/></div>
                <div className="item-content">
                  <strong>WHO & IATA compliant prep</strong>
                  <span>Arranging embalming, sealing, and documentation per guidelines.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box orange"><Users size={20}/></div>
                <div className="item-content">
                  <strong>Customs & airport clearances</strong>
                  <span>Managing customs processes at both departure and arrival airports.</span>
                </div>
              </li>
              <li className="item d-flex align-items-start">
                <div className="icon-box green"><Hospital size={20}/></div>
                <div className="item-content">
                  <strong>Global funeral home partnership</strong>
                  <span>Working with funeral homes worldwide for smooth final delivery.</span>
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
          <p>
            We understand you may have many questions during this difficult time. 
            Here are answers to the most common concerns families have about our repatriation services.
          </p>
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
        <h2>Why Families Trust HumanCare</h2>
        <p>
          At a time of grief, dealing with paperwork and logistical hurdles can feel overwhelming.
          Our role is to ease this burden. From documentation to dignified handling, we ensure
          that every step is taken with compassion, efficiency, and respect.
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

export default Road;
