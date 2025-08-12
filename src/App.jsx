import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";
//import Footer from "./components/Footer";
import Footer from "./components/ui/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <EventDetails />
      <Gallery />
      <RSVP />
      <Footer />
    </>
  );
}

export default App;
