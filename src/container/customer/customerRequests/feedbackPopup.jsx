/* eslint-disable react/prop-types */

import React from "react";
function FeedbackPopup(props) {
  return (
    <>
      <div className="popup-box">
        <div className="box" style={{ marginTop: "60px" }}>
          <button className="btn-close-feedback" onClick={props.handleClose}>
            X
          </button>
          <div className="customersprofile">
            <h1
              style={{
                textAlign: "center",
                padding: "7px",
                fontSize: "2.5rem",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              Feedback
            </h1>
          </div>
          <div className="popupbody">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                marginLeft: "-20%",
              }}
            >
              <input type="radio" id="rate" name="rate" value="Completed" />
              <label style={{ marginLeft: "-20%", fontSize:"13px" }}>Completed</label>
              <input
                type="radio"
                id="rate"
                name="rate"
                value="Cancelled"
                style={{ marginLeft: "-20%" }}
              />
              <label style={{ marginLeft: "-20%", fontSize:"13px"  }}>Cancelled</label>
            </div>
            <br />
            <label htmlFor="RequestID" style={{fontSize:"13px"}}>Request ID</label>
            <input
              type="text"
              name="RequestId"
              style={{ borderRadius: "17px",marginLeft:"50px" }}
              placeholder="RequestID"
            />
            <br></br>
            <label htmlFor="RequestName" style={{fontSize:"13px"}}>Request Name</label>
            <input
              type="text"
              name="RequestName"
              style={{ borderRadius: "17px",marginLeft:"50px" }}
              placeholder="RequestName"
            />
            <br></br>

            <label htmlFor="RequestType"style={{fontSize:"13px"}}>Request Type</label>

            <input
              type="text"
              name="RequestType"
              style={{ borderRadius: "17px",marginLeft:"50px" }}
              placeholder="RequestType"
            />
            <div style={{ display: "flex", flexDirection: "row" , marginTop:"15px"}}>
              <input type="radio" id="rate" name="rate" value="Completed" />
              <label style={{fontSize:"13px"}}>Very Bad</label>
              <input type="radio" id="rate" name="rate" value="Cancelled" />
              <label style={{fontSize:"13px"}}> Bad</label>
              <input type="radio" id="rate" name="rate" value="Completed" />
              <label style={{fontSize:"13px"}}>Good</label>
              <input
                type="radio"
                id="rate"
                name="rate"
                value="Cancelled"
              />{" "}
              <label style={{fontSize:"13px"}}>Very Good</label>
              <input type="radio" id="rate" name="rate" value="Completed" />
              <label style={{fontSize:"13px"}}>Excellent</label>
            </div>
            <label>Additional feedback</label>
            <br></br>

            <textarea
              id="feedback"
              name="feedback"
              rows="2"
              cols="50"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeedbackPopup;
