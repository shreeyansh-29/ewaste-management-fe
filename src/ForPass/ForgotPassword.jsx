import React, {Component} from "react";
import InputField from "../Components/InputField";

import "./password.css";
export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      error: {},
      msg: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (key) => (value) => {
    this.setState({[key]: value});
    this.setState({msg: ""});
  };
  validateForm() {
    let error = {};
    let formIsValid = true;
    const {email} = this.state;

    if (!email) {
      formIsValid = false;
      error["emailIdErr"] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      error["emailIdErr"] = "Invalid email id.";
    }
    this.setState({error: error});
    return formIsValid;
  }
  handleClick = async (event) => {
    event.preventDefault();

    if (this.validateForm()) {
      try {
        const response = await fetch("http://localhost:8083/password/reset", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: this.state.email,
          }),
        });

        if (response.status === 200) {
          this.setState({
            msg: "An email has been sent to you to reset the password.",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  handleback = () => {
    try {
      window.location.href = "/Signin";
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    const {email} = this.state;
    const {emailIdErr} = this.state.error;
    return (
      <div className="ForPassword">
        <div className="Form-body">
          <div className="psswd-heading">
            <h2
              style={{
                textAlign: "center",
                padding: "12px",
                fontSize: "1.7rem",
                fontFamily: "sans-serif",
                color: "white",
              }}
            >
              Forgot Password
            </h2>
          </div>
          <div className="form-cont">
            <div className="inputGroup2">
              <InputField
                value={email}
                type="email"
                placeholder="Enter Registered Email"
                onChange={this.handleChange("email")}
              />
            </div>
            <div className="Error">{emailIdErr}</div>
            <div style={{color: "green", marginLeft: "5%"}}>
              {" "}
              {this.state.msg === "" ? "" : this.state.msg}
            </div>
            <div className="row">
              <div className="container">
                <button onClick={this.handleback} className="back-button">
                  BACK
                </button>
                <button onClick={this.handleClick} className="psswd-button">
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
