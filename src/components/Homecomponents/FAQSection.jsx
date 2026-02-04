import React, { useState } from "react";
import "../../App.css";


const faqs = [
  {
    question: "How much does air transfer of mortal remains cost?",
    answer: "Costs vary based on origin/destination countries, documentation requirements, and specific services needed. We provide transparent, all-inclusive quotes with no hidden fees. Most international repatriations range from $3,000-$8,000 USD. We accept insurance claims and can discuss payment arrangements during your consultation."
  },
  {
    question: "What documents are required for international repatriation?",
    answer: "Required documents typically include: death certificate, embalming certificate, consular mortuary certificate, export/import permits, and transit documents. Our team handles all documentation preparation and submission to ensure full compliance with international regulations. We coordinate directly with embassies and authorities."
  },
  {
    question: "How long does the air transfer process take?",
    answer: "Most international repatriations are completed within 5-10 business days, depending on documentation processing times and flight availability. Emergency services can be expedited to 3-5 days when circumstances require. We provide regular updates throughout the process and work to minimize delays."
  },
  {
    question: "Do you provide repatriation from all countries?",
    answer: "Yes, we have a global network covering over 180 countries. Some locations may have specific regulatory requirements or longer processing times, but we maintain partnerships and expertise to handle repatriation from virtually anywhere in the world, including remote locations."
  },
  {
    question: "Is emergency or urgent repatriation available?",
    answer: "Absolutely. Our 24/7 emergency service team can coordinate urgent repatriation when time-sensitive circumstances require expedited handling. Emergency services include priority documentation processing, charter flight arrangements when needed, and dedicated case management to minimize delays."
  },
  {
    question: "What happens if there are complications or delays?",
    answer: "We proactively monitor all cases and immediately address any potential issues. Our experienced team has contingency plans for various scenarios. In rare cases of delays, we maintain constant communication with families, cover any additional costs when delays are beyond your control, and provide alternative solutions."
  },
  {
    question: "Can you assist with funeral home coordination?",
    answer: "Yes, we work closely with funeral directors worldwide and can coordinate directly with your chosen funeral home. We can also provide recommendations for reputable funeral homes in your area and ensure seamless transfer of remains and documentation upon arrival."
  },
  {
    question: "Are your services covered by travel insurance?",
    answer: "Many travel insurance policies include repatriation coverage. We can work directly with your insurance provider, submit necessary documentation, and often receive direct payment. We also accept various payment methods and can discuss payment arrangements for families without insurance coverage."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>
            We understand you may have many questions during this difficult time. 
            Here are answers to the most common concerns families have about our repatriation services.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {faq.question}
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>&#9660;</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <p>Have a question that's not answered here?</p>
          <p className="contact-number">
            Call us anytime at +1 (555) 123-4567 or request a consultation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
