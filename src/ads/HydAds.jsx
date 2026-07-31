import React from "react";
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText,
  AlertCircle, Ambulance, Truck, Check, Settings, Star, Shield, Map
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from "../components/ContactUs";

function HydAds() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <FileText />, title: "Difficulty Finding a Dead Body Ambulance", desc: "Many families struggle to find a reliable dead body ambulance during emergencies, especially during late-night hours." },
    { icon: <Ambulance />, title: "Need to Transport Body to Another State", desc: "Interstate transportation requires proper planning, documentation, and experienced coordination." },
    { icon: <Plane />, title: "Dead Body Transport by Air Requirements", desc: "Dead body by flight transportation involves airline approvals, cargo booking, embalming certificates, and airport coordination." },
    { icon: <Truck />, title: "Safe Body Shifting & Body Moving", desc: "Families need assurance that the deceased will be transported safely and respectfully throughout the journey." },
  ];

  const features = [
    { title: "24/7 Availability", desc: "Immediate dead body ambulance arrangements." },
    { title: "Fast Ambulance Dispatch", desc: "Immediate dead body ambulance arrangements across Telangana & Andhra Pradesh." },
    { title: "Experienced Coordination Team", desc: "Professional support for air and road transportation." },
    { title: "State-to-State Transportation Expertise", desc: "Specialized assistance for interstate deceased body transport." },
    { title: "Dead Body Transport by Air Specialists", desc: "Expert coordination for cargo and airline procedures." },
    { title: "Respectful & Dignified Handling", desc: "Every transfer is conducted professionally and compassionately." },
    { title: "Transparent Communication", desc: "Families receive regular updates throughout the transportation process." },
    { title: "Pan India Coverage", desc: "Transportation support available anywhere in India." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Contact Our Team", desc: "Call us and share pickup and destination details.", step: "1" },
    { icon: <FileText size={22} />, title: "Transportation Planning", desc: "We recommend the best transportation option based on distance and urgency.", step: "2" },
    { icon: <Settings size={22} />, title: "Documentation & Coordination", desc: "Our team arranges ambulance, air cargo, or interstate transportation.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe Transfer", desc: "The deceased is transported respectfully to the final destination.", step: "4" },
  ];

  const stats = [
    { number: "3000+", label: "Transportation Cases Managed" },
    { number: "21+ Years", label: "Industry Experience" },
    { number: "24/7", label: " Support" },
    { number: "100%", label: "Dignified Handling" },
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
    { name: "Hyderabad", icon: "📍" }, { name: "Secunderabad", icon: "📍" }, { name: "Warangal", icon: "📍" },
    { name: "Karimnagar", icon: "📍" }, { name: "Nizamabad", icon: "📍" }, { name: "Khammam", icon: "📍" },
    { name: "Mahabubnagar", icon: "📍" }, { name: "Adilabad", icon: "📍" }, { name: "Sangareddy", icon: "📍" },
    { name: "Siddipet", icon: "📍" },
  ];

  const andhraCities = [
    { name: "Visakhapatnam", icon: "📍" }, { name: "Tirupati", icon: "📍" }, { name: "Guntur", icon: "📍" },
    { name: "Kurnool", icon: "📍" }, { name: "Nellore", icon: "📍" }, { name: "Rajahmundry", icon: "📍" },
    { name: "Kadapa", icon: "📍" }, { name: "Ongole", icon: "📍" }, { name: "Anantapur", icon: "📍" },
  ];

  const international = [
    { route: "Telangana to Maharashtra", icon: "📍" }, { route: "Telangana to Tamil Nadu", icon: "📍" },
    { route: "Telangana to Karnataka", icon: "📍" }, { route: "Andhra Pradesh to Kerala", icon: "📍" },
    { route: "Andhra Pradesh to Delhi", icon: "📍" }, { route: "Andhra Pradesh to Gujarat", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">

      {/* Hero */}
      <section className="dmain-hero">
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body transport services Hyderabad Telangana" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>

            <h1 className="dmain-hero-title">
              Need Dead Body Transport Services in<br />
              <span>Telangana & Andhra Pradesh ?</span>
            </h1>

            <h2 className="dmain-hero-subtitle">
              24×7 Dead Body Ambulance | Air Transport | Dead Body Van | Deceased Body Transport Services
            </h2>

            <div className="dmain-rating-bar">
              <div className="dmain-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span className="dmain-rating-text">
                3000+ Transfers &nbsp;|&nbsp; 21+ Years Experience &nbsp;|&nbsp; Pan India & Worldwide
              </span>
            </div>

            <div className="dmain-btn-group">
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open("tel:+919833444040", '_blank')}>
                <Phone size={24} />
                <div className="dmain-btn-double-text"><span>Get Cost Details</span><span>Available 24/7</span></div>
              </button>
              <button className="dmain-btn-double dmain-btn-double-green" onClick={() => window.open("https://wa.me/+919833444040", "_blank")}>
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
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Clock size={22} /></div><div className="dmain-bottom-card-text"><h4>24/7 Response</h4><p>Immediate assistance across Telangana & AP</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Plane size={22} /></div><div className="dmain-bottom-card-text"><h4>Air & Road Transportation</h4><p>Dead body transport by air and road anywhere in India</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Globe size={22} /></div><div className="dmain-bottom-card-text"><h4>State-to-State Transfer</h4><p>Safe transportation to any city or state</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Shield size={22} /></div><div className="dmain-bottom-card-text"><h4>Safe & Dignified Handling</h4><p>Every transfer managed with respect</p></div></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Trusted Dead Body Transport Services Across Telangana & Andhra Pradesh</h2>
            <p className="desc">
              The loss of a loved one is an emotional and challenging experience. During such difficult moments, arranging safe and timely transportation should not become an additional burden. Whether you need transportation within Telangana, within Andhra Pradesh, or need to transport a body to another state, our experienced coordinators handle every step with care and professionalism.<br /><br />
              Dead Body Ambulance | Dead Body Transport by Air | Dead Body Van | Deceased Body Transport Services
            </p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body transport services Hyderabad" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>Looking for Professional Human Remains Transport in Telangana or Andhra Pradesh?</h3>
          <p>Our team is available 24/7 for dead body transport services across Telangana and Andhra Pradesh.</p>
          <div className="dmain-btn-group">
            <button className="dmain-btn dmain-btn-danger" onClick={() => window.open("tel:+919833444040", '_blank')}><Phone size={18} /> Call Immediately</button>
            <button className="dmain-btn dmain-btn-success" onClick={() => window.open("https://wa.me/+919833444040", "_blank")}><MessageCircle size={18} /> WhatsApp Now</button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="dmain-emergency-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">24/7 Service</span>
          <h2>Families should not face transportation stress during difficult moments.</h2>
          <p>Transporting a deceased loved one requires urgent coordination, proper documentation, and safe handling. Delays in ambulance booking, airline approvals, or interstate transport can create additional emotional pressure for families.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (<div className="dmain-card" key={index}><div className="dmain-card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Complete Dead Body Transportation Solutions</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card"><div className="dmain-service-icon"><Ambulance size={24} /></div><h3>DEAD BODY AMBULANCE SERVICES</h3><ul className="dmain-service-list"><li>24/7 dead body ambulance</li><li>Emergency deceased body transport</li><li>Hospital-to-home transportation</li><li>Long-distance ambulance services</li><li>Mortuary vehicle support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Plane size={24} /></div><h3>DEAD BODY TRANSPORT BY AIR</h3><ul className="dmain-service-list"><li>Domestic dead body transport by air</li><li>Dead body by flight booking assistance</li><li>Airport cargo coordination</li><li>Airline documentation support</li><li>Fast transportation across India</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Truck size={24} /></div><h3>DEAD BODY VAN SERVICES</h3><ul className="dmain-service-list"><li>Dead body van arrangements</li><li>Mortuary van transportation</li><li>Interstate transfer services</li><li>Door-to-door transportation</li><li>Safe body transportation</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Map size={24} /></div><h3>BODY SHIFTING & BODY MOVING</h3><ul className="dmain-service-list"><li>Body shifting within Telangana</li><li>Body shifting within Andhra Pradesh</li><li>Interstate body moving</li><li>Transport body to another state</li><li>Village and rural area transportation</li></ul></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Why Families Trust Our Dead Body Transport Services</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (<div className="dmain-why-card" key={index}><div className="dmain-why-check"><Check size={16} /></div><div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div></div>))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple 4-Step Transportation Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (<div className="dmain-process-card" key={index}><div className="dmain-process-circle">{item.icon}<span className="step-num">{item.step}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted Across Telangana & Andhra Pradesh</h2>
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
          <h2>Affordable Dead Body Transport Services</h2>
          <p>Transportation costs depend on multiple factors including distance, transportation mode, and destination.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3>COST FACTORS:</h3>
          <div className="dmain-factors-grid">
            <div className="dmain-factor-badge">🚑 Dead body ambulance requirements</div>
            <div className="dmain-factor-badge">✈️ Dead body transport by air</div>
            <div className="dmain-factor-badge">📄 Dead body van services</div>
            <div className="dmain-factor-badge">📍 Interstate transportation distance</div>
            <div className="dmain-factor-badge">✈️ Airport cargo charges</div>
            <div className="dmain-factor-badge">🚨 Emergency arrangements</div>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={24} />
            <div><h4>Get a Quick Transportation Estimate</h4><p>Whether you need dead body transport by air, body moving services, or state-to-state transportation, our team provides transparent guidance and immediate assistance.</p></div>
          </div>
          <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open("tel:+918655654798", '_blank')}><Phone size={18} /> Get Cost in 10 Minutes</button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">We Serve</span>
          <h2>Dead Body Transport Coverage Across Telangana & Andhra Pradesh</h2>
          <p>We provide human remains transport services across India and worldwide destinations.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {andhraCities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">Need transportation assistance for another city or country? Our team coordinates transfers worldwide.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default HydAds;

