import React from 'react'
import {
  Phone,
  MessageCircle,
  Clock,
  Plane,
  Globe,
  FileText,
//   CreditCard,    
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

function Dcost() {

  const data = [
    {
      icon: <Plane />,
      title: "Confusing Airline Cargo Charges",
      desc: "Different airlines have different pricing structures for human remains air cargo and deceased transportation.",
    },
    {
      icon: <Ambulance />,
      title: "Interstate Road Transfer Expenses",
      desc: "Long-distance dead body ambulance charges vary based on distance, route, and preservation requirements.",
    },
    {
      icon: <FileText />,
      title: "Hidden Documentation Costs",
      desc: "Embalming, coffin box, airport clearance, and paperwork charges are often not explained clearly.",
    },
    {
      icon: <AlertCircle />,
      title: "International Repatriation Complexity",
      desc: "Shipping deceased bodies internationally involves embassy approvals, customs clearance, and cargo handling costs.",
    },
  ];

// 
  const features = [
    {
      title: "Transparent Cost Breakdown",
      desc: "We explain every transportation charge clearly before starting the process.",
    },
    {
      title: "No Hidden Fees",
      desc: "Families receive proper guidance without unexpected expenses later.",
    },
    {
      title: "Domestic & International Expertise",
      desc: "Support for both interstate and international deceased transportation cost planning.",
    },
    {
      title: "Quick Pricing Assistance",
      desc: "Receive estimated transportation costs within minutes based on your requirements.",
    },
    {
      title: "24/7 Emergency Availability",
      desc: "Available anytime for urgent cost guidance and transportation coordination.",
    },
    {
      title: "Experienced Coordination Team",
      desc: "Our specialists understand airline cargo pricing and interstate ambulance logistics.",
    },
    {
      title: "Customized Transport Solutions",
      desc: "Charges depend on the route, urgency, and transport mode required.",
    },
    {
      title: "Compassionate Support",
      desc: "We guide families patiently and respectfully throughout the process.",
    },
  ];
  // steps
  const steps = [
    {
      icon: <Phone size={22} />,
      title: "Share Transport Details",
      desc: "Provide pickup location, destination, and preferred transport method.",
      step: "1",
    },
    {
      icon: <FileText size={22} />,
      title: "Get Cost Estimate",
      desc: "Our team explains the estimated dead body transport charges and required procedures.",
      step: "2",
    },
    {
      icon: <Settings size={22} />,
      title: "Documentation & Coordination",
      desc: "We assist with embalming, paperwork, cargo booking, or ambulance arrangements.",
      step: "3",
    },
    {
      icon: <Plane size={22} />,
      title: "Safe & Dignified Transportation",
      desc: "The deceased is transported safely to the destination with complete coordination.",
      step: "4",
    },
  ];
  // stat
  const stats = [
    { number: "2200+", label: "Transportation cases coordinated" },
    { number: "21+ Years", label: "Emergency support available" },
    { number: "24/7", label: "Emergency support available" },
    { number: "100%", label: "Transparent pricing guidance" },
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
    { name: "Mumbai ", icon: "📍" },
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
    { route: "Dubai ", icon: "📍" },
    { route: "Canada ", icon: "📍" },
    { route: "UK ", icon: "📍" },
    { route: " UAE", icon: "📍" },
    { route: "Singapore", icon: "📍" },
    { route: "Australia", icon: "📍" },
    // { route: "Rajasthan ", icon: "📍" },
    // { route: "Telangana", icon: "📍" },
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
          Dead Body Transport Cost – <br /> <span> Air, Road & Interstate Charges</span>
        </h1>
        <p className="demo-hero-desc">
         Get Transparent Pricing for Dead Body Transport Across India & Internationally
        </p>

        <h2 className="demo-hero-subtitle"> Dead Body Transport by Air Cost | Interstate Ambulance Charges | Human Remains Shipping Cost </h2>

        {/* Description */}
        <p className="demo-hero-desc">
         We provide clear and professional guidance for deceased body transportation cost, including domestic air cargo, interstate ambulance transfer, and international human remains repatriation. Our team helps families understand the complete process and estimated charges without hidden costs or confusion.
        </p>

        {/* CTA Buttons */}
        <div className="demo-hero-buttons">
          <button className="demo-btn call" onClick={() => window.location.href = 'tel:+919833444040'}>
            <Phone size={18} /> Get Cost Details
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
              <h4> Quick Cost Estimate </h4>
              <p> Get pricing guidance within minutes </p>

            </div>
          </div>

          <div className="demo-feature-card">
            <Plane />
            <div>
              <h4>Transparent Charges</h4>
              <p>No hidden fees or surprise costs</p>
            </div>
          </div>

          <div className="demo-feature-card">
            <Globe />
            <div>
              <h4>24/7 Support </h4>
              <p>Available anytime for urgent assistance</p>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="demo-section-two-container">

          {/* LEFT Content */}
          <div className="section-two-content">

            <h2>
             Understanding Dead Body Transport Charges Made Simple

            </h2>

            <p className="desc">
             During emotional situations, families often struggle to understand the actual cost to transport a body to another state or the charges involved in international air cargo transfer. Airline fees, ambulance costs, documentation requirements, and embalming charges can make the process confusing. <br /><br />

            Our experienced team provides complete guidance for:
            </p> 

            <ul>
              <li> • Quick response within 10–30 minutes </li>
              <li> • Available for dead body transport by air in India & Mumbai </li>
              <li> • Trusted for human remains transportation & repatriation of human remains</li>
              <li> • 24/7 response — we answer every call </li>
            </ul>
          </div>

          {/* Rigth Image */}
          <div className="demo-section-two-image">
            <img src={serv3} alt="transport" />
          </div>
        </div>

        <p className='desc-1'> We believe families deserve clear information and fair pricing during difficult times. That is why we explain every cost factor transparently before beginning the transportation process. </p>
      </section>

      {/* section 2  urgent*/}
      <div className="urgent-strip">

        <h3>Need Immediate Cost Information for Dead Body Transport? </h3>
        <p>
          <strong>
            Get transparent pricing support for domestic and international transportation services.
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
           Families often face confusion and inflated quotations during emergencies.
          </h2>
          <p className="demo-emergency-subtitle">
          The cost of transporting a deceased loved one depends on several important factors. Without proper guidance, many families receive unclear estimates or incomplete information.
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
            Cost Guidance for Every Type of Dead Body Transport
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
                <h3> DEAD BODY TRANSPORT BY AIR COST </h3>
                <ul>
                  <li>• Domestic air cargo pricing assistance</li>
                  <li>• International human remains transport charges </li>
                  <li>• Airline cargo fee guidance </li>
                  <li>• Airport handling and clearance cost support </li>
                  {/* <li>• Immediate pickup coordination</li> */}
                </ul>
              </div>

              {/* Card 2 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Ambulance size={32} />
                </div>
                <h3>INTERSTATE ROAD TRANSPORT CHARGES</h3>
                <ul>
                  <li>• Cost to transport body to another state</li>
                  <li>• Dead body ambulance service pricing </li>
                  <li>• Private ambulance charges for deceased transport </li>
                  <li>• Long-distance road transportation estimates </li>
                  {/* <li>• Door-to-door transportation support</li> */}
                </ul>
              </div>

              {/* Card 3 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Map size={32} />
                </div>
                <h3>INTERNATIONAL SHIPPING COST SUPPORT </h3>
                <ul>
                  <li>• Cost to ship deceased body from abroad to India </li>
                  <li>• Repatriation pricing assistance </li>
                  <li>• Embassy and documentation cost guidance </li>
                  <li>• Human remains cargo handling charges </li>

                </ul>
              </div>

              {/* Card 4 */}
              <div className="demo-service-card">
                <div className="demo-services-icon-box">
                  <Globe size={32} />
                </div>
                <h3>AIRLINE-SPECIFIC COST GUIDANCE</h3>
                <ul>
                  <li>• Indigo dead body transport charges </li>
                  <li>• Domestic airline cargo support </li>
                  <li>• Flight booking coordination </li>
                  <li>• Air cargo documentation assistance </li>

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
            Honest Pricing Support During Difficult Times
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
           Simple 4-Step Cost & Transport Process
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
           Trusted for Fair & Transparent Deceased Transportation Pricing
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
          What Affects Dead Body Transportation Cost?
          </h2>

          <p className="demo-pricing-subtitle">
           Every transportation case is different, and pricing depends on several important factors.
          </p>

          <div className="demo-pricing-card">
            <div className="pricing-badge">
              No Hidden Charges · Upfront Estimate
            </div>

            <h3 className="pricing-card-title">Cost Depends On Several Factors</h3>

            <div className="pricing-factors">
              <span className="factor-badge">📍 Domestic or international transfer</span>
              <span className="factor-badge">🌍 Air cargo or road ambulance service
              </span>
              <span className="factor-badge">🗺️ Distance and destination</span>
              <span className="factor-badge"> ✈ Airline cargo charges</span>
              <span className="factor-badge">⚕ Embalming and coffin requirements</span>
              <span className="factor-badge">📄 Airport clearance and documentation</span>
              <span className="factor-badge">🚨 Emergency or same-day arrangements</span>
            </div>

            <div className="pricing-warning">
              <AlertCircle size={20} />
              <div>
                <h4>Avoid Misleading Emergency Quotes</h4>
                <p>Families are often unaware of actual transportation costs during emergencies. We provide transparent guidance and detailed explanations from the beginning.</p>
              </div>
            </div>

            <p className="pricing-cta">
              Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
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
         Dead Body Transport Cost Support Across India & Internationally
          </h2>

          <p className="demo-coverage-subtitle">
          We provide transportation pricing guidance for domestic and international transfers.
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
          Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
          </p>
        </div>
      </section>

      <ContactUs />


    </>
  );
};

export default Dcost;