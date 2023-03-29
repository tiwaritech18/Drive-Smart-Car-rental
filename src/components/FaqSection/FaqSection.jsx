import "./FaqSection.css";
import Questions from "./questions";

import { useState } from "react";
import FaqAccordion from "./FaqAccordion.jsx"; 


export default function FaqSection(){
  const [data,setData]=useState(Questions);
  
  return (
    <section className="faq-section">
      <div className="container">
      <div className="faq-heading">
          <h3>FAQ</h3>
          <h2>Frequently Asked Questions</h2>
          <p>Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to Common Concerns and Inquiries.</p>
        </div>
        <div className="questions-sec">
          {
            data.map((question) => {
              return <FaqAccordion  key={question.id} {...question}/>
            })
          }
        </div>
      </div>
    </section>
  )
}