import React from "react";
import "./usp.css";
import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaFileAlt,
  FaHandsHelping,
  FaUserShield,
  FaClock,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaPlaneDeparture size={28} />,
    title: "International Transfers",
    description:
      "Complete international repatriation services including all necessary documentation, permits, and coordination with international authorities.",
    points: [
      "Embassy coordination",
      "International permits",
      "Customs clearance",
      "Flight arrangements",
    ],
  },
  {
    icon: <FaMapMarkedAlt size={28} />,
    title: "Domestic Transfers",
    description:
      "Professional domestic transportation services across all states with proper documentation and regulatory compliance.",
    points: [
      "State-to-state transport",
      "Local permits",
      "Ground transportation",
      "Facility coordination",
    ],
  },
  {
    icon: <FaFileAlt size={28} />,
    title: "Documentation Support",
    description:
      "Complete assistance with all legal documentation, permits, and certifications required for transfers.",
    points: [
      "Death certificates",
      "Transit permits",
      "Embassy documents",
      "Legal compliance",
    ],
  },
  {
    icon: <FaHandsHelping size={28} />,
    title: "Family Assistance",
    description:
      "Compassionate guidance for families throughout the transfer process, offering clear communication and emotional support.",
    points: [
      "Counseling referrals",
      "Regular updates",
      "Travel guidance",
      "Dedicated support staff",
    ],
  },
  {
    icon: <FaUserShield size={28} />,
    title: "Regulatory Compliance",
    description:
      "Ensuring all services adhere to both local and international laws with meticulous attention to detail.",
    points: [
      "Government approvals",
      "Health regulations",
      "Customs compliance",
      "Transport safety standards",
    ],
  },
  {
    icon: <FaClock size={28} />,
    title: "24/7 Emergency Services",
    description:
      "Round-the-clock availability for urgent requests to ensure timely and efficient service.",
    points: [
      "Immediate response",
      "Rapid documentation",
      "Priority transportation",
      "After-hours assistance",
    ],
  },
];

const Usp = () => {
  return (
    <section className="hr-transfer-section">
      <div className="hr-transfer-container">
        <h2 className="hr-transfer-heading">
          Comprehensive Human Remains Transfer Solutions
        </h2>

        <p className="hr-transfer-subheading">
          Professional assistance in Mortal Remains Transfer, cremation, burial,
          urn transfer, and funeral arrangements.
        </p>

        <div className="hr-transfer-grid">
          {servicesData.map((item, idx) => (
            <div className="hr-transfer-card" key={idx}>
              <div className="hr-transfer-icon-wrapper">{item.icon}</div>

              <h5 className="hr-transfer-card-title">{item.title}</h5>

              <p className="hr-transfer-card-description">{item.description}</p>

              <ul className="hr-transfer-list">
                {item.points.map((point, i) => (
                  <li key={i} className="hr-transfer-list-item">
                    <span className="hr-transfer-bullet"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usp;
