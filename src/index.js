import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./views/herosection.js";
import Navbar from "./components/navbar.js";
import Contact from "./views/contact.js";
import Login from "./views/login.js";
import Places from "./views/places.js";

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
