import React from "react";
import GoogleLogin from "react-google-login";
import jwt from "jwt-decode";
import { toast } from "react-toastify";
import { notificationcount } from "./notificationcount";
import { profile } from "./profile";
function GoogleSignin() {
  const onSuccess = async (result) => {
    console.log("res", result);
    const email = result.profileObj.email;
    console.log(email);
    console.log(typeof email);
    try {
      const response = await fetch(
        `http://localhost:8083/signin/google?email=${email}`,
        {
          method: "POST",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const res = await response.json();
      console.log(res);
      if (res.status === "Fail") {
        toast.error("Wrong Email ID", { position: toast.POSITION.TOP_RIGHT });
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("email", email);
      const tokens = localStorage.getItem("token");
      const token = jwt(tokens);
      localStorage.setItem("Roles", token.Roles[0]);
      const role = token.Roles[0];
      if (role === "CUSTOMER") {
        try {
          let val = await profile("customer");
          console.log(val);
          localStorage.setItem("name", val.data.firstName);

          let result = await notificationcount("customer");
          console.log(result);
          if (result.status === "fail") {
            localStorage.setItem("count", "0");
          } else if (result.status === "success") {
            localStorage.setItem("count", result.data.length);
          }
        } catch (err) {
          console.log(err);
        }
      }
      if (role === "COLLECTOR") {
        try {
          let res1 = await profile("collector");

          localStorage.setItem("name", res1.data.firstName);

          let result = await notificationcount("collector");
          if (result.status === "fail") {
            localStorage.setItem("count", "0");
          } else if (result.status === "success") {
            localStorage.setItem("count", result.data[0].length);
          }
        } catch (err) {
          console.log(err);
        }
      }
      if (role === "VENDOR") {
        try {
          let ress = await profile("vendor");

          localStorage.setItem("name", ress.data.firstName);
        } catch (err) {
          console.log(err);
        }
      }

      if (res.status === "success") {
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
    console.log("ress", response);
  };

  return (
    <div style={{ marginLeft: "30%" }}>
      <GoogleLogin
        clientId="890963815850-bguvaqnq3mc0jt0q3l459oufv2b7uocu.apps.googleusercontent.com"
        buttonText="Signin"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        approvalPrompt="force"
        prompt="consent"
      />
    </div>
  );
}
export default GoogleSignin;
