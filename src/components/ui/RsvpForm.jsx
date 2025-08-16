import React, { useState, useRef, useEffect } from "react";
import dsa from "/new-images/mesh.png";
export default function RSVP() {
  const [formOpen, setFormOpen] = useState(false);
  const formRef = useRef(null);

  // Handle clicks outside the form to close it
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        formOpen &&
        formRef.current &&
        !formRef.current.contains(event.target)
      ) {
        setFormOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [formOpen]);

  return (
    <>
      <section id="rsvp-form">
          <p className="rsvp-pre-title">YOUR INVITATION</p>
          <h1 className="rsvp-title">A moment to respond and share in our joy</h1>
          <p className="rsvp-label">Please let us know if you’ll be joining us as we celebrate this special day. Your response helps us create a memorable experience filled with love, laughter, and cherished moments shared together.</p>
          <button className="rsvp-btn" onClick={() => setFormOpen(true)}>Fill-up RSVP</button>
          {/* <img src={dsa} alt="" /> */}
      </section>

      {formOpen && (<div id="rsvp-main-form">
          <form ref={formRef} action="">
            <h2>Your Invitation</h2>
            <p>Please let us know if you’ll be joining us as we celebrate this special day. </p>

            <div className="form-group">
              <div className="input-fields">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required  />
              </div>
              <div className="input-fields">
                <label htmlFor="guest">Guest name <span style={{ fontSize: "8px"}}>+1 only</span> </label>
                <input type="text" name="guest" id="guest" required  />
              </div>
            </div>

            <div className="form-group">
              <div className="input-fields">
                <label htmlFor="attendance">Attendance</label>
                <select name="attendance" id="attendance" required>
                  <option value=""></option>
                  <option value="yes">Yes, I’ll be there!</option>
                  <option value="no">Sorry, I can’t make it</option>
                </select>
              </div>
              <div className="input-fields">
                <label htmlFor="meal">Meal Pref</label>
                <input type="text" name="meal" id="meal" required  />
              </div>
            </div>

            <div className="input-fields">
              <label id="mess-label" htmlFor="message">Message</label>
              <textarea name="message" id="" cols="30" rows="3"></textarea>
            </div>

            <button>Submit RSVP</button>
          </form>
      </div>)}
    </>

  );
}
