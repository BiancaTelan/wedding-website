import React from "react";
import "./EventDetails.css";

export default function Events() {
  const imgBase = import.meta.env.BASE_URL + "new-images/";

  return (
    <section className="events-section" id="events">
      <div className="event-label">DETAILS</div>
      <h2>When & Where</h2>

      {/* Ceremony */}
      <div className="event-block ceremony-block">
        <div className="ceremony-details">
          <h5>Ceremony</h5>
          <p>
            Date: November 8, 2025<br />
            Time: 3:00 PM<br />
            Venue: Ina ng Laging Saklolo Parish<br />
            <a
              href="https://maps.app.goo.gl/ADqXSPEczPtEeDNZ9"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View on Google Maps
            </a>
          </p>
        </div>
        <div className="ceremony-map">
          <iframe
            title="Ina ng Laging Saklolo Parish Map"
            src="https://www.google.com/maps?q=Ina+ng+Laging+Saklolo+Parish+Tagaytay&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Reception */}
      <div className="event-block ceremony-block">
        <div className="ceremony-details">
          <h5>Reception</h5>
          <p>
            Date: November 8, 2025<br />
            Time: 6:00 PM<br />
            Venue: Aquila Crystal Palace Tagaytay<br />
            Address: #328 Brgy Maitim 2nd St. E. Aguinaldo Highway, Tagaytay City, 4120 Cavite<br />
            <a
              href="https://maps.app.goo.gl/qsMTn3gYUmvj8RHN9"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              View on Google Maps
            </a>
          </p>
        </div>
        <div className="ceremony-map">
          <iframe
            title="Aquila Crystal Palace Tagaytay Map"
            src="https://www.google.com/maps?q=Aquila+Crystal+Palace+Tagaytay&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: "12px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Dress Code */}
      <div className="dress-code">
        <h5>Dress Code</h5>
        <div className="dress-images">
          <div>
            <img
              src={`${imgBase}men-attire.png`}
              alt="Men's Dress Code"
              className="dress-img"
            />
            <p><strong>GENTLEMEN:</strong> Long sleeves polo</p>
          </div>
          <div>
            <img
              src={`${imgBase}ladies-attire.png`}
              alt="Women's Dress Code"
              className="dress-img"
            />
            <p><strong>LADIES:</strong> Formal dress</p>
          </div>
        </div>
        <p>
          We encourage our guests to dress according to our color palette below:
        </p>
        <img
          src={`${imgBase}color-palette.png`}
          alt="Wedding Color Palette"
          className="color-palette-img"
        />
      </div>

      {/* Timeline (optional) */}
      {/* 
      <div className="timeline">
        <div className="timeline-title">Our Wedding Day Timeline</div>
        <img
          src={`${imgBase}wedding-timeline.jpg`}
          alt="Wedding Timeline"
          className="wedding-timeline-img"
        />
      </div>
      */}
    </section>
  );
}
