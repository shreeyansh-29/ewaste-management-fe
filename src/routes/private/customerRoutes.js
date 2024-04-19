/*
  @module customerRoutes
*/
import React, {Suspense, lazy} from "react";
import {Routes, Route} from "react-router-dom";
// import CustomerHome from "../../container/customerContainer/customerHome";
// import CustomerProfile from "../../container/customerContainer/customerProfile/customerProfile";
// import CustomerNav from "../../container/customerContainer/navbar/customerNav";
// import PickUp from "../../container/customerContainer/customerRequests/pickUp";
// import DropOff from "../../container/customerContainer/customerRequests/dropOff";
// import MyRequests from "../../container/customerContainer/customerRequests/MyRequests/myRequests";
// import Popup from "../../components/popUp/popUp";
// import ViewCollectors from "../../container/customerContainer/customerRequests/viewCollectors";
// import Waste from "../../container/customerContainer/customerRequests/waste";
// import PageNotFound from "../../components/pageNotFound/pageNotFound";
// import AuthProtected from "../authProtected/authProtected";

const CustomerHome = lazy(() =>
  import("../../container/customerContainer/customerHome")
);
const CustomerProfile = lazy(() =>
  import("../../container/customerContainer/customerProfile/customerProfile")
);
const CustomerNav = lazy(() =>
  import("../../container/customerContainer/navbar/customerNav")
);
const PickUp = lazy(() =>
  import("../../container/customerContainer/customerRequests/pickUp")
);
const DropOff = lazy(() =>
  import("../../container/customerContainer/customerRequests/dropOff")
);
const MyRequests = lazy(() =>
  import(
    "../../container/customerContainer/customerRequests/MyRequests/myRequests"
  )
);
const Popup = lazy(() => import("../../components/popUp/popUp"));
const ViewCollectors = lazy(() =>
  import("../../container/customerContainer/customerRequests/viewCollectors")
);
const Waste = lazy(() =>
  import("../../container/customerContainer/customerRequests/waste")
);
const PageNotFound = lazy(() =>
  import("../../components/pageNotFound/pageNotFound")
);
const AuthProtected = lazy(() => import("../authProtected/authProtected"));

const CustomerRoutes = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route path="/CustomerHome" element={<CustomerHome />} />
        <Route path="/CustomerProfile" element={<CustomerProfile />} />
        <Route path="/CustomerNav" element={<CustomerNav />} />
        <Route path="/Request/PickUp" element={<PickUp />} />
        <Route path="/Request/DropOff" element={<DropOff />} />
        <Route path="/Request/MyRequests" element={<MyRequests />} />
        <Route path="/Popup" element={<Popup />} />
        <Route path="/Drives/Waste" element={<Waste />} />
        <Route path="/ViewCollectors" element={<ViewCollectors />} />
        <Route path="/" element={<AuthProtected />} />
        <Route exact path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};
export default CustomerRoutes;
