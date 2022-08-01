/*
  @module puchaseData
*/
/* eslint-disable react/prop-types */
import React from "react";
import "../../customerContainer/customer.css";
import "../vendor.css";

const PurchaseData = (props) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="heading">
            <h2 className="purchaseData-h2">Invoice Details</h2>
          </div>
          <div className="purchaseDataDiv1">
            <h3>
              Congratulations, you have purchased {props.quantity} quantity of{" "}
              {props.item}.
            </h3>

            <div className="purchaseDataDiv2">
              <h3>Your Invoice No. is {Date.now()}.</h3>
            </div>
          </div>
          <div className="purchaseDataDiv3">
            <h7>Click the link below to see the details.</h7>
          </div>
          <div className="details">
            <a href="/MyOrders/SalesSummary" className="purchaseData-a">
              See details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PurchaseData;
