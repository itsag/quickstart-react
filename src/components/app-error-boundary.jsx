// Modules
import React from "react";

// Common
import { appConfig } from "common/configs.common";

// Shared
import { Logo } from "components/shared/logo.shared";

// Component: Presentation
export const AppErrorBoundaryUi = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[460px] m-auto flex flex-col items-center p-6">
          <div className="animate__animated animate__bounceIn mb-2">
            <span className="text-2xl text-gray-800 font-display font-bold">
              Uh Oh!
            </span>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-1s text-center mb-8">
            <span className="text-gray-500">
              Looks like something went wrong. It could be a momentary glitch
              such as flaky internet connection. If this keeps happening, please
              contact us at{" "}
              <a
                href={`mailto:${appConfig.appEmail}`}
                className="text-rose-500 hover:underline"
              >
                {appConfig.appEmail}
              </a>
            </span>
          </div>

          <div className="animate__animated animate__fadeInUp animate__delay-2s">
            <span className="text-2xl text-gray-800">
              <Logo />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Component: Logic
export class AppErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // State
    this.state = {
      shouldShowFallbackUi: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      shouldShowFallbackUi: true,
    };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.log("Error Boundary", error);
    // eslint-disable-next-line no-console
    console.log("Error Boundary", info.componentStack);
  }

  render() {
    const { shouldShowFallbackUi } = this.state;

    if (shouldShowFallbackUi) {
      return <AppErrorBoundaryUi />;
    }

    return this.props.children;
  }
}
