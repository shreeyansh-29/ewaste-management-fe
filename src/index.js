import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {AppContainer} from "react-hot-loader";
require("react-hot-loader/patch");

ReactDOM.render(<App />, document.getElementById("root"));

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
