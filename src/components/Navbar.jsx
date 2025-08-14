import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav>
        <a href="#home">Home</a>
        <a href="#details">Details</a>
        <a href="#our-story">Our Story</a>
        
      </nav>
      <div className="logo">John &amp; Jane</div>
      <nav>
        
        <a href="#gallery">Gallery</a>
        <a href="#rsvp">RSVP</a>
        <a href="#message">Message</a>
      </nav>
    </header>
  );
}

export default Navbar;
