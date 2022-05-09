import React from "react";
import Navbar from "./container/components/Navbar/Navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./container/sign-In/Signin";
import OAuth2RedirectHandler from "./container/oauth2/OAuth2RedirectHandler";
import Home from "./container/homePage/Home";
import SignUp from "./container/sign-Up/SignUp";
import ForgotPassword from "./container/forgotPassword/ForgotPassword";
import ResetPass from "./container/forgotPassword/ResetPassword";
import CustomerHome from "./container/customer/Customer Analytics/CustomerHome";
import EditProfile from "./container/customer/EditProfile";
import CustomerNav from "./container/customer/Navbar/CustomerNav";
import CollectorNav from "./container/collector/navbar/CollectorNav";
import CollectorHome from "./container/collector/collectorAnalytics/CollectorHome";
import CollectorProfile from "./container/collector/CollectorProfile";
import MyDrives from "./container/collector/e-Waste Drives/MyDrives";
import MyRequests from "./container/customer/Customer Requests/MyRequests";
import OrganizeDrive from "./container/collector/e-Waste Drives/OrganizeDrive";
import CollectorRequests from "./container/collector/collectorsRequests/CollectorRequests";
import PickUp from "./container/customer/Customer Requests/PickUp";
import DropOff from "./container/customer/Customer Requests/DropOff";
import ViewCollectors from "./container/customer/Customer Requests/ViewCollectors";
import VendorHome from "./container/vendor/Vendor Analytics/VendorHome";
import VendorNav from "./container/vendor/Navbar/VendorNav";
import VendorProfile from "./container/vendor/VendorProfile";
import Sales from "./container/vendor/Sales";
import MyOrders from "./container/vendor/MyOrders";
import RequestSummary from "./container/collector/collectorsRequests/RequestSummary";
import ItemsForSale from "./container/collector/ItemsForSale";

import GlobalStyle from "./container/globalStyles";
import ScrollToTop from "./container/components/ScrollToTop";
import SummarySales from "./container/collector/SummarySales";
import Popup from "./container/customer/Popup";
import Waste from "./container/customer/Customer Requests/Waste";

function App() {
  const role = localStorage.getItem("Roles");
  
  console.log(role);
  return (
    <BrowserRouter>
      {role === "CUSTOMER" ? (
        <>
          <CustomerNav />
          <GlobalStyle />
          <ScrollToTop />
        </>
      ) : (
        ""
      )}
      {role === "COLLECTOR" ? (
        <>
          <GlobalStyle />
          <ScrollToTop />
          <CollectorNav />
        </>
      ) : (
        ""
      )}
      {role === "VENDOR" ? (
        <>
          <GlobalStyle />
          <ScrollToTop />
          <VendorNav />
        </>
      ) : (
        ""
      )}
      {role === null ? (
        <>
          <GlobalStyle />
          <ScrollToTop />
          <Navbar />
        </>
      ) : (
        ""
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signin"  element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path={"/password/save/:token"}
          render={(props) => <ResetPass {...props} />}
          element={<ResetPass />}
        />
        <Route
          path="/oauth2/redirect"
          element={<OAuth2RedirectHandler />}
        ></Route>
        <Route
          path="/CustomerHome"
          element={<CustomerHome />}
        />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/CollectorHome" element={<CollectorHome />} />
        <Route path="/CollectorProfile" element={<CollectorProfile />} />
        <Route path="/MyDrives" element={<MyDrives />} />
        <Route path="/ItemsForSale" element={<ItemsForSale />} />
        <Route path="/MyRequests" element={<MyRequests />} />

        <Route path="/OrganizeDrive" element={<OrganizeDrive />} />
        <Route path="/CollectorRequests" element={<CollectorRequests />} />
        <Route path="/DropOff" element={<DropOff />} />
        <Route path="/PickUp" element={<PickUp />} />
        <Route path="/viewCollectors" element={<ViewCollectors />} />
        <Route path="/VendorProfile" element={<VendorProfile />} />
        <Route path="/Sales" element={<Sales />} />
        <Route path="/VendorHome" element={<VendorHome />} />
        <Route path="/MyOrders" element={<MyOrders />} />
        <Route path="/RequestSummary" element={<RequestSummary />} />
        <Route path="/ItemsForSale" element={<ItemsForSale />} />
        <Route path="/SummarySales" element={<SummarySales />} />
        <Route path="/Waste" element={<Waste />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
