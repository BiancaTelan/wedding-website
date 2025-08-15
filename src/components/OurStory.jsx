import React from "react";
import "./OurStory.css";

function OurStory() {
  const base = import.meta.env.BASE_URL;

  const milestones = [
    {
      date: "June 2018",
      title: "First Meeting",
      description: "We met at a mutual friend's birthday party in Manila."
    },
    {
      date: "December 2018",
      title: "First Date",
      description: "Our first official date at a cozy café in Tagaytay."
    },
    {
      date: "February 2020",
      title: "Relationship Begins",
      description: "Made it official during a weekend getaway in Baguio."
    },
    {
      date: "March 2022",
      title: "Moved In Together",
      description: "Started our life together in our first apartment."
    },
    {
      date: "December 2023",
      title: "Engagement",
      description: "Proposed during a sunset dinner by the beach in Boracay."
    }
  ];

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

          {/* Timeline Section */}
          <div className="timeline-section">
            <h3 className="timeline-heading">Our Journey Timeline</h3>
            <div className="timeline">
              {milestones.map((milestone, index) => (
                <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <div className="timeline-date">{milestone.date}</div>
                    <h4 className="timeline-title">{milestone.title}</h4>
                    <p className="timeline-description">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;