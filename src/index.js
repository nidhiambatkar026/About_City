import { createRoot } from "react-dom/client";
import "./index.css";
import HeroSection from "./herosection.js";
import Navbar from "./navbar.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar/>
    <HeroSection/>
  </>
);
