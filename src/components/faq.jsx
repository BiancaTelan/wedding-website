import React, { useState } from "react";
import "./faq.css";

const faqs = [
  {
    question: "When and where is the wedding?",
    answer: "The ceremony and reception details are available on the Details section of our website."
  },
  {
    question: "What time should I arrive?",
    answer: "Please arrive 30 minutes before the ceremony to allow time for seating."
  },
  {
    question: "What should I wear?",
    answer: "Check the Dress Code section for style inspiration."
  },
  {
    question: "Can I wear different color?",
    answer: "To honor the theme, we kindly ask guests to follow the suggested dress code colors/styles."
  },
  {
    question: "Is parking available at the venue?",
    answer: "Yes, free parking will be available for all guests."
  },
  {
    question: "Are hotel accomodations provided?",
    answer: "We have arranged accommodations at View Park Hotel Tagaytay exclusively for the families of the bride and groom, along with the bridesmaids and groomsmen. Other guests may book their own preferred stay nearby."
  },
  {
    question: "Will there be shuttle service to the venue?",
    answer: "Shuttle service will only be provided for the families of the bride and groom, as well as the bridesmaids and groomsmen. Other guests are kindly asked to arrange their own transportation."
  },
  {
    question: "Will there be vegetarian or other dietary options?",
    answer: "Yes! Please let us know your dietary needs when you RSVP."
  },
  {
    question: "Can I bring my kids?",
    answer: "We kindly request and adults-only celebration."
  }
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
        <div className="faq-label">FAQs</div>
      <h2 className="faq-title">Popular Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${activeIndex === index ? "active" : ""}`}>
            <button className="faq-question" onClick={() => toggle(index)}>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </button>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
