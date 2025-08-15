import React from "react";
import "./OurStory.css";

function OurStory() {
  const base = import.meta.env.BASE_URL;

  return (
    <section className="our-story">
      <div className="container">
        <div className="story-label">OUR STORY</div>
        <h2 className="section-title">Born from a love for moments & memories</h2>
        <p className="section-intro">
          Our journey is shaped by passion, strength, and the moments that define who we truly are. 
          With every step, our story unfolds with honesty and purpose.
        </p>
        
        <div className="story-content">
          <h3 className="story-heading">Where it all began</h3>
          <div className="text-and-image-wrapper">
            <div className="story-text">
              <p>
                Our love story began with a simple glance that quickly blossomed into something truly 
                extraordinary a connection filled with laughter, trust, and endless discovery. From that 
                first moment, we knew we had found something special, a bond that would carry us through 
                life's joys and challenges together.
              </p>
              <p>
                Building lasting love is more than a moment it's the small gestures, shared dreams, and 
                constant support that shape our journey. Every smile and memory has led us to this 
                beautiful day, where we celebrate the start of forever.
              </p>
            </div>
            <div className="story-image">
              <img src={`${base}new-images/OurStory.png`} alt="Our story beginning" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;