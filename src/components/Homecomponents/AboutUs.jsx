import React from "react";
import "./AboutUs.css";




const AboutUs = () => {
  return (
    <section className="about-section py-5" id="about">
      <div className="container text-center">
        {/* About Our Professional Services */}
        <h2 className="about-title">Our Mission
        </h2>
        <p className="about-text mx-auto mt-3">
          To provide quick, respectful, and completely legal transportation of human remains, helping families through their hardest times by taking care of all the paperwork, transportation, and ceremonial needs with care, respect, and honesty.
        </p>

        {/* Our Mission */}
        <div className="mission-box mt-5 p-4">
          <h3 className="mission-title">About Us</h3>
          <p className="mission-text mt-3">
            At Human Remains Transfer, we provide safe, dignified, and regulation-compliant mortal remains transportation for grieving families across India and abroad.
            We understand the urgency and emotional difficulty of losing a loved one. For this reason, we provide full end-to-end repatriation services for human remains, which include ground logistics, airline coordination, embalming, coffin preparation, and documentation.
            Our certified staff guarantees that every step is handled with professionalism, compassion, and respect for cultural and religious beliefs, whether you require domestic dead body air transport, international mortal remains transfer, or funeral and cremation arrangements.
          </p>
          <div className="mission-line"></div>
        </div>

        {/* Core Values Section from JSON */}

      </div>
    </section>
  );
};

export default AboutUs;