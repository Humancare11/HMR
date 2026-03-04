import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShieldCheck, Globe, Phone } from "lucide-react";
import './banner.css';
import bannerImg from "../../assets/banner.webp";

const Banner = () => {
  return (
    <section
      className="hero-section d-flex align-items-center justify-content-center text-center"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.5)), url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          Human Remains Transfer – 24/7 Domestic & International Dead Body Transportation Services
        </h1>

        <p className="hero-subtitle">
          Compassionate, certified, and complete assistance for cremation, funeral preparation,
          and the return of human remains in India and around the world.
        </p>

        {/* CTA Buttons */}
        <div className="d-flex gap-3 flex-wrap justify-content-center mt-4">
          <a href="tel:+919833444040" className="btn-custom d-flex align-items-center gap-2">
            <Phone size={18} />
            Call Now
          </a>
        </div>

        <h4 className="hero-subtitle mt-3">
          Call for Immediate Assistance
        </h4>
      </div>
    </section>
  );
};

export default Banner;