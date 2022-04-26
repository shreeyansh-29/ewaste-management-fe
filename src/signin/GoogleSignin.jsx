import React from "react";
import "../Components/signin.css";
import googleLogo from "../images/google-logo.png";
function GoogleSignin() {
  const handleClick = () => {
    window.location.href =
      "http://localhost:8083/oauth2/authorize/google?redirect_uri=http://localhost:3000/oauth2/redirect";
  };
  return (
    <div className="text-center" style={{ marginTop: "8px" }}>
      <button type="button" onClick={handleClick} className="googlebtn">
        <img
          src={googleLogo}
          alt="Google"
          width="30px"
          style={{ paddingBottom: "4px" }}
        />
        Google
      </button>
    </div>
  );
}
export default GoogleSignin;
