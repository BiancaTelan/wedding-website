import React from 'react';

export default function EventDetails() {
  return (
    <section id="details" className="bg-light py-5">
      <div className="container">
        <h2 className="text-center mb-4">Wedding Details</h2>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <h5>Ceremony</h5>
            <p>3:00 PM — St. Mary’s Church</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Reception</h5>
            <p>6:00 PM — Grand Ballroom, The Plaza Hotel</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Dress Code</h5>
            <p>Formal Attire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
