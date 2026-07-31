import React from 'react'
import {
    Phone,
    MessageCircle,
    Clock,
    Plane,
    Globe,
    FileText,
    AlertCircle,
    Ambulance,
    Check,
    Settings,
    Star,
    Map,
    Shield
} from "lucide-react";
import "./dmain.css";
import serv3 from "../assets/serv3.webp";
import heroCoffin from "../assets/Dead-Body-transfer.jpeg";
import ContactUs from '../components/ContactUs';

function DMain() {

    const [testimonialIndex, setTestimonialIndex] = React.useState(0);

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

    // features
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
            title: "24/7 Availability",
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
        { number: "24/7", label: "Support available" },
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
        {
            text: "Excellent service provided by Human Remains Transfer for my uncle’s body repatriation from Canada to Hyderabad. They handled airline clearances, embassy NOCs, and ambulance transport with absolute dignity.",
            name: "Kiran K., Hyderabad",
        },
        {
            text: "We needed immediate dead body transport from Mumbai to Pune at midnight. Their coordinator answered the call instantly and arranged a fully equipped hearse van for dignified transfer. Thank you for the support.",
            name: "Amit P., Pune",
        },
        {
            text: "Outstanding coordination and transparency in pricing. Transferred my grandmother's remains from Delhi to Chennai. No hidden charges, and documentation assistance was superb. Compassionate team.",
            name: "Srinivasan R., Chennai",
        }
    ];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

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
    ];

    return (
        <div className="dmain-wrapper">
            {/* section 1: Hero Banner */}
            <section className="dmain-hero">

                {/* Background photo layer: coffin + plane, masked into the dark background */}
                <div className="dmain-hero-image">
                    <img src={heroCoffin} alt="Coffin repatriation air cargo transfer" />
                    {/* Color-grade tint: pulls the photo's warm sunset tones toward the
                        site's navy palette so the image reads as part of the same scene
                        rather than a photo pasted on top of a solid background. */}
                    <div className="dmain-hero-image-tint"></div>
                </div>

                <div className="dmain-hero-container">

                    <div className="dmain-hero-left">
                        {/* Top Tags */}
                        <div className="dmain-badge-group">
                            <span className="dmain-badge"><Clock size={14} /> 24/7 Available</span>
                            <span className="dmain-badge">📍 Pan India & International</span>
                        </div>

                        {/* Heading */}
                        <h1 className="dmain-hero-title">
                            Need Urgent<br /> <span>Dead Body Transport by Air?</span>
                        </h1>

                        <h2 className="dmain-hero-subtitle">
                            24×7 Domestic & International Human Remains Cargo Services
                        </h2>

                        {/* Ratings */}
                        <div className="dmain-rating-bar">
                            <div className="dmain-stars">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                                ))}
                            </div>
                            <span className="dmain-rating-text">
                                2200+ Transfers &nbsp;|&nbsp; 21+ Years Experience &nbsp;|&nbsp; Pan India & Worldwide
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="dmain-btn-group">
                            <button className="dmain-btn-double dmain-btn-double-red" onClick={() => window.open('tel:+919833444040', '_blank')}>
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

                        {/* Badges/Bullet points */}
                        <div className="dmain-hero-bullets">
                            <span className="dmain-bullet-item">⚡ Response within 2 Minutes</span>
                            <span className="dmain-bullet-item"><Shield size={16} /> No Hidden Charges</span>
                            <span className="dmain-bullet-item"><FileText size={16} /> Documentation Assistance</span>
                        </div>
                    </div>

                </div>

                {/* Bottom 4 Cards Container */}
                <div className="dmain-hero-bottom-cards-container">
                    <div className="dmain-hero-bottom-cards">
                        <div className="dmain-bottom-card">
                            <div className="dmain-bottom-card-icon"><Plane size={22} /></div>
                            <div className="dmain-bottom-card-text">
                                <h4>Air Cargo Specialists</h4>
                                <p>Fast & secure air transport across India & worldwide</p>
                            </div>
                        </div>
                        <div className="dmain-bottom-card">
                            <div className="dmain-bottom-card-icon"><FileText size={22} /></div>
                            <div className="dmain-bottom-card-text">
                                <h4>Complete Documentation</h4>
                                <p>Embassy, airline & legal documentation support</p>
                            </div>
                        </div>
                        <div className="dmain-bottom-card">
                            <div className="dmain-bottom-card-icon"><Shield size={22} /></div>
                            <div className="dmain-bottom-card-text">
                                <h4>Safe & Dignified Handling</h4>
                                <p>Professional care with respect & privacy</p>
                            </div>
                        </div>
                        <div className="dmain-bottom-card">
                            <div className="dmain-bottom-card-icon"><Phone size={22} /></div>
                            <div className="dmain-bottom-card-text">
                                <h4>24/7 Dedicated Support</h4>
                                <p>Our team is always ready to assist you anytime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="dmain-section-intro">
                <div className="dmain-intro-container">

                    {/* LEFT Content */}
                    <div className="dmain-intro-left">
                        <h2>
                            Trusted Human Remains Transport Services for Families Worldwide
                        </h2>

                        <p className="desc">
                            Losing a loved one away from home can be emotionally overwhelming. During such difficult times, arranging transportation, documentation, and final journey formalities can feel extremely stressful for families. <br /><br />
                            Our team specializes in repatriation of body and professional human remains transport services, helping families transport deceased loved ones safely and respectfully to funeral homes, burial grounds, hometowns, or international destinations. <br /><br />
                            Whether you require corpse transportation service within India, international body repatriation, or transporting bodies for burial, we provide complete assistance with airline coordination, ambulance arrangements, documentation, embalming, and funeral home transfers. <br /><br />
                            We work with hospitals, embassies, funeral directors, airlines, and local authorities to ensure every transfer is handled smoothly and professionally.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="dmain-intro-right">
                        <div className="dmain-intro-image-wrapper">
                            <img src={serv3} alt="Human Remains Transport Services" />
                        </div>

                        {/* Placeholder for Doctor/Team Credentials */}
                        {/* <div className="dmain-placeholder-card">
                            <h5><AlertCircle size={14} /> Trust Placeholder: Coordinator / Team Credentials</h5>
                            <p>Verification tags, license details, and team photos illustrating dedicated care coordinators.</p>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* section 2: Urgent Strip */}
            <section className="dmain-urgent-strip">
                <div className="dmain-urgent-container">
                    <h3>Get Immediate Repatriation or Funeral Transport Assistance</h3>
                    <p>24/7 support for human remains transport and burial transfer services.</p>

                    <div className="dmain-btn-group">
                        <button className="dmain-btn dmain-btn-danger" onClick={() => window.open('tel:+919833444040', '_blank')}>
                            <Phone size={18} /> Call Immediately
                        </button>

                        <button className="dmain-btn dmain-btn-success" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                            <MessageCircle size={18} /> WhatsApp Now
                        </button>
                    </div>
                </div>
            </section>

            {/* section 3: Emergency / Challenges */}
            <section className="dmain-emergency-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">24/7 Service</span>
                    <h2>Families deserve compassionate support during difficult moments.</h2>
                    <p>
                        Managing funeral transportation and repatriation procedures alone can become emotionally exhausting. Delays, paperwork issues, and coordination challenges often add more stress during an already painful time.
                    </p>
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

            {/* section 4: SERVICES */}
            <section className="dmain-services-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">What We Offer</span>
                    <h2>Complete Human Remains & Funeral Transportation Services</h2>
                </div>

                <div className="dmain-services-grid">
                    {/* Card 1 */}
                    <div className="dmain-service-card">
                        <div className="dmain-service-icon">
                            <Plane size={24} />
                        </div>
                        <h3>REPATRIATION OF BODY</h3>
                        <ul className="dmain-service-list">
                            <li>International repatriation assistance</li>
                            <li>Human remains air cargo coordination</li>
                            <li>Embassy and consulate support</li>
                            <li>Airport clearance and documentation</li>
                        </ul>
                    </div>

                    {/* Card 2 */}
                    <div className="dmain-service-card">
                        <div className="dmain-service-icon">
                            <Ambulance size={24} />
                        </div>
                        <h3>HUMAN REMAINS TRANSPORT</h3>
                        <ul className="dmain-service-list">
                            <li>Domestic and international transfer support</li>
                            <li>Professional corpse transportation service</li>
                            <li>Airport-to-funeral-home coordination</li>
                            <li>Interstate transportation arrangements</li>
                        </ul>
                    </div>

                    {/* Card 3 */}
                    <div className="dmain-service-card">
                        <div className="dmain-service-icon">
                            <Map size={24} />
                        </div>
                        <h3>FUNERAL & BURIAL TRANSFER</h3>
                        <ul className="dmain-service-list">
                            <li>Transport body to funeral home assistance</li>
                            <li>Transportation to burial or cremation sites</li>
                            <li>Long-distance funeral transportation</li>
                            <li>Local and interstate burial support</li>
                        </ul>
                    </div>

                    {/* Card 4 */}
                    <div className="dmain-service-card">
                        <div className="dmain-service-icon">
                            <Globe size={24} />
                        </div>
                        <h3>DOCUMENTATION & SUPPORT</h3>
                        <ul className="dmain-service-list">
                            <li>Embalming arrangements</li>
                            <li>Coffin box preparation</li>
                            <li>Death certificate guidance</li>
                            <li>Transportation and cargo paperwork</li>
                        </ul>
                    </div>
                </div>

                {/* Placeholder for Insurance Acceptance */}
                {/* <div className="dmain-placeholder-card" style={{ maxWidth: '1200px', margin: '40px auto 0' }}>
                    <h5><AlertCircle size={14} /> Trust Placeholder: Insurance Acceptance & Cashless Options</h5>
                    <p>Details about tie-ups with travel insurance companies, paperwork support for reimbursement, or cashless claim features.</p>
                </div> */}
            </section>

            {/* section 5: Why Choose Us */}
            <section className="dmain-why-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">Why Choose Us</span>
                    <h2>Compassionate & Professional Repatriation Support</h2>
                </div>

                <div className="dmain-why-grid">
                    {features.map((item, index) => (
                        <div className="dmain-why-card" key={index}>
                            <div className="dmain-why-check">
                                <Check size={16} />
                            </div>
                            <div className="dmain-why-text">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* section 6: Process */}
            <section className="dmain-process-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">How It Works</span>
                    <h2>Simple & Respectful 4-Step Process</h2>
                </div>

                <div className="dmain-process-grid">
                    {steps.map((item, index) => (
                        <div className="dmain-process-card" key={index}>
                            <div className="dmain-process-circle">
                                {item.icon}
                                <span className="step-num">{item.step}</span>
                            </div>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Placeholder for Process Explanation Video or Flowchart */}
                {/* <div className="dmain-placeholder-card" style={{ maxWidth: '1200px', margin: '40px auto 0' }}>
                    <h5><AlertCircle size={14} /> Conversion Placeholder: Step-by-Step Logistics Flowchart / Video</h5>
                    <p>An interactive chart or animated video explaining repatriation timelines, air transit, and customs stages clearly.</p>
                </div> */}
            </section>

            {/* section 7: Stats & Testimonials */}
            <section className="dmain-stats-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">Our Track Record</span>
                    <h2>Trusted for Professional Human Remains Transportation</h2>
                </div>

                {/* Stats */}
                <div className="dmain-stats-grid">
                    {stats.map((item, index) => (
                        <div className="dmain-stat-card" key={index}>
                            <h2>{item.number}</h2>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Testimonials Slider */}
                <div className="dmain-testimonial-slider-container">
                    <div className="dmain-testimonial-card dmain-active-testimonial">
                        <div className="dmain-testimonial-stars">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={18} fill="#fbbf24" color="#fbbf24" />
                            ))}
                        </div>
                        <p className="dmain-testimonial-text">"{testimonials[testimonialIndex].text}"</p>
                        <div className="dmain-testimonial-author">
                            <h4>— {testimonials[testimonialIndex].name}</h4>
                            <span className="dmain-gmb-verified">✓ Verified Google Review</span>
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="dmain-slider-dots">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`dmain-slider-dot ${index === testimonialIndex ? 'active' : ''}`}
                                onClick={() => setTestimonialIndex(index)}
                                aria-label={`Go to review ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Placeholder for More Patient Testimonials / Video Testimonials */}
                {/* <div className="dmain-placeholder-card" style={{ maxWidth: '1000px', margin: '40px auto 0' }}>
                    <h5><AlertCircle size={14} /> Trust Placeholder: Verified Video Testimonials & Written Reviews</h5>
                    <p>Embed code or links for third-party review widgets (Google Reviews, Trustpilot) and filmed client expressions of gratitude.</p>
                </div> */}
            </section>

            {/* section 8: Pricing */}
            <section className="dmain-pricing-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">Pricing</span>
                    <h2>What Does Repatriation & Funeral Transportation Cost?</h2>
                    <p>
                        Every transportation case is unique. Costs depend on the distance, transportation method, documentation requirements, and destination country or state.
                    </p>
                </div>

                <div className="dmain-pricing-card">
                    <div className="dmain-pricing-badge">
                        No Hidden Charges · Upfront Estimate
                    </div>

                    <h3>COST FACTORS:</h3>

                    <div className="dmain-factors-grid">
                        <div className="dmain-factor-badge">📍 Domestic or international transfer</div>
                        <div className="dmain-factor-badge">🌍 Air cargo or road ambulance transport</div>
                        <div className="dmain-factor-badge">🗺️ Distance and destination</div>
                        <div className="dmain-factor-badge">⚕️ Embalming and coffin preparation</div>
                        <div className="dmain-factor-badge">📄 Embassy & documentation requirements</div>
                        <div className="dmain-factor-badge">🥀 Funeral home and burial coordination</div>
                    </div>

                    <div className="dmain-pricing-warning">
                        <AlertCircle size={24} />
                        <div>
                            <h4>Transparent Pricing & Guidance</h4>
                            <p>Families often face uncertainty during emergencies. We provide clear explanations and fair pricing support from the beginning.</p>
                        </div>
                    </div>

                    <button className="dmain-btn dmain-btn-danger" style={{ width: 'auto', padding: '16px 36px' }} onClick={() => window.open('tel:+919833444040', '_blank')}>
                        <Phone size={18} /> Get Cost in 10 Minutes
                    </button>
                </div>
            </section>

            {/* section 9: Coverage */}
            <section className="dmain-coverage-section">
                <div className="dmain-section-header">
                    <span className="dmain-section-tag">We Serve</span>
                    <h2>Domestic & International Repatriation Coverage</h2>
                    <p>We provide human remains transport services across India and worldwide destinations.</p>
                </div>

                <div className="dmain-badge-grid">
                    {cities.map((city, index) => (
                        <span key={index} className="dmain-pill-badge">
                            {city.icon} {city.name}
                        </span>
                    ))}
                </div>

                <div className="dmain-badge-grid">
                    {international.map((intl, index) => (
                        <span key={index} className="dmain-pill-badge" style={{ backgroundColor: '#f1f5f9' }}>
                            {intl.icon} {intl.route}
                        </span>
                    ))}
                </div>

                {/* FAQ Placeholder */}
                {/* <div className="dmain-placeholder-card" style={{ maxWidth: '900px', margin: '40px auto 0' }}>
                    <h5><AlertCircle size={14} /> CRO Placeholder: Frequently Asked Questions (FAQ) Section</h5>
                    <p>Standard dropdown FAQs covering timeline expectations, flight rules, body preservation duration, and embassy fees details.</p>
                </div> */}

                <p className="dmain-coverage-note">
                    Need transportation assistance for another city or country? Our team coordinates transfers worldwide.
                </p>
            </section>

            {/* ContactUs Component */}
            <ContactUs />
        </div>
    );
};

export default DMain;
