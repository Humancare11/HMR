import React from "react";
import {
  Phone, MessageCircle, Clock, Plane, Globe, FileText,
  AlertCircle, Ambulance, Truck, Check, Settings, Star, Shield, Map
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-Transfer.jpeg";
import ContactUs from '../components/ContactUs';

function DelhiAds() {
  const [testimonialIndex, setTestimonialIndex] = React.useState(0);

  const data = [
    { icon: <Ambulance />, title: "Difficulty Finding Dead Body Ambulance Near You", desc: "Families often struggle to arrange immediate dead body ambulance services during emergencies." },
    { icon: <Map />, title: "Challenges in Transporting Body to Another State", desc: "Interstate transportation requires experienced drivers, route coordination, and proper handling arrangements." },
    { icon: <Plane />, title: "Air Cargo & Flight Coordination Stress", desc: "Dead body by air transportation involves documentation, embalming, and airline cargo approvals." },
    { icon: <Truck />, title: "Confusion Between Ambulance Types", desc: "Many families search for body ambulance, mortuary ambulance, or ICU ambulance service near me without understanding which service is suitable." },
  ];

  const features = [
    { title: "Quick Response", desc: "Our team arranges dead body ambulance support quickly across Delhi and nearby areas." },
    { title: "Experienced Air & Road Transfer Team", desc: "Professional coordination for dead body by air and interstate transport services." },
    { title: "24/7 Ambulance Availability", desc: "Support available day and night for urgent transportation requirements." },
    { title: "Clean & Well-Maintained Vehicles", desc: "Mortuary ambulance and body ambulance vehicles are maintained for safe transportation." },
    { title: "Transparent Coordination", desc: "Families receive clear guidance on procedures, documentation, and transportation arrangements." },
    { title: "Safe & Dignified Handling", desc: "Every deceased body transport case is managed respectfully and professionally." },
    { title: "Pan India Transportation Support", desc: "We help transport body to another state anywhere in India." },
    { title: "Dedicated Family Assistance", desc: "One experienced coordinator manages the transportation process from start to finish." },
  ];

  const steps = [
    { icon: <Phone size={22} />, title: "Contact Our Team", desc: "Call or WhatsApp and share pickup location, destination, and transportation requirement.", step: "1" },
    { icon: <FileText size={22} />, title: "Ambulance & Transport Planning", desc: "We explain available transportation options, ambulance type, and estimated arrangements.", step: "2" },
    { icon: <Settings size={22} />, title: "Documentation & Coordination", desc: "Our team handles ambulance dispatch, embalming guidance, and airline or interstate coordination.", step: "3" },
    { icon: <Plane size={22} />, title: "Safe & Respectful Transfer", desc: "The deceased is transported safely to the destination with complete support.", step: "4" },
  ];

  const stats = [
    { number: "2200+", label: "Transportation cases coordinated" },
    { number: "21+ Years", label: "Experience in deceased body transport" },
    { number: "24/7", label: "Ambulance support" },
    { number: "100%", label: "Safe & dignified handling" },
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
    { name: "Delhi", icon: "📍" }, { name: "Noida", icon: "📍" }, { name: "Gurgaon", icon: "📍" },
    { name: "Ghaziabad", icon: "📍" }, { name: "Faridabad", icon: "📍" }, { name: "Rohini", icon: "📍" },
    { name: "Dwarka", icon: "📍" }, { name: "Karol Bagh", icon: "📍" }, { name: "Saket", icon: "📍" },
    { name: "Lajpat Nagar", icon: "📍" },
  ];

  const international = [
    { route: "Mumbai", icon: "📍" }, { route: "Bangalore", icon: "📍" }, { route: "Hyderabad", icon: "📍" },
    { route: "Chennai", icon: "📍" }, { route: "Kolkata", icon: "📍" }, { route: "Ahmedabad", icon: "📍" },
    { route: "Pune", icon: "📍" }, { route: "Jaipur", icon: "📍" }, { route: "Patna", icon: "📍" },
  ];

  return (
    <div className="dmain-wrapper">

      {/* Hero */}
      <section className="dmain-hero">
        <div className="dmain-hero-image">
          <img src={heroCoffin} alt="Dead body transport ambulance services Delhi" />
          <div className="dmain-hero-image-tint"></div>
        </div>

        <div className="dmain-hero-container">
          <div className="dmain-hero-left">
            <div className="dmain-badge-group">
              <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
              <span className="dmain-badge">📍 Pan India & International</span>
            </div>

            <h1 className="dmain-hero-title">
              Need Professional Human Remains Transport in Delhi –<br />
              <span>24/7 Ambulance, Air & Interstate Transport?</span>
            </h1>

            <h2 className="dmain-hero-subtitle">
              24×7 Dead Body Ambulance | Deceased Body Transport | Dead Body by Air | Interstate Body Transfer
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
              <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open('tel:+919619159990', '_blank')}>
                <Phone size={24} />
                <div className="dmain-btn-double-text"><span>Call Our Team</span><span>Available 24/7</span></div>
              </button>
              <button className="dmain-btn-double dmain-btn-double-green" onClick={() => window.open('https://wa.me/+919619159990', '_blank')}>
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
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Clock size={22} /></div><div className="dmain-bottom-card-text"><h4>24/7 Support</h4><p>Immediate dead body ambulance assistance in Delhi</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Plane size={22} /></div><div className="dmain-bottom-card-text"><h4>Air & Road Transportation</h4><p>Dead body by air and interstate transfer support</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Globe size={22} /></div><div className="dmain-bottom-card-text"><h4>Quick Ambulance Dispatch</h4><p>Fast response across Delhi NCR</p></div></div>
            <div className="dmain-bottom-card"><div className="dmain-bottom-card-icon"><Shield size={22} /></div><div className="dmain-bottom-card-text"><h4>Safe & Dignified Handling</h4><p>Every transfer managed with respect</p></div></div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="dmain-section-intro">
        <div className="dmain-intro-container">
          <div className="dmain-intro-left">
            <h2>Trusted Dead Body Transport Services in Delhi</h2>
            <p className="desc">
              Arranging transportation for a deceased loved one can become emotionally exhausting, especially during emergencies. Families often struggle to find a reliable dead body ambulance near me, manage airline procedures, or arrange safe transport body to another state.<br /><br />
              Our team specializes in dead body transport services in Delhi with complete assistance for ambulance services, deceased body transport, dead body by air within India, interstate dead body transport, mortuary ambulance arrangements, and body ambulance support for hospitals and homes.<br /><br />
              We work with hospitals, airports, mortuaries, and local authorities to ensure safe and smooth transportation without delays.
            </p>
          </div>
          <div className="dmain-intro-right">
            <div className="dmain-intro-image-wrapper">
              <img src={serv3} alt="Dead body transport services Delhi" />
            </div>
          </div>
        </div>
      </section>

      {/* Urgent Strip */}
      <section className="dmain-urgent-strip">
        <div className="dmain-urgent-container">
          <h3>Looking for Professional Human Remains Transport in Delhi?</h3>
          <p>24/7 support for dead body transport, mortuary ambulance, and interstate transfer services.</p>
          <div className="dmain-btn-group">
            <button className="dmain-btn dmain-btn-danger" onClick={() => window.open('tel:+919619159990', '_blank')}><Phone size={18} /> Call Immediately</button>
            <button className="dmain-btn dmain-btn-success" onClick={() => window.open('https://wa.me/+919619159990', '_blank')}><MessageCircle size={18} /> WhatsApp Now</button>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="dmain-emergency-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">24/7 Service</span>
          <h2>Families deserve quick and compassionate transportation support during emergencies.</h2>
          <p>Finding an ambulance near me or arranging deceased body transport at the last moment can become extremely stressful. Delays in ambulance availability can create additional emotional pressure.</p>
        </div>
        <div className="dmain-grid-4">
          {data.map((item, index) => (
            <div className="dmain-card" key={index}>
              <div className="dmain-card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="dmain-services-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">What We Offer</span>
          <h2>Complete Dead Body Transport Services in Delhi</h2>
        </div>
        <div className="dmain-services-grid">
          <div className="dmain-service-card">
            <div className="dmain-service-icon"><Plane size={24} /></div>
            <h3>DEAD BODY AMBULANCE SERVICE</h3>
            <ul className="dmain-service-list">
              <li>24/7 dead body ambulance in Delhi</li>
              <li>Mortuary ambulance arrangements</li>
              <li>Body ambulance for hospital and home transfer</li>
              <li>Immediate pickup and transportation support</li>
            </ul>
          </div>
          <div className="dmain-service-card">
            <div className="dmain-service-icon"><Ambulance size={24} /></div>
            <h3>DEAD BODY BY AIR</h3>
            <ul className="dmain-service-list">
              <li>Domestic dead body by air coordination</li>
              <li>Airline cargo booking assistance</li>
              <li>Airport clearance support</li>
              <li>Fast deceased body transport by flight</li>
            </ul>
          </div>
          <div className="dmain-service-card">
            <div className="dmain-service-icon"><Map size={24} /></div>
            <h3>INTERSTATE DECEASED BODY TRANSPORT</h3>
            <ul className="dmain-service-list">
              <li>Transport body to another state safely</li>
              <li>Long-distance road ambulance services</li>
              <li>State-to-state deceased transportation</li>
              <li>Door-to-door transportation assistance</li>
            </ul>
          </div>
          <div className="dmain-service-card">
            <div className="dmain-service-icon"><Globe size={24} /></div>
            <h3>ICU AMBULANCE SUPPORT</h3>
            <ul className="dmain-service-list">
              <li>ICU ambulance service near me</li>
              <li>Ambulance near me assistance</li>
              <li>Patient and deceased transfer coordination</li>
              <li>Ambulance support across Delhi NCR</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="dmain-why-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Why Choose Us</span>
          <h2>Reliable & Respectful Dead Body Transport in Delhi</h2>
        </div>
        <div className="dmain-why-grid">
          {features.map((item, index) => (
            <div className="dmain-why-card" key={index}>
              <div className="dmain-why-check"><Check size={16} /></div>
              <div className="dmain-why-text"><h3>{item.title}</h3><p>{item.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="dmain-process-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">How It Works</span>
          <h2>Simple 4-Step Transportation Process</h2>
        </div>
        <div className="dmain-process-grid">
          {steps.map((item, index) => (
            <div className="dmain-process-card" key={index}>
              <div className="dmain-process-circle">{item.icon}<span className="step-num">{item.step}</span></div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Testimonials */}
      <section className="dmain-stats-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Our Track Record</span>
          <h2>Trusted for Dead Body Ambulance & Transport Services in Delhi</h2>
        </div>
        <div className="dmain-stats-grid">
          {stats.map((item, index) => (
            <div className="dmain-stat-card" key={index}><h2>{item.number}</h2><p>{item.label}</p></div>
          ))}
        </div>
        <div className="dmain-testimonial-slider-container">
          <div className="dmain-testimonial-card dmain-active-testimonial">
            <div className="dmain-testimonial-stars">
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />)}
            </div>
            <p className="dmain-testimonial-text">"{testimonials[testimonialIndex].text}"</p>
            <div className="dmain-testimonial-author">
              <h4>— {testimonials[testimonialIndex].name}</h4>
              <span className="dmain-gmb-verified">✓ Verified Google Review</span>
            </div>
          </div>
          <div className="dmain-slider-dots">
            {testimonials.map((_, index) => (
              <button key={index} className={`dmain-slider-dot ${index === testimonialIndex ? 'active' : ''}`} onClick={() => setTestimonialIndex(index)} aria-label={`Go to review ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="dmain-pricing-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Pricing</span>
          <h2>What Is the Cost of Dead Body Transport in Delhi?</h2>
          <p>Transportation cost depends on the ambulance type, transfer distance, and mode of transportation required.</p>
        </div>
        <div className="dmain-pricing-card">
          <div className="dmain-pricing-badge">No Hidden Charges · Upfront Estimate</div>
          <h3>COST FACTORS:</h3>
          <div className="dmain-factors-grid">
            <div className="dmain-factor-badge">🚑 Dead body ambulance requirement</div>
            <div className="dmain-factor-badge">📍 Interstate transportation distance</div>
            <div className="dmain-factor-badge">✈️ Dead body by air cargo charges</div>
            <div className="dmain-factor-badge">📄 Mortuary ambulance or freezer box support</div>
            <div className="dmain-factor-badge">📍 Destination city or state</div>
            <div className="dmain-factor-badge">🚨 Emergency transportation timing</div>
          </div>
          <div className="dmain-pricing-warning">
            <AlertCircle size={24} />
            <div>
              <h4>Transparent Transportation Guidance</h4>
              <p>Families searching for emergency ambulance near me or dead body transport services often face confusion regarding pricing. We provide clear support and honest estimates.</p>
            </div>
          </div>
          <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open('tel:+919619159990', '_blank')}>
            <Phone size={18} /> Get Cost in 10 Minutes
          </button>
        </div>
      </section>

      {/* Coverage */}
      <section className="dmain-coverage-section">
        <div className="dmain-section-header">
          <span className="dmain-section-tag">Coverage Area</span>
          <h2>Dead Body Ambulance & Transport Services Across Delhi NCR</h2>
          <p>We provide deceased body transport and emergency ambulance support across Delhi and nearby regions.</p>
        </div>
        <div className="dmain-badge-grid">
          {cities.map((city, index) => (<span key={index} className="dmain-pill-badge">{city.icon} {city.name}</span>))}
        </div>
        <div className="dmain-badge-grid">
          {international.map((intl, index) => (<span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>{intl.icon} {intl.route}</span>))}
        </div>
        <p className="dmain-coverage-note">Need transportation from another city or hospital? Our network supports domestic transfer services across India.</p>
      </section>

      <ContactUs />
    </div>
  );
}

export default DelhiAds;
