import React from "react";
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText,
  AlertCircle, Ambulance, Check, Settings, Star, Shield, Map
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from '../components/ContactUs';

function DMumbai() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <Ambulance />, title: "Difficulty Finding Dead Body Ambulance Near You", desc: "Families often struggle to arrange immediate dead body transport ambulance services during emergencies." },
    { icon: <Plane />, title: "Air Cargo & Flight Coordination Delays", desc: "Dead body transport by flight requires airline approvals, embalming documents, and airport cargo coordination." },
    { icon: <FileText />, title: "Long-Distance Road Transportation Challenges", desc: "Dead body transport by road in India requires experienced drivers, proper preservation, and interstate coordination." },
    { icon: <AlertCircle />, title: "Confusion About Dead Body Transport Cost", desc: "Many families are unsure about dead body transport by air cost and interstate ambulance charges." },
  ];

  const features = [
    { title: "Immediate Response", desc: "Our team quickly arranges dead body ambulance and transportation support anywhere in Mumbai." },
    { title: "Domestic Air Cargo Expertise", desc: "We specialize in dead body transport by air and flight cargo coordination within India." },
    { title: "Experienced Interstate Transportation Team", desc: "Professional assistance for dead body transport by road across states in India." },
    { title: "Transparent Pricing Support", desc: "Clear guidance for dead body transport by air cost and ambulance charges." },
    { title: "24/7 Availability", desc: "Support available day and night for urgent deceased body transport." },
    { title: "Safe & Respectful Handling", desc: "Every deceased body transport case is managed with dignity and professionalism." },
    { title: "Fast Coordination Across Mumbai", desc: "Quick ambulance and transportation support from hospitals, homes, and airports." },
    { title: "Dedicated Family Assistance", desc: "One coordinator manages the transportation process from beginning to final destination." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Call or WhatsApp Our Team", desc: "Share pickup location, destination city, and transportation requirements.", step: "1" },
    { icon: <FileText size={22} />, title: "Get Transport Details & Cost Estimate", desc: "We explain available transportation options, required documents, and estimated charges.", step: "2" },
    { icon: <Settings size={22} />, title: "Transportation Arrangement", desc: "Our team arranges ambulance, embalming, air cargo booking, or interstate road transfer.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe & Dignified Transfer", desc: "The deceased is transported respectfully to the destination anywhere in India.", step: "4" },
  ];

  const stats = [
    { number: "2200+", label: "Dead body transfer cases handled" },
    { number: "21+ Years", label: "Experience in deceased body transport services" },
    { number: "24/7", label: "Ambulance & cargo support" },
    { number: "100%", label: "Safe & dignified transportation" },
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
    { name: "Andheri", icon: "📍" }, { name: "Bandra", icon: "📍" }, { name: "Dadar", icon: "📍" },
    { name: "Thane", icon: "📍" }, { name: "Navi Mumbai", icon: "📍" }, { name: "Borivali", icon: "📍" },
    { name: "Kurla", icon: "📍" }, { name: "Powai", icon: "📍" }, { name: "Colaba", icon: "📍" },
    { name: "Mira Road", icon: "📍" },
  ];

  const international = [
    { route: "Delhi", icon: "📍" }, { route: "Bangalore", icon: "📍" }, { route: "Hyderabad", icon: "📍" },
    { route: "Chennai", icon: "📍" }, { route: "Kolkata", icon: "📍" }, { route: "Ahmedabad", icon: "📍" },
    { route: "Pune", icon: "📍" }, { route: "Jaipur", icon: "📍" }, { route: "Patna", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">

      {/* Hero */}
      <section className="dmain-hero">
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body transport services Mumbai" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>

            <h1 className="dmain-hero-title">
              Looking for Professional Human Remains Transport in Mumbai? –<br />
              <span>24/7 Air, Road & Ambulance Services?</span>
            </h1>

            <h2 className="dmain-hero-subtitle">
              24×7 Dead Body Ambulance | Air Transport | Interstate Body Transfer Services
            </h2>

            <div className="dmain-rating-bar">
              <div className="dmain-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span className="dmain-rating-text">
                2200+ Transfers &nbsp;|&nbsp; 21+ Years Experience &nbsp;|&nbsp; Pan India & Worldwide
              </span>
            </div>

            <div className="dmain-btn-group">
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open('tel:+919833444040', '_blank')}>
                <Phone size={24} />
                <div className="dmain-btn-double-text"><span>Call Our Team</span><span>Available 24/7</span></div>
              </button>
              <button className="dmain-btn-double dmain-btn-double-green" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                <MessageCircle size={24} />
                <div className="dmain-btn-double-text"><span>WhatsApp Now</span><span>Get Instant Assistance</span></div>
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
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Clock size={22} /></div><div className="dmain-bottom-card-text"><h4>Quick Ambulance Dispatch</h4><p>Dead body ambulance near you within 30–60 minutes</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Plane size={22} /></div><div className="dmain-bottom-card-text"><h4>Air & Road Transfer</h4><p>Dead body transport by flight and road across India</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Globe size={22} /></div><div className="dmain-bottom-card-text"><h4>24/7 Support</h4><p>Available day & night in Mumbai</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Shield size={22} /></div><div className="dmain-bottom-card-text"><h4>Safe & Dignified Handling</h4><p>Every transfer managed with respect</p></div></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Trusted Dead Body Transport Services in Mumbai</h2>
            <p className="desc">
              During emotional situations, arranging transportation for a loved one can become overwhelming. Families often struggle with ambulance coordination, airline cargo booking, interstate permissions, and documentation formalities.<br /><br />
              Our team specializes in dead body transfer in Mumbai with complete assistance for dead body transport by air, road, ambulance services, and interstate deceased body transport coordination.<br /><br />
              Dead Body Transport by Air | Dead Body Transport Ambulance | Deceased Body Transport Services
            </p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body transport services Mumbai" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>Need Immediate Dead Body Transfer Assistance in Mumbai?</h3>
          <p>24/7 support for dead body transport ambulance, air cargo, and interstate transfer services.</p>
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
          <h2>Families should not face transportation stress during difficult moments.</h2>
          <p>Transporting a deceased loved one requires urgent coordination, proper documentation, and safe handling. Delays can create additional emotional pressure for families.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (<div className="dmain-card" key={index}><div className="dmain-card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Complete Dead Body Transfer Services in Mumbai</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card"><div className="dmain-service-icon"><Plane size={24} /></div><h3>DEAD BODY TRANSPORT BY AIR</h3><ul className="dmain-service-list"><li>Dead body transport by air within India</li><li>Domestic airline cargo booking</li><li>Airport-to-airport transfer coordination</li><li>Fast dead body transport by flight support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Ambulance size={24} /></div><h3>DEAD BODY TRANSPORT BY ROAD</h3><ul className="dmain-service-list"><li>Dead body transport by road in India</li><li>Interstate deceased body transport</li><li>Long-distance ambulance coordination</li><li>Door-to-door transportation support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Map size={24} /></div><h3>DEAD BODY TRANSPORT AMBULANCE</h3><ul className="dmain-service-list"><li>24/7 dead body transport ambulance in Mumbai</li><li>Freezer box ambulance arrangements</li><li>Hospital-to-home transfer assistance</li><li>Immediate ambulance dispatch support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Globe size={24} /></div><h3>DOCUMENTATION & AIR CARGO SUPPORT</h3><ul className="dmain-service-list"><li>Embalming certificate assistance</li><li>Coffin box preparation</li><li>Airport cargo documentation</li><li>Guidance for dead body transport by air cost</li></ul></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Reliable Dead Body Transfer Services with Compassionate Support</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (<div className="dmain-why-card" key={index}><div className="dmain-why-check"><Check size={16} /></div><div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div></div>))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple 4-Step Dead Body Transfer Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (<div className="dmain-process-card" key={index}><div className="dmain-process-circle">{item.icon}<span className="step-num">{item.step}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted for Dead Body Transport Services in Mumbai</h2>
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
          <h2>What Is the Cost of Dead Body Transfer in Mumbai?</h2>
          <p>The cost of dead body transport depends on transportation mode, destination, and documentation requirements.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3>COST FACTORS:</h3>
          <div className="dmain-factors-grid">
            <div className="dmain-factor-badge">📍 Dead body transport by air within India</div>
            <div className="dmain-factor-badge">📍 Interstate dead body transport by road</div>
            <div className="dmain-factor-badge">🚑 Ambulance and freezer box requirement</div>
            <div className="dmain-factor-badge">✈️ Airline cargo charges</div>
            <div className="dmain-factor-badge">📄 Distance and destination city</div>
            <div className="dmain-factor-badge">🚨 Emergency transportation timing</div>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={24} />
            <div><h4>Clear & Transparent Pricing Guidance</h4><p>Families often face confusion regarding dead body transport by air cost and ambulance pricing. We provide honest estimates and complete support.</p></div>
          </div>
          <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open('tel:+919833444040', '_blank')}><Phone size={18} /> Get Cost in 10 Minutes</button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Coverage Area</span>
          <h2>Dead Body Transfer Services Across Mumbai & India</h2>
          <p>We provide dead body transport ambulance, air cargo, and interstate road transfer services across Mumbai and nationwide.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">Need dead body transport from another city or airport? Our network supports domestic transfers across India.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default DMumbai;
