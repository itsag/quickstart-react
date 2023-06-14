// Modules
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

// Styles
import "styles/app.styles.css";

// Common
import { supabaseConfig } from "common/configs.common";

// Helpers
import { initialiseSupabase } from "helpers/supabase.helper";

// Components
import { AppSplash } from "components/app-splash";
import { AppErrorBoundary } from "components/app-error-boundary";

// Initialise Supabase
initialiseSupabase(supabaseConfig);

// Create Root
const app = createRoot(document.getElementById("app"));

// Render
app.render(
  <AppErrorBoundary>
    <BrowserRouter>
      <AppSplash />
    </BrowserRouter>
  </AppErrorBoundary>
);
