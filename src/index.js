import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./herosection.js";
import Navbar from "./navbar.js";
import Contact from "./contact.js";
import Login from "./login.js";
import Places from "./places.js";

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
