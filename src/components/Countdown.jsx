import React, { useState, useEffect } from "react";
import "./Countdown.css";


const Countdown = () => {
  
  const weddingDate = new Date("2025-11-08T00:00:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      
      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div>
      <h2 className="countdown-title">We're getting married in</h2>
      <div className="countdown-container">
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.days}</span>
          <span className="countdown-label">DAYS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.hours}</span>
          <span className="countdown-label">HOURS</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.minutes}</span>
          <span className="countdown-label">MINUTES</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{timeRemaining.seconds}</span>
          <span className="countdown-label">SECONDS</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
