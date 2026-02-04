import React, { useState } from "react";
import "./ContactUs.css";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://humanremainstransfer.com/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      setStatus(result.message);
      if (result.status === "success") {
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
      }
    } catch {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-us container my-5" id="contact">
      <h2 className="contact-title text-center">Contact Us</h2>
      <p className="contact-subtitle text-center">
        We're here to help you 24/7. Reach out to us for immediate assistance or to discuss your specific transfer requirements.
      </p>
      <div className="row mt-5">
        <div className="col-lg-6">
          <div className="contact-form-box p-4 h-100">
            <h4 className="form-title">Send Us a Message</h4>
            {status && <p className="text-success">{status}</p>}
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Name *" required />
                </div>
                <div className="col-md-6 mb-3">
                  <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="form-control" placeholder="Phone" />
                </div>
              </div>
              <div className="mb-3">
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Email *" required />
              </div>
              <div className="mb-3">
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea name="message" value={formData.message} onChange={handleChange} className="form-control" rows="4" placeholder="Please describe your transfer requirements or questions..."></textarea>
              </div>
              <button type="submit" className="send-btn">Send Message</button>
            </form>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="emergency-box p-4 mb-4">
            <h4>Emergency Services</h4>
            <p>For urgent transfer needs, call our 24/7 emergency line immediately. Our team is standing by to provide immediate assistance.</p>
            {/* <a href="tel: +919833444040"><button className="call-btn">Call Emergency Line</button></a> */}
          </div>
          <div className="row">
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiPhone /></div>
                <div>
                  <h6>24/7 Emergency Line</h6>
                  <p><a href="tel: +919833444040" style={{ textDecoration: 'none', color: 'inherit' }}> +919833444040</a></p>
                  <small>Available 24/7</small>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiMail /></div>
                <div>
                  <h6>Email Support</h6>
                  <p><a href="mailto:ops@humancareworldwide.com" style={{ textDecoration: 'none', color: 'inherit' }}>ops@humancareworldwide.com</a></p>
                  <p><a href="mailto:gcc.ops@humancareworldwide.com" style={{ textDecoration: 'none', color: 'inherit' }}>gcc.ops@humancareworldwide.com</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiMapPin /></div>
                <div>
                  <h6>Main Office</h6>
                  <p>G-30, Dheeraj Haritage,Milan Subway, Santacruz (West), Mumbai, Maharashtra 400054</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <div className="info-box">
                <div className="icon"><FiClock /></div>
                <div>
                  <h6>Business Hours</h6>
                  <p>Mon-Sun: Open 24 Hours</p>
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

