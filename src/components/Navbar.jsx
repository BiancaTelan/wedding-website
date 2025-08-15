import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTop(true);
        setSidePanelOpen(false); 
      } else {
        setIsTop(false);
        setDropdownOpen(false); 
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header>
        <div className="logo">John &amp; Jane</div>

        {isTop ? (
          
          <div className="hamburger" onClick={() => setDropdownOpen(!dropdownOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        ) : (
          
          <button className="side-arrow" onClick={() => setSidePanelOpen(true)}>
            &lt;
          </button>
        )}
      </header>

      {/* Dropdown Menu (Top Mode) */}
      {dropdownOpen && isTop && (
        <div className="dropdown-menu">
          <a href="#home" onClick={() => setDropdownOpen(false)}>Home</a>
          <a href="#details" onClick={() => setDropdownOpen(false)}>Details</a>
          <a href="#our-story" onClick={() => setDropdownOpen(false)}>Our Story</a>
          <a href="#gallery" onClick={() => setDropdownOpen(false)}>Gallery</a>
          <a href="#rsvp" onClick={() => setDropdownOpen(false)}>RSVP</a>
          <a href="#message" onClick={() => setDropdownOpen(false)}>Message</a>
          <a href="#contacts" onClick={() => setDropdownOpen(false)}>Contacts</a>
        </div>
      )}

      {/* Right Side Panel (Scrolled Mode) */}
      <div className={`side-panel ${sidePanelOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setSidePanelOpen(false)}>&times;</button>
        <a href="#home" onClick={() => setSidePanelOpen(false)}>Home</a>
        <a href="#details" onClick={() => setSidePanelOpen(false)}>Details</a>
        <a href="#our-story" onClick={() => setSidePanelOpen(false)}>Our Story</a>
        <a href="#gallery" onClick={() => setSidePanelOpen(false)}>Gallery</a>
        <a href="#rsvp" onClick={() => setSidePanelOpen(false)}>RSVP</a>
        <a href="#message" onClick={() => setSidePanelOpen(false)}>Message</a>
        <a href="#contacts" onClick={() => setDropdownOpen(false)}>Contacts</a>
      </div>
    </>
  );
}

export default Navbar;
