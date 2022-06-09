import React from "react";
import Navbar from "./container/components/navbar/navbars";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Signin from "./container/signIn/signIn";
import Home from "./container/homePage/home";
import SaleItems from "./container/collector/collectorSaleItems/salesItems";
import SignUp from "./container/signUp/signUp";
import ForgotPassword from "./container/forgotPassword/forgotPassword";
import ResetPass from "./container/forgotPassword/resetPassword";
import CustomerHome from "./container/customer/customerHome";
import EditProfile from "./container/customer/customerProfile/editProfile";
import CustomerNav from "./container/customer/navbar/customerNav";
import CollectorNav from "./container/collector/navbar/collectorNav";
import CollectorHome from "./container/collector/collectorHome";
import CollectorProfile from "./container/collector/profile/collectorProfile";
import MyDrives from "./container/collector/e-Waste Drives/myDrives";
import MyRequests from "./container/customer/customerRequests/myRequests";
import OrganizeDrive from "./container/collector/e-Waste Drives/organizeDrive";
import CollectorRequests from "./container/collector/collectorsRequests/collectorRequests";
import PickUp from "./container/customer/customerRequests/pickUp";
import DropOff from "./container/customer/customerRequests/dropOff";
import ViewCollectors from "./container/customer/customerRequests/viewCollectors";
import VendorHome from "./container/vendor/vendorHome";
import VendorNav from "./container/vendor/navbar/vendorNav";
import VendorProfile from "./container/vendor/vendorProfile/vendorProfile";
import Sales from "./container/vendor/vendorSales/sales";
import MyOrders from "./container/vendor/vendorSales/myOrders";
import RequestSummary from "./container/collector/collectorsRequests/requestSummary";
import ItemsForSale from "./container/collector/collectorSaleItems/itemsForSale";
import Feedbacks from "./container/collector/collectorsRequests/feedbacks"
import GlobalStyle from "./container/globalStyles";
import ScrollToTop from "./container/components/scrollToTop";
import SummarySales from "./container/collector/collectorSaleItems/availableSales";
import Popup from "./container/customer/popup";
import Waste from "./container/customer/customerRequests/waste";

function App() {
  const role = localStorage.getItem("Roles");
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
        <Route path="/Signin" element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path={"/password/save/:token"}
          render={(props) => <ResetPass {...props} />}
          element={<ResetPass />}
        />
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="/Feedbacks" element={<Feedbacks/>}/>
        <Route path="/Popup" element={<Popup />} />
        <Route path="/CollectorHome" element={<CollectorHome />} />
        <Route path="/CollectorProfile" element={<CollectorProfile />} />
        <Route path="/MyDrives" element={<MyDrives />} />
        <Route path="/ItemsForSale" element={<ItemsForSale />} />
        <Route path="/MyRequests" element={<MyRequests />} />
        <Route path="/SaleItems" element={<SaleItems />} />

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
