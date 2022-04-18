import React, {Component} from "react";
import {Link} from "react-router-dom";
import Inputfields from "../Components/InputField";
import "../Components/signin.css";
import {toast} from "react-toastify";
import jwt from "jwt-decode";
import {notificationcount} from "./notificationcount";
import {profile} from "./profile";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";

import ShowOffIcon from "@mui/icons-material/VisibilityOff";
export default class Signin extends Component {
  state = {
    text: "",
    email: "",
    error: {},
    passwordType: "password",
    msg: "",
  };
  handleChange = (key) => (value) => {
    this.setState({[key]: value});
  };
  togglePassword = () => {
    if (this.state.passwordType === "password") {
      this.setState({passwordType: "text"});
      return;
    }
    this.setState({passwordType: "password"});
  };
  validateForm() {
    let error = {};
    let formIsValid = true;
    const {email, text} = this.state;

    if (!email) {
      formIsValid = false;
      error["emailIdErr"] = "Email id is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      error["emailIdErr"] = "Invalid email id.";
    }

    if (!text) {
      formIsValid = false;
      var str1 = "Password is required.";

      error["passwordErr"] = str1;
    }

    this.setState({error: error});
    return formIsValid;
  }
  handleClick = async (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      try {
        const response = await fetch("http://localhost:8083/signin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.text,
          }),
        });
        const res = await response.json();

        if (res.status === "Fail") {
          toast.error("Wrong Email ID", {position: toast.POSITION.TOP_RIGHT});
        }
        if (res.status === "fail") {
          toast.error("Wrong Password", {position: toast.POSITION.TOP_RIGHT});
        }
        localStorage.setItem("token", res.data.token);
        const tokens = localStorage.getItem("token");
        var token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        localStorage.setItem("Password", this.state.text);
        document.cookie = "email=" + this.state.email;
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

  render() {
    const {emailIdErr, passwordErr} = this.state.error;
    return (
      <div className="signIn">
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

          <div className="form-cont">
            <div className="inputGroup">
              <Inputfields
                value={this.state.email}
                placeholder="Email address"
                type="text"
                onChange={this.handleChange("email")}
              />
              <div className="error" data-testid="emailErr">
                {emailIdErr}
              </div>
            </div>

            <div className="inputGroup">
              <div className="inputWithButton">
                <Inputfields
                  value={this.state.text}
                  type={this.state.passwordType}
                  placeholder="Password"
                  name="Password"
                  onChange={this.handleChange("text")}
                />
                <div className="input-group-btn">
                  <button
                    onClick={this.togglePassword}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                    }}
                  >
                    {this.state.passwordType === "password" ? (
                      <ShowOffIcon />
                    ) : (
                      <ShowIcon />
                    )}
                  </button>
                </div>
              </div>
              <div className="error" data-testid="passwordErr">
                {passwordErr}
              </div>
            </div>

            <div className="inputGroup"></div>

            <div className="forgot-psswd ">
              <Link
                to="/ForgotPassword"
                style={{
                  color: "gray",
                  fontFamily: "Poppins",
                  marginRight: "10px",
                }}
              >
                Forgot Password
              </Link>
            </div>
            <div className="cont">
              <div className="error" style={{marginLeft: "12px"}}>
                {this.state.msg !== "" ? this.state.msg : ""}
              </div>
              <button
                onClick={this.handleClick}
                className="signin-button"
                data-testid="Submit"
              >
                SIGN IN
              </button>
            </div>

            <div
              style={{
                textAlign: "center",
                padding: "8px",
                fontFamily: "Poppins",
                marginTop: "30px",
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
        </div>
      </div>
    );
  }
}
