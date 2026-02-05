import React, { useState } from 'react';
import "./air.css";
import doctorImg from "../assets/Train-1.jpg";
import dentistImage from "../assets/Train-2.jpg";
import {
  FaTrain,
  FaRupeeSign,
  FaFileContract,
  FaAmbulance,
  FaClock,
  FaRoute,
  FaHome,
  FaMapMarkerAlt,
  FaBuilding,
  FaFileAlt,
  FaHospital,
  FaHandshake,
  FaUserMd,
  FaCheckCircle
} from "react-icons/fa";
import ContactUs from '../components/ContactUs';
import { Helmet } from "react-helmet";

const Air = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can a dead body be transported in train?",
      answer: " Through the railway cargo section with embalmed and sealed coffin after documentation."
    },
    {
      question: "How much does dead body transport by train cost?",
      answer: " It depends on distance and coffin weight, usually ₹5,000–₹20,000."
    },
    {
      question: "Is embalming mandatory for train transport?",
      answer: " Yes, embalming and coffin sealing are required for railway approval."
    },
    {
      question: "Can you arrange ambulance for pickup and drop to station?",
      answer: " Yes, we provide door-to-door ambulance support along with train transfers."
    }
  ];

  const services = [
    {
      icon: FaFileContract,
      title: "Railway Approvals & Permits",
      description: "Assistance with required NOCs, railway clearance, and booking procedures for safe transport.",
      color: "red"
    },
    {
      icon: FaHospital,
      title: "Embalming & Coffin Certification",
      description: "Certified embalming and coffin sealing to meet railway and legal requirements.",
      color: "blue"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Station-to-Station Coordination",
      description: "Dedicated support team to manage body transfer at departure and arrival stations.",
      color: "green"
    },
    {
      icon: FaAmbulance,
      title: "Door Pickup and Drop with Ambulance",
      description: "Ambulance service with freezer box for home/hospital pickup and delivery to the station or residence.",
      color: "purple"
    }
  ];

  const steps = [
    { step: "1", title: "Booking & Documentation", desc: "Railway permissions and cargo booking." },
    { step: "2", title: "Coffin & Embalming", desc: "Prepared as per Indian Railways rules." },
    { step: "3", title: "Station Handling", desc: " Pickup and delivery at railway stations." },
    { step: "4", title: "Combined Transport", desc: "Ambulance + train for door-to-door service." },
    { step: "5", title: "Affordable Packages", desc: "Transparent costing for families." },
  ];

  return (
    <>
     <Helmet>
      <title>Dead Body Transport by Train in India | Affordable Rail Cargo Services</title>

      <meta
        name="description"
        content="Affordable dead body transport by train across India. Safe rail cargo services for transferring deceased between states."
      />

      <meta
        name="keywords"
        content="dead body transport by train,
        human remains transportation, 
        deceased body transportation, 
        funeral transport service
        transporting deceased from state to state,
        transferring dead body to another state,
        shipping deceased body to another state
        "
      />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/transferbymode/train"
        />
    </Helmet>

      {/* ===================start banner section==================  */}
      <section className="air-repatriation">
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side Text */}
            <div className="col-md-6 text-section">
              <h1>Human Remains Transfer by Train in India – Affordable Rail Transport Services</h1>
              <p>Secure and low-cost dead body transport by train in India. Complete railway documentation, coffin preparation, and human remains transfer via train cargo services.</p>
    <a href="tel: +919833444040">
        <button className="btn btn-danger">More Info</button></a>            </div>
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
            Why Choose Train Transport
            <span className="underline"></span>
          </h2>
          <div className="row align-items-center">
            {/* Left Side */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="feature-box">
                <div className="icon blue"><FaRupeeSign /></div>
                <div>
                  <h5>Cost-Effective</h5>
                  <p>Cheaper than air transport.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon pink"><FaTrain /></div>
                <div>
                  <h5>Long Distance Transfers</h5>
                  <p>Ideal for inter-state travel.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon orange"><FaFileContract /></div>
                <div>
                  <h5>Railway-Approved Coffin</h5>
                  <p>Secure packaging and sealing.</p>
                </div>
              </div>

              <div className="feature-box">
                <div className="icon green"><FaHandshake /></div>
                <div>
                  <h5>End-to-End Assistance</h5>
                  <p>From hospital/home to railway station and arrival city.</p>
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
      <section className="process-section">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="section-title-train">Our Train Transport Services</h2>
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
              <h2 className="health-title">Cost of Dead Body Transport by Train</h2>
              <p className="health-desc">
                The cost depends on distance, weight of coffin, and railway cargo charges. Generally, it is 50–70% cheaper than air transport.
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
                    <p>Railway Clearances</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <h3>24/7</h3>
                    <p>Support Available</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-card">
                    <h3>99.9%</h3>
                    <p>Successful Transfers</p>
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
          <div className="section-header text-center mb-5">
            <h2 className="mb-3">Complete Train Transport Support</h2>
          </div>

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
          <h1 className="text-center mb-5">Train Transfer Options</h1>

          <div className="row g-4">
            {/* Domestic */}
            <div className="col-md-6">
              <div className="card custom-card h-100">
                <h2>Dead Body in Train (Domestic Transfers)</h2>
                <ul className="list-unstyled list">
                  <li className="item d-flex align-items-start">
                    <div className="icon-box blue"><FaTrain /></div>
                    <div className="item-content">
                      <strong>Rail Cargo Booking Support</strong>
                      <span> Assistance with cargo booking procedures for transporting mortal remains by train.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box pink"><FaHospital /></div>
                    <div className="item-content">
                      <strong>Certified Embalming & Coffin</strong>
                      <span> Embalming and coffin sealing as per railway and state health regulations.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box orange"><FaFileAlt /></div>
                    <div className="item-content">
                      <strong>Station Documentation Handling</strong>
                      <span> Support with NOCs, ID proofs, and railway clearance for hassle-free transfer.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box green"><FaAmbulance /></div>
                    <div className="item-content">
                      <strong>Ambulance to and from Station</strong>
                      <span> Freezer ambulance for pickup from hospital/home and delivery at destination station.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Train + Road Combined */}
            <div className="col-md-6">
              <div className="card custom-card h-100">
                <h2>Train + Road Combined Service:</h2>
                <ul className="list-unstyled list">
                  <li className="item d-flex align-items-start">
                    <div className="icon-box blue"><FaHome /></div>
                    <div className="item-content">
                      <strong>Hospital/Home to Station Pickup</strong>
                      <span> Ambulance with freezer box to safely carry the body to the railway station.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box pink"><FaTrain /></div>
                    <div className="item-content">
                      <strong>Train Transport Arrangement</strong>
                      <span> Proper embalming, coffin certification, and train booking for secure transfer.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box orange"><FaBuilding /></div>
                    <div className="item-content">
                      <strong>Arrival City Ambulance Service</strong>
                      <span>Onward transfer by ambulance from the destination station to home or mortuary.</span>
                    </div>
                  </li>
                  <li className="item d-flex align-items-start">
                    <div className="icon-box green"><FaHandshake /></div>
                    <div className="item-content">
                      <strong>End-to-End Coordination</strong>
                      <span> Single point of contact for managing all logistics, paperwork, and transit updates.</span>
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

      {/* =====================start Contact Us Section======================   */}
      <ContactUs />
      {/* =====================end Contact Us Section======================   */}
    </>
  );
};

export default Air;
