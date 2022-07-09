import React from "react";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar/navbars";
import GlobalStyle from "./container/globalStyles";
import CustomerNav from "./container/customer/navbar/customerNav";
import CollectorNav from "./container/collector/navbar/collectorNav";
import VendorNav from "./container/vendor/navbar/vendorNav";
import store from "./redux/store";
import AllRoutes from "./routes/routes";

function App() {
  /* istanbul ignore next */
  const role = localStorage.getItem("Roles");
  return (
    <Provider store={store}>
      {role === "CUSTOMER" ? (
        /* istanbul ignore next */
        <>
          <CustomerNav />
          <GlobalStyle />
        </>
      ) : (
        ""
      )}
      {role === "COLLECTOR" ? (
        /* istanbul ignore next */
        <>
          <GlobalStyle />
          <CollectorNav />
        </>
      ) : (
        ""
      )}
      {role === "VENDOR" ? (
        /* istanbul ignore next */
        <>
          <GlobalStyle />
          <VendorNav />
        </>
      ) : (
        ""
      )}
      {role === null ? (
        <>
          <GlobalStyle />
          <Navbar />
        </>
      ) : (
        /* istanbul ignore next */
        ""
      )}
      <AllRoutes />
    </Provider>
  );
}
export default App;
