/* eslint-disable react/prop-types */
import React from "react";
import Toast from "../../../../components/toast";
import Rating from "./rating";
import { TOAST_SUCCESS9 } from "../../../../constant/constant";
function FeedbackPopup(props) {
  const handleClick = () => {
    props.handleClose();
    Toast.success(TOAST_SUCCESS9);
  };
  return (
    <>
      <div className="popup-box">
        <div className="box" style={{ marginTop: "60px" }}>
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
              className="form-check form-check-inline" style={{marginLeft:"20%"}}>
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label"  >Completed</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label">Cancelled</label>
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
                marginTop: "25px",
              }}
            >
              <label htmlFor="RequestID">Request ID</label>
              <input
                type="text"
                name="RequestId"
                style={{ borderRadius: "17px", marginLeft: "50px" }}
                placeholder="RequestID"
                value={props.contents.id}
                disabled
              />
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <label htmlFor="RequestName">Request Name</label>
              <input
                type="text"
                name="RequestName"
                style={{ borderRadius: "17px", marginLeft: "15px" }}
                placeholder="RequestName"
                value={props.contents.itemName}
                disabled
              />
            </div>
            <br></br>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                alignItems: "center",
              }}
            >
              <label htmlFor="RequestType">Request Type</label>

              <input
                type="text"
                name="RequestType"
                style={{ borderRadius: "17px", marginLeft: "25px" }}
                placeholder="RequestType"
                value={props.contents.requestType}
                disabled
              />
            </div>

            <Rating/>
            <label
              style={{ marginTop: "20px", marginLeft: "5px" }}
            >
              Additional feedback
            </label>
            <br></br>

            <textarea
              id="feedback"
              name="feedback"
              rows="2"
              cols="50"
            ></textarea>
            <div className="text-center" style={{ marginTop: "10px" }}>
              <button
                type="button"
                className="signin-button"
                onClick={handleClick}
              >
                <div style={{ textAlign: "center" }}>Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FeedbackPopup;
