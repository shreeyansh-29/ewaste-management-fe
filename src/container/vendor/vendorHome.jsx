import React from "react";
import CatgItems from "./vendor Analytics/catgItems";
import VendorData from "./vendor Analytics/vendorData";
import "./vendor Analytics/vendorAnalytics.css";
import CollectorData from "./vendor Analytics/collectorData";
import CollCat from "./vendor Analytics/category";
import CategoryCarousel from "../../components/carousel/categoryCarousel";

const VendorHome = () => {
  return (
    <>
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
            fontWeight: "500",
            fontFamily: "Roboto",
            marginBottom: "-8%",
            paddingTop: "4%",
            textDecoration: "underline",
          }}
        >
          {" "}
          Your contribution as an Eco-ranger:{" "}
        </h3>
        <div className="dashboard">
          <h3 style={{textAlign: "center", padding: "12% 0 1% 0"}}>
            Your contribution towards the Recyclability of the E-Waste Generated
          </h3>
          <CatgItems />
        </div>
        <div className="dashboard">
          <h3 style={{textAlign: "center", padding: "0 0 1% 0"}}>
            Number of Collectors per Category in your City
          </h3>
          <CollCat />
        </div>
        <div className="row" style={{padding: "5% 3% 10% 3%"}}>
          <div className="col-lg-6">
            <h3 style={{textAlign: "center", padding: "0 0 1% 0"}}>
              E-Waste Collectors in your City
            </h3>
            <CollectorData />
          </div>
          <div className="col-lg-6">
            <h3 style={{textAlign: "center", padding: "0 0 1% 0"}}>
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
