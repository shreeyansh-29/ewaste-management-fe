import React from "react";
import "./signin.css";
import googleLogo from "../images/google-logo.png";

import {GOOGLE_AUTH_URL} from "../constant/constant";
function GoogleSignin() {
  const handleClick = () => {
    window.location.href = GOOGLE_AUTH_URL;
  };
  return (
    <div className="text-center" style={{marginTop: "8px"}}>
      <button type="button" onClick={handleClick} className="googlebtn">
        <img
          src={googleLogo}
          alt="Google"
          width="30px"
          style={{paddingBottom: "4px"}}
        />
        Google
      </button>
    </div>
  );
}
export default GoogleSignin;
