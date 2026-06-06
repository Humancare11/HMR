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
      Truck,
    Check,
    Settings,
    Star,
    Map,



} from "lucide-react";
import "./demo.css";
import serv3 from "../assets/serv3.webp";
import ContactUs from '../components/ContactUs';

function HydAds() {

    const data = [
        {
            icon: <FileText />,
            title: "Difficulty Finding a Dead Body Ambulance",
            desc: "Many families struggle to find a reliable dead body ambulance during emergencies, especially during late-night hours.",
        },
        {
            icon: <Ambulance />,
            title: "Need to Transport Body to Another State",
            desc: "Interstate transportation requires proper planning, documentation, and experienced coordination.",
        },
        {
            icon: <Plane />,
            title: "Dead Body Transport by Air Requirements",
            desc: "Dead body by flight transportation involves airline approvals, cargo booking, embalming certificates, and airport coordination.",
        },
        {
            icon: <Truck />,
            title: "Safe Body Shifting & Body Moving",
            desc: "Families need assurance that the deceased will be transported safely and respectfully throughout the journey.",
        },
    ];

    // 
    const features = [
        {
            title: "24/7 Availability",
            desc: "Immediate dead body ambulance arrangements.",
        },
        {
            title: "Fast Ambulance Dispatch",
            desc: "Immediate dead body ambulance arrangements.",
        },
        {
            title: "Experienced Coordination Team",
            desc: "Professional support for air and road transportation.",
        },
        {
            title: "State-to-State Transportation Expertise",
            desc: "Specialized assistance for interstate deceased body transport..",
        },
        {
            title: "Dead Body Transport by Air Specialists",
            desc: "Expert coordination for cargo and airline procedures.",
        },
        {
            title: "Respectful & Dignified Handling",
            desc: "Every transfer is conducted professionally and compassionately.",
        },
        {
            title: "Transparent Communication",
            desc: "Families receive regular updates throughout the transportation process.",
        },
        {
            title: "Pan India Coverage",
            desc: "Transportation support available anywhere in India.",
        },
    ];
    // steps
    const steps = [
        {
            icon: <Phone size={22} />,
            title: "Contact Our Team",
            desc: "Call us and share pickup and destination details.",
            step: "1",
        },
        {
            icon: <FileText size={22} />,
            title: " Transportation Planning",
            desc: "We recommend the best transportation option based on distance and urgency.",
            step: "2",
        },
        {
            icon: <Settings size={22} />,
            title: "Documentation & Coordination",
            desc: "Our team arranges ambulance, air cargo, or interstate transportation.",
            step: "3",
        },
        {
            icon: <Plane size={22} />,
            title: "Safe Transfer",
            desc: "The deceased is transported respectfully to the final destination.",
            step: "4",
        },
    ];
    // stat
    const stats = [
        { number: "3000+", label: "Transportation Cases Managed" },
        { number: "21+ Years", label: "Industry Experience" },
        { number: "24/7", label: "Emergency Support" },
        { number: "100%", label: "Dignified Handling" },
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
        { name: "Hyderabad  ", icon: "📍" },
        { name: "Secunderabad", icon: "📍" },
        { name: "Warangal", icon: "📍" },
        { name: "Karimnagar ", icon: "📍" },
        { name: "Nizamabad", icon: "📍" },
        { name: "Khammam", icon: "📍" },
        { name: "Mahabubnagar", icon: "📍" },
        { name: "Adilabad", icon: "📍" },
        { name: "Sangareddy", icon: "📍" },
        { name: "Siddipet", icon: "📍" },
    ];

    const city = [
        { name: "Visakhapatnam  ", icon: "📍" },
        { name: " Tirupati ", icon: "📍" },
        { name: " Tirupati ", icon: "📍" },
        { name: "Guntur ", icon: "📍" },
        { name: "Kurnool", icon: "📍" },
        { name: "Nellore", icon: "📍" },
        { name: "Rajahmundry", icon: "📍" },
        { name: "Kadapa", icon: "📍" },
        { name: "Ongole", icon: "📍" },
        { name: "Anantapur", icon: "📍" },
    ];

    const international = [
        { route: "Telangana to Maharashtra ", icon: "📍" },
        { route: "Telangana to Tamil Nadu ", icon: "📍" },
        { route: "Telangana to Karnataka ", icon: "📍" },
        { route: "Andhra Pradesh to Kerala", icon: "📍" },
        { route: " Andhra Pradesh to Delhi", icon: "📍" },
        { route: "Andhra Pradesh to Gujarat", icon: "📍" },
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
                    Dead Body Transport Services in <br /> <span>Telangana & Andhra Pradesh </span>
                </h1>
                <p className="demo-hero-desc">
                    24/7 Dead Body Ambulance, Air Transport & Interstate Body Transfer Services
                </p>

                <h2 className="demo-hero-subtitle">Dead Body Ambulance | Dead Body Transport by Air | Dead Body Van | Deceased Body Transport Services </h2>

                {/* Description */}
                <p className="demo-hero-desc">
                    We provide professional dead body transport services across Telangana and Andhra Pradesh, offering safe and dignified transportation by road, air, and ambulance. Whether you need a dead body ambulance, dead body van, dead body by flight, or assistance to transport a body to another state, our experienced team is available 24/7 to help families during difficult times.
                </p>

                {/* CTA Buttons */}
                <div className="demo-hero-buttons">
                    <button className="demo-btn call" onClick={() => window.location.href = 'tel:+918655654798'}>
                        <Phone size={18} /> Get Cost Details
                    </button>

                    <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+918655654798', '_blank')}>
                        <MessageCircle size={18} /> WhatsApp Now
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="demo-hero-features">
                    <div className="demo-feature-card">
                        <Clock />
                        <div>
                            <h4> 24/7 Emergency Response </h4>
                            <p> Immediate assistance across Telangana & Andhra Pradesh </p>

                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Plane />
                        <div>
                            <h4>Air & Road Transportation</h4>
                            <p>Dead body transport by air and road anywhere in India</p>
                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Globe />
                        <div>
                            <h4>State-to-State Transfer </h4>
                            <p>Safe transportation to any city or state</p>
                        </div>
                    </div>
                </div>

                {/* INTRODUCTION */}
                <div className="demo-section-two-container">

                    {/* LEFT Content */}
                    <div className="section-two-content">

                        <h2>
                            Trusted Dead Body Transport Services Across Telangana & Andhra Pradesh

                        </h2>

                        <p className="desc">
                           The loss of a loved one is an emotional and challenging experience. During such difficult moments, arranging safe and timely transportation should not become an additional burden. <br />

                            {/* Our team specializes in repatriation of body and professional human remains transport services, helping families transport deceased loved ones safely and respectfully to funeral homes, burial grounds, hometowns, or international destinations. <br />

                            Whether you require corpse transportation service within India, international body repatriation, or transporting bodies for burial, we provide complete assistance with airline coordination, ambulance arrangements, documentation, embalming, and funeral home transfers. <br />

                            We work with hospitals, embassies, funeral directors, airlines, and local authorities to ensure every transfer is handled smoothly and professionally. <br /> */}
                        </p>

                        <ul>
              <li> • Dead body ambulance services</li>
              <li> • Dead body transport by air </li>
              <li> • Dead body transport by road </li>
              <li> • Dead body van services </li>
              <li> • Dead body by flight arrangements </li>
              <li> • Interstate body shifting </li>
              <li> • Body moving services </li>
              <li> • Dead body van services </li>
              <li> • State-to-state transportation </li>
            </ul>
            
                    </div>

                    {/* Rigth Image */}
                    <div className="demo-section-two-image">
                        <img src={serv3} alt="transport" />
                    </div>
                </div>

                <p className='desc-1'> Whether you need transportation within Telangana, within Andhra Pradesh, or need to transport a body to another state, our experienced coordinators handle every step with care and professionalism.</p>
            </section>

            {/* section 2  urgent*/}
            <div className="urgent-strip">

                <h3>Need Immediate Dead Body Ambulance Assistance?                </h3>
                <p>
                    <strong>
                        Our emergency team is available 24/7 for dead body transport services across Telangana and Andhra Pradesh.

                    </strong>
                </p>

                <div className="demo-hero-buttons">
                    <button className="demo-btn call" onClick={() => window.location.href = 'tel:+918655654798'}>
                        <Phone size={18} /> Call Immediately
                    </button>

                    <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+918655654798', '_blank')}>
                        <MessageCircle size={18} /> WhatsApp Now
                    </button>
                </div>
            </div>

            {/* section 3: Emergency*/}
            <section className="demo-emergency">
                <div className="demo-emergency-container">
                    <span className="emergency-tag"> 24/7 Emergency Service  </span>
                    <h2>
                       Families should not face transportation stress during difficult moments.
                    </h2>
                    <p className="demo-emergency-subtitle">
                        Transporting a deceased loved one requires urgent coordination, proper documentation, and safe handling. Delays in ambulance booking, airline approvals, or interstate transport can create additional emotional pressure for families.
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
                        Complete Dead Body Transportation Solutions
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
                                    <Ambulance size={32} />
                                </div>
                                <h3> DEAD BODY AMBULANCE SERVICES</h3>
                                <ul>
                                    <li>• 24/7 dead body ambulance </li>
                                    <li>• Emergency deceased body transport </li>
                                    <li>• Hospital-to-home transportation </li>
                                    <li>• Long-distance ambulance services </li>
                                    <li>• Mortuary vehicle support </li>
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Plane size={32} />
                                </div>
                                <h3> DEAD BODY TRANSPORT BY AIR </h3>
                                <ul>
                                    <li>• Domestic dead body transport by air</li>
                                    <li>• Dead body by flight booking assistance </li>
                                    <li>• Airport cargo coordination </li>
                                    <li>• Airline documentation support </li>
                                    <li>• Fast transportation across India </li>
                                </ul>
                            </div>

                            {/* Card 3 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Truck size={32} />
                                </div>
                                <h3>DEAD BODY VAN SERVICES </h3>
                                <ul>
                                    <li>• Dead body van arrangements </li>
                                    <li>• Mortuary van transportation </li>
                                    <li>• Interstate transfer services </li>
                                    <li>• Door-to-door transportation </li>
                                    <li>• Safe body transportation </li>

                                </ul>
                            </div>

                            {/* Card 4 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Map size={32} />
                                </div>
                                <h3>BODY SHIFTING & BODY MOVING SERVICES </h3>
                                <ul>
                                    <li>• Body shifting within Telangana </li>
                                    <li>• Body shifting within Andhra Pradesh </li>
                                    <li>• Interstate body moving  </li>
                                    <li>• Transport body to another state </li>
                                    <li>• Village and rural area transportation </li>

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
                        Why Families Trust Our Dead Body Transport Services
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
                        Simple 4-Step Transportation Process
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
                       Trusted Across Telangana & Andhra Pradesh
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
                       Affordable Dead Body Transport Services

                    </h2>

                    <p className="demo-pricing-subtitle">
                        Transportation costs depend on multiple factors including distance, transportation mode, and destination.
                    </p>

                    <div className="demo-pricing-card">
                        <div className="pricing-badge">
                            No Hidden Charges · Upfront Estimate
                        </div>

                        <h3 className="pricing-card-title">COST FACTORS:</h3>

                        <div className="pricing-factors">
                            <span className="factor-badge"> 🚑 Dead body ambulance requirements</span>
                            <span className="factor-badge"> ✈️ Dead body transport by air</span>
                            <span className="factor-badge"> 📄 Dead body van services </span>
                            <span className="factor-badge"> 📍 Interstate transportation distance</span>
                            <span className="factor-badge"> ✈️ Airport cargo charges</span>
                            <span className="factor-badge"> 🚨 Emergency arrangements</span>
                            {/* <span className="factor-badge">🚨 Emergency or same-day arrangements</span> */}
                        </div>

                        <div className="pricing-warning">
                            <AlertCircle size={20} />
                            <div>
                                <h4>Get a Quick Transportation Estimate</h4>
                                <p>Whether you need dead body transport by air, body moving services, or state-to-state transportation, our team provides transparent guidance and immediate assistance.</p>
                            </div>
                        </div>

                        {/* <p className="pricing-cta">
                            Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
                        </p> */}

                        <button className="pricing-btn" onClick={() => window.location.href = 'tel:+918655654798'}>
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
                        Dead Body Transport Coverage Across Telangana & Andhra Pradesh
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

                    <div className="demo-cities-grid">
                        {city.map((city, index) => (
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

export default HydAds;