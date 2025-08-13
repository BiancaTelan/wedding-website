import React from "react";
import "./Hero.css";
import Navbar from "./Navbar";

function Hero() {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <Navbar />
      <div className="hero-content">
        <div className="left-text">
          <small>MOMENTS MADE TIMELESS</small>
          <p>
            From the moment we said “yes” to the final toast, we’re coming
            together to celebrate a day full of love, laughter, and
            unforgettable memories that mark the start of our forever.
          </p>
          <h1>Saturday</h1>
          <div className="date">Nov 08, 2025</div>
        </div>
        <div className="right-text">John &amp; Jane</div>
      </div>
    </section>
  );
}

export default Hero;

