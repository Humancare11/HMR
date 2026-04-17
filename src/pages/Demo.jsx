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
import serv1 from "../assets/serv1.webp";
import ContactUs from '../components/ContactUs';


function Demo() {

  const data = [
    {
      icon: <FileText />,
      title: "Complex Documentation",
      desc: "Hospital clearances, police NOCs, and embalming certificates are confusing.",
    },
    {
      icon: <Clock />,
      title: "Transport Delays",
      desc: "Waiting hours for an ambulance or missing cargo flight cut-offs.",
    },
    {
      icon: <CreditCard />,
      title: "Cost Uncertainty",
      desc: "Hidden charges and unexpected expenses during a vulnerable time.",
    },
    {
      icon: <AlertCircle />,
      title: "Logistical Stress",
      desc: "Coordinating between hospitals, airlines, and road transport.",
    },
  ];


  const features = [
    {
      title: "30-Minute Response Guarantee",
      desc: "Our coordinator contacts you within 30 minutes, any time of day or night.",
    },
    {
      title: "Complete Documentation Support",
      desc: "Death certificate, NOC, embalming certificate, airline forms — we handle all of it.",
    },
    {
      title: "Trained & Compassionate Staff",
      desc: "All our personnel are trained in sensitive handling and respectful conduct.",
    },
    {
      title: "Transparent Pricing",
      desc: "Get an accurate estimate within 10 minutes. No surprise charges after the service.",
    },
    {
      title: "Refrigeration & Preservation",
      desc: "State-of-the-art freezer ambulances and body preservation during transport.",
    },
    {
      title: "Dedicated Family Coordinator",
      desc: "A single point of contact manages your case from start to final handover.",
    },
    {
      title: "Insurance Claim Assistance",
      desc: "We assist with insurance documentation and claim paperwork when required.",
    },
    {
      title: "Religious & Cultural Customs Respected",
      desc: "Hindu, Muslim, Christian, Sikh or any faith — all rites honoured and accommodated.",
    },
  ];
  const steps = [
    {
      icon: <Phone size={22} />,
      title: "Call or WhatsApp",
      desc: "Contact us anytime. Share basic details about location, destination & requirement.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: "Get Full Details & Quote",
      desc: "Receive a transparent cost estimate & complete process briefing within minutes.",
      step: "2",
    },
    {
      icon: <Settings size={22} />,
      title: "We Arrange Everything",
      desc: "Ambulance, vehicle, embalming, coffin, permits, airline booking — all done by us.",
      step: "3",
    },
    {
      icon: <Plane size={22} />,
      title: "Safe & Dignified Delivery",
      desc: "Your loved one is transported and handed over to the family with full dignity.",
      step: "4",
    },
  ];

  const stats = [
    { number: "1000+", label: "Transfers Completed" },
    { number: "10+", label: "Years Experience" },
    { number: "24/7", label: "Active Support" },
    { number: "100%", label: "Safe & Dignified" },
  ];

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
    { name: "Mumbai", icon: "📍" },
    { name: "Delhi", icon: "📍" },
    { name: "Bangalore", icon: "📍" },
    { name: "Hyderabad", icon: "📍" },
    { name: "Chennai", icon: "📍" },
    { name: "Pune", icon: "📍" },
    { name: "Kolkata", icon: "📍" },
    { name: "Ahmedabad", icon: "📍" },
    { name: "Jaipur", icon: "📍" },
    { name: "Lucknow", icon: "📍" },
  ];

  const international = [
    { route: "Dubai ", icon: "📍" },
    { route: "USA ", icon: "📍" },
    { route: "UK ", icon: "📍" },
    { route: "UAE", icon: "📍" },
  ];
  return (
    <>
      {/* section 1: Banner */}
      <section className="demo-hero">
        {/* Top Tags */}
        <div className="demo-hero-tags">
          <span><Clock size={14} /> 24/7 Available</span>
          <span>📍 Pan India & Inetrnational </span>
        </div>

        {/* Heading */}
        <h1 className="demo-hero-title">
          Dead Body Transport Services in India –<br /> <span>  24/7 Air, Road & Ambulance</span>
        </h1>

        <h2 className="demo-hero-subtitle"> Dead Body Transport by Air | Dead Body Ambulance | Human Remains Transport Services</h2>

        {/* Description */}
        {/* <p className="demo-hero-desc">
          Fast, Safe & Dignified Transfer Within Hours. We handle all
          documentation and logistics so you can focus on your family.
        </p> */}

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
              <p>Pickup in 30–60 minutes </p>

            </div>
          </div>

          <div className="demo-feature-card">
            <Plane />
            <div>
              <h4>Dead Body Transport by Air </h4>
              <p>Same-day transfer in 2–4 hours</p>
            </div>
          </div>

          <div className="demo-feature-card">
            <Globe />
            <div>
              <h4>Available </h4>
              <p>Across India & International</p>
            </div>
          </div>
        </div>

        {/* Dead Body Transport by Air | Dead Body Ambulance | Human Remains Transport Services */}
        <div className="demo-section-two-container">

          {/* LEFT Content */}
          <div className="section-two-content">

            <h2>
              India’s Trusted Dead Body Transport Services – Domestic & International Air Cargo, Ambulance & Interstate Transfer

            </h2>

            <p className="desc">
              Get reliable and immediate assistance for dead body transport by air, road, or ambulance anywhere in India. We ensure safe, timely, and dignified transfers, including flight and interstate transportation. Our experienced team manages all documentation and logistics with care and sensitivity. With 24/7 support and transparent pricing, we provide compassionate, end-to-end service for your peace of mind.
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
            <img src={serv1} alt="transport" />
          </div>
        </div>
      </section>

      {/* section 2  urgent*/}
      <div className="urgent-strip">

        <h3>Need urgent help? </h3>
        <p>
          <strong>
            Dead body ambulance within 30–60 mins | Same day dead body transport by air available
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
            During an emergency, the last thing you need is more stress.
          </h2>
          <p className="demo-emergency-subtitle">
            Transporting a loved one involves complex logistics and paperwork. We
            take that burden off your shoulders entirely.
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
            Complete Dead Body Transport Services
          </h2>
          <p className="demo-description">
            Every mode of transport, every destination. We handle it with respect
            and efficiency.
          </p>

          <div className="demo-services-grid">
            {/* {services.map((service, index) => (
              <div className="demo-service-card" key={index}>
                <div className="icon-box">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))} */}
            <div className="demo-services-grid">

              {/* Card 1 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Plane size={32} />
                </div>
                <h3>Air Transport</h3>
                <ul>
                  <li>• Fast Dead Body Transport by Air in India & Mumbai</li>
                  <li>• Priority booking for Dead Body Transport by Flight</li>
                  <li>• Support for Human Remains Air & Dead Body Cargo</li>
                  {/* <li>Assistance with Dead Body Transport by Air Cost</li> */}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3>Dead Body Ambulance Service</h3>
                <ul>
                  <li>• 24/7 Dead Body Ambulance Service near you</li>
                  <li>• Pickup within 30 – 60 minutes</li>
                  <li>• Safe and secure transport</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Truck size={32} />
                </div>
                <h3>State-to-State Body Transfer</h3>
                <ul>
                  <li>• Dead body transport by road in India</li>
                  <li>• Easy transport body to another state</li>
                  <li>• Reliable transporting deceased from state to state</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Globe size={32} />
                </div>
                <h3>Repatriation of Human Remains</h3>
                <ul>
                  <li>• Dead body transfer from Dubai to India</li>
                  <li>• Complete Repatriation of human remains</li>
                  <li>• Documentation, embalming & clearance support</li>
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
            Everything Managed. Nothing Left to Chance.
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
            Simple 4-Step Process — Handled in Hours
          </h2>

          <p className="demo-process-description">
            From your first call to final delivery, every step is managed with precision and care.
          </p>

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
            Trusted by thousands of families across India <br />for compassionate and reliable dead body transport.
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
          <span className="pricing-tag">PRICING</span>

          <h2 className="demo-pricing-title">
            What Does Deceased Transportation Cost?
          </h2>

          <p className="demo-pricing-subtitle">
            Every case is different. We provide a transparent, tailored estimate within <br />
            10 minutes of your call.
          </p>

          <div className="demo-pricing-card">
            <div className="pricing-badge">
              No Hidden Charges · Upfront Estimate
            </div>

            <h3 className="pricing-card-title">Cost Depends On Several Factors</h3>

            <div className="pricing-factors">
              <span className="factor-badge">📍 Distance & Route</span>
              <span className="factor-badge">✈ Mode (Air / Road / Ambulan)
              </span>
              <span className="factor-badge">⏰ Urgency Level</span>
              <span className="factor-badge">📄 Documentation Required</span>
              <span className="factor-badge">⚕ Embalming Needed</span>
              <span className="factor-badge">🌍 Domestic vs International</span>
            </div>

            <div className="pricing-warning">
              <AlertCircle size={20} />
              <div>
                <h4>Beware of Inflated Quotes</h4>
                <p>Families in grief are sometimes exploited. We offer fair, fixed pricing with complete transparency from the very first call.</p>
              </div>
            </div>

            <p className="pricing-cta">
              Call us right now — our expert will give you a detailed cost breakdown, free and with no obligation, in under 10 minutes.
            </p>

            <button className="pricing-btn">
              <Phone size={18} /> Get Cost in 10 Minutes
            </button>
          </div>
        </div>
      </section>

      {/* section 9: Coverage */}
      <section className="demo-coverage-section">
        <div className="demo-coverage-container">
          <span className="coverage-tag">WE SERVE</span>

          <h2 className="demo-coverage-title">
            Pan India Coverage + International
          </h2>

          <p className="demo-coverage-subtitle">
            Wherever you are, we can reach. Wherever your loved one needs to go,<br />
            we will ensure they get there.
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
            📍 Don't see your city? Call us — we cover 200+ cities across India.
          </p>
        </div>
      </section>

      <ContactUs />


    </>
  )
}

export default Demo