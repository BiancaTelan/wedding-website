import React, { useState } from "react";
import "./Guestbook.css";

const Guestbook = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Refresh page after 2 seconds
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <section className="guestbook-section">
      <h3 className="guestbook-subtitle">WRITE A MEMORY</h3>
      <h1 className="guestbook-title">From the Heart</h1>
      <p className="guestbook-desc">
        Share your love, memories, or wishes for the happy couple. Your words
        will be part of their forever story.
      </p>

      <div className="guestbook-grid">
        <div className="guestbook-card">
          <p className="guestbook-from">From: Alvin B.</p>
          <p>
            Wishing you a lifetime of love, laughter, and beautiful memories
            together. Thank you for letting me be part of your special day! 💗
          </p>
        </div>
        <div className="guestbook-card">
          <p className="guestbook-from">From: Ann C.</p>
          <p>
            Wishing you a lifetime of love, laughter, and beautiful memories
            together. Thank you for letting me be part of your special day! 💗
          </p>
        </div>
        <div className="guestbook-card">
          <p className="guestbook-from">From: Javy E.</p>
          <p>
            Wishing you a lifetime of love, laughter, and beautiful memories
            together. Thank you for letting me be part of your special day! 💗
          </p>
        </div>
      </div>

      <form className="guestbook-form" onSubmit={handleSubmit}>
        {!submitted ? (
          <>
            <label>Name</label>
            <input type="text" name="name" required />

            <label>Share About...</label>
            <select name="type" required>
              <option>Share your favorite memory with us</option>
              <option>Leave a wish for the couple</option>
              <option>Give marriage advice</option>
            </select>

            <label>Message</label>
            <textarea name="message" required></textarea>

            <button type="submit">Submit Message</button>
          </>
        ) : (
          <p className="thank-you-message">💖 Thank you for your kind message 💖</p>
        )}
      </form>
    </section>
  );
};

export default Guestbook;
