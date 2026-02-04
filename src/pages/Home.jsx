import React from 'react'
import Banner from '../components/Homecomponents/Banner'
import AboutUs from '../components/Homecomponents/AboutUs'
import Usp from '../components/Homecomponents/Usp'
import ImmediateAssistance from '../components/Homecomponents/ImmediateAssistance'

import DocumentationRequirements from '../components/Homecomponents/DocumentationRequirements'
import Servicessec from '../components/Homecomponents/Servicessec'
import ProcessTimeline from '../components/Homecomponents/ProcessTimeline'
import "../App.css";

import ContactUs from '../components/ContactUs'




function Home() {
  return (
    <>

      <Banner />
      <AboutUs />
      <Servicessec />
      <Usp />
      <ImmediateAssistance />
      <DocumentationRequirements />
      <ProcessTimeline />
      <section className="keyword-section py-5 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            Your Trusted Partner for Funeral, Cremation & Human Remains Transport Services
          </h2>
          <p>
            Human Remains Transfer offers full funeral services, cremation services, and dead body transfer services to families in India and across the world. Be it dead body transport by air, road, or mortuary transport services, we provide legal, safe, dignified transfer of the deceased.
          </p>
          <p>
            We have 24/7 dead body transport services available in all major cities like Mumbai, Bangalore, Delhi, Hyderabad Chennai Kochi Bhopal Patna Faridabad among many more locations throughout India so that you can avail our services at any time irrespective of where assistance is required.

          </p>
          <p>
            We are into human remains cargo handling for compliant dead body air transport in India as well as international repatriation from embalming documentation customs clearance airway bill preparation complete funeral shipping service; each step is taken care of by the experts. Families seeking to transfer a body to another state will be guided clearly about the procedure and how much it costs for transporting a dead body to another state or city.
          </p>
          <p>
            We provide cremation ceremony arrangements quick cremation service and burial services with respect according to their religious and cultural needs together with planning support. All details such as funeral home transport mortuary vehicle arrangements city-to-city dead body transfer are taken care of with utmost compliance.
          </p>
          <p>We help families with funeral home services embalming documentation assistance all domestic & international human remains transport needs from dead body transfer & funeral transport services till complete repatriation of the body; Human Remains Transfer is your trusted partner 24/7 ensuring dignity in every journey.</p>
        </div>
      </section>
      <ContactUs />

    </>
  )
}

export default Home