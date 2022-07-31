import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {AppContainer} from "react-hot-loader";
import {ErrorBoundary} from "./components/errorBoundary/errorBoundary";
require("react-hot-loader/patch");

ReactDOM.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
