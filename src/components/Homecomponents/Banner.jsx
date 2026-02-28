import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShieldCheck, Globe, Phone } from "lucide-react";
import './banner.css';

const Banner = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center" id='home'>
      <div className="hero-content">
        <h1 className="hero-title">
          Human Remains Transfer – 24/7 Domestic & International Dead Body Transportation Services
        </h1>

        <p className="hero-subtitle">
          Compassionate, certified, and complete assistance for cremation, funeral preparation, 
          and the return of human remains in India and around the world.
        </p>

        {/* Info Icons Section */}
        {/* <div className="info-icons d-flex justify-content-center gap-4 mt-4 flex-wrap">
          
          <div className="d-flex align-items-start gap-2">
            <ShieldCheck size={28} />
            <div className="text-start">
              <strong>Licensed & Insured</strong>
              <br />
              <small>Fully certified professionals</small>
            </div>
          </div>

          <div className="d-flex align-items-start gap-2">
            <Globe size={28} />
            <div className="text-start">
              <strong>Global Service</strong>
              <br />
              <small>Domestic & international transfers</small>
            </div>
          </div>

        </div> */}

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