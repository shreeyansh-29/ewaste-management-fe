import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleSignin from "./googleSignin";
import jwt from "jwt-decode";
import api from "../../core/utilities/httpProvider";
import {
  COLLECTOR_AUTH_URL,
  COLLECTOR_NOTIFICATION_URL,
  CUSTOMER_AUTH_URL,
  CUSTOMER_NOTIFICATION_URL,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  TOAST_ERROR1,
  SIGN_IN,
  TOAST_ERROR2,
  VENDOR_AUTH_URL,
} from "../constant/constant";
import Toast from "../components/toast";

const SignIn = () => {
  const [password, setPassword] = useState("");

  const [passwordType, setpasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [passworderr, setpasswordErr] = useState("");
  const [emailerr, setemailErr] = useState("");

  const validateForm = () => {
    let formIsValid = true;
    if (!email) {
      setemailErr(EMAIL_REQUIRED);
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setemailErr(EMAIL_INVALID);
      formIsValid = false;
    }

    if (!password) {
      var str1 = PASSWORD_REQUIRED;

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
  const handleRedirect = () => {
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
  };
  const handleClick = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const data = {
        email: email,
        password: password,
      };
      var res = await api.post(SIGN_IN, data);
      console.log(res);
      res = await res.json();
      console.log(res);
      if (res.status === "Fail") {
        Toast.error(TOAST_ERROR1);
      }
      if (res.status === "fail") {
        Toast.error(TOAST_ERROR2);
      } else if (res.status === "success") {
        localStorage.setItem("token", res.data.token);
        const tokens = localStorage.getItem("token");
        var token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        localStorage.setItem("email", email);
        const role = localStorage.getItem("Roles");
        var val;
        var result;

        if (role === "CUSTOMER") {
          val = await api.get(CUSTOMER_AUTH_URL);
          result = await api.get(CUSTOMER_NOTIFICATION_URL);
        }
        if (role === "COLLECTOR") {
          val = await api.get(COLLECTOR_AUTH_URL);
          result = await api.get(COLLECTOR_NOTIFICATION_URL);
          console.log(result);
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
      }

      if (res.status === "success") {
        handleRedirect();
      }
    }
  };

  return (
    <>
      <div className="signIn">
        <Formik>
          <Form>
            <div className="Form-BOdy">
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
                  style={{borderRadius: "17px"}}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
              </div>
              <div className="formError">{emailerr}</div>

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
                    style={{borderRadius: "17px"}}
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
              <div className="formError">{passworderr}</div>
              <div style={{float: "right"}}>
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
              <div className="text-center" style={{marginTop: "50px"}}>
                <button
                  type="button"
                  className="signin-button"
                  onClick={handleClick}
                >
                  <div style={{textAlign: "center"}}>Sign In</div>
                </button>
              </div>

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
    </>
  );
};

export default SignIn;
