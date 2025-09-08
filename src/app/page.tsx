import Home from "../components/Home";
import Gallery from "../components/Gallery";
// import Location from "../components/Location";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import LocationFromSite from "@/components/LocationFromSite";
import AmenitiesFromSite from "@/components/AmenitiesFromSite";
import ActivitiesFromSite from "@/components/ActivitiesFromSite";
import RestaurantsFromSite from "@/components/RestaurantsFromSite";
import StoresFromSite from "@/components/StoresFromSite";

export default function HomePage() {
  return (
    <>
      <Home />

      <Gallery />

      {/* ...other sections... */}
      <LocationFromSite />
      <AmenitiesFromSite />
      <ActivitiesFromSite />
      <RestaurantsFromSite />
      <StoresFromSite />
      {/* ...other sections... */}

      <Contact />
      <Footer />
    </>
  );
}
