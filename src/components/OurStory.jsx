import React from "react";
import "./OurStory.css";

function OurStory() {
  return (
    <section className="our-story">
      <div className="container">
        <h2 className="section-title">Born from a love for moments & memories</h2>
        <p className="section-intro">
          Our journey is shaped by passion, strength, and the moments that define who we truly are. 
          With every step, our story unfolds with honesty and purpose.
        </p>
        
        <div className="story-content">
          <h3>Where it all began</h3>
          <p>
            Our love story began with a simple glance that quickly blossomed into something truly 
            extraordinary—a connection filled with laughter, trust, and endless discovery. From that 
            first moment, we knew we had found something special, a bond that would carry us through 
            life's joys and challenges together.
          </p>
          <p>
            Building lasting love is more than a moment—it's the small gestures, shared dreams, and 
            constant support that shape our journey. Every smile and memory has led us to this 
            beautiful day, where we celebrate the start of forever.
          </p>
          <div className="story-images">
          <img src="/images/our-story-1.jpg" alt="Our story beginning" />
          <img src="/images/our-story-2.jpg" alt="Our journey" />
        </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;