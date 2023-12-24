import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CosmicMumble from "./CosmicMumble.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <CosmicMumble />
    </React.StrictMode>
  </BrowserRouter>
);
