/*
  @module customerHome
*/
import React from "react";
import CollectorsCategories from "./customerAnalytics/collectorsCategories";
import Drives from "./customerAnalytics/drives";
import EWaste from "./customerAnalytics/wasteGenerated";
import "./customer.css";
import CategoryCarousel from "../../components/carousel/categoryCarousel";

const CustomerHome = () => {
  return (
    <div className="home">
      <div className="lg_container">
        <div className="home-heading">
          <CategoryCarousel />
        </div>
      </div>
      <h3 className="customerHome-h3">Your contribution as an Eco-ranger:</h3>
      <div className="dashboard">
        <h3 className="customerHome-h3-1">
          Your Contribution towards the Sustainability of our Planet
        </h3>
        <EWaste />
      </div>
      <div className="dashboard">
        <h3 className="customerHome-h3-2">E-Waste Collectors in your City</h3>
        <CollectorsCategories />
      </div>
      <div className="customerHome-div">
        <h3 className="customerHome-h3-3">E-Waste Drives in your City</h3>
        <Drives />
      </div>
    </div>
  );
};

export default CustomerHome;
