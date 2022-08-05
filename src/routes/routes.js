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
import {renderRole} from "../components/renderRole/renderRole";

const Routes = () => {
  var role = localStorage.getItem("Roles");
  /*istanbul ignore next*/
  return (
    <BrowserRouter>
      {renderRole[role] === "CUSTOMER" ? (
        <>
          <CustomerNav />
          <GlobalStyle />
          <CustomerPrivateRoutes />
        </>
      ) : (
        ""
      )}
      {renderRole[role] === "COLLECTOR" ? (
        <>
          <CollectorNav />
          <GlobalStyle />
          <CollectorPrivateRoutes />
        </>
      ) : (
        ""
      )}

      {renderRole[role] === "VENDOR" ? (
        <>
          <VendorNav />
          <GlobalStyle />
          <VendorPrivateRoutes />
        </>
      ) : (
        ""
      )}
      {renderRole[role] === "null" ? (
        <>
          <GlobalStyle />
          <Navbar />
          <PublicRoutes />
        </>
      ) : (
        ""
      )}
    </BrowserRouter>
  );
};

export default Routes;
