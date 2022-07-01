import React from "react";
import EWasteDrives from "./collectorAnalytics/eWasteDrives";
import EWasteOrg from "./collectorAnalytics/eWasteItems";
import Users from "./collectorAnalytics/users";
import Data from "./collectorAnalytics/vendor.jsx";
import Revenue from "./collectorAnalytics/revenueChart";
import "./Collector.css";
import CategoryCarousel from "../categoryCarousel";

const CollectorHome = () => {
  return (
    <div className="home">
      <div className="lg_container">
        <div style={{paddingTop: "5.8%", paddingBottom: "3%"}}>
          <CategoryCarousel />
        </div>
      </div>
      <h3
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginTop: "1%",
          fontFamily: "Roboto,sans-serif",
          fontWeight: "500",
          paddingTop: "4%",
          textDecoration: "underline",
        }}
      >
        {" "}
        Your contribution as an Eco-ranger:{" "}
      </h3>
      <div className="dashboard">
        <h3 style={{textAlign: "center", padding: "4% 0 2% 0"}}>
          Your contribution towards the Collection and Reusability of E-Waste
          Items
        </h3>
        <EWasteOrg />
        <h3 style={{textAlign: "center", padding: "6% 0 8% 0"}}>
          Revenue Generated With Respect to Category
        </h3>
        <Revenue />
      </div>
      <div className="dashboard">
        <h3 style={{textAlign: "center", padding: "4% 0 2% 0"}}>
          E-Waste drives in your City
        </h3>
        <EWasteDrives />
      </div>
      <div className="row" style={{padding: "2% 0 10% 0"}}>
        <div className="col-lg-6">
          <h3 style={{textAlign: "center", padding: "4% 0 2% 0"}}>
            E-Waste Generators in your City
          </h3>
          <Users />
        </div>
        <div className="col-lg-6">
          <h3 style={{textAlign: "center", padding: "4% 0 2% 0"}}>
            E-Waste Recylers in your City
          </h3>
          <Data />
        </div>
      </div>
    </div>
  );
};

export default CollectorHome;
