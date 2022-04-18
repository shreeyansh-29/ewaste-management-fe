import React from "react";
import { Carousel } from "react-bootstrap";
import EWaste from "./WasteGeneratedAnly";
import "../Customer.css";
import CollectorsCategories from "./CollectorsCategories";
import Drives from "./Drives";
function Analytics() {
  return (
    <Carousel>
      <Carousel.Item>
        <h3 style={{ textAlign: "center" }}>
          Your Contribution towards the Sustainability of our Planet
        </h3>
        <div>
          <EWaste />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h3>E-Waste Collectors in your City</h3>
        <div>
          <CollectorsCategories />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <h3>E-Waste Drives in your City</h3>
        <div>
          <Drives />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Analytics;
