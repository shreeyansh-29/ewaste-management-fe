import React from "react";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
// import NotFound from "./notFound";
import Navbar from "./container/components/navbar/navbars";
import GlobalStyle from "./container/globalStyles";
import CustomerNav from "./container/customer/navbar/customerNav";
import CollectorNav from "./container/collector/navbar/collectorNav";
import VendorNav from "./container/vendor/navbar/vendorNav";
import store from "./redux/store";
import AllRoutes from "./routes/routes";
// import {BrowserRouter, Route, Routes} from "react-router-dom";
function App() {
  const role = localStorage.getItem("Roles");
  return (
    <Provider store={store}>
      {role === "CUSTOMER" ? (
        <>
          <CustomerNav />
          <GlobalStyle />
        </>
      ) : (
        ""
      )}
      {role === "COLLECTOR" ? (
        <>
          <GlobalStyle />
          <CollectorNav />
        </>
      ) : (
        ""
      )}
      {role === "VENDOR" ? (
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
        ""
      )}
      <AllRoutes />
      {/* <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter> */}
    </Provider>
  );
}
export default App;
