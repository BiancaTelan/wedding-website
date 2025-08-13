import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#our-story">Our Story</a>
        <a href="#gallery">Gallery</a>
      </nav>
      <div className="logo">John &amp; Jane</div>
      <nav>
        <a href="#details">Details</a>
        <a href="#message">Message</a>
        <a href="#rsvp">RSVP</a>
      </nav>
    </header>
  );
}

export default Navbar;
