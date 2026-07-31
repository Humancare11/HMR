import React from 'react';
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText, CreditCard,
  AlertCircle, Ambulance, Truck, Check, Settings, Star, Shield
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from '../components/ContactUs';

function Demo() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <FileText />, title: "Finding Immediate Ambulance Support", desc: "Many families struggle to arrange a reliable dead body ambulance service quickly during emergencies." },
    { icon: <Clock />, title: "Long-Distance Transportation Challenges", desc: "Transporting deceased from state to state requires proper route planning and safe preservation arrangements." },
    { icon: <CreditCard />, title: "Unclear Charges & Vehicle Quality", desc: "Families often receive confusing pricing or poorly maintained ambulance vehicles." },
    { icon: <AlertCircle />, title: "Coordination Between Cities & States", desc: "Managing permits, drivers, ambulance support, and final delivery can become stressful without experienced assistance." },
  ];

  const features = [
    { title: "Quick Ambulance Dispatch", desc: "Our team arranges dead body ambulance support quickly for urgent transportation requirements." },
    { title: "Experienced Interstate Coordination", desc: "We manage transporting deceased from state to state with proper planning and route coordination." },
    { title: "Clean & Well-Equipped Vehicles", desc: "Our ambulances are maintained for safe, hygienic, and respectful transportation." },
    { title: "Transparent Pricing", desc: "Clear guidance on dead body transport charges without hidden costs." },
    { title: "24/7 Assistance", desc: "Available day and night for immediate road ambulance support." },
    { title: "Safe & Respectful Handling", desc: "Every deceased transfer is managed with dignity and professionalism." },
    { title: "Pan India Coverage", desc: "Road transportation services available across major cities and states in India." },
    { title: "Dedicated Support Coordinator", desc: "One coordinator manages the transportation process from pickup to final destination." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Call or WhatsApp", desc: "Share pickup location, destination, and transportation requirements.", step: "1" },
    { icon: <FileText size={22} />, title: "Get Ambulance & Cost Details", desc: "Our team explains the process, vehicle options, and estimated charges.", step: "2" },
    { icon: <Settings size={22} />, title: "Ambulance Arrangement & Coordination", desc: "We arrange the ambulance, freezer box (if required), and transportation planning.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe Transfer to Destination", desc: "The deceased is transported respectfully and safely to the hometown or destination.", step: "4" },
  ];

  const stats = [
    { number: "2200+", label: "Road transportation cases handled" },
    { number: "21+ Years", label: "Experience in interstate dead body transfer" },
    { number: "24/7", label: " support available" },
    { number: "100%", label: "Dignified & respectful handling" },
  ];

  const testimonials = [
    { text: "During the most difficult time of our lives, the team handled my father's transport from Delhi to Bangalore seamlessly. We didn't have to worry about a single document. Deeply grateful.", name: "Rahul S., Bangalore" },
    { text: "The repatriation from Dubai was something we were dreading, but they managed customs and embassy paperwork so efficiently. Very professional and compassionate service.", name: "Priya M., Mumbai" },
    { text: "Excellent service for my uncle's repatriation from Canada to Hyderabad. They handled airline clearances, embassy NOCs, and ambulance transport with absolute dignity.", name: "Kiran K., Hyderabad" },
    { text: "We needed immediate dead body transport from Mumbai to Pune at midnight. Their coordinator answered instantly and arranged a fully equipped hearse van for dignified transfer.", name: "Amit P., Pune" },
    { text: "Outstanding coordination and transparency in pricing. Transferred my grandmother's remains from Delhi to Chennai. No hidden charges and documentation assistance was superb.", name: "Srinivasan R., Chennai" },
  ];

  React.useEffect(() => {
    const interval = setInterval(() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length), 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const cities = [
    { name: "Mumbai", icon: "📍" }, { name: "Delhi", icon: "📍" }, { name: "Bangalore", icon: "📍" },
    { name: "Hyderabad", icon: "📍" }, { name: "Chennai", icon: "📍" }, { name: "Pune", icon: "📍" },
    { name: "Kolkata", icon: "📍" }, { name: "Ahmedabad", icon: "📍" }, { name: "Jaipur", icon: "📍" },
    { name: "Patna", icon: "📍" },
  ];

  const international = [
    { route: "Karnataka", icon: "📍" }, { route: "Maharashtra", icon: "📍" }, { route: "Gujarat", icon: "📍" },
    { route: "Tamil Nadu", icon: "📍" }, { route: "Uttar Pradesh", icon: "📍" }, { route: "Bihar", icon: "📍" },
    { route: "Rajasthan", icon: "📍" }, { route: "Telangana", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">
      {/* Hero */}
      <section className="dmain-hero">

        {/* Background hero image */}
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body road transport ambulance services" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>
            <h1 className="dmain-hero-title">
              Need Dead Body Transport by Road –<br />
              <span>Safe & Reliable Interstate Ambulance Services</span>
            </h1>
            <h2 className="dmain-hero-subtitle">
              Dead Body Transport by Road | Private Dead Body Ambulance | Interstate Human Remains Transfer
            </h2>
            <div className="dmain-rating-bar">
              <div className="dmain-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span className="dmain-rating-text">4.9/5 · Trusted by 2200+ Families</span>
            </div>
            <div className="dmain-btn-group">
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.location.href = 'tel:+919833444040'}>
                <Phone size={24} />
                <div className="dmain-btn-double-text">
                  <span>Call Our Team</span>
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

        {/* Bottom 4 Cards */}
        <div className="dmain-hero-bottom-cards-container">
          <div className="dmain-hero-bottom-cards">
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Clock size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>Fast Pickup Support</h4><p>Ambulance arranged within 30–60 minutes</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Truck size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>State-to-State Transfer</h4><p>Reliable long-distance dead body transportation</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Globe size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>24/7 Availability</h4><p>Available across India anytime</p></div>
            </div>
            <div className="dmain-bottom-card">
              <div className="dmain-bottom-card-icon"><Shield size={22} /></div>
              <div className="dmain-bottom-card-text"><h4>Safe & Dignified Handling</h4><p>Every transfer managed with respect</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Trusted Dead Body Ambulance Service Across India</h2>
            <p className="desc">During emotional situations, arranging transportation for a deceased loved one can become stressful and confusing. Families often struggle with finding a reliable dead body ambulance service, understanding interstate transfer procedures, and coordinating long-distance transportation safely.<br /><br />
              Our team provides complete assistance for dead body transport by road, including ambulance arrangements, documentation guidance, freezer box support, and state-to-state transportation coordination across major cities including Bangalore, Mumbai, Delhi, Chennai, Hyderabad, Kolkata, Pune, Ahmedabad, Jaipur, and Patna.</p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body road transport ambulance services" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>How Can You Arrange Immediate Repatriation or Funeral Transport?</h3>
          <p>24/7 dead body transport by road available for local and interstate transfers.</p>
          <div className="dmain-btn-group">
            <button className="dmain-btn dmain-btn-danger" onClick={() => window.location.href = 'tel:+919833444040'}><Phone size={18} /> Call Immediately</button>
            <button className="dmain-btn dmain-btn-success" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}><MessageCircle size={18} /> WhatsApp Now</button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="dmain-emergency-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">24/7 Service</span>
          <h2>During emergencies, families should not have to manage transportation stress alone.</h2>
          <p className="dmain-section-subtitle">Transporting deceased individuals by road requires proper coordination, suitable ambulance vehicles, and timely support. Delays or poor arrangements can create unnecessary difficulties for grieving families.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (<div className="dmain-card" key={index}><div className="dmain-card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Complete Dead Body Transport by Road Services</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card"><div className="dmain-service-icon"><Plane size={32} /></div><h3>DEAD BODY AMBULANCE SERVICE</h3><ul className="dmain-service-list"><li>24/7 ambulance support for deceased transportation</li><li>Private dead body ambulance arrangements</li><li>Local hospital-to-home transportation</li><li>Immediate pickup coordination</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Ambulance size={32} /></div><h3>STATE-TO-STATE DEAD BODY TRANSFER</h3><ul className="dmain-service-list"><li>Safe interstate dead body transport by road</li><li>Long-distance ambulance coordination</li><li>Transfer from one state to another</li><li>Door-to-door transportation support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Truck size={32} /></div><h3>FREEZER BOX & PRESERVATION SUPPORT</h3><ul className="dmain-service-list"><li>Freezer box ambulance arrangements</li><li>Body preservation assistance during long-distance travel</li><li>Hygienic and secure transportation</li><li>Professional handling throughout the journey</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Globe size={32} /></div><h3>CITY-TO-CITY TRANSPORT SERVICES</h3><ul className="dmain-service-list"><li>Dead body transport service Bangalore</li><li>Mumbai to hometown transfer</li><li>Interstate ambulance services across India</li><li>Rural and remote location transportation support</li></ul></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Professional & Compassionate Dead Body Road Transport Services</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (<div className="dmain-why-card" key={index}><div className="dmain-why-check"><Check size={16} /></div><div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div></div>))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple 4-Step Dead Body Transport Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (<div className="dmain-process-card" key={index}><div className="dmain-process-circle">{item.icon}<span className="dmain-step-number">{item.step}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted by Families for Reliable Interstate Dead Body Transport</h2>
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
          <h2>What Does Dead Body Transport by Road Cost?</h2>
          <p className="dmain-section-subtitle">Every case is different. We provide a transparent, tailored estimate within 10 minutes of your call.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3 className="dmain-pricing-card-title">Cost Depends On Several Factors</h3>
          <div className="dmain-factors-grid">
            <span className="dmain-factor-badge">📍 Distance & Route</span>
            <span className="dmain-factor-badge">✈ Mode (Air / Road / Ambulance)</span>
            <span className="dmain-factor-badge">⏰ Urgency Level</span>
            <span className="dmain-factor-badge">📄 Documentation Required</span>
            <span className="dmain-factor-badge">⚕ Embalming Needed</span>
            <span className="dmain-factor-badge">🌍 Domestic vs International</span>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={20} />
            <div><h4>Beware of Inflated Quotes</h4><p>Families in grief are sometimes exploited. We offer fair, fixed pricing with complete transparency from the very first call.</p></div>
          </div>
          <p className="dmain-pricing-cta">Call us right now — our expert will give you a detailed cost breakdown, free and with no obligation, in under 10 minutes.</p>
          <button className="dmain-btn dmain-btn-danger" onClick={() => window.location.href = 'tel:+919833444040'}><Phone size={18} /> Get Cost in 10 Minutes</button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">We Serve</span>
          <h2>Pan India Coverage + International</h2>
          <p className="dmain-section-subtitle">Wherever you are, we can reach. Wherever your loved one needs to go, we will ensure they get there.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid" style={{ marginTop: '16px' }}>
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">📍 Don't see your city? Call us — we cover 200+ cities across India.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default Demo;
