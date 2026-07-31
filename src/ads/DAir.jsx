import React from 'react';
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText, CreditCard,
  AlertCircle, Ambulance, Check, Settings, Star, Shield
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from '../components/ContactUs';

function DAir() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <FileText />, title: "Complex Documentation", desc: "Death certificate, embalming certificate, NOC, passport clearance, and airline paperwork can become stressful during emergencies." },
    { icon: <Clock />, title: "Flight & Cargo Delays", desc: "Missing airline cut-off timings or cargo approvals can delay the transfer of mortal remains." },
    { icon: <CreditCard />, title: "Unclear Pricing", desc: "Many families are unaware of actual dead body cargo charges and international repatriation costs." },
    { icon: <AlertCircle />, title: "Coordination Stress", desc: "Managing hospitals, mortuaries, embassies, airlines, and airport cargo departments alone can feel overwhelming." },
  ];

  const features = [
    { title: "Repatriation of Human Remains", desc: "Everything Managed with Care & Professionalism." },
    { title: "Complete Airline Documentation Support", desc: "We assist with all paperwork required for domestic and international human remains transport." },
    { title: "Experienced Repatriation Team", desc: "Our specialists handle airline coordination, embassy approvals, and airport cargo procedures daily." },
    { title: "Transparent Pricing", desc: "Clear guidance on dead body cargo charges without hidden costs." },
    { title: "24/7  Availability", desc: "Available anytime for urgent dead body transport by air assistance." },
    { title: "Safe & Respectful Handling", desc: "Every transfer is managed with dignity, professionalism, and sensitivity." },
    { title: "International Transfer Expertise", desc: "Special assistance for human remains transfer from Dubai, Canada, USA, UK, and other countries." },
    { title: "Single Point Coordination", desc: "A dedicated coordinator manages the process from pickup to final destination delivery." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Call or WhatsApp", desc: "Share the pickup location, destination country/city, and transfer requirements.", step: "1" },
    { icon: <FileText size={22} />, title: "Documentation & Quote", desc: "Receive a transparent cost estimate & complete process briefing within minutes.", step: "2" },
    { icon: <Settings size={22} />, title: "Cargo & Flight Arrangement", desc: "We arrange embalming, coffin preparation, airline booking, and airport clearance.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe Human Remains Transfer", desc: "The deceased is transported safely and respectfully to the destination.", step: "4" },
  ];

  const stats = [
    { number: "1500+", label: "Human remains transfers completed" },
    { number: "21+ Years", label: "Experience in dead body cargo coordination" },
    { number: "24/7", label: "Support available" },
    { number: "100%", label: "Dignified & respectful handling" },
  ];

  const testimonials = [
    { text: "During the most difficult time of our lives, the team handled my father's transport from Delhi to Bangalore seamlessly. We didn't have to worry about a single document. Deeply grateful.", name: "Rahul S., Bangalore" },
    { text: "The repatriation from Dubai was something we were dreading, but they managed customs and embassy paperwork so efficiently. Very professional and compassionate service.", name: "Priya M., Mumbai" },
    { text: "Excellent service provided by Human Remains Transfer for my uncle's body repatriation from Canada to Hyderabad. They handled airline clearances, embassy NOCs, and ambulance transport with absolute dignity.", name: "Kiran K., Hyderabad" },
    { text: "We needed immediate dead body transport from Mumbai to Pune at midnight. Their coordinator answered the call instantly and arranged a fully equipped hearse van for dignified transfer.", name: "Amit P., Pune" },
    { text: "Outstanding coordination and transparency in pricing. Transferred my grandmother's remains from Delhi to Chennai. No hidden charges, and documentation assistance was superb.", name: "Srinivasan R., Chennai" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const cities = [
    { name: "Mumbai", icon: "📍" }, { name: "Delhi", icon: "📍" }, { name: "Bangalore", icon: "📍" },
    { name: "Hyderabad", icon: "📍" }, { name: "Chennai", icon: "📍" }, { name: "Kolkata", icon: "📍" },
    { name: "Patna", icon: "📍" }, { name: "Lucknow", icon: "📍" }, { name: "Kochi", icon: "📍" },
    { name: "Ahmedabad", icon: "📍" }, { name: "Pune", icon: "📍" }, { name: "Jaipur", icon: "📍" },
  ];

  const international = [
    { route: "UAE", icon: "📍" }, { route: "Saudi Arabia", icon: "📍" }, { route: "Qatar", icon: "📍" },
    { route: "Oman", icon: "📍" }, { route: "United States", icon: "📍" }, { route: "United Kingdom", icon: "📍" },
    { route: "Canada", icon: "📍" }, { route: "Australia", icon: "📍" }, { route: "Singapore", icon: "📍" },
    { route: "Malaysia", icon: "📍" }, { route: "Germany", icon: "📍" }, { route: "Nepal", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">

      {/* Hero */}
      <section className="dmain-hero">
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body air cargo transport" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>

            <h1 className="dmain-hero-title">
              Need Dead Body Transport by Air for <br />
              <span>International & Domestic Transfer?</span>
            </h1>

            <h2 className="dmain-hero-subtitle">
              24×7 Domestic & International Human Remains Air Cargo Services
            </h2>

            <div className="dmain-rating-bar">
              <div className="dmain-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span className="dmain-rating-text">
                1500+ Transfers &nbsp;|&nbsp; 21+ Years Experience &nbsp;|&nbsp; Pan India & Worldwide
              </span>
            </div>

            <div className="dmain-btn-group">
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open('tel:+919833444040', '_blank')}>
                <Phone size={24} />
                <div className="dmain-btn-double-text">
                  <span>Call our Team</span>
                  <span>Available 24/7</span>
                </div>
              </button>
              <button className="dmain-btn-double dmain-btn-double-green" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                <MessageCircle size={24} />
                <div className="dmain-btn-double-text">
                  <span>WhatsApp Now</span>
                  <span>Get Instant Assistance</span>
                </div>
              </button>
            </div>

            <div className="dmain-hero-bullets">
              <span className="dmain-bullet-item">⚡ Response within 2 Minutes</span>
              <span className="dmain-bullet-item"><Shield size={16} /> No Hidden Charges</span>
              <span className="dmain-bullet-item"><FileText size={16} /> Documentation Assistance</span>
            </div>
          </div>
        </div>

        <div className="dmain-hero-bottom-cards-container">
          <div className="dmain-hero-bottom-cards">
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Plane size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>Air Cargo Specialists</h4><p>Domestic & International flight coordination</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><FileText size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>Complete Documentation</h4><p>NOC, embalming, embassy & airline paperwork</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Shield size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>Safe & Dignified Handling</h4><p>Every transfer managed with respect</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Phone size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>24/7 Dedicated Support</h4><p>24/7 team Available</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Trusted Human Remains Air Cargo Services – Domestic & International</h2>
            <p className="desc">
              Transporting a loved one through air cargo involves urgent coordination, legal documentation, and sensitive handling. Our team specializes in dead body transport by flight and international human remains transport with complete end-to-end assistance.<br /><br />
              Whether you require dead body cargo within India or repatriation from Dubai, Canada, the USA, or any other country, we manage the entire process with professionalism and compassion. From documentation and embalming to airline booking and final delivery, every step is handled carefully.<br /><br />
              Dead Body Cargo | Human Remains Air Cargo | International Mortal Remains Transfer
            </p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body air transport services" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>Looking for Urgent Human Remains Air Cargo Assistance?</h3>
          <p>Dead body transport by air available 24/7 for domestic and international transfers.</p>
          <div className="dmain-btn-group">
            <button className="dmain-btn dmain-btn-danger" onClick={() => window.open('tel:+919833444040', '_blank')}><Phone size={18} /> Call Immediately</button>
            <button className="dmain-btn dmain-btn-success" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}><MessageCircle size={18} /> WhatsApp Now</button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="dmain-emergency-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">24/7 Service</span>
          <h2>During a difficult time, the last thing families need is confusion and delays.</h2>
          <p>International and domestic dead body transfer requires multiple approvals, strict documentation, and quick airline coordination.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (<div className="dmain-card" key={index}><div className="dmain-card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Complete Dead Body Transport by Air Services</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card"><div className="dmain-service-icon"><Plane size={24} /></div><h3>AIR TRANSPORT</h3><ul className="dmain-service-list"><li>Priority dead body transport by air across India</li><li>Human remains air cargo booking assistance</li><li>Fast domestic & international flight coordination</li><li>Support for airline cargo documentation</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Ambulance size={24} /></div><h3>INTERNATIONAL REPATRIATION</h3><ul className="dmain-service-list"><li>Dead body transfer from Dubai to India</li><li>Dead body transfer from Canada to India</li><li>Repatriation from USA, UK, UAE & other countries</li><li>Embassy, customs & cargo clearance assistance</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Globe size={24} /></div><h3>DOMESTIC DEAD BODY CARGO</h3><ul className="dmain-service-list"><li>Same-day dead body transport by flight</li><li>Airport-to-airport coordination</li><li>Ambulance pickup and delivery support</li><li>Interstate transportation assistance</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><FileText size={24} /></div><h3>DOCUMENTATION & EMBALMING</h3><ul className="dmain-service-list"><li>Embalming certificate arrangements</li><li>Coffin box and sealing support</li><li>Death certificate guidance</li><li>Airport cargo documentation assistance</li></ul></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Everything Managed with Care & Professionalism</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (<div className="dmain-why-card" key={index}><div className="dmain-why-check"><Check size={16} /></div><div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div></div>))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple & Hassle-Free 4-Step Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (<div className="dmain-process-card" key={index}><div className="dmain-process-circle">{item.icon}<span className="step-num">{item.step}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted for Domestic & International Human Remains Transport</h2>
        </div>
        <div className="dmain-stats-grid">
          {stats.map((item, index) => (<div className="dmain-stat-card" key={index}><h2>{item.number}</h2><p>{item.label}</p></div>))}
        </div>
        <div className="dmain-testimonial-slider-container">
          <div className="dmain-testimonial-card dmain-active-testimonial">
            <div className="dmain-testimonial-stars">{[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}</div>
            <p className="dmain-testimonial-text">"{testimonials[testimonialIndex].text}"</p>
            <div className="dmain-testimonial-author"><h4>— {testimonials[testimonialIndex].name}</h4><span className="dmain-gmb-verified">✓ Verified Google Review</span></div>
          </div>
          <div className="dmain-slider-dots">
            {testimonials.map((_, index) => (<button key={index} className={`dmain-slider-dot ${index === testimonialIndex ? 'active' : ''}`} onClick={() => setTestimonialIndex(index)} aria-label={`Go to review ${index + 1}`} />))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="dmain-pricing-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Pricing</span>
          <h2>What Does Dead Body Transport by Air Cost?</h2>
          <p>Every transfer case is different. The cost depends on several important factors.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3>COST FACTORS:</h3>
          <div className="dmain-factors-grid">
            <div className="dmain-factor-badge">🌍 Domestic or international transfer</div>
            <div className="dmain-factor-badge">✈ Airline cargo charges</div>
            <div className="dmain-factor-badge">📍 Distance & destination country</div>
            <div className="dmain-factor-badge">📄 Documentation & embassy procedures</div>
            <div className="dmain-factor-badge">⚕ Embalming & coffin requirements</div>
            <div className="dmain-factor-badge">🚑 Airport handling & ambulance support</div>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={24} />
            <div><h4>Avoid Overpriced Charges</h4><p>Families often receive unclear quotations during emergencies. We provide transparent guidance and detailed pricing support from the beginning.</p></div>
          </div>
          <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open('tel:+919833444040', '_blank')}><Phone size={18} /> Get Cost in 10 Minutes</button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">We Serve</span>
          <h2>Pan India & International Human Remains Air Cargo Coverage</h2>
          <p>We provide dead body transport by air services across major Indian cities and international destinations.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">Need assistance from another city or country? Our team handles domestic and international human remains transfer worldwide.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default DAir;
