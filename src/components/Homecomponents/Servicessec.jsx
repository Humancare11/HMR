import React from "react";
import "./Servicessec.css";

import serv1 from "../../assets/serv1.webp";
import serv2 from "../../assets/serv2.webp";
import serv3 from "../../assets/serv3.webp";
import serv4 from "../../assets/serv4.webp";

const Services = () => {
  return (
    <section className="hmr-services-section">
      <div className="hmr-services-header">
        <h2>Our Professional Services</h2>
        <p>
          Comprehensive human remains transfer services designed to meet all
          your needs with dignity, professionalism, and regulatory compliance.
        </p>
      </div>

      <div className="hmr-services-container">
        <div className="hmr-service-card">
          <img src={serv1} alt="Mortal Remains Transfer" />
          <h3>Mortal Remains Transfer</h3>
          <p>
            We take care of Mortal Remains Transport completely, making sure
            that the remains are moved between cities and countries in a
            respectful and timely manner.
          </p>
        </div>

        <div className="hmr-service-card">
          <img src={serv2} alt="Cremation & Burial Assistance" />
          <h3>Cremation & Burial Assistance</h3>
          <p>
            With our Cremation and Burial Assistance, families can plan
            ceremonies with care, respect, and full logistical support.
          </p>
        </div>

        <div className="hmr-service-card">
          <img src={serv3} alt="URN Transfer" />
          <h3>URN Transfer</h3>
          <p>
            For the safe, timely, and dignified transportation of cremated
            remains to the preferred location, we provide URN Transfer Services.
          </p>
        </div>

        <div className="hmr-service-card">
          <img src={serv4} alt="Funeral Arrangement Assistance" />
          <h3>Funeral Arrangement Assistance</h3>
          <p>
            From documentation to the ceremony, our funeral arrangement
            assistance takes care of everything, supporting families with both
            practical and emotional needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
