import React from "react";
import {Routes, Route} from "react-router-dom";
import CustomerHome from "../../container/customer/customerHome";
import CustomerProfile from "../../container/customer/customerProfile/customerProfile";
import CustomerNav from "../../container/customer/navbar/customerNav";
import PickUp from "../../container/customer/customerRequests/pickUp";
import DropOff from "../../container/customer/customerRequests/dropOff";
import MyRequests from "../../container/customer/customerRequests/MyRequests/myRequests";
import Popup from "../../container/components/popup";
import ViewCollectors from "../../container/customer/customerRequests/viewCollectors";
import Waste from "../../container/customer/customerRequests/waste";

const CustomerPrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/CustomerHome" element={<CustomerHome />} />
      <Route path="/CustomreProfile" element={<CustomerProfile />} />
      <Route path="/CustomerNav" element={<CustomerNav />} />
      <Route path="/Request/PickUp" element={<PickUp />} />
      <Route path="/Request/DropOff" element={<DropOff />} />
      <Route path="/Request/MyRequests" element={<MyRequests />} />
      <Route path="/Popup" element={<Popup />} />
      <Route path="/Drives/Waste" element={<Waste />} />
      <Route path="/ViewCollectors" element={<ViewCollectors />} />
    </Routes>
  );
};
export default CustomerPrivateRoutes;