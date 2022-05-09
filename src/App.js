import React from "react";
import Navbar from "./container/components/navbar/navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./container/sign-In/signin";
import OAuth2RedirectHandler from "./container/oauth2/oAuth2RedirectHandler";
import Home from "./container/homePage/home";
import SignUp from "./container/sign-Up/signUp";
import ForgotPassword from "./container/forgotPassword/forgotPassword";
import ResetPass from "./container/forgotPassword/resetPassword";
import CustomerHome from "./container/customer/customerAnalytics/customerHome";
import EditProfile from "./container/customer/customerProfile/editProfile";
import CustomerNav from "./container/customer/navbar/customerNav";
import CollectorNav from "./container/collector/navbar/collectorNav";
import CollectorHome from "./container/collector/collectorAnalytics/collectorHome";
import CollectorProfile from "./container/collector/profile/collectorProfile";
import MyDrives from "./container/collector/e-Waste Drives/myDrives";
import MyRequests from "./container/customer/customerRequests/myRequests";
import OrganizeDrive from "./container/collector/e-Waste Drives/organizeDrive";
import CollectorRequests from "./container/collector/collectorsRequests/collectorRequests";
import PickUp from "./container/customer/customerRequests/pickUp";
import DropOff from "./container/customer/customerRequests/dropOff";
import ViewCollectors from "./container/customer/customerRequests/viewCollectors";
import VendorHome from "./container/vendor/vendor Analytics/vendorHome";
import VendorNav from "./container/vendor/navbar/vendorNav";
import VendorProfile from "./container/vendor/vendorProfile/vendorProfile";
import Sales from "./container/vendor/sales";
import MyOrders from "./container/vendor/myOrders";
import RequestSummary from "./container/collector/collectorsRequests/requestSummary";
import ItemsForSale from "./container/collector/collectorSaleItems/itemsForSale";

import GlobalStyle from "./container/globalStyles";
import ScrollToTop from "./container/components/scrollToTop";
import SummarySales from "./container/collector/collectorSaleItems/summarySales";
import Popup from "./container/customer/popup";
import Waste from "./container/customer/customerRequests/waste";

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
