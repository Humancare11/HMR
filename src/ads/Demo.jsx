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


function Demo() {

  const data = [
    {
      icon: <FileText />,
      title: "Finding Immediate Ambulance Support",
      desc: "Many families struggle to arrange a reliable dead body ambulance service quickly during emergencies.",
    },
    {
      icon: <Clock />,
      title: "Long-Distance Transportation Challenges",
      desc: "Transporting deceased from state to state requires proper route planning and safe preservation arrangements.",
    },
    {
      icon: <CreditCard />,
      title: "Unclear Charges & Vehicle Quality",
      desc: "Families often receive confusing pricing or poorly maintained ambulance vehicles.",
    },
    {
      icon: <AlertCircle />,
      title: "Coordination Between Cities & States",
      desc: "Managing permits, drivers, ambulance support, and final delivery can become stressful without experienced assistance.",
    },
  ];

// 
  const features = [
    {
      title: "Quick Ambulance Dispatch",
      desc: "Our team arranges dead body ambulance support quickly for urgent transportation requirements.",
    },
    {
      title: "Experienced Interstate Coordination",
      desc: "We manage transporting deceased from state to state with proper planning and route coordination.",
    },
    {
      title: "Clean & Well-Equipped Vehicles",
      desc: "Our ambulances are maintained for safe, hygienic, and respectful transportation.",
    },
    {
      title: "Transparent Pricing",
      desc: "Clear guidance on dead body transport charges without hidden costs.",
    },
    {
      title: "24/7 Emergency Assistance",
      desc: "Available day and night for immediate road ambulance support.",
    },
    {
      title: "Safe & Respectful Handling",
      desc: "Every deceased transfer is managed with dignity and professionalism.",
    },
    {
      title: "Pan India Coverage",
      desc: "Road transportation services available across major cities and states in India.",
    },
    {
      title: "Dedicated Support Coordinator",
      desc: "One coordinator manages the transportation process from pickup to final destination.",
    },
  ];
  // steps
  const steps = [
    {
      icon: <Phone size={22} />,
      title: "Call or WhatsApp",
      desc: "Share pickup location, destination, and transportation requirements.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: " Get Ambulance & Cost Details",
      desc: "Our team explains the process, vehicle options, and estimated charges.",
      step: "2",
    },
    {
      icon: <Settings size={22} />,
      title: "Ambulance Arrangement & Coordination",
      desc: "We arrange the ambulance, freezer box (if required), and transportation planning.",
      step: "3",
    },
    {
      icon: <Plane size={22} />,
      title: "Safe Transfer to Destination",
      desc: "The deceased is transported respectfully and safely to the hometown or destination.",
      step: "4",
    },
  ];
  // stat
  const stats = [
    { number: "2200+", label: "Road transportation cases handled" },
    { number: "21+ Years", label: "Experience in interstate dead body transfer" },
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
    { name: "Patna", icon: "📍" },
  ];

  const international = [
    { route: "Karnataka ", icon: "📍" },
    { route: "Maharashtra ", icon: "📍" },
    { route: "Gujarat ", icon: "📍" },
    { route: "Tamil Nadu", icon: "📍" },
    { route: "Uttar Pradesh", icon: "📍" },
    { route: "Bihar", icon: "📍" },
    { route: "Rajasthan ", icon: "📍" },
    { route: "Telangana", icon: "📍" },
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
          Dead Body Transport by Road – <br /> <span> Safe & Reliable Interstate Ambulance Services</span>
        </h1>
        <p className="demo-hero-desc">
          24/7 Dead Body Ambulance Service for Local & State-to-State Transfer
        </p>

        <h2 className="demo-hero-subtitle"> Dead Body Transport by Road | Private Dead Body Ambulance | Interstate Human Remains Transfer </h2>

        {/* Description */}
        <p className="demo-hero-desc">
          We provide professional dead body transport by road with fully coordinated ambulance support for local, interstate, and long-distance transfers across India. From hospital pickup to safe delivery at the hometown, our experienced team ensures respectful and timely transportation with complete assistance.
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
              <h4>Fast Pickup Support </h4>
              <p>Ambulance arranged within 30–60 minutes </p>

            </div>
          </div>

          <div className="demo-feature-card">
            <Plane />
            <div>
              <h4>State-to-State Transfer</h4>
              <p>Reliable long-distance dead body transportation</p>
            </div>
          </div>

          <div className="demo-feature-card">
            <Globe />
            <div>
              <h4>24/7 Availability </h4>
              <p>Available across India anytime</p>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="demo-section-two-container">

          {/* LEFT Content */}
          <div className="section-two-content">

            <h2>
              Trusted Dead Body Ambulance Service Across India

            </h2>

            <p className="desc">
              During emotional situations, arranging transportation for a deceased loved one can become stressful and confusing. Families often struggle with finding a reliable dead body ambulance service, understanding interstate transfer procedures, and coordinating long-distance transportation safely.<br />
              Our team provides complete assistance for dead body transport by road, including ambulance arrangements, documentation guidance, freezer box support, and state-to-state transportation coordination.<br />
              Whether you require a local dead body ambulance, private ambulance for deceased transport, or transferring a dead body to another state, we handle the process professionally with dignity and care.<br />
              We provide services across major cities including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Jaipur, Patna, and surrounding regions.<br />
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

        <h3>Need Immediate Dead Body Ambulance Assistance? </h3>
        <p>
          <strong>
            24/7 dead body transport by road available for local and interstate transfers.
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
            During emergencies, families should not have to manage transportation stress alone.
          </h2>
          <p className="demo-emergency-subtitle">
            Transporting deceased individuals by road requires proper coordination, suitable ambulance vehicles, and timely support. Delays or poor arrangements can create unnecessary difficulties for grieving families.

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
            Complete Dead Body Transport by Road Services
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
                <h3>DEAD BODY AMBULANCE SERVICE</h3>
                <ul>
                  <li>• 24/7 ambulance support for deceased transportation</li>
                  <li>• Private dead body ambulance arrangements</li>
                  <li>• Private dead body ambulance arrangements</li>
                  <li>• Local hospital-to-home transportation</li>
                  <li>• Immediate pickup coordination</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3>STATE-TO-STATE DEAD BODY TRANSFER</h3>
                <ul>
                  <li>• Safe interstate dead body transport by road</li>
                  <li>• Long-distance ambulance coordination</li>
                  <li>• Transfer from one state to another</li>
                  <li>• Transfer from one state to another</li>
                  <li>• Door-to-door transportation support</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Truck size={32} />
                </div>
                <h3>FREEZER BOX & PRESERVATION SUPPORT</h3>
                <ul>
                  <li>• Freezer box ambulance arrangements</li>
                  <li>• Body preservation assistance during long-distance travel</li>
                  <li>• Hygienic and secure transportation</li>
                  <li>• Professional handling throughout the journey</li>

                </ul>
              </div>

              {/* Card 4 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Globe size={32} />
                </div>
                <h3>CITY-TO-CITY TRANSPORT SERVICES</h3>
                <ul>
                  <li>• Dead body transport service Bangalore</li>
                  <li>• Mumbai to hometown transfer</li>
                  <li>• Interstate ambulance services across India</li>
                  <li>• Rural and remote location transportation support</li>

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
            Professional & Compassionate Dead Body Road Transport Services
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
            Simple 4-Step Dead Body Transport Process
          </h2>

          <p className="demo-process-description">
           Share pickup location, destination, and transportation requirements.
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
           Trusted by Families for Reliable Interstate Dead Body Transport
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
           What Does Dead Body Transport by Road Cost?
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

            <button className="pricing-btn" onClick={() => window.location.href = 'tel:+919833444040'}>
              <Phone size={18} />Get Cost in 10 Minutes
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