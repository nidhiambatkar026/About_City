import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./herosection.js";
import Navbar from "./navbar.js";
import Contact from "./contact.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar/>
    <HeroSection/>
    <Contact/>
  </>
);
