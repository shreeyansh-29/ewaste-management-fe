import React from "react";
import googleLogo from "../images/google-logo.png";
function GoogleSignin() {
  return (
    <div>
      <a href="http://localhost:8083/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect">
        <div
          style={{
            borderRadius: "17px",
            marginLeft: "-10px",
            border: "1px solid white",
            marginTop: "15px",
          }}
        >
          {" "}
          <img src={googleLogo} alt="Google" width="30px" /> Sign in
        </div>{" "}
      </a>
    </div>
  );
}
export default GoogleSignin;
