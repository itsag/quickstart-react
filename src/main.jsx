// Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Styles
import "styles/app.styles.css";

// Components
import { AppSplash } from "components/app-splash";
import { AppErrorBoundary } from "components/app-error-boundary";

// Create Root
const app = createRoot(document.getElementById("root"));

// Render
app.render(
  <AppErrorBoundary>
    <BrowserRouter>
      <AppSplash />
    </BrowserRouter>
  </AppErrorBoundary>
);
