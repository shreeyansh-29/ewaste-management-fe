import React from "react";
import {Routes, Route} from "react-router-dom";
import VendorHome from "../../container/vendor/vendorHome";
import VendorNav from "../../container/vendor/navbar/vendorNav";
import VendorProfile from "../../container/vendor/vendorProfile/vendorProfile";
import Sales from "../../container/vendor/vendorSales/sales";
import MyOrders from "../../container/vendor/vendorSales/myOrders";
export default function vendorPrivateRoutes() {
  return (
    <Routes>
      <Route exact path="/VendorHome" element={<VendorHome />} />
      <Route exact path="/VendorNav" element={<VendorNav />} />
      <Route exact path="/VendorProfile" element={<VendorProfile />} />
      <Route exact path="/MyOrders/PurchaseItems" element={<Sales />} />
      <Route exact path="/MyOrders/SalesSummary" element={<MyOrders />} />
    </Routes>
  );
}
