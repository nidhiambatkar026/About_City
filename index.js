import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./src/views/herosection.js";
import Navbar from "./src/components/navbar.js";
import Contact from "./src/views/contact.js";
import Login from "./src/views/login.js";
import Places from "./src/views/places.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar/>
    <HeroSection/>
    <Login/>
    <Places/>
    <Contact/>
  </>
);
