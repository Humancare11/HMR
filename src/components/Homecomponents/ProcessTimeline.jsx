import React from "react";
import "./documentation.css";

const ProcessTimeline = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Documentation",
      duration: "24-48 hours",
      description: "Obtain death certificate and initial permits",
    },
    {
      number: 2,
      title: "Legal Compliance",
      duration: "2-5 days",
      description: "Complete all regulatory requirements and certifications",
    },
    {
      number: 3,
      title: "International Processing",
      duration: "5-10 days",
      description: "Embassy and consular documentation (international only)",
    },
    {
      number: 4,
      title: "Transport Preparation",
      duration: "1-2 days",
      description: "Final preparations and transport coordination",
    },
  ];

  return (
    <div className="process-timeline-section container">
      <h2 className="section-title-1">Process Timeline</h2>
      <p className="section-subtitle">
        Typical timeline for documentation and transfer preparation
      </p>

      <div className="row">
        {steps.map((step, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className="timeline-card">
              <div className="timeline-number">{step.number}</div>
              <h5>{step.title}</h5>
              <span className="duration">{step.duration}</span>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessTimeline;
