/*
  @module analytics
*/
import React from "react";
import {Carousel} from "react-bootstrap";
import EWaste from "./wasteGenerated";
import "../customer.css";
import CollectorsCategories from "./collectorsCategories";
import Drives from "./drives";

const Analytics = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <h3 className="analytics-h3">
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
};

export default Analytics;
