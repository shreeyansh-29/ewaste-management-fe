/*
  @module vendorHome
*/
import React from "react";
import CatgItems from "./vendor Analytics/catgItems";
import VendorData from "./vendor Analytics/vendorData";
import "./vendor Analytics/vendorAnalytics.css";
import CollectorData from "./vendor Analytics/collectorData";
import CollCat from "./vendor Analytics/category";
import CategoryCarousel from "../../components/carousel/categoryCarousel";
import "./vendor.css";

const VendorHome = () => {
  return (
    <>
      <div className="home">
        <div className="lg_container">
          <div className="vendorCarousel">
            <CategoryCarousel />
          </div>
        </div>
        <h3 className="vendorCarousel-h3-1">
          Your contribution as an Eco-ranger:
        </h3>
        <div className="dashboard">
          <h3 className="vendorCarousel-h3-2">
            Your contribution towards the Recyclability of the E-Waste Generated
          </h3>
          <CatgItems />
        </div>
        <div className="dashboard">
          <h3 className="vendorCarousel-h3-3">
            Number of Collectors per Category in your City
          </h3>
          <CollCat />
        </div>
        <div className="row vendorCarouselDiv">
          <div className="col-lg-6">
            <h3 className="vendorCarousel-h3-3">
              E-Waste Collectors in your City
            </h3>
            <CollectorData />
          </div>
          <div className="col-lg-6">
            <h3 className="vendorCarousel-h3-3">
              E-Waste Recycling Vendors in your City
            </h3>
            <VendorData />
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorHome;
