import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import { toast } from "react-toastify";
import GoogleSignin from "./GoogleSignin";
import jwt from "jwt-decode";
import { notificationcount } from "./notificationcount";
import { profile } from "./profile";
const SignIn = () => {
  const [password, setPassword] = useState("");

  const [passwordType, setpasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [passworderr, setpasswordErr] = useState("");
  const [emailerr, setemailErr] = useState("");

  const validateForm = () => {
    let formIsValid = true;
    if (!email) {
      setemailErr("Email id is required.");
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setemailErr("Invalid email id.");
      formIsValid = false;
    }

    if (!password) {
      var str1 = "Password is required.";

      setpasswordErr(str1);
      formIsValid = false;
    }

    return formIsValid;
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:8083/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const res = await response.json();

        if (res.status === "Fail") {
          toast.error("Wrong Email ID", { position: toast.POSITION.TOP_RIGHT });
        }
        if (res.status === "fail") {
          toast.error("Wrong Password", { position: toast.POSITION.TOP_RIGHT });
        }
        localStorage.setItem("token", res.data.token);
        const tokens = localStorage.getItem("token");
        var token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        localStorage.setItem("email", email);
        if (localStorage.getItem("Roles") === "CUSTOMER") {
          try {
            let val = await profile("customer");

            localStorage.setItem("name", val.data.firstName);

            let result = await notificationcount("customer");
            if (result.status === "fail") {
              localStorage.setItem("count", "0");
            } else if (result.status === "success") {
              localStorage.setItem("count", result.data.length);
            }
          } catch (err) {
            console.log(err);
          }
        }
        if (localStorage.getItem("Roles") === "COLLECTOR") {
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
        if (localStorage.getItem("Roles") === "VENDOR") {
          try {
            let ress = await profile("vendor");

            localStorage.setItem("name", ress.data.firstName);
          } catch (err) {
            console.log(err);
          }
        }

        if (res.status === "success") {
          const role = localStorage.getItem("Roles");
          if (role === "CUSTOMER") {
            window.location.href = "/CustomerHome";
          } else if (role === "COLLECTOR") {
            window.location.href = "/CollectorHome";
          } else if (role === "VENDOR") {
            window.location.href = "/VendorHome";
          } else {
            window.location.href = "/";
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="signIn">
      <Formik>
        <Form>
          <div className="Form-Body">
            <div className="heading">
              <h2
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "1.7rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Sign In
              </h2>
            </div>

            <div
              className="form-group"
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Field
                name="email"
                className="form-control"
                type="email"
                placeholder="Email"
                style={{ borderRadius: "17px" }}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="formErrors">{emailerr}</div>

            <div
              className="form-group"
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <div className="inputWithButtons">
                <Field
                  name="subject"
                  className="form-control"
                  type={passwordType}
                  placeholder="Password"
                  style={{ borderRadius: "17px" }}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                <div className="input-group-btn">
                  <button
                    onClick={togglePassword}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                    }}
                    type="button"
                  >
                    {passwordType === "password" ? (
                      <ShowOffIcon />
                    ) : (
                      <ShowIcon />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="formErrors">{passworderr}</div>
            <div style={{ float: "right" }}>
              <Link
                to="/ForgotPassword"
                style={{
                  color: "gray",
                  fontFamily: "Poppins",
                  marginRight: "20px",
                }}
              >
                Forgot Password
              </Link>
            </div>
            <div className="text-center" style={{ marginTop: "50px" }}>
              <button
                type="button"
                className="signin-button"
                onClick={handleClick}
              >
                SignIn
              </button>
            </div>
            <div className="separator" style={{marginTop:"20px"}}> or Sign in with</div>

            <GoogleSignin />
            <div
              style={{
                textAlign: "center",
                padding: "8px",
                fontFamily: "Poppins",
                marginTop: "45px",
              }}
            >
              {" "}
              New User?{" "}
              <Link
                to="/SignUp"
                style={{
                  color: "grey",
                  fontFamily: "Poppins",
                  fontSize: "16.5px",
                }}
              >
                <strong>SIGN UP</strong>
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;




//  400
//  500-600




