import React from 'react'
import {
  Phone,
  MessageCircle,
  Clock,
  Plane,
  Globe,
  FileText,
  CreditCard,
  AlertCircle,
  Ambulance,
  Truck,
  Check,
  Settings,
  Star

} from "lucide-react";
import "./demo.css";
import serv3 from "../assets/serv3.webp";
import ContactUs from '../components/ContactUs';


function DAir() {

  const data = [
    {
      icon: <FileText />,
      title: "Complex Documentation",
      desc: "Death certificate, embalming certificate, NOC, passport clearance, and airline paperwork can become stressful during emergencies.",
    },
    {
      icon: <Clock />,
      title: "Flight & Cargo Delays",
      desc: "Missing airline cut-off timings or cargo approvals can delay the transfer of mortal remains.",
    },
    {
      icon: <CreditCard />,
      title: "Unclear Pricing",
      desc: "Many families are unaware of actual dead body cargo charges and international repatriation costs.",
    },
    {
      icon: <AlertCircle />,
      title: "Coordination Stress",
      desc: "Managing hospitals, mortuaries, embassies, airlines, and airport cargo departments alone can feel overwhelming.",
    },
  ];


  const features = [
    {
      title: "Repatriation of Human Remains",
      desc: "Everything Managed with Care & Professionalism.",
    },
    {
      title: "Complete Airline Documentation Support",
      desc: "We assist with all paperwork required for domestic and international human remains transport.",
    },
    {
      title: "Experienced Repatriation Team",
      desc: "Our specialists handle airline coordination, embassy approvals, and airport cargo procedures daily.",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear guidance on dead body cargo charges without hidden costs.",
    },
    {
      title: "24/7 Emergency Availability",
      desc: "Available anytime for urgent dead body transport by air assistance.",
    },
    {
      title: "Safe & Respectful Handling",
      desc: "Every transfer is managed with dignity, professionalism, and sensitivity.",
    },
    {
      title: "International Transfer Expertise",
      desc: "Special assistance for human remains transfer from Dubai, Canada, USA, UK, and other countrie",
    },
    {
      title: "Single Point Coordination",
      desc: "A dedicated coordinator manages the process from pickup to final destination delivery.",
    },
  ];

  // steps
  const steps = [
    {
      icon: <Phone size={22} />,
      title: "Call or WhatsApp",
      desc: "Share the pickup location, destination country/city, and transfer requirements.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: "Documentation & Quote",
      desc: "Receive a transparent cost estimate & complete process briefing within minutes.",
      step: "2",
    },
    {
      icon: <Settings size={22} />,
      title: "Cargo & Flight Arrangement",
      desc: "We arrange embalming, coffin preparation, airline booking, and airport clearance.",
      step: "3",
    },
    {
      icon: <Plane size={22} />,
      title: "Safe Human Remains Transfer",
      desc: "The deceased is transported safely and respectfully to the destination.",
      step: "4",
    },
  ];

  // stat
  const stats = [
    { number: "1500+", label: "Human remains transfers completed" },
    { number: "21+ Years", label: "Experience in dead body cargo coordination" },
    { number: "24/7", label: "Emergency support available" },
    { number: "100%", label: "Dignified & respectful handling" },
  ];

  // testimonial
  const testimonials = [
    {
      text: "During the most difficult time of our lives, the team handled my father’s transport from Delhi to Bangalore seamlessly. We didn't have to worry about a single document. Deeply grateful.",
      name: "Rahul S., Bangalore",
    },
    {
      text: "The repatriation from Dubai was something we were dreading, but they managed customs and embassy paperwork so efficiently. Very professional and compassionate service.",
      name: "Priya M., Mumbai",
    },
  ];
  // citys and contries
  const cities = [
    { name: "Mumbai", icon: "📍" },
    { name: "Delhi", icon: "📍" },
    { name: "Bangalore", icon: "📍" },
    { name: "Hyderabad", icon: "📍" },
    { name: "Chennai", icon: "📍" },
    { name: "Kolkata", icon: "📍" },
    { name: "Patna", icon: "📍" },
    { name: "Lucknow", icon: "📍" },
    { name: "Kochi", icon: "📍" },
    { name: "Ahmedabad", icon: "📍" },
    { name: "Pune", icon: "📍" },
    { name: "Jaipur", icon: "📍" },
    { name: " Varanasi", icon: "📍" },
    { name: " Guwahati", icon: "📍" },
    { name: " Ranchi", icon: "📍" },
    { name: "Bhubaneswar", icon: "📍" },
    { name: " Amritsar", icon: "📍" },
    { name: " Srinagar ", icon: "📍" },
    { name: "Surat ", icon: "📍" },
    { name: "Thiruvananthapuram", icon: "📍" },
    
    
  ];

  const international = [
    { route: "UAE", icon: "📍" },
    { route: "Saudi Arabia ", icon: "📍" },
    { route: "Qatar ", icon: "📍" },
    { route: "Oman", icon: "📍" },
    { route: "Kuwait", icon: "📍" },
    { route: "Bahrain", icon: "📍" },
    { route: "United States", icon: "📍" },
    { route: " United Kingdom", icon: "📍" },
    { route: "Canada", icon: "📍" },
    { route: "Australia", icon: "📍" },
    { route: "Singapore", icon: "📍" },
    { route: "Malaysia", icon: "📍" },
    { route: "Germany", icon: "📍" },
    { route: "France", icon: "📍" },
    { route: "Italy ", icon: "📍" },
    { route: "South Africa", icon: "📍" },
    { route: "Thailand", icon: "📍" },
    { route: "Nepal", icon: "📍" },
    { route: "Bangladesh ", icon: "📍" },
    { route: "Sri Lanka", icon: "📍" },

  ];

  return (
    <>
      {/* section 1: Banner */}
      <section className="demo-hero">
        {/* Top Tags */}
        <div className="demo-hero-tags">
          <span><Clock size={14} /> 24/7 Available</span>
          <span>📍 Pan India & International </span>
        </div>

        {/* Heading */}
        <h1 className="demo-hero-title">
          Dead Body Transport by Air – <br /> <span> International & Domestic Human Remains Cargo </span>
        </h1>
        <p className="demo-hero-desc">
          Fast & Dignified Dead Body Transfer by Flight Across India & World Wide
        </p>

        <h2 className="demo-hero-subtitle">Dead Body Cargo | Human Remains Air Cargo | International Mortal Remains Transfer</h2>

        {/* Description */}
        <p className="demo-hero-desc">
          We provide complete assistance for dead body transport by air, including airline cargo booking, embalming, documentation, airport clearance, and international repatriation support. Our experienced team ensures safe, respectful, and timely transportation of human remains within India and across the world.
        </p>

        {/* CTA Buttons */}
        <div className="demo-hero-buttons">
          <button className="demo-btn call" onClick={() => window.location.href = 'tel:+919833444040'}>
            <Phone size={18} /> Call Immediately
          </button>

          <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
            <MessageCircle size={18} /> WhatsApp Now
          </button>
        </div>

        {/* Feature Cards */}
        <div className="demo-hero-features">
          <div className="demo-feature-card">
            <Clock />
            <div>
              <h4>Quick response </h4>
              <p>Immediate coordination within 15–30 minutes </p>

            </div>
          </div>

          <div className="demo-feature-card">
            <Plane />
            <div>
              <h4>Dead Body Transport by Air </h4>
              <p>Same-day domestic & international cargo booking</p>
            </div>
          </div>

          <div className="demo-feature-card">
            <Globe />
            <div>
              <h4>Available </h4>
              <p> India, UAE, Canada, USA, UK & more </p>
            </div>
          </div>
        </div>

        {/*  INTRODUCTION */}
        <div className="demo-section-two-container">

          {/* LEFT Content */}
          <div className="section-two-content">

            <h2>
              Trusted Human Remains Air Cargo Services – Domestic & International

            </h2>

            <p className="desc">
              Transporting a loved one through air cargo involves urgent coordination, legal documentation, and sensitive handling. During such emotional situations, families often struggle with airline formalities, cargo procedures, embassy approvals, and airport clearances. <br />

              Our team specializes in dead body transport by flight and international human remains transport with complete end-to-end assistance. Whether you require dead body cargo within India or repatriation from Dubai, Canada, the USA, or any other country, we manage the entire process with professionalism and compassion. <br />

              From documentation and embalming to airline booking and final delivery, every step is handled carefully to ensure a smooth and dignified transfer. <br />
            </p>

            {/* <ul>
              <li> Quick response within 10–30 minutes </li>
              <li> Available for dead body transport by air in India & Mumbai </li>
              <li> Trusted for human remains transportation & repatriation of human remains</li>
              <li> 24/7 response — we answer every call </li>
            </ul> */}
          </div>

          {/* Rigth Image */}
          <div className="demo-section-two-image">
            <img src={serv3} alt="transport" />
          </div>
        </div>
      </section>

      {/* section 2  urgent*/}
      <div className="urgent-strip">

        <h3>Need Urgent Human Remains Air Cargo Assistance? </h3>
        <p>
          <strong>
            Dead body transport by air available 24/7 for domestic and international transfers.
          </strong>
        </p>

        <div className="demo-hero-buttons">
          <button className="demo-btn call" onClick={() => window.location.href = 'tel:+919833444040'}>
            <Phone size={18} /> Call Immediately
          </button>

          <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
            <MessageCircle size={18} /> WhatsApp Now
          </button>
        </div>
      </div>

      {/* section 3: Emergency*/}
      <section className="demo-emergency">
        <div className="demo-emergency-container">
          <span className="emergency-tag"> 24/7 Emergency Service  </span>
          <h2>
            During a difficult time, the last thing families need is confusion and delays.
          </h2>
          <p className="demo-emergency-subtitle">
            International and domestic dead body transfer requires multiple approvals, strict documentation, and quick airline coordination. Even small mistakes can delay the transportation process.
          </p>

          <div className="demo-emergency-card-grid">
            {data.map((item, index) => (
              <div className="card" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 4 SERVICES*/}
      <section className="demo-services-section">
        <div className="demo-services-container">

          <span className="service-tag">What We Offer</span>

          <h2 className="demo-service-main-heading">
            Complete Dead Body Transport by Flight Services
          </h2>
          {/* <p className="demo-description">
            Every mode of transport, every destination. We handle it with respect
            and efficiency.
          </p> */}

          <div className="demo-services-grid">

            <div className="demo-services-grid">

              {/* Card 1 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Plane size={32} />
                </div>
                <h3>AIR TRANSPORT</h3>
                <ul>
                  <li>• Priority dead body transport by air across India</li>
                  <li>• Human remains air cargo booking assistance</li>
                  <li>• Fast domestic & international flight coordination</li>
                  <li>• Support for airline cargo documentation</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3>INTERNATIONAL HUMAN REMAINS TRANSFER</h3>
                <ul>
                  <li>• Dead body transfer from Dubai to India</li>
                  <li>• Dead body transfer from Canada to India</li>
                  <li>• Repatriation from USA, UK, UAE & other countries</li>
                  <li>• Embassy, customs & cargo clearance assistance</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Truck size={32} />
                </div>
                <h3>DOMESTIC DEAD BODY CARGO</h3>
                <ul>
                  <li>• Same-day dead body transport by flight</li>
                  <li>• Airport-to-airport coordination</li>
                  <li>• Ambulance pickup and delivery support</li>
                  <li>• Interstate transportation assistance</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Globe size={32} />
                </div>
                <h3>DOCUMENTATION & EMBALMING SUPPORT</h3>
                <ul>
                  <li>• Embalming certificate arrangements </li>
                  <li>• Coffin box and sealing support</li>
                  <li>• Death certificate guidance</li>
                  <li>• Airport cargo documentation assistance</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* section 5 : why  */}
      <section className="demo-why-section">
        <div className="demo-why-container">
          <span className="why-tag">Why choose Us</span>
          <h2 className="demo-main-heading">
            Everything Managed with Care & Professionalism
          </h2>

          <div className="demo-why-grid">
            {features.map((item, index) => (
              <div className="demo-why-card" key={index}>
                <div className="check-icon">
                  <Check size={18} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 6: Process */}
      <section className="demo-process-section">
        <div className="demo-process-container">
          <span className="process-tag">How It Works</span>

          <h2 className="demo-process-main-heading">
            Simple & Hassle-Free 4-Step Process
          </h2>

          {/* <p className="demo-process-description">
            From your first call to final delivery, every step is managed with precision and care.
          </p> */}

          <div className="demo-process-grid">
            {steps.map((item, index) => (
              <div className="demo-process-card" key={index}>
                <div className="demo-circle">
                  {item.icon}
                  <span className="step">{item.step}</span>
                </div>

                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* section 7: Stats & testimonals */}
      <section className="demo-stats-section">
        <div className="demo-container">
          <span className="demo-stats-tag">Our Track Record</span>

          <h2 className="demo-stats-heading">
            Trusted for Domestic & International <br />Human Remains Transport
          </h2>

          {/* Stats */}
          <div className="demo-stats-grid">
            {stats.map((item, index) => (
              <div className="demo-stat-card" key={index}>
                <h2>{item.number}</h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="demo-testimonial-grid">
            {testimonials.map((item, index) => (
              <div className="demo-testimonial-card" key={index}>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>

                <p className="testimonial-text">"{item.text}"</p>
                <h4>— {item.name}</h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* section 8: Pricing */}
      <section className="demo-pricing-section">
        <div className="demo-pricing-container">
          <span className="pricing-tag"> Pricing </span>

          <h2 className="demo-pricing-title">
            What Does Dead Body Transport by Air Cost?
          </h2>

          <p className="demo-pricing-subtitle">
            Every transfer case is different. The cost of dead body transport by flight depends on several important factors.
          </p>

          <div className="demo-pricing-card">
            <div className="pricing-badge">
              No Hidden Charges · Upfront Estimate
            </div>

            <h3 className="pricing-card-title">COST FACTORS: </h3>

            <div className="pricing-factors">
              <span className="factor-badge">🌍  Domestic or international transfer</span>
              <span className="factor-badge">✈ Airline cargo charges </span>
              <span className="factor-badge">📍 Distance & destination country </span>
              <span className="factor-badge">📄 Documentation & embassy procedures</span>
              <span className="factor-badge">⚕ Embalming & coffin requirements</span>
              <span className="factor-badge">🚑 Airport handling & ambulance support</span>
            </div>

            <div className="pricing-warning">
              <AlertCircle size={20} />
              <div>
                <h4>Avoid Overpriced Emergency Charges</h4>
                <p>Families often receive unclear quotations during emergencies. We provide transparent guidance and detailed pricing support from the beginning.</p>
              </div>
            </div>

            <p className="pricing-cta">
              Call us right now — our expert will give you a detailed cost breakdown, free and with no obligation, in under 10 minutes.
            </p>

            <button className="pricing-btn" onClick={() => window.location.href = 'tel:+919833444040'}>
              <Phone size={18} />Get Cost Details in Minutes
            </button>
          </div>
        </div>
      </section>

      {/* section 9: Coverage */}
      <section className="demo-coverage-section">
        <div className="demo-coverage-container">
          <span className="coverage-tag"> We Serve</span>

          <h2 className="demo-coverage-title">
            Pan India & International Human Remains Air Cargo Coverage
          </h2>

          <p className="demo-coverage-subtitle">
            We provide dead body transport by air services across major Indian cities and international destinations.
          </p>

          <div className="demo-cities-grid">
            {cities.map((city, index) => (
              <button key={index} className="city-badge">
                {city.icon} {city.name}
              </button>
            ))}
          </div>

          <div className="demo-international-routes">
            {international.map((intl, index) => (
              <button key={index} className="international-badge">
                {intl.icon} {intl.route}
              </button>
            ))}
          </div>

          <p className="demo-coverage-note">
            Need assistance from another city or country? Our team handles domestic and international human remains transfer worldwide.
          </p>
        </div>
      </section>
      
      <ContactUs />

    </>
  )
}

export default DAir