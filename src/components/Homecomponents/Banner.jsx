import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './banner.css';

const Banner = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center" id='home'>
      <div className="hero-content">
        <h1 className="hero-title">
        Human Remains Transfer – 24/7 Domestic & International Dead Body Transportation Services
        </h1>
        <p className="hero-subtitle">
         Compassionate, certified, and complete assistance for cremation, funeral preparation, and the return of human remains in India and around the world.
        </p>
        {/* <div className="info-icons justify-content-center">
          <div>
            <i className="bi bi-shield-check"></i>
            <div>
              <strong>Licensed & Insured</strong>
              <br />
              <small>Fully certified professionals</small>
            </div>
          </div>
          <div>
            <i className="bi bi-globe"></i>
            <div>
              <strong>Global Service</strong>
              <br />
              <small>Domestic & international transfers</small>
            </div>
          </div>
        </div> */}
        <div className="d-flex gap-3 flex-wrap justify-content-center">
          
          <a href="tel: +919833444040" className="btn-custom">
 +919833444040
</a>

          {/* <button className="btn-outline-custom">
            Learn About Our Services
          </button> */}
        </div>
        <h4 className="hero-subtitle">
Call for Immediate Assistance         </h4>
      </div>
    </section>
  );
};

export default Banner;
