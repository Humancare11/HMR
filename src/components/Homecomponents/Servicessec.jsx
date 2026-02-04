


import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./services.css";

import serv1 from "../../assets/serv1.png"; // Replace with your images
import serv2 from "../../assets/serv2.png";
import serv3 from "../../assets/serv3.png";
import serv4 from "../../assets/serv4.png";


const Services = () => {
  const serviceData = [
    {
      image: serv1,
      title: "Mortal Remains Transfer",
      text: " We take care of Mortal Remains Transport completely, making sure that the remains are moved between cities and countries in a respectful and timely manner."
    },
    {
      image: serv2,
      title: "Cremation & Burial Assistance",
      text: " With our Cremation and Burial Assistance, families can plan ceremonies with care, respect, and full logistical support."
    },
    {
      image: serv3,
      title: "URN Transfer",
      text: "For the safe, timely, and dignified transportation of cremated remains to the preferred location, we provide URN Transfer Services."
    },
    {
      image: serv4,
      title: "Funeral Arrangement Assistance",
      text: "From documentation to the ceremony, our funeral arrangement assistance takes care of everything, supporting families with both practical and emotional needs."
    }
  ];

  return (
    <section className="services-section py-5" id="services">
      <div className="container">
        <h2 className="text-center mb-3">Our Professional Services</h2>
        <p className="text-center mb-5 service-subtitle">
          Comprehensive human remains transfer services designed to meet all your needs with dignity,
          professionalism, and regulatory compliance.
        </p>

        <div className="row g-4">
          {serviceData.map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-3" key={index}>
              <div className="service-card h-100">
                <div className="service-img-wrapper">
                  <img src={service.image} alt={service.title} className="service-img" />
                </div>
                <div className="p-3 text-center">
                  <h5 className="fw-bold">{service.title}</h5>
                  <p className="service-text">{service.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 