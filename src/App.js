import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AllRoutes from "./routes/routes";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <AllRoutes />
    </Provider>
  );
}
export default App;
