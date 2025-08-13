import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
// import RSVP from "./components/RSVP";
import RSVP from "./components/ui/RsvpForm";
//import Footer from "./components/Footer";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <Navbar />
      {/* Home */}
      <section id="home">
        <Hero />
      </section>

      {/* Event Details */}
      <section id="details">
        <EventDetails />
      </section>

      {/* Gallery */}
      <section id="gallery">
        <Gallery />
      </section>

      {/* RSVP */}
      <section id="rsvp">
        <RSVP />
      </section>
      
      <Footer />
    </>
  );
}

export default App;
