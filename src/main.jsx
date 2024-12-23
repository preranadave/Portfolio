import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
const locomotiveScroll = new LocomotiveScroll();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename='/Portfolio'>
      <Routes>
        <Route path="/" element={<App></App>}>

        </Route>
      </Routes>
    </BrowserRouter>
    
  </StrictMode>
);
