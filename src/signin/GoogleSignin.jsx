import React from "react";
import googleLogo from "../images/google-logo.png";
function GoogleSignin() {
  return (
    <div style={{marginTop:"4px"}}> 


      <a href="http://localhost:8083/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect">
        <div
          style={{
            borderRadius: "17px",
            marginLeft: "30%",
            marginRight: "30%",
            border: "1px solid grey",
            marginTop: "15px",
            padding:"4px"
          }}
        >
          {" "}
          <img src={googleLogo} alt="Google" width="30px" /> Google
        </div>{" "}
      </a>
    </div>
  );
}
export default GoogleSignin;
