// Footer.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { BiInfoCircle } from "react-icons/bi";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section text-white py-5">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Human Remains Transfer</h5>
            <p>
             Human Remains Transfer, a Humancare World Wide Holdings company, provides funeral planning, urn transfer, cremation, and burial services for the repatriation of mortal remains both domestically and internationally. Certified, compliant, and compassionate, we support families around the world—24/7.
            </p>
            {/* <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaLinkedinIn /></a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5  className="fw-bold">Quick Links</h5 >
            <ul className="list-unstyled mt-3">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              {/* <li><a href="/documentation">Documentation</a></li> */}
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Our Services</h5>
            <ul className="list-unstyled mt-3">
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>International Transfers</a></li>
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>Domestic Transportation</a></li>
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>Documentation Support</a></li>
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>Embalming Services</a></li>
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>Emergency Services</a></li>
              <li><a href="tel:+919833444040"style={{ textDecoration: 'none', color: 'inherit' }}>Family Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Contact Information</h5>
            <ul className="list-unstyled mt-3">
              <li>
  <a href="tel:+919833444040" style={{ textDecoration: 'none', color: 'inherit' }}>
    <BsTelephoneFill className="me-2" />
    <strong>+919833444040</strong>
  </a>
  {/* <div className="small">24/7 Emergency Line</div> */}
</li>
<li className="mt-3">
  <a href="mailto:ops@humancareworldwide.com" style={{ textDecoration: 'none', color: 'inherit' }}>
    <MdEmail className="me-2" />
    <strong>ops@humancareworldwide.com</strong>
  </a>
</li>

              <li className="mt-3">
                <MdLocationOn className="me-2" /> 
                G-30, Dheeraj Haritage, S. V. Road, Junction, Milan Subway, Santacruz (West), Mumbai, Maharashtra 400054
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-3" />

        {/* Bottom Bar */}
        {/* <div className="d-flex flex-column flex-md-row justify-content-between small text-center"> */}
        <div className="d-flex flex-column justify-content-center align-items-center small text-center">

          <div>© 2025 Human Remains Transfer. All rights reserved.</div>
          {/* <div className="footer-links">
            <a href="#">Privacy Policy</a> | 
            <a href="#"> Terms of Service</a> | 
            <a href="#"> Legal Compliance</a>
          </div> */}
        </div>
      </div>
       <div>
   

 <div className="sticky-buttons">
  <a href="tel:+919833444040" className="sticky-btn call-btn">
    <FiPhone size={22} />
  </a>

<a
href="https://wa.me/+919833444040"
target="_blank"
rel="noopener noreferrer"
className="sticky-btn whatsapp-btn"

>


<FaWhatsapp size={22} />


  </a>
</div>



       </div>
    </footer>
  );
}