import React from "react";
import "./Events.css";
import menDress from "../assets/dresscode-men.jpg";
import womenDress from "../assets/dresscode-women.jpg";
import weddingTimeline from "../assets/wedding-timeline.jpg";
import colorPalette from "../assets/color-palette.jpg"; // Import the color palette image

export default function Events() {
  return (
    <section className="events-section" id="events">
      <h2>Events</h2>
      <div className="event-block ceremony-block">
        <div className="ceremony-details">
          <h5>Ceremony</h5>
          <p>
            Date: June 15, 2024<br />
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="event-block ceremony-block">
        <div className="ceremony-details">
          <h5>Reception</h5>
          <p>
            Date: June 15, 2024<br />
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
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="dress-code">
        <h5>Dress Code</h5>
        <div className="dress-images">
          <div>
            <img src={menDress} alt="Men's Dress Code" className="dress-img" />
            <p><strong>GENTLEMEN:</strong> Long sleeves polo</p>
          </div>
          <div>
            <img src={womenDress} alt="Women's Dress Code" className="dress-img" />
            <p><strong>LADIES:</strong> Formal dress</p>
          </div>
        </div>
        <p>
          We encourage our guests to dress according to our color palette below:
        </p>
        <img
          src={colorPalette}
          alt="Wedding Color Palette"
          className="color-palette-img"
        />
      </div>
      <div className="timeline">
        <div className="timeline-title">Our Wedding Day Timeline</div>
        <img
          src={weddingTimeline}
          alt="Wedding Timeline"
          className="wedding-timeline-img"
        />
      </div>
    </section>
  );
}