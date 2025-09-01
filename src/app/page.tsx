import Home from "../components/Home";
import Gallery from "../components/Gallery";
import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Home />

      <Gallery />

      <Location
        mapSrc="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
        address="Example street 5, Lofoten, Norway"
        nearby={[
          { label: "Nearest airport", value: "Leknes (LKN) / Evenes (EVE)" },
          { label: "Parking", value: "Free private parking" },
        ]}
      />

      <Contact />
      <Footer />
    </>
  );
}
