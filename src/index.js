import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {AppContainer} from "react-hot-loader";
import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";
import {FallBackComponent} from "../src/components/fallbackComponent/fallbackComponent";

Sentry.init({
  dsn: "https://bdeccc4501874bb68ffd3c1faaa235de@o1346476.ingest.sentry.io/6624411",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

require("react-hot-loader/patch");

ReactDOM.render(
  <Sentry.ErrorBoundary fallback={FallBackComponent} showDialog>
    <App />
  </Sentry.ErrorBoundary>,
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
