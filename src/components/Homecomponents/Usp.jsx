import React from "react";
import "./usp.css";
import {
  FaPlaneDeparture,
  FaMapMarkedAlt,
  FaFileAlt,
  FaHandsHelping,
  FaUserShield,
  FaClock
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
      "Flight arrangements"
    ]
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
      "Facility coordination"
    ]
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
      "Legal compliance"
    ]
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
      "Dedicated support staff"
    ]
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
      "Transport safety standards"
    ]
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
      "After-hours assistance"
    ]
  }
];

const Usp = () => {
  return (
    <section className="services-section py-5">
      <div className="container text-center">
        <h2 className="services-title">Comprehensive Human Remains Transfer Solutions
</h2>
        <p className="services-subtitle mx-auto mt-3">
          Professional assistance in Mortal Remains Transfer, cremation, burial, urn transfer, and funeral arrangements.
        </p>

        <div className="row mt-5 g-4">
          {servicesData.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="service-card p-4 text-start">
                <div className="service-icon mb-3">{service.icon}</div>
                <h5 className="fw-bold">{service.title}</h5>
                <p>{service.description}</p>
                <ul className="list-unstyled mt-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="mb-1">
                      <span className="bullet-dot"></span> {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Usp;