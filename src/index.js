import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./Navbar.js";

const root = createRoot(document.getElementById("root"));

root.render(
  <>
    <Navbar />
  </>
);
