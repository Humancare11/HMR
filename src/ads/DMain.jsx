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

function DMain() {

    const data = [
        {
            icon: <Plane />,
            title: "Complex Repatriation Procedures",
            desc: "International body repatriation requires embassy approvals, cargo booking, and legal documentation.",
        },
        {
            icon: <Ambulance />,
            title: "Funeral Home Coordination",
            desc: "Transporting a body to a funeral home or burial location requires timely and careful arrangements.",
        },
        {
            icon: <FileText />,
            title: "Sensitive Handling Requirements",
            desc: "Human remains transportation must be handled respectfully and professionally throughout the journey.",
        },
        {
            icon: <AlertCircle />,
            title: "Multiple Agency Coordination",
            desc: "Families often struggle managing hospitals, mortuaries, airlines, embassies, and local authorities together.",
        },
    ];

    // 
    const features = [
        {
            title: "Experienced Repatriation Team",
            desc: "Our specialists handle domestic and international body transfer procedures professionally.",
        },
        {
            title: "Complete Documentation Assistance",
            desc: "We guide families through airline, embassy, and funeral transportation paperwork.",
        },
        {
            title: "Respectful Human Remains Handling",
            desc: "Every transfer is managed with care, dignity, and professionalism.",
        },
        {
            title: "Transparent Communication",
            desc: "Families receive timely updates and clear guidance throughout the process.",
        },
        {
            title: "24/7 Emergency Availability",
            desc: "Available anytime for urgent funeral transport or repatriation requirements.",
        },
        {
            title: "Domestic & International Coverage",
            desc: "Support available across India and worldwide destinations.",
        },
        {
            title: "Coordination with Funeral Homes",
            desc: "We assist with smooth transfers between hospitals, airports, funeral homes, and burial locations.",
        },
        {
            title: "Dedicated Family Support Coordinator",
            desc: "One experienced coordinator manages the process from start to finish.",
        },
    ];
    // steps
    const steps = [
        {
            icon: <Phone size={22} />,
            title: "Contact Our Team",
            desc: "Share transportation requirements, destination details, and preferred arrangements.",
            step: "1",
        },
        {
            icon: <FileText size={22} />,
            title: " Documentation & Planning",
            desc: "We explain the process, required approvals, and transportation arrangements.",
            step: "2",
        },
        {
            icon: <Settings size={22} />,
            title: "Transportation Coordination",
            desc: "Our team manages ambulance support, airline booking, embalming, and funeral home coordination.",
            step: "3",
        },
        {
            icon: <Plane size={22} />,
            title: "Safe & Dignified Final Transfer",
            desc: "The deceased is respectfully transported to the funeral home, burial site, or destination country.",
            step: "4",
        },
    ];
    // stat
    const stats = [
        { number: "2200+", label: "Human remains transfers completed" },
        { number: "21+ Years", label: "Experience in repatriation & funeral coordination" },
        { number: "24/7", label: "Emergency support available" },
        { number: "100%", label: "Respectful & dignified handling" },
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
        { route: "UAE", icon: "📍" },
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
                    Professional Human Remains Transport<br /> <span>& Repatriation Services </span>
                </h1>
                <p className="demo-hero-desc">
                    Dignified Repatriation, Funeral Home & Burial Transportation Assistance
                </p>

                <h2 className="demo-hero-subtitle"> Repatriation of Body | Human Remains Transport Services | Funeral & Burial Transfer Support </h2>

                {/* Description */}
                <p className="demo-hero-desc">
                    We provide compassionate and professional assistance for repatriation of body, funeral home transportation, and human remains transfer services across India and internationally. Our experienced team manages every aspect of the process with dignity, respect, and complete coordination.
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
                            <h4> 24/7 Coordination </h4>
                            <p> Immediate support for urgent transportation needs </p>

                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Plane />
                        <div>
                            <h4>Domestic & International</h4>
                            <p>Repatriation and funeral transport worldwide</p>
                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Globe />
                        <div>
                            <h4>Professional Handling </h4>
                            <p>Respectful and dignified transfer assistance</p>
                        </div>
                    </div>
                </div>

                {/* INTRODUCTION */}
                <div className="demo-section-two-container">

                    {/* LEFT Content */}
                    <div className="section-two-content">

                        <h2>
                            Trusted Human Remains Transport Services for Families Worldwide

                        </h2>

                        <p className="desc">
                            Losing a loved one away from home can be emotionally overwhelming. During such difficult times, arranging transportation, documentation, and final journey formalities can feel extremely stressful for families. <br />

                            Our team specializes in repatriation of body and professional human remains transport services, helping families transport deceased loved ones safely and respectfully to funeral homes, burial grounds, hometowns, or international destinations. <br />

                            Whether you require corpse transportation service within India, international body repatriation, or transporting bodies for burial, we provide complete assistance with airline coordination, ambulance arrangements, documentation, embalming, and funeral home transfers. <br />

                            We work with hospitals, embassies, funeral directors, airlines, and local authorities to ensure every transfer is handled smoothly and professionally. <br />
                        </p>

                        {/* <ul>
              <li> • Quick response within 10–30 minutes </li>
              <li> • Available for dead body transport by air in India & Mumbai </li>
              <li> • Trusted for human remains transportation & repatriation of human remains</li>
              <li> • 24/7 response — we answer every call </li>
            </ul> */}
                    </div>

                    {/* Rigth Image */}
                    <div className="demo-section-two-image">
                        <img src={serv3} alt="transport" />
                    </div>
                </div>

                {/* <p className='desc-1'> We believe families deserve clear information and fair pricing during difficult times. That is why we explain every cost factor transparently before beginning the transportation process. </p> */}
            </section>

            {/* section 2  urgent*/}
            <div className="urgent-strip">

                <h3>Need Immediate Repatriation or Funeral Transport Assistance?
</h3>
                <p>
                    <strong>
                        24/7 support for human remains transport and burial transfer services.

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
                        Families deserve compassionate support during difficult moments.
                    </h2>
                    <p className="demo-emergency-subtitle">
                        Managing funeral transportation and repatriation procedures alone can become emotionally exhausting. Delays, paperwork issues, and coordination challenges often add more stress during an already painful time.
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
                        Complete Human Remains & Funeral Transportation Services
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
                                <h3> REPATRIATION OF BODY </h3>
                                <ul>
                                    <li>• International repatriation assistance </li>
                                    <li>• Human remains air cargo coordination </li>
                                    <li>• Embassy and consulate support </li>
                                    <li>• Airport clearance and documentation </li>
                                    {/* <li>• Immediate pickup coordination</li> */}
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Ambulance size={32} />
                                </div>
                                <h3>HUMAN REMAINS TRANSPORT SERVICES</h3>
                                <ul>
                                    <li>• Domestic and international transfer support</li>
                                    <li>• Professional corpse transportation service </li>
                                    <li>• Airport-to-funeral-home coordination </li>
                                    <li>• Interstate transportation arrangements </li>
                                    {/* <li>• Door-to-door transportation support</li> */}
                                </ul>
                            </div>

                            {/* Card 3 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Map size={32} />
                                </div>
                                <h3>FUNERAL HOME & BURIAL TRANSPORT </h3>
                                <ul>
                                    <li>• Transport body to funeral home assistance </li>
                                    <li>• Transportation to burial or cremation locations </li>
                                    <li>• Long-distance funeral transportation </li>
                                    <li>• Local and interstate burial transfer support </li>

                                </ul>
                            </div>

                            {/* Card 4 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Globe size={32} />
                                </div>
                                <h3>DOCUMENTATION & PRESERVATION SUPPORT</h3>
                                <ul>
                                    <li>• Embalming arrangements </li>
                                    <li>• Coffin box preparation </li>
                                    <li>• Death certificate guidance  </li>
                                    <li>• Transportation and cargo paperwork assistance </li>

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
                       Compassionate & Professional Repatriation Support
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
                       Simple & Respectful 4-Step Process
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
                        Trusted for Professional Human Remains Transportation   
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
                        What Affects Dead Body Transportation Cost?What Does Repatriation & Funeral Transportation Cost?

                    </h2>

                    <p className="demo-pricing-subtitle">
                       Every transportation case is unique. Costs depend on the distance, transportation method, documentation requirements, and destination country or state.

                    </p>

                    <div className="demo-pricing-card">
                        <div className="pricing-badge">
                            No Hidden Charges · Upfront Estimate
                        </div>

                        <h3 className="pricing-card-title">COST FACTORS:</h3>

                        <div className="pricing-factors">
                            <span className="factor-badge">📍 Domestic or international transfer</span>
                            <span className="factor-badge">🌍 Air cargo or road ambulance transportation
                            </span>
                            <span className="factor-badge">🗺️ Distance and destination</span>
                            <span className="factor-badge"> ⚕ Embalming and coffin preparation</span>
                            <span className="factor-badge"> 📄 Embassy & documentation requirements</span>
                            <span className="factor-badge"> 🥀 Funeral home and burial coordination</span>
                            {/* <span className="factor-badge">🚨 Emergency or same-day arrangements</span> */}
                        </div>

                        <div className="pricing-warning">
                            <AlertCircle size={20} />
                            <div>
                                <h4>Transparent Pricing & Guidance</h4>
                                <p>Families often face uncertainty during emergencies. We provide clear explanations and fair pricing support from the beginning.</p>
                            </div>
                        </div>

                        {/* <p className="pricing-cta">
                            Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
                        </p> */}

                        <button className="pricing-btn" onClick={() => window.location.href = 'tel:+919833444040'}>
                            <Phone size={18} /> Get Cost in 10 Minutes
                        </button>
                    </div>
                </div>
            </section>

            {/* section 9: Coverage */}
            <section className="demo-coverage-section">
                <div className="demo-coverage-container">
                    <span className="coverage-tag">We Serve</span>

                    <h2 className="demo-coverage-title">
                       Domestic & International Repatriation Coverage
                    </h2>

                    <p className="demo-coverage-subtitle">
                       We provide human remains transport services across India and worldwide destinations.
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
                       Need transportation assistance for another city or country? Our team coordinates transfers worldwide.
                    </p>
                </div>
            </section>

            <ContactUs />


        </>
    );
};

export default DMain;