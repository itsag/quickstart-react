// Modules
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages: Not Found
import { NotFound } from "components/not-found/not-found";

// Component: Presentation
export const StartUi = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex">
      <Routes>
        {/* Landing */}
        <Route path="/" element="You have landed!" />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

// Component: Logic
export const Start = () => {
  return <StartUi />;
};
