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
 <Helmet>
      <title>Dead Body Transportation Services in India | Human Remains Transfer</title>

      <meta
        name="description"
        content="Professional dead body transportation services across India & abroad. Safe human remains transfer by air, train & road. 24/7 assistance."
      />

      <meta
        name="keywords"
        content="
        dead body transportation services,
        human remains transfer,
        transportation of dead bodies,
        deceased body transport,
        corpse transportation service
        "
      />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://humanremainstransfer.com/"
        />
        
    </Helmet>

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
            Reliable Dead Body Transportation Services Across India & International
          </h2>
          <p>
            We provide professional and compassionate dead body transportation services designed to support families during the most difficult moments of loss. Understanding the emotional and logistical challenges involved in the transportation of dead bodies, we offer complete end-to-end assistance for deceased body transport within cities, across states, and internationally. From documentation and permits to coordination with hospitals, mortuaries, airlines, and railways, every aspect of human remains transportation is handled with care, sensitivity, and full legal compliance.
          </p>
          <p>
           Our services include dead body transport by air, dead body transport by train, and dead body transport by road, allowing families to choose the most suitable option based on urgency and distance. For long-distance and overseas transfers, we manage human remains air cargo and human remains cargo handling, working closely with airlines to ensure smooth dead body transportation by air, including coffin preparation, embalming coordination, and clearance procedures. We also assist with shipping a deceased body to another state, transferring a dead body to another state, and transporting a deceased from state to state, ensuring safe and dignified movement at every stage. Local transfers are supported through our reliable dead body ambulance service between hospitals, residences, mortuaries, and cremation or burial grounds.
          </p>
          <p>
          In addition, we provide comprehensive professional mortuary services, working alongside licensed morticians and funeral directors to support necessary funeral director services and ceremonial requirements. For international cases, we manage the complete repatriation of human remains, including embassy approvals, consulate documentation, and airline coordination. We maintain full transparency regarding the deceased body transportation cost, with no hidden charges. Our mortuary transport services, corpse transportation service, and funeral transport services are delivered with dignity, cultural sensitivity, and respect, so families can focus on remembrance while we take care of the logistics.
          </p>
          
        </div>
      </section>
      <ContactUs />

    </>
  )
}

export default Home