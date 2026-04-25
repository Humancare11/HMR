import React, { useState } from 'react'
import './blogMain.css'
import { Phone, MessageCircle } from 'lucide-react';

// hero statistics data
const stats = [
  { num: "200+", label: "Expert Articles" },
  { num: "24/7", label: "Support Available" },
  { num: "50+", label: "Cities Covered" },
];

// Filter bar 
const categories = [
  { name: "All" },
  { name: "Dead Body Transport" },
  { name: "Air Cargo Process" },
  { name: "Documentation & Legal" },
  { name: "International Repatriation" },
  { name: "Funeral Services" },
  { name: "Cost & Pricing" },
];
// grid 
const blogPosts = [
  {
    id: 1,
    colorClass: "c1",
    icon: "📋",
    category: "Documentation",
    title: "Documents Required for Dead Body Air Transport",
    excerpt:
      "A complete checklist of all paperwork, clearances, and permits you'll need before and during the transport.",
    // readTime: "7 min read",
  },
  {
    id: 2,
    colorClass: "c2",
    icon: "💰",
    category: "Cost & Pricing",
    title: "How Much Does Human Remains Transfer Cost?",
    excerpt:
      "Transparent cost breakdown — domestic vs international, air vs road, and what factors affect final pricing.",
    // readTime: "5 min read",
  },
  {
    id: 3,
    colorClass: "c3",
    icon: "🌏",
    category: "International Repatriation",
    title: "Domestic vs International Body Transport Explained",
    excerpt:
      "Key differences in process, regulation, timeline, and cost between domestic and cross-border transfers.",
    // readTime: "8 min read",
  },
  {
    id: 4,
    colorClass: "c4",
    icon: "🕊",
    category: "Funeral Services",
    title: "Step-by-Step Funeral Transfer Process",
    excerpt:
      "From hospital release to final resting — a clear, dignified walkthrough of every stage involved.",
    // readTime: "10 min read",
  },
  {
    id: 5,
    colorClass: "c5",
    icon: "🚑",
    category: "Dead Body Transport",
    title: "How to Book an Emergency Dead Body Ambulance",
    excerpt:
      "Who to call, what to expect, average arrival time, and what documents to keep ready during an emergency.",
    // readTime: "4 min read",
  },
  {
    id: 6,
    colorClass: "c1",
    icon: "⚖️",
    category: "Documentation & Legal",
    title: "Legal Requirements for Cross-State Body Transfer",
    excerpt:
      "NOC, death certificates, embalming norms — understand every legal requirement before moving remains across states.",
    // readTime: "6 min read",
  },
];

// slide bar data
const popularPosts = [
  { num: "01", title: "Air transport documents checklist" },
  { num: "02", title: "Complete cost guide 2025" },
  { num: "03", title: "International repatriation steps" },
  { num: "04", title: "Emergency ambulance booking" },
];
// Trust 
const trustItems = [
  {
    icon: "🕐",
    title: "24/7 Support",
    desc: "Round-the-clock assistance from trained specialists ready to help at any hour.",
  },
  {
    icon: "📋",
    title: "Legal Documentation",
    desc: "Full guidance on NOC, embalming certificates, and all required paperwork.",
  },
  {
    icon: "🌐",
    title: "International Coverage",
    desc: "Repatriation support to 80+ countries with local coordination at every step.",
  },
  {
    icon: "🕊",
    title: "Compassionate Handling",
    desc: "Every transfer is treated with the utmost dignity, respect, and cultural sensitivity.",
  },
];


// blog card Fnct
function BlogCard({ colorClass, icon, category, title, excerpt, readTime }) {
  return (
    <div className="blog-card">
      <div className="blog-card-img">
        <div className={`card-img-bg ${colorClass}`}>
          <div className="card-img-icon">{icon}</div>
        </div>
        <span className="card-cat">{category}</span>
      </div>
      <div className="blog-card-body">
        <h3>{title}</h3>
        <p className="card-excerpt">{excerpt}</p>
        <div className="card-footer">
          <span className="read-time">🕐 {readTime}</span>
          <button className="card-cta">Read More →</button>
        </div>
      </div>
    </div>
  );
}

function BlogMain() {
  const [active, setActive] = useState("All");
  return (
    <>
      {/* Hero Section */}
      <section className='blog-hero-section'>
        <div className="blog-hero-container">
          <div className="blog-hero-content">
            <div className="blog-hero-badge">✦ Compassionate Guidance</div>
            <h1>
              Guiding You Through Every Step of{" "}
              <em>Human Remains Transfer</em>
            </h1>
            <p>
              Compassionate insights, legal guidance, and step-by-step help during
              the most difficult times. We're here, every hour of every day.
            </p>
            <div className="blog-hero-btns">
              <a href="#" className="btn-primary">
                Explore Articles
              </a>
              <a href="#" className="btn-outline">
                Get Immediate Assistance
              </a>
            </div>
            <div className="blog-hero-stats">
              {stats.map(({ num, label }) => (
                <div className="stat-item" key={label}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --------------- filter Bar ------------------ */}
      <section className='blog-filter-bar-section'>
        <div className="blog-filter-bar">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className={`filter-btn${active === cat.name ? " active" : ""}`}
              onClick={() => setActive(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>
      {/* -----------------------Main ---------------------- */}
      <section className="blog-main">
        <div className="page-body">
          <main className="main-content">

            {/*-------------------- Feature ----------------------  */}
            <div className="featured-label">★ Featured Guide</div>
            <div className="featured-card">
              <div className="featured-img">
                <div className="featured-img-inner">✈</div>
                <div className="featured-img-overlay">
                  <span className="featured-img-tag">Air Cargo Process</span>
                </div>
              </div>
              <div className="featured-content">
                <span className="tag">Complete Guide</span>
                <h2>Complete Guide to Dead Body Transport by Air in India</h2>
                <p>
                  Step-by-step process, required documents, estimated costs, and
                  realistic timelines — everything you need explained clearly and
                  compassionately.
                </p>
                {/* <div className="meta-row">
                  <span>🕐 12 min read</span>
                  <span>•</span>
                  <span>Updated April 2025</span>
                </div> */}
                <button className="read-more-btn">Read Full Guide →</button>
              </div>
            </div>


            {/* --------------------Grid ----------------- */}
            <div className="blog-grid-container">
              <div className="blog-section-header">
                <h2>Latest Articles</h2>
                <a href="#" className="view-all">
                  View all articles →
                </a>
              </div>
              <div className="blog-grid">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} {...post} />
                ))}
              </div>
            </div>
          </main>

          {/* ---------------- Side bar ---------------*/}
          <aside className="blog-sidebar">

            {/* Search */}
            <div className="blog-side-card">
              <h4>Search Articles</h4>
              <div className="blog-search-row">
                <input type="text" placeholder="Search topics..." />
                <button>Go</button>
              </div>
            </div>

            {/* Emergency Box */}
            <div className="blog-emergency-box">
              <h4>Need Immediate Help?</h4>
              <p>Our team is available 24/7 for urgent assistance.</p>
              <div className="blog-em-buttons">
                <button className="blog-em-btn call" onClick={() => window.location.href = 'tel:+919833444040'}>
                  <Phone size={18} /> Call Now
                </button>
                <button className="blog-em-btn whatsapp" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                  <MessageCircle size={18} /> WhatsApp Now
                </button>
              </div>
            </div>

            {/* Popular Posts */}
            <div className="blog-side-card">
              <h4>Popular Posts</h4>
              {popularPosts.map((post) => (
                <div className="blog-popular-post" key={post.num}>
                  <span className="pop-num">{post.num}</span>
                  <div>
                    <div className="pop-title">{post.title}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Categories */}
            <div className="blog-side-card">
              <h4>Categories</h4>
              <ul className="blog-cat-list">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    {cat.name}
                  </li>
                ))}
              </ul>
            </div>

          </aside>

        </div>
      </section>

      {/* -------- Trust ------------- */}
      <div className="trust-section">
        <div className="trust-inner">
          <h2>Why Families Trust Us</h2>
          <p>
            Providing dignified, professional, and compassionate support across India and
            internationally.
          </p>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div className="trust-card" key={item.title}>
                <div className="trust-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ----------CTA----------- */}
      <section className="blog-cta">
        <div className="blog-cta-banner">
          <div className="blog-cta-banner-inner">
            <h2>Need Immediate Help with Human Remains Transfer?</h2>
            <p>
              Our compassionate specialists are on call right now. Reach us by phone,
              WhatsApp, or submit a quote request — we respond within minutes.
            </p>
            <div className="blog-cta-btns">
              <button className="btn-call" onClick={() => window.location.href = 'tel:+919833444040'}>
                <Phone size={18} />  Call Now
              </button>

              <button className="btn-wa" onClick={() => window.open('https://wa.me/+919833444040', '_blank')}>
                <MessageCircle size={18} /> WhatsApp Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default BlogMain