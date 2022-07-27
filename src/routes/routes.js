/*
  @module routes
*/
import React from "react";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./public/publicRoutes";
import CustomerPrivateRoutes from "./private/customerRoutes";
import CollectorPrivateRoutes from "./private/collectorRoutes";
import VendorPrivateRoutes from "./private/vendorRoutes";
import CustomerNav from "../container/customer/navbar/customerNav";
import GlobalStyle from "../container/globalStyles";
import CollectorNav from "../container/collector/navbar/collectorNav";
import VendorNav from "../container/vendorContainer/navbar/vendorNav";
import Navbar from "../components/navbar/navbars";

const Routes = () => {
  var role = localStorage.getItem("Roles");
  /*istanbul ignore next*/
  return (
    <BrowserRouter>
      {role === null ? <PublicRoutes /> : ""}
      {role === "CUSTOMER" ? (
        <>
          <CustomerNav />
          <GlobalStyle />
          <CustomerPrivateRoutes />
        </>
      ) : (
        ""
      )}
      {role === "COLLECTOR" ? (
        <>
          <CollectorNav />
          <GlobalStyle />
          <CollectorPrivateRoutes />
        </>
      ) : (
        ""
      )}

      {role === "VENDOR" ? (
        <>
          <VendorNav />
          <GlobalStyle />
          <VendorPrivateRoutes />
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
    </BrowserRouter>
  );
};

export default Routes;
