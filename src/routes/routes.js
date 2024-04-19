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
import CustomerNav from "../container/customerContainer/navbar/customerNav";
import GlobalStyle from "../container/globalStyles";
import CollectorNav from "../container/collectorContainer/navbar/collectorNav";
import VendorNav from "../container/vendorContainer/navbar/vendorNav";
import Navbar from "../components/navbar/navbars";
import {renderRole as routeRole} from "../components/renderRole/renderRole";

const Routes = () => {
  var role = localStorage.getItem("Roles");
  /*istanbul ignore next*/
  return (
    <BrowserRouter>
      {role === routeRole.Customer ? (
        <>
          <CustomerNav />
          <GlobalStyle />
          <CustomerPrivateRoutes />
        </>
      ) : (
        ""
      )}
      {role === routeRole.Collector ? (
        <>
          <CollectorNav />
          <GlobalStyle />
          <CollectorPrivateRoutes />
        </>
      ) : (
        ""
      )}

      {role === routeRole.Vendor ? (
        <>
          <VendorNav />
          <GlobalStyle />
          <VendorPrivateRoutes />
        </>
      ) : (
        ""
      )}
      {!role && (
        <>
          <PublicRoutes />
          <GlobalStyle />
          <Navbar />
        </>
      )}
    </BrowserRouter>
  );
};

export default Routes;
