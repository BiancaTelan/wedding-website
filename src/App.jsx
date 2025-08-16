import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RSVP from "./components/ui/RsvpForm";
import Footer from "./components/ui/Footer";
import Countdown from "./components/Countdown"; 
import "./App.css"; 
import OurStory from "./components/OurStory";
import Guestbook from "./components/Guestbook";
import FAQs from "./components/faq"


function App() {
  return (
    <>
      <Navbar />
      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* Countdown */}
      <section className="countdown-section">
        <Countdown />
      </section>

      {/* Event Details */}
      <section id="details">
        <EventDetails />
      </section>

      {/* OurStory */}
      <section id="our-story" className="OurStory">
        <OurStory />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* RSVP */}
      <section id="rsvp">
        <RSVP />
      </section>

      {/* Guestbook */}
      <section id="message">
        <Guestbook />
      </section>

      {/* FAQ's */}
      <section id="faq">
        <FAQs />
      </section>
      
      {/* Contacts */}
      <section id="contacts">
        <Footer />
      </section>
    </>
  );
}

export default App;
