// Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Styles
import "styles/app.styles.css";

// Components
import { Start } from "components/start";

// Create Root
const app = createRoot(document.getElementById("root"));

// Render
app.render(
  <React.StrictMode>
    <BrowserRouter>
      <Start />
    </BrowserRouter>
  </React.StrictMode>
);
