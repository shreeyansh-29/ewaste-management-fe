/* eslint-disable react/prop-types */
import React from "react";
import "../../customer/customer.css";

const PuchaseData = (props) => {
  return (
    <>
      <div className="popup-box">
        <div className="box">
          <div className="heading">
            <h2
              style={{
                textAlign: "center",
                padding: "20px",
                fontSize: "1.7rem",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              Invoice Details
            </h2>
          </div>
          <div
            style={{textAlign: "center", marginTop: "40px", padding: "0 50px"}}
          >
            <h3>
              Congratulations, you have purchased {props.quantity} quantity of{" "}
              {props.item}.
            </h3>
            <div style={{textAlign: "center", marginTop: "40px"}}>
              <h3>Your Invoice No. is {Date.now()}.</h3>
            </div>
          </div>
          <div style={{textAlign: "center", marginTop: "30px"}}>
            <h7>Click the link below to see the details.</h7>
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            {" "}
            <a href="/MyOrders" style={{color: "blue"}}>
              See details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default PuchaseData;
