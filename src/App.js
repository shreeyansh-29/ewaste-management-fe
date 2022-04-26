import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from "./signin/Signin";
import OAuth2RedirectHandler from "./oauth2/OAuth2RedirectHandler";
import Home from "./HomePage/Home";
import SignUp from "./Sign-Up/SignUp";
import ForgotPassword from "./ForPass/ForgotPassword";
import ResetPass from "./ForPass/ResetPass";
import CustomerHome from "./Customer/Customer Analytics/CustomerHome";
import EditProfile from "./Customer/EditProfile";
import CustomerNav from "./Customer/Navbar/CustomerNav";
import CollectorNav from "./Collector/Navbar/CollectorNav";
import CollectorHome from "./Collector/Collector Analytics/CollectorHome";
import CollectorProfile from "./Collector/CollectorProfile";
import MyDrives from "./Collector/E-Waste Drives/MyDrives";
import MyRequests from "./Customer/Customer Requests/MyRequests";
import OrganizeDrive from "./Collector/E-Waste Drives/OrganizeDrive";
import CollectorRequests from "./Collector/CollectorsRequests/CollectorRequests";
import PickUp from "./Customer/Customer Requests/PickUp";
import DropOff from "./Customer/Customer Requests/DropOff";
import ViewCollectors from "./Customer/Customer Requests/ViewCollectors";
import VendorHome from "./Vendor/Vendor Analytics/VendorHome";
import VendorNav from "./Vendor/Navbar/VendorNav";
import VendorProfile from "./Vendor/VendorProfile";
import Sales from "./Vendor/Sales";
import MyOrders from "./Vendor/MyOrders";
import RequestSummary from "./Collector/CollectorsRequests/RequestSummary";
import ItemsForSale from "./Collector/ItemsForSale";

import GlobalStyle from "./globalStyles";
import ScrollToTop from "./Components/ScrollToTop";
import SummarySales from "./Collector/SummarySales";
import Popup from "./Customer/Popup";
import Waste from "./Customer/Customer Requests/Waste";

function App() {
  // const [ authenticated, setauthen] = useState(false);
  const role = localStorage.getItem("Roles");

  console.log(role);
  return (
    <BrowserRouter>
      {role === "CUSTOMER" ? (
        <>
          
          <CustomerNav  />
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
        <Route path="/Signin"   element={<Signin />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route
          path={"/password/save/:token"}
          render={(props) => <ResetPass {...props} />}
          element={<ResetPass />}
        />
        <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler/>}></Route>  
        <Route path="/CustomerHome"  element={<CustomerHome />} />
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
        <Route path="/Waste" element={<Waste/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
