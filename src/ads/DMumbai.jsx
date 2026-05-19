import React from "react";
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
  //   Truck,
  Check,
  Settings,
  Star,
  Map

} from "lucide-react";
import "./demo.css";
import serv3 from "../assets/serv3.webp";
import ContactUs from '../components/ContactUs';

function DMumbai() {

  const data = [
    {
      icon: <Ambulance />,
      title: "Difficulty Finding a Dead Body Ambulance Near You",
      desc: "Families often struggle to arrange immediate dead body transport ambulance services during emergencies.",
    },
    {
      icon: <Plane />,
      title: "Air Cargo & Flight Coordination Delays",
      desc: "Dead body transport by flight requires airline approvals, embalming documents, and airport cargo coordination.",
    },
    {
      icon: <FileText />,
      title: "Long-Distance Road Transportation Challenges",
      desc: "Dead body transport by road in India requires experienced drivers, proper preservation, and interstate coordination.",
    },
    {
      icon: <CreditCard />,
      title: "Confusion About Dead Body Transport Cost",
      desc: "Many families are unsure about dead body transport by air cost and interstate ambulance charges.",
    },
  ];

  // why 
  const features = [
    {
      title: "Immediate Emergency Response",
      desc: "Our team quickly arranges dead body ambulance and transportation support anywhere in Mumbai.",
    },
    {
      title: "Domestic Air Cargo Expertise",
      desc: "We specialize in dead body transport by air and flight cargo coordination within India.",
    },
    {
      title: "Experienced Interstate Transportation Team",
      desc: "Professional assistance for dead body transport by road across states in India.",
    },
    {
      title: "Transparent Pricing Support",
      desc: "Clear guidance for dead body transport by air cost and ambulance charges.",
    },
    {
      title: "24/7 Availability",
      desc: "Emergency support available day and night for urgent deceased body transport.",
    },
    {
      title: "Safe & Respectful Handling",
      desc: "Every deceased body transport case is managed with dignity and professionalism.",
    },
    {
      title: "Fast Coordination Across Mumbai",
      desc: "Quick ambulance and transportation support from hospitals, homes, and airports.",
    },
    {
      title: "Dedicated Family Assistance",
      desc: "One coordinator manages the transportation process from beginning to final destination.",
    },
  ];
  // steps
  const steps = [
    {
      icon: <Phone size={22} />,
      title: " Call or WhatsApp Our Team",
      desc: "Share pickup location, destination city, and transportation requirements.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: "Get Transport Details & Cost Estimate",
      desc: "We explain available transportation options, required documents, and estimated charges.",
      step: "2",
    },
    {
      icon: <Settings size={22} />,
      title: "Transportation Arrangement",
      desc: "Our team arranges ambulance, embalming, air cargo booking, or interstate road transfer.",
      step: "3",
    },
    {
      icon: <Plane size={22} />,
      title: "Safe & Dignified Transfer",
      desc: "The deceased is transported respectfully to the destination anywhere in India.",
      step: "4",
    },
  ];
  // stat
  const stats = [
    { number: "2200+", label: "Dead body transfer cases handled" },
    { number: "21+ Years", label: "Experience in deceased body transport services" },
    { number: "24/7", label: "Emergency ambulance & cargo support" },
    { number: "100%", label: "Safe & dignified transportation" },
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

  const cities = [
    { name: "Andheri ", icon: "📍" },
    { name: "Bandra", icon: "📍" },
    { name: "Dadar", icon: "📍" },
    { name: "Thane", icon: "📍" },
    { name: "Navi Mumbai", icon: "📍" },
    { name: "Borivali", icon: "📍" },
    { name: "Kurla", icon: "📍" },
    { name: "Powai", icon: "📍" },
    { name: "Colaba", icon: "📍" },
    { name: "Mira Road", icon: "📍" },
  ];

  const international = [
    { route: "Delhi ", icon: "📍" },
    { route: "Banglauru ", icon: "📍" },
    { route: " Hyderabad ", icon: "📍" },
    { route: "Chennai", icon: "📍" },
    { route: "Kolkata", icon: "📍" },
    { route: "Ahmedabad", icon: "📍" },
    { route: "Pune ", icon: "📍" },
    { route: "Jaipur", icon: "📍" },
    { route: "Patna", icon: "📍" },
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
          Professional Human Remains Transport in Mumbai -<br /> <span> 24/7 Air, Road & Ambulance Services </span>
        </h1>
        <p className="demo-hero-desc">
          Fast & Dignified Dead Body Transport Services Across Mumbai & India
        </p>

        <h2 className="demo-hero-subtitle"> Dead Body Transport by Air | Dead Body Transport Ambulance | Deceased Body Transport Services </h2>

        {/* Description */}
        <p className="demo-hero-desc">

          We provide professional dead body transfer services in Mumbai with complete support for dead body transport by air, road ambulance transfer, interstate transportation, and domestic flight cargo coordination. Our experienced team ensures safe, respectful, and timely deceased body transport anywhere in India.
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
              <h4> Quick Ambulance Dispatch </h4>
              <p> Dead body ambulance near you within 30–60 minutes </p>

            </div>
          </div>

          <div className="demo-feature-card">
            <Plane />
            <div>
              <h4>Air & Road Transfer</h4>
              <p>Dead body transport by flight and road across India</p>
            </div>
          </div>

          <div className="demo-feature-card">
            <Globe />
            <div>
              <h4>24/7 Emergency Support </h4>
              <p> Available day & night in Mumbai </p>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="demo-section-two-container">

          {/* LEFT Content */}
          <div className="section-two-content">

            <h2>
              Trusted Dead Body Transport Services in Mumbai
            </h2>

            <p className="desc">
              During emotional situations, arranging transportation for a loved one can become overwhelming. Families often struggle with ambulance coordination, airline cargo booking, interstate permissions, and documentation formalities. <br />

              Our team specializes in dead body transfer in Mumbai with complete assistance for: <br />
            </p>
            <ul>
              <li> • Dead body transport by air </li>
              <li> • Dead body transport by road </li>
              <li> • Dead body transport ambulance services </li>
              <li> • Dead body transport by flight within India </li>
              <li> • Interstate deceased body transport </li>
              <li> • Human remains transfer coordination </li>
            </ul>
          </div>

          {/* Rigth Image */}
          <div className="demo-section-two-image">
            <img src={serv3} alt="transport" />
          </div>
        </div>

        <p className='desc-1'> Whether you require local ambulance transfer in Mumbai, dead body transport by road in India, or urgent dead body transport by air within India, our team handles the process professionally and compassionately. <br /> <br />

          We coordinate with hospitals, mortuaries, airports, airlines, and local authorities to ensure safe and dignified transportation without unnecessary delays. <br />
        </p>
      </section>

      {/* section 2  urgent*/}
      <div className="urgent-strip">

        <h3>Need Immediate Dead Body Transfer Assistance in Mumbai?
        </h3>
        <p>
          <strong>
            24/7 support for dead body transport ambulance, air cargo, and interstate transfer services.
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
            Families should not face transportation stress during difficult moments.
          </h2>
          <p className="demo-emergency-subtitle">
            Transporting a deceased loved one requires urgent coordination, proper documentation, and safe handling. Delays in ambulance booking, airline approvals, or interstate transport can create additional emotional pressure for families.
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
            Complete Dead Body Transfer Services in Mumbai
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
                <h3>DEAD BODY TRANSPORT BY AIR </h3>
                <ul>
                  <li>• Dead body transport by air within India </li>
                  <li>• Domestic airline cargo booking </li>
                  <li>• Airport-to-airport transfer coordination </li>
                  <li>• Fast dead body transport by flight support </li>
                  {/* <li>• Immediate pickup coordination</li> */}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3>DEAD BODY TRANSPORT BY ROAD </h3>
                <ul>
                  <li>• Dead body transport by road in India </li>
                  <li>• Interstate deceased body transport </li>
                  <li>• Long-distance ambulance coordination </li>
                  <li>• Door-to-door transportation support </li>
                  {/* <li>• Door-to-door transportation support</li> */}
                </ul>
              </div>

              {/* Card 3 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Map size={32} />
                </div>
                <h3>DEAD BODY TRANSPORT AMBULANCE </h3>
                <ul>
                  <li>• 24/7 dead body transport ambulance in Mumbai </li>
                  <li>• Freezer box ambulance arrangements </li>
                  <li>• Hospital-to-home transfer assistance </li>
                  <li>• Immediate ambulance dispatch support </li>

                </ul>
              </div>

              {/* Card 4 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Globe size={32} />
                </div>
                <h3>DOCUMENTATION & AIR CARGO SUPPORT </h3>
                <ul>
                  <li>• Embalming certificate assistance </li>
                  <li>• Coffin box preparation </li>
                  <li>• Airport cargo documentation  </li>
                  <li>• Guidance for dead body transport by air cost </li>

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
            Reliable Dead Body Transfer Services with Compassionate Support
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
            Simple 4-Step Dead Body Transfer Process
          </h2>

          {/* <p className="demo-process-description">
           Share pickup location, destination, and transportation requirements.
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
            Trusted for Dead Body Transport Services in Mumbai
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
            What Is the Cost of Dead Body Transfer in Mumbai?
          </h2>

          <p className="demo-pricing-subtitle">
            The cost of dead body transport depends on transportation mode, destination, and documentation requirements.
          </p>

          <div className="demo-pricing-card">
            <div className="pricing-badge">
              No Hidden Charges · Upfront Estimate
            </div>

            <h3 className="pricing-card-title">COST FACTORS:</h3>

            <div className="pricing-factors">
              <span className="factor-badge">📍 Dead body transport by air within India</span>
              <span className="factor-badge">📍 Interstate dead body transport by road
              </span>
              <span className="factor-badge">🚑 Ambulance and freezer box requirement</span>
              <span className="factor-badge"> ✈️ Airline cargo charges</span>
              <span className="factor-badge"> 📄 Distance and destination city</span>
              <span className="factor-badge"> 🚨 Emergency transportation timing</span>
              {/* <span className="factor-badge">Emergency or same-day arrangements</span> */}
            </div>

            <div className="pricing-warning">
              <AlertCircle size={20} />
              <div>
                <h4>Clear & Transparent Pricing Guidance</h4>
                <p>Families often face confusion regarding dead body transport by air cost and ambulance pricing. We provide honest estimates and complete support from the beginning.</p>
              </div>
            </div>

            <p className="pricing-cta">
                            Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
                        </p>

            <button className="pricing-btn" onClick={() => window.location.href = 'tel:+919833444040'}>
              <Phone size={18} /> Get Cost in 10 Minutes
            </button>
          </div>
        </div>
      </section>

      {/* section 9: Coverage */}
      <section className="demo-coverage-section">
        <div className="demo-coverage-container">
          <span className="coverage-tag">Coverage Area</span>

          <h2 className="demo-coverage-title">
            Dead Body Transfer Services Across Mumbai & India
          </h2>

          <p className="demo-coverage-subtitle">
            We provide dead body transport ambulance, air cargo, and interstate road transfer services across Mumbai and nationwide.
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
            Need dead body transport from another city or airport? Our network supports domestic transfers across India.
          </p>
        </div>
      </section>

      <ContactUs />


    </>
  );
};

export default DMumbai;