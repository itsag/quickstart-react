// Modules
import React from "react";

// Common
import { appConfig } from "common/configs.common";

// Component: Presentation
export const LogoUi = () => {
  return <span className="font-brand">{appConfig.appName}</span>;
};

// Component: Logic
export const LogoLogic = (props) => {
  return <LogoUi {...props} />;
};

// Component: Memo
export const Logo = React.memo((props) => {
  return <LogoLogic {...props} />;
});
