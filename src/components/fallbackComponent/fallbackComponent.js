import React from "react";
import "./fallbackComponent.css";
import image from "../../assets/images/something-went-wrong.png";

const FallbackComponent = () => {
  return (
    <>
      <div className="row text-center column">
        <div className="col-lg-12 div1">
          <img src={image} alt="" className="img1" />
        </div>
        <div className="col-lg-12">
          <h1 className="error-h1">Oh no!</h1>
          <h2 className="error-h2">!!!!....Something went wrong....!!!!</h2>
          <h5 className="error-h5">Refresh or Try Again Later</h5>
        </div>
      </div>
    </>
  );
};

export default FallbackComponent;
