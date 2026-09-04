import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./blogsMain.css";

// Assets
import heroBg from "../../assets/hero-dead-body-transfer.jpg";
import card1Img from "../../assets/blog1.jpg";
import card2Img from "../../assets/Byair.webp";
import card3Img from "../../assets/Train-1.webp";

const blogs = [
  {
    id: 1,
    path: "/blogs/dead-body-transport-india",
    category: "International",
    date: "July 31, 2025",
    readTime: "8 min read",
    title: "Dead Body Transport in India: Complete Guide to Moving Human Remains Safely and Legally",
    description:
      "When a loved one passes away away from their hometown, one of the most difficult responsibilities for the family is arranging their safe return",
    image: card1Img,
  },
  {
    id: 2,
    path: "/blogs/dead-body-ambulance-service",
    category: "Air Transfer",
    date: "August 31, 2025",
    readTime: "7 min read",
    title: "Dead Body Ambulance Service: How It Works, When You Need It & What to Expect",
    description:
      "The moment someone dies at a place outside their hometown, it may befall the family to sort out the deceased's transportation, quite an unexpected burden. ",
    image: card2Img,
  },
  {
    id: 3,
    path: "/blogs/dead-body-transport-one-city-to-another",
    category: "Domestic Transfer",
    date: "September 04, 2025",
    readTime: "9 min read",
    title: "How to Transport a Dead Body from One City to Another in India",
    description:
      "When someone passes away in a city away from their hometown, the family may need to bring the deceased back for the final funeral rites. ",
    image: card3Img,
  },
];

const BlogMain = () => {
  return (
    <>
      <Helmet>
        <title>Human Remains Transfer Blogs | Expert Guides & Information</title>
        <meta
          name="description"
          content="Read expert blogs on human remains transfer, international repatriation, dead body transport by air, train and road. Trusted guidance by Human Remains Transfer."
        />
        <meta
          name="keywords"
          content="human remains transfer blog, dead body transportation guide, international repatriation process, dead body transfer by air, domestic dead body transport India"
        />
        <link rel="canonical" href="https://humanremainstransfer.com/blogs" />
      </Helmet>

      {/* ─── Hero Section ─────────────────────────────────── */}
      <section
        className="bm-hero"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-label="Blog listing hero"
      >
        <div className="bm-hero-content">
          <span className="bm-hero-badge">Knowledge &amp; Guidance</span>
          <h1 className="bm-hero-title">
            Human Remains Transfer <span>Blogs</span>
          </h1>
          <p className="bm-hero-subtitle">
            Expert insights on international repatriation, domestic deceased
            body transportation, documentation, legal compliance and dignified
            transfer procedures — by professionals you can trust.
          </p>
          <div className="bm-hero-divider" />
        </div>
      </section>

      {/* ─── Blog Grid Section ────────────────────────────── */}
      <section className="bm-section" aria-label="Blog articles">
        <div className="bm-container">
          {/* Section Header */}
          <div className="bm-section-header">
            <span className="bm-section-label">Our Articles</span>
            <h2 className="bm-section-title">
              Helpful Resources for Families &amp; Professionals
            </h2>
            <p className="bm-section-desc">
              Carefully researched guides covering every aspect of safe,
              dignified and legally compliant human remains transportation.
            </p>
          </div>

          {/* 3-Card Grid */}
          <div className="bm-grid">
            {blogs.map((blog) => (
              <Link
                to={blog.path}
                className="bm-card"
                key={blog.id}
                aria-label={`Read blog: ${blog.title}`}
              >
                {/* Background image */}
                <div
                  className="bm-card-bg"
                  style={{ backgroundImage: `url(${blog.image})` }}
                />

                {/* Gradient overlay */}
                <div className="bm-card-overlay" />

                {/* Glass content box */}
                <div className="bm-card-body">
                  {/* <span className="bm-card-category">{blog.category}</span> */}
                  <div className="bm-card-meta">
                    <span className="bm-card-date"> {blog.date}</span>
                    <span className="bm-card-dot" aria-hidden="true">·</span>
                    <span className="bm-card-read"> {blog.readTime}</span>
                  </div>
                  <h3 className="bm-card-title">{blog.title}</h3>
                  <p className="bm-card-desc">{blog.description}</p>
                  <span className="bm-btn">
                    Know More{" "}
                    <span className="bm-btn-arrow" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogMain;
