import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CosmicMumble from "./CosmicMumble.jsx";
import "./index.css";
import WillowBumbleCV from "./hyperweave/willow-bumble-cv/WillowBumbleCv.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/">
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<CosmicMumble />} />
        <Route path="willow-bumble-cv" element={<WillowBumbleCV />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
