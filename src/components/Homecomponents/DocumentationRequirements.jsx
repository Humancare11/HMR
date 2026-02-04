

import React from "react";
import { FaInfoCircle, FaFileAlt, FaGlobe, FaClock } from "react-icons/fa";
import "./documentation.css";

const DocumentationRequirements = () => {
  // const processSteps = [
  //   {
  //     number: 1,
  //     title: "Initial Documentation",
  //     duration: "24-48 hours",
  //     description: "Obtain death certificate and initial permits",
  //   },
  //   {
  //     number: 2,
  //     title: "Legal Compliance",
  //     duration: "2-5 days",
  //     description: "Complete all regulatory requirements and certifications",
  //   },
  //   {
  //     number: 3,
  //     title: "International Processing",
  //     duration: "5-10 days",
  //     description: "Embassy and consular documentation (international only)",
  //   },
  //   {
  //     number: 4,
  //     title: "Transport Preparation",
  //     duration: "1-2 days",
  //     description: "Final preparations and transport coordination",
  //   },
  // ];

  return (
    <div className="documentation-process container" id="documentation">
      {/* Heading */}
      <h2 className="section-title-1">Documentation Requirements</h2>
      <p className="section-subtitle">
        Understanding the legal requirements and documentation needed for human remains
        transfers ensures a smooth and compliant process.
      </p>

      {/* Important Notice */}
      <div className="important-note">
        <FaInfoCircle className="note-icon" />
        <div>
          <strong>Important Notice</strong>
          <p>
            Documentation requirements may vary by destination and local regulations.
            Our team will guide you through the specific requirements for your situation
            and handle all necessary paperwork.
          </p>
        </div>
      </div>

      {/* Transfer Cards */}
      <div className="row mt-4">
        <div className="col-md-6 mb-3">
          <div className="transfer-card">
            
            <h4><FaFileAlt className="transfer-icon" />Domestic Transfers</h4>
            <span className="tag">Within India</span>
            <ul>
              <li>Certified death certificate</li>
              <li>Aadhar card</li>
              <li>Pan card</li>
              <li>Voter ID</li>
              
            </ul>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="transfer-card">
            
            <h4><FaGlobe className="transfer-icon" />International Transfers</h4>
            <span className="tag">Overseas Destinations</span>
            <ul>
                <li>Certified death certificate</li>
              <li>Aadhar card</li>
              <li>Passport</li>
              <li>Voter ID</li>
              
            </ul>
          </div>
        </div>
      </div>

      {/* Process Timeline */}
      {/* <div className="process-timeline mt-5">
        <div className="timeline-header">
          <h2 className="section-title">Process Timeline</h2>
        </div>
        <p className="section-subtitle">
          Typical timeline for documentation and transfer preparation
        </p>

        <div className="row">
          {processSteps.map((step, idx) => (
            <div className="col-md-3 col-sm-6 mb-4" key={idx}>
              <div className="timeline-card">
                <div className="timeline-number">{step.number}</div>
                <h5>{step.title}</h5>
                <span className="duration">{step.duration}</span>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default DocumentationRequirements;
