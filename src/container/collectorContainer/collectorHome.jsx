/*
  @module collectorHome
*/
import React from "react";
import EWasteDrives from "./collectorAnalytics/eWasteDrives";
import EWasteOrg from "./collectorAnalytics/eWasteItems";
import Users from "./collectorAnalytics/users";
import Data from "./collectorAnalytics/vendor.jsx";
import Revenue from "./collectorAnalytics/revenueChart";
import "./collector.css";
import CategoryCarousel from "../../components/carousel/categoryCarousel";

const CollectorHome = () => {
  return (
    <div className="home">
      <div className="lg_container">
        <div className="home-carousel">
          <CategoryCarousel />
        </div>
      </div>
      <h3 className="home-h3">Your contribution as an Eco-ranger:</h3>
      <div className="dashboard">
        <h3 className="home-h3-1">
          Your contribution towards the Collection and Reusability of E-Waste
          Items
        </h3>
        <EWasteOrg />
        <h3 className="home-h3-2">
          Revenue Generated With Respect to Category
        </h3>
        <Revenue />
      </div>
      <div className="dashboard">
        <h3 className="home-h3-1">E-Waste drives in your City</h3>
        <EWasteDrives />
      </div>
      <div className="row home-div">
        <div className="col-lg-6">
          <h3 className="home-h3-1">E-Waste Generators in your City</h3>
          <Users />
        </div>
        <div className="col-lg-6">
          <h3 className="home-h3-1">E-Waste Recylers in your City</h3>
          <Data />
        </div>
      </div>
    </div>
  );
};

export default CollectorHome;
