import React from "react";
import {
    Phone,
    MessageCircle,
    Clock,
    Plane,
    Globe,
    FileText,   
    // CreditCard,
    AlertCircle,
    Ambulance,
    Truck,
    Check,
    Settings,
    Star,
    Map

} from "lucide-react";
import "./demo.css";
import serv3 from "../assets/serv3.webp";
import ContactUs from '../components/ContactUs';

function DelhiAds() {

    const data = [
        {
            icon: <Ambulance />,
            title: "Difficulty Finding Dead Body Ambulance Near You",
            desc: "Families often struggle to arrange immediate dead body ambulance services during emergencies.",
        },
        {
            icon: <Map />,
            title: "Challenges in Transporting Body to Another State",
            desc: "Interstate transportation requires experienced drivers, route coordination, and proper handling arrangements.",
        },
        {
            icon: <Plane />,
            title: "Air Cargo & Flight Coordination Stress",
            desc: "Dead body by air transportation involves documentation, embalming, and airline cargo approvals.",
        },
        {
            icon: <Truck />,
            title: "Confusion Between Ambulance Types",
            desc: "Many families search for body ambulance, mortuary ambulance, or ICU ambulance service near me without understanding which service is suitable.",
        },
    ];

    // why 
    const features = [
        {
            title: "Quick Emergency Response",
            desc: "Our team arranges dead body ambulance support quickly across Delhi and nearby areas.",
        },
        {
            title: "Experienced Air & Road Transfer Team",
            desc: "Professional coordination for dead body by air and interstate transport services.",
        },
        {
            title: "24/7 Ambulance Availability",
            desc: "Emergency support available day and night for urgent transportation requirements.",
        },
        {
            title: "Clean & Well-Maintained Vehicles",
            desc: "Mortuary ambulance and body ambulance vehicles are maintained for safe transportation.",
        },
        {
            title: "Transparent Coordination",
            desc: "Families receive clear guidance on procedures, documentation, and transportation arrangements.",
        },
        {
            title: "Safe & Dignified Handling",
            desc: "Every deceased body transport case is managed respectfully and professionally.",
        },
        {
            title: "Pan India Transportation Support",
            desc: "We help transport body to another state anywhere in India.",
        },
        {
            title: "Dedicated Family Assistance",
            desc: "One experienced coordinator manages the transportation process from start to finish.",
        },
    ];
    // steps
    const steps = [
        {
            icon: <Phone size={22} />,
            title: " Contact Our Team",
            desc: "Call or WhatsApp and share pickup location, destination, and transportation requirement.",
            step: "1",
        },
        {
            icon: <FileText size={22} />,
            title: "Ambulance & Transport Planning ",
            desc: "We explain available transportation options, ambulance type, and estimated arrangements.",
            step: "2",
        },
        {
            icon: <Settings size={22} />,
            title: " Documentation & Coordination",
            desc: "Our team handles ambulance dispatch, embalming guidance, and airline or interstate coordination. ",
            step: "3",
        },
        {
            icon: <Plane size={22} />,
            title: " Safe & Respectful Transfer",
            desc: "The deceased is transported safely to the destination with complete support. ",
            step: "4",
        },
    ];
    // stat
    const stats = [
        { number: "2200+", label: "Transportation cases coordinated" },
        { number: "21+ Years", label: "Experience in deceased body transport" },
        { number: "24/7", label: "Emergency ambulance support" },
        { number: "100%", label: "Safe & dignified handling" },
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
        { name: "Delhi", icon: "📍" },
        { name: "Noida", icon: "📍" },
        { name: "Gurgaon", icon: "📍" },
        { name: "Ghaziabad", icon: "📍" },
        { name: "Faridabad", icon: "📍" },
        { name: "Rohini", icon: "📍" },
        { name: "Dwarka", icon: "📍" },
        { name: "Karol Bagh", icon: "📍" },
        { name: "Saket", icon: "📍" },
        { name: "Lajpat Nagar", icon: "📍" },
    ];

    const international = [
        { route: "Mumbai", icon: "📍" },
        { route: "Banglauru ", icon: "📍" },
        { route: "Hyderabad ", icon: "📍" },
        { route: "Chennai", icon: "📍" },
        { route: "Kolkata", icon: "📍" },
        { route: "Ahmedabad", icon: "📍" },
        { route: "Pune ", icon: "📍" },
        { route: "Jaipur", icon: "📍" },
        { route: "Patna", icon: "📍" },
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
                    Professional Human Remains Transport in Delhi-<br /> <span>  24/7 Ambulance, Air & Interstate Transport </span>
                </h1>
                <p className="demo-hero-desc">
                    Professional Dead Body Transport Services Across Delhi & India
                </p>

                <h2 className="demo-hero-subtitle"> Dead Body Ambulance | Deceased Body Transport | Dead Body by Air | Interstate Body Transfer </h2>

                {/* Description */}
                <p className="demo-hero-desc">
                    We provide reliable and compassionate dead body transfer services in Delhi with complete support for dead body ambulance booking, deceased body transport by air, mortuary ambulance services, and interstate transportation across India. Our experienced team ensures safe, respectful, and timely transportation during difficult situations.
                </p>

                {/* CTA Buttons */}
                <div className="demo-hero-buttons">
                    <button className="demo-btn call" onClick={() => window.location.href = 'tel:+919619159990'}>
                        <Phone size={18} /> Call Immediately
                    </button>

                    <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+919619159990', '_blank')}>
                        <MessageCircle size={18} /> WhatsApp Now
                    </button>
                </div>

                {/* Feature Cards */}
                <div className="demo-hero-features">
                    <div className="demo-feature-card">
                        <Clock />
                        <div>
                            <h4> 24/7 Emergency Support </h4>
                            <p> Immediate dead body ambulance assistance in Delhi </p>

                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Plane />
                        <div>
                            <h4>Air & Road Transportation</h4>
                            <p>Dead body by air and interstate transfer support</p>
                        </div>
                    </div>

                    <div className="demo-feature-card">
                        <Globe />
                        <div>
                            <h4>Quick Ambulance Dispatch </h4>
                            <p> Fast response across Delhi NCR </p>
                        </div>
                    </div>
                </div>

                {/* INTRODUCTION */}
                <div className="demo-section-two-container">

                    {/* LEFT Content */}
                    <div className="section-two-content">

                        <h2>
                            Trusted Dead Body Transport Services in Delhi
                        </h2>

                        <p className="desc">
                            Arranging transportation for a deceased loved one can become emotionally exhausting, especially during emergencies. Families often struggle to find a reliable dead body ambulance near me, manage airline procedures, or arrange safe transport body to another state. <br />

                            Our team specializes in dead body transport services in Delhi with complete assistance for: <br />
                        </p>
                        <ul>
                            <li> • Dead body ambulance services </li>
                            <li> • Deceased body transport </li>
                            <li> • Dead body by air within India </li>
                            <li> • Interstate dead body transport </li>
                            <li> • Mortuary ambulance arrangements </li>
                            <li> • Body ambulance support for hospitals and homes </li>
                        </ul>
                    </div>

                    {/* Rigth Image */}
                    <div className="demo-section-two-image">
                        <img src={serv3} alt="transport" />
                    </div>
                </div>

                <p className='desc-1'> 
                    Whether you require local transportation within Delhi NCR, emergency ambulance assistance, or long-distance transfer to another state, our trained coordination team manages every step professionally and respectfully.<br /> <br />

                    We work with hospitals, airports, mortuaries, and local authorities to ensure safe and smooth transportation without delays.<br />
                </p>
            </section>

            {/* section 2  urgent*/}
            <div className="urgent-strip">

                <h3>Need Immediate Dead Body Ambulance Assistance in Delhi?
                </h3>
                <p>
                    <strong>
                        24/7 support for dead body transport, mortuary ambulance, and interstate transfer services.
                    </strong>
                </p>

                <div className="demo-hero-buttons">
                    <button className="demo-btn call" onClick={() => window.location.href = 'tel:+919619159990'}>
                        <Phone size={18} /> Call Immediately
                    </button>

                    <button className="demo-btn whatsapp" onClick={() => window.open('https://wa.me/+919619159990', '_blank')}>
                        <MessageCircle size={18} /> WhatsApp Now
                    </button>
                </div>
            </div>

            {/* section 3: Emergency*/}
            <section className="demo-emergency">
                <div className="demo-emergency-container">
                    <span className="emergency-tag"> 24/7 Emergency Service  </span>
                    <h2>
                        Families deserve quick and compassionate transportation support during emergencies.
                    </h2>
                    <p className="demo-emergency-subtitle">
                        Finding an emergency ambulance near me or arranging deceased body transport at the last moment can become extremely stressful. Delays in ambulance availability or transportation coordination can create additional emotional pressure.

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
                        Complete Dead Body Transport Services in Delhi
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
                                    <li>• 24/7 dead body ambulance in Delhi</li>
                                    <li>• Mortuary ambulance arrangements</li>
                                    <li>• Body ambulance for hospital and home transfer</li>
                                    <li>• Immediate pickup and transportation support   </li>
                                    {/* <li>• Immediate pickup coordination</li> */}
                                </ul>
                            </div>

                            {/* Card 2 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Ambulance size={32} />
                                </div>
                                <h3>DEAD BODY BY AIR</h3>
                                <ul>
                                    <li>• Domestic dead body by air coordination </li>
                                    <li>• Airline cargo booking assistance </li>
                                    <li>• Airport clearance support </li>
                                    <li>• Fast deceased body transport by flight </li>
                                    {/* <li>• Door-to-door transportation support</li> */}
                                </ul>
                            </div>

                            {/* Card 3 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Map size={32} />
                                </div>
                                <h3>INTERSTATE DECEASED BODY TRANSPORT </h3>
                                <ul>
                                    <li>• Transport body to another state safely </li>
                                    <li>• Long-distance road ambulance services </li>
                                    <li>• State-to-state deceased transportation  </li>
                                    <li>• Door-to-door transportation assistance </li>

                                </ul>
                            </div>

                            {/* Card 4 */}
                            <div className="demo-service-card">
                                <div className="demo-services-icon-box">
                                    <Globe size={32} />
                                </div>
                                <h3>EMERGENCY & ICU AMBULANCE SUPPORT </h3>
                                <ul>
                                    <li>• ICU ambulance service near me</li>
                                    <li>• Emergency ambulance near me assistance </li>
                                    <li>• Patient and deceased transfer coordination  </li>
                                    <li>• Ambulance support across Delhi NCR  </li>

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
                        Reliable & Respectful Dead Body Transport in Delhi
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
                        Trusted for Dead Body Ambulance & Transport Services in Delhi
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
                       What Is the Cost of Dead Body Transport in Delhi?
                    </h2>

                    <p className="demo-pricing-subtitle">
                        Transportation cost depends on the ambulance type, transfer distance, and mode of transportation required.
                    </p>

                    <div className="demo-pricing-card">
                        <div className="pricing-badge">
                            No Hidden Charges · Upfront Estimate
                        </div>

                        <h3 className="pricing-card-title">COST FACTORS:</h3>

                        <div className="pricing-factors">
                            <span className="factor-badge">🚑 Dead body ambulance requirement </span>
                            <span className="factor-badge">📍 Interstate transportation distance </span>
                            <span className="factor-badge">✈️ Dead body by air cargo charges</span>
                            <span className="factor-badge">📄 Mortuary ambulance or freezer box support</span>
                            <span className="factor-badge">📍 Destination city or state </span>
                            <span className="factor-badge">🚨 Emergency transportation timing </span>
                            {/* <span className="factor-badge">Emergency or same-day arrangements</span> */}
                        </div>

                        <div className="pricing-warning">
                            <AlertCircle size={20} />
                            <div>
                                <h4>Transparent Transportation Guidance</h4>
                                <p>Families searching for emergency ambulance near me or dead body transport services often face confusion regarding pricing. We provide clear support and honest estimates.</p>
                            </div>
                        </div>

                        <p className="pricing-cta">
                            Need pricing for another city or country? Our team provides customized estimates based on your transportation requirement.
                        </p>

                        <button className="pricing-btn" onClick={() => window.location.href = 'tel:+919833444040'}>
                            <Phone size={18} /> Get Cost in 10 Minutes
                        </button>
                    </div>
                </div>
            </section>

            {/* section 9: Coverage */}
            <section className="demo-coverage-section">
                <div className="demo-coverage-container">
                    <span className="coverage-tag">Coverage Area</span>

                    <h2 className="demo-coverage-title">
                       Dead Body Ambulance & Transport Services Across Delhi NCR
                    </h2>

                    <p className="demo-coverage-subtitle">
                        We provide deceased body transport and emergency ambulance support across Delhi and nearby regions.
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
                        Need transportation from another city or hospital? Our network supports domestic transfer services across India.
                    </p>
                </div>
            </section>

            <ContactUs />


        </>
    );
};

export default DelhiAds;