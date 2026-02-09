import React from 'react'
import doctorImg from "../assets/Contact-banner.jpg";
import { Contact } from 'lucide-react';
import Contactus from '../components/ContactUs';
import { Helmet } from "react-helmet-async";

function Contactpage() {
  return (
<>
 <Helmet>
      <title>Contact Us | Dead Body & Funeral Transport Services</title>

      <meta
        name="description"
        content="Need immediate dead body transportation services? Contact us for 24/7 funeral transport & human remains transfer support."
      />

      <meta
        name="keywords"
        content="dead body transportation services,
        human remains transfer,
        dead body transport by air,
        dead body transportation services
        deceased transportation services
        "
      />
        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/contact"
        />
    </Helmet>

    {/* ===================start banner section==================  */}
      <section className="air-repatriation">
  <div className="container">
    <div className="row align-items-center">
      {/* Left Side Text */}
      <div className="col-md-6 text-section">
        <h1>Contact Human Remains Transfer – Dead Body & Funeral Transport Support</h1>
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