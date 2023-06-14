// Modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages: Landing
import { Landing } from "components/pages/landing/landing";

// Pages: Not Found
import { NotFound } from "components/pages/not-found/not-found";

// Component: Presentation
export const AppSplashUi = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <Routes>
        {/* Landing */}
        <Route path="/" element={<Landing />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Component: Logic
export const AppSplash = () => {
  return <AppSplashUi />;
};
