import jwt from "jwt-decode";
import { toast } from "react-toastify";
import {
  COLLECTOR_AUTH_URL,
  COLLECTOR_NOTIFICATION_URL,
  CUSTOMER_AUTH_URL,
  CUSTOMER_NOTIFICATION_URL,
  VENDOR_AUTH_URL,
} from "../constant/constant";

import googleLogo from "../images/google-logo.png";
import api from "../../core/utilities/httpProvider";
import React from "react";
import GoogleLogin from "react-google-login";
function googleSignin() {
  const onSuccess = async (result) => {
    const email = result.profileObj.email;
    try {
      var res = await api.post(
        `http://localhost:8083/signin/google?email=${email}`
      );
      res = await res.json();
      if (res.status == "Fail") {
        toast.error("Wrong Email ID", { position: toast.POSITION.TOP_RIGHT });
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", email);
      const tokens = localStorage.getItem("token");
      const token = jwt(tokens);
      localStorage.setItem("Roles", token.Roles[0]);
      var val;
      const role = token.Roles[0];
      if (role === "CUSTOMER") {
        val = await api.get(CUSTOMER_AUTH_URL);
        result = await api.get(CUSTOMER_NOTIFICATION_URL);
      }
      if (role === "COLLECTOR") {
        val = await api.get(COLLECTOR_AUTH_URL);
        result = await api.get(COLLECTOR_NOTIFICATION_URL);
      }
      if (role === "VENDOR") {
        val = await api.get(VENDOR_AUTH_URL);
      }
      localStorage.setItem("name", val.data.firstName);
      if (role === "CUSTOMER" || role === "COLLECTOR") {
        if (result.status === "fail") {
          localStorage.setItem("count", "0");
        } else if (result.status === "success") {
          localStorage.setItem("count", result.data.length);
        }
      }

      if (res.status == "success") {
        if (role === "CUSTOMER") {
          window.location.href = "/CustomerHome";
        } else if (role === "COLLECTOR") {
          window.location.href = "/CollectorHome";
        } else if (role === "VENDOR") {
          window.location.href = "/VendorHome";
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  const onFailure = (response) => {
    console.log(response);
  };

  return (
    <div style={{  marginTop: "4%" }}>
      <GoogleLogin
        clientId="890963815850-bguvaqnq3mc0jt0q3l459oufv2b7uocu.apps.googleusercontent.com"
        render={(renderProps) => (
          <div className="text-center">
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="googlebtn"
            >
              <img
                src={googleLogo}
                alt="Google"
                width="30px"
                style={{ paddingBottom: "4px" }}
              />
              Sign in
            </button>
          </div>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        approvalPrompt="force"
        prompt="consent"
        style={{ backgroundColor: "blue", width: 50, height: "50px" }}
      />
    </div>
  );
}
export default googleSignin;
