/* eslint-disable react/prop-types */
import React from "react";
import "../customer/Customer.css";

function PuchaseData(props) {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h4>
              You purchased {props.quantity} quantity of {props.item}.
            </h4>
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h4>Your Order id is {Date.now()}.</h4>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h7>Click the link below to see the details.</h7>
          </div>
          <div style={{ textAlign: "center", marginTop: "40px" }}>
            {" "}
            <a href="/MyOrders">See details</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default PuchaseData;
