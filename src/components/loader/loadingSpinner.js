import React from "react";
import "./spinner.css";
import {ThreeDots} from "react-loader-spinner";

function LoadingSpinner() {
  return (
    <div className="spinner-container">
      <div className="loading-spinner">
        <ThreeDots height="50" width="50" />
      </div>
    </div>
  );
}
export default LoadingSpinner;
