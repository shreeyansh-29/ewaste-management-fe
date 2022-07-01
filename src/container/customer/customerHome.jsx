import React from "react";
import CollectorsCategories from "./customerAnalytics/collectorsCategories";
import Drives from "./customerAnalytics/drives";
import EWaste from "./customerAnalytics/wasteGenerated";
import "./customer.css";
import CategoryCarousel from "../categoryCarousel";
import useGeoLocation from "../hooks /useGeoLocation";

const CustomerHome = () => {
  const location = useGeoLocation();

  return (
    <div className="home">
      {/* <UseGeoLocation/> */}
      <div className="lg_container">
        <div style={{paddingTop: "5.8%", paddingBottom: "3%"}}>
          <CategoryCarousel />
        </div>
      </div>
      <h3
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          marginTop: "1%",
          fontWeight: "500",
          fontFamily: "Poppins",
          paddingTop: "4%",
          paddingBottom: "3%",
          textDecoration: "underline",
        }}
      >
        {" "}
        Your contribution as an Eco-ranger:{" "}
      </h3>
      <div className="dashboard">
        <h3 style={{textAlign: "center"}}>
          Your Contribution towards the Sustainability of our Planet
        </h3>
        <EWaste />
      </div>
      <div className="dashboard">
        <h3 style={{textAlign: "center", padding: "4% 0 2% 0"}}>
          E-Waste Collectors in your City
        </h3>
        <CollectorsCategories />
      </div>
      <div style={{paddingBottom: "8%"}}>
        <h3
          style={{
            textAlign: "center",
            padding: "8% 0 2% 0",
          }}
        >
          E-Waste Drives in your City
        </h3>
        <Drives />
      </div>
      {location.loaded
        ? localStorage.setItem("customer location", JSON.stringify(location))
        : "Location data not found"}
    </div>
  );
};

export default CustomerHome;
