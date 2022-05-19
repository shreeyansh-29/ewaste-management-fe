import React from "react";
import CollectorsCategories from "./collectorsCategories";
import Drives from "./drives";
import EWaste from "./wasteGeneratedAnly";
import "../Customer.css";
import CategoryCarousel from "./categoryCarousel";

function CustomerHome() {
  
  return (
    <div className="home">
      <div className="lg_container">
        <div style={{ paddingTop: "5.8%", paddingBottom: "3%" }}>
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
        <h3 style={{ textAlign: "center" }}>
          Your Contribution towards the Sustainability of our Planet
        </h3>
        <EWaste />
      </div>
      <div className="dashboard">
        <h3 style={{ textAlign: "center", padding: "4% 0 2% 0" }}>
          E-Waste Collectors in your City
        </h3>
        <CollectorsCategories />
      </div>
      <div style={{ paddingBottom: "8%" }}>
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
    </div>
  );
}

export default CustomerHome;
