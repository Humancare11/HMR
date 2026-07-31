import React from 'react';
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText,
  AlertCircle, Ambulance, Check, Settings, Star, Shield, Map
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from '../components/ContactUs';

function Dcost() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <Plane />, title: "Confusing Airline Cargo Charges", desc: "Different airlines have different pricing structures for human remains air cargo and deceased transportation." },
    { icon: <Ambulance />, title: "Interstate Road Transfer Expenses", desc: "Long-distance dead body ambulance charges vary based on distance, route, and preservation requirements." },
    { icon: <FileText />, title: "Hidden Documentation Costs", desc: "Embalming, coffin box, airport clearance, and paperwork charges are often not explained clearly." },
    { icon: <AlertCircle />, title: "International Repatriation Complexity", desc: "Shipping deceased bodies internationally involves embassy approvals, customs clearance, and cargo handling costs." },
  ];

  const features = [
    { title: "Transparent Cost Breakdown", desc: "We explain every transportation charge clearly before starting the process." },
    { title: "No Hidden Fees", desc: "Families receive proper guidance without unexpected expenses later." },
    { title: "Domestic & International Expertise", desc: "Support for both interstate and international deceased transportation cost planning." },
    { title: "Quick Pricing Assistance", desc: "Receive estimated transportation costs within minutes based on your requirements." },
    { title: "24/7 Availability", desc: "Available anytime for urgent cost guidance and transportation coordination." },
    { title: "Experienced Coordination Team", desc: "Our specialists understand airline cargo pricing and interstate ambulance logistics." },
    { title: "Customized Transport Solutions", desc: "Charges depend on the route, urgency, and transport mode required." },
    { title: "Compassionate Support", desc: "We guide families patiently and respectfully throughout the process." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Share Transport Details", desc: "Provide pickup location, destination, and preferred transport method.", step: "1" },
    { icon: <FileText size={22} />, title: "Get Cost Estimate", desc: "Our team explains the estimated dead body transport charges and required procedures.", step: "2" },
    { icon: <Settings size={22} />, title: "Documentation & Coordination", desc: "We assist with embalming, paperwork, cargo booking, or ambulance arrangements.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe & Dignified Transportation", desc: "The deceased is transported safely to the destination with complete coordination.", step: "4" },
  ];

  const stats = [
    { number: "2200+", label: "Transportation cases coordinated" },
    { number: "21+ Years", label: "Experience in deceased body transport" },
    { number: "24/7", label: "Support available" },
    { number: "100%", label: "Transparent pricing guidance" },
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
    { name: "Hyderabad", icon: "📍" }, { name: "Chennai", icon: "📍" }, { name: "Pune", icon: "📍" },
    { name: "Kolkata", icon: "📍" }, { name: "Ahmedabad", icon: "📍" }, { name: "Jaipur", icon: "📍" },
    { name: "Patna", icon: "📍" },
  ];

  const international = [
    { route: "Dubai", icon: "📍" }, { route: "Canada", icon: "📍" }, { route: "UK", icon: "📍" },
    { route: "UAE", icon: "📍" }, { route: "Singapore", icon: "📍" }, { route: "Australia", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">

      {/* Hero */}
      <section className="dmain-hero">
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body transport cost guidance" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>

            <h1 className="dmain-hero-title">
              How Much Does Dead Body Transport Cost by <br />
              <span>Air, Road & Interstate Charges?</span>
            </h1>

            <h2 className="dmain-hero-subtitle">
              24×7 Transparent Dead Body Transport by Air Cost | Interstate Ambulance Charges
            </h2>

            <div className="dmain-rating-bar">
              <div className="dmain-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />)}
              </div>
              <span className="dmain-rating-text">
                2200+ Transfers &nbsp;|&nbsp; 21+ Years Experience &nbsp;|&nbsp; Transparent Pricing
              </span>
            </div>

            <div className="dmain-btn-group">
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open('tel:+919833444040', '_blank')}>
                <Phone size={24} />
                <div className="dmain-btn-double-text"><span>Get Cost Details</span><span>Available 24/7</span></div>
              </button>
              <button className="dmain-btn-double dmain-btn-double-green" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                <MessageCircle size={24} />
                <div className="dmain-btn-double-text"><span>WhatsApp Now</span><span>Get Instant Assistance</span></div>
              </button>
            </div>

            <div className="dmain-hero-bullets">
              <span className="dmain-bullet-item">⚡ Quick Cost Estimate</span>
              <span className="dmain-bullet-item"><Shield size={16} /> Transparent Charges</span>
              <span className="dmain-bullet-item"><FileText size={16} /> No Hidden Fees</span>
            </div>
          </div>
        </div>

        <div className="dmain-hero-bottom-cards-container">
          <div className="dmain-hero-bottom-cards">
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Clock size={22} /></div><div className="dmain-bottom-card-text"><h4>Quick Cost Estimate</h4><p>Get pricing guidance within minutes</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Plane size={22} /></div><div className="dmain-bottom-card-text"><h4>Transparent Charges</h4><p>No hidden fees or surprise costs</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Globe size={22} /></div><div className="dmain-bottom-card-text"><h4>24/7 Support</h4><p>Available anytime for urgent assistance</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Shield size={22} /></div><div className="dmain-bottom-card-text"><h4>Expert Guidance</h4><p>Clear explanation of all costs</p></div></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Understanding Dead Body Transport Charges Made Simple</h2>
            <p className="desc">
              During emotional situations, families often struggle to understand the actual cost to transport a body to another state or the charges involved in international air cargo transfer. Airline fees, ambulance costs, documentation requirements, and embalming charges can make the process confusing.<br /><br />
              Our experienced team provides complete guidance with transparency, compassion, and clear estimates before beginning the transportation process — so families never face unexpected costs.<br /><br />
              Dead Body Transport by Air Cost | Interstate Ambulance Charges | Human Remains Shipping Cost
            </p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body transport cost guidance" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>Looking for Immediate Cost Information for Dead Body Transport?</h3>
          <p>Get transparent pricing support for domestic and international transportation services.</p>
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
          <h2>Families often face confusion and inflated quotations during emergencies.</h2>
          <p>The cost of transporting a deceased loved one depends on several important factors. Without proper guidance, many families receive unclear estimates or incomplete information.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (<div className="dmain-card" key={index}><div className="dmain-card-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Cost Guidance for Every Type of Dead Body Transport</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card"><div className="dmain-service-icon"><Plane size={24} /></div><h3>DEAD BODY TRANSPORT BY AIR COST</h3><ul className="dmain-service-list"><li>Domestic air cargo pricing assistance</li><li>International human remains transport charges</li><li>Airline cargo fee guidance</li><li>Airport handling and clearance cost support</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Ambulance size={24} /></div><h3>INTERSTATE ROAD TRANSPORT CHARGES</h3><ul className="dmain-service-list"><li>Cost to transport body to another state</li><li>Dead body ambulance service pricing</li><li>Private ambulance charges for deceased transport</li><li>Long-distance road transportation estimates</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Map size={24} /></div><h3>INTERNATIONAL SHIPPING COST SUPPORT</h3><ul className="dmain-service-list"><li>Cost to ship deceased body from abroad to India</li><li>Repatriation pricing assistance</li><li>Embassy and documentation cost guidance</li><li>Human remains cargo handling charges</li></ul></div>
          <div className="dmain-service-card"><div className="dmain-service-icon"><Globe size={24} /></div><h3>AIRLINE-SPECIFIC COST GUIDANCE</h3><ul className="dmain-service-list"><li>Indigo dead body transport charges</li><li>Domestic airline cargo support</li><li>Flight booking coordination</li><li>Air cargo documentation assistance</li></ul></div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Honest Pricing Support During Difficult Times</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (<div className="dmain-why-card" key={index}><div className="dmain-why-check"><Check size={16} /></div><div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div></div>))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple 4-Step Cost & Transport Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (<div className="dmain-process-card" key={index}><div className="dmain-process-circle">{item.icon}<span className="step-num">{item.step}</span></div><h3>{item.title}</h3><p>{item.desc}</p></div>))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted for Fair & Transparent Deceased Transportation Pricing</h2>
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
          <h2>What Affects Dead Body Transportation Cost?</h2>
          <p>Every transportation case is different, and pricing depends on several important factors.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3>Cost Depends On Several Factors</h3>
          <div className="dmain-factors-grid">
            <div className="dmain-factor-badge">📍 Domestic or international transfer</div>
            <div className="dmain-factor-badge">🌍 Air cargo or road ambulance service</div>
            <div className="dmain-factor-badge">🗺️ Distance and destination</div>
            <div className="dmain-factor-badge">✈ Airline cargo charges</div>
            <div className="dmain-factor-badge">⚕ Embalming and coffin requirements</div>
            <div className="dmain-factor-badge">📄 Airport clearance and documentation</div>
            <div className="dmain-factor-badge">🚨 Emergency or same-day arrangements</div>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={24} />
            <div><h4>Avoid Misleading Quotes</h4><p>Families are often unaware of actual transportation costs during emergencies. We provide transparent guidance and detailed explanations from the beginning.</p></div>
          </div>
          <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open('tel:+919833444040', '_blank')}><Phone size={18} /> Get Cost in 10 Minutes</button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">We Serve</span>
          <h2>Dead Body Transport Cost Support Across India & Internationally</h2>
          <p>We provide transportation pricing guidance for domestic and international transfers.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default Dcost;
