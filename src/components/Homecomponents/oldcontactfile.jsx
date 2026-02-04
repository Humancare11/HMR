import React from "react";
import "./ContactUs.css";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="contact-us container my-5" id ="contact">
      <h2 className="contact-title text-center">Contact Us</h2>
      <p className="contact-subtitle text-center">
        We're here to help you 24/7. Reach out to us for immediate assistance or to discuss
        your specific transfer requirements.
      </p>

      <div className="row mt-5">
        {/* Left Form Section */}
        <div className="col-lg-6">
          <div className="contact-form-box p-4 h-100">
            <h4 className="form-title">Send Us a Message</h4>
            <form>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Name *" />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email *" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Please describe your transfer requirements or questions..."
                ></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="col-lg-6">
          <div className="emergency-box p-4 mb-4">
            <h4>Emergency Services</h4>
            <p>
              For urgent transfer needs, call our 24/7 emergency line immediately. Our team is
              standing by to provide immediate assistance.
            </p>
        <a href="tel:+919699999065">
  <button className="call-btn">Call Emergency Line</button>
</a>

          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiPhone /></div>
                <div>
                  <h6>24/7 Emergency Line</h6>
                  <p>  <a href="tel:+91 9699999065 "style={{ textDecoration: 'none', color: 'inherit' }}>
      +91 9699999065
    </a></p>
                  <small>Available 24/7</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiMail /></div>
                <div>
                  <h6>Email Support</h6>
                  <p>   <a href="mailto:ops@humancareworldwide.com"style={{ textDecoration: 'none', color: 'inherit' }}>
      ops@humancareworldwide.com
    </a></p>
                  <p>   <a href="mailto:gcc.ops@humancareworldwide.com"style={{ textDecoration: 'none', color: 'inherit' }}>
      gcc.ops@humancareworldwide.com
    </a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiMapPin /></div>
                <div>
                  <h6>Main Office</h6>
                  <p>G-30, Dheeraj Haritage, S. V. Road, Junction, Milan Subway, Santacruz (West), Mumbai, Maharashtra 400054</p>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiClock /></div>
                <div>
                  <h6>Business Hours</h6>
                  <p>Mon-Sun: Open 24 Hours </p>
                  <small>Emergency services: 24/7</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
