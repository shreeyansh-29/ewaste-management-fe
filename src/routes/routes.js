import React from "react";
import {BrowserRouter} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PublicRoutes from "./public/publicRoutes";
import CustomerPrivateRoutes from "./private/customerRoutes";
import CollectorPrivateRoutes from "./private/collectorRoutes";
import VendorPrivateRoutes from "./private/vendorRoutes";
const allRoutes = () => {
  var role = localStorage.getItem("Roles");
  return (
    <BrowserRouter>
      {role === null ? <PublicRoutes /> : ""}
      {role === "CUSTOMER" ? <CustomerPrivateRoutes /> : ""}
      {role === "COLLECTOR" ? <CollectorPrivateRoutes /> : ""}
      {role === "VENDOR" ? <VendorPrivateRoutes /> : ""}
    </BrowserRouter>
  );
};

export default allRoutes;
