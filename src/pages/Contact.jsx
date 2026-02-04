import React from 'react'
import doctorImg from "../assets/Contact-banner.jpg";
import { Contact } from 'lucide-react';
import Contactus from '../components/ContactUs';

function Contactpage() {
  return (
<>
      <section className="air-repatriation">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Text */}
      <div className="col-md-6 text-section">
        <h1>Contact Humancare World Wide – Funeral & Repatriation Support</h1>
        <p>Call or message us for immediate help with dead body transport, cremation, burial, and international repatriation.</p>
        <a href="tel: +919833444040">
        <button className="btn btn-danger">More Info</button></a>
      </div>
      {/* Right Side Image */}
      <div className="col-md-6 image-section">
        <img src={doctorImg} alt="Doctor with airplane" className="img-fluid" />
      </div>
    </div>
  </div>
</section>

  {/* ===================end banner section==================  */}

    {/* ========================= start contact us========================  */} 
    <Contactus />
</>  )
}



export default Contactpage