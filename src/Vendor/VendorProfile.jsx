import React, {Component} from "react";
import "./vendor.css";

import {statescity} from "../Sign-Up/states";
import {toast} from "react-toastify";
import { VENDOR_AUTH_URL } from "../constant/constant";
// const crypto = require ("crypto");
class VendorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      city: "",
      state: "",
      mobileNo: "",
      address1: "",
      pinCode: "",
      gstNo: "",
      registrationNo: "",
      states: [],
      cities: [],
      formErrors: {},
    };
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }
  changeState(event) {
    this.setState({state: event.target.value});
    this.setState({
      cities: this.state.states.find(
        (states) => states.name === event.target.value
      ).cities,
    });
  }
  changeCity(event) {
    this.setState({city: event.target.value});
  }
  handleFormValidation() {
    const {
      firstName,
      lastName,
      registrationNo,
      // password,
      mobileNo,
      address1,
      city,
      state,
      pinCode,
      gstNo,
    } = this.state;

    let formErrors = {};
    let formIsValid = true;

    //FirstName
    if (!firstName) {
      formIsValid = false;
      formErrors["firstNameErr"] = " First Name is required.";
    }
    //Lastname
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = " Last Name is required.";
    }
    //Phone number
    if (!mobileNo) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = "Phone number is required.";
    } else {
      var mobPattern = /^[6-9]\d{9}$/;
      if (!mobPattern.test(mobileNo)) {
        formIsValid = false;
        formErrors["phoneNumberErr"] = "Invalid phone number.";
      }
    }
    //Landmark
    if (!address1) {
      formIsValid = false;
      formErrors["landmarkErr"] = " Address is required.";
    }
    //City
    if (!city) {
      formIsValid = false;
      formErrors["cityErr"] = " City is required.";
    }
    //State
    if (!state) {
      formIsValid = false;
      formErrors["stateErr"] = " State is required.";
    }
    //Pincode
    if (!pinCode) {
      formIsValid = false;
      formErrors["pincodeErr"] = "Pincode is required";
    } else if (!/^\d{6}$/.test(pinCode)) {
      formIsValid = false;
      formErrors["pincodeErr"] = "Invalid Pincode";
    }
    if (!gstNo) {
      formIsValid = false;
      formErrors["gstErr"] = " GSTNo is required.";
    } else {
      var gst = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/;
      if (!gst.test(gstNo)) {
        formIsValid = false;
        formErrors["gstErr"] = "Invalid GSTNo";
      }
    }
    if (!registrationNo) {
      formIsValid = false;
      formErrors["registrationErr"] = " Registration number is required.";
    } else {
      var reg = /^\d{6,}$/;
      if (!reg.test(registrationNo)) {
        formIsValid = false;
        formErrors["registrationErr"] = "Invalid number";
      }
    }

    this.setState({formErrors: formErrors});
    return formIsValid;
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      try {
        const response = await fetch(
          "http://localhost:8083/vendor/profile/edit",
          {
            method: "PUT",
            credentials: "same-origin",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + tokens,
              EMAIL: email,
            },
            body: JSON.stringify({
              firstName: this.state.firstName,
              lastName: this.state.lastName,
              email: email,
              address1: this.state.address1,
              mobileNo: this.state.mobileNo,
              city: this.state.city,
              state: this.state.state,
              pinCode: this.state.pinCode,
              password: this.state.password,
              gstNo: this.state.gstNo,
              registrationNo: this.state.registrationNo,
              shopTime: "10",
            }),
          }
        );
        console.log(response);

        localStorage.removeItem("name");
        localStorage.setItem("name", this.state.firstName);
        toast.success("Updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  componentDidMount = async () => {
    this.setState({
      states: statescity,
    });
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    try {
      const response = await fetch(
        VENDOR_AUTH_URL,
        {
          method: "GET",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens,
            EMAIL: email,
          },
        }
      );
      const res = await response.json();
      this.setState(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (key) => (value) => {
    this.setState({[key]: value});
  };

  render() {
   
    const email = localStorage.getItem("email");
    const {
      firstNameErr,
      lastNameErr,

      phoneNumberErr,
      cityErr,
      landmarkErr,
      stateErr,
      pincodeErr,
      gstErr,
      registrationErr,
    } = this.state.formErrors;
    return (
      <div className="vendor" style={{marginTop: "85px"}}>
        <form>
          <div className="formbody">
            <div className="vendorsprofile">
              <h1
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "2rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Profile
              </h1>
            </div>
            <div className="vendorbody">
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="firstName">
                    First Name <i className="text-danger">*</i>{" "}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    style={{borderRadius:"17px"}}
                    value={this.state.firstName}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="First name"
                    className={firstNameErr ? " showError" : ""}
                  />
                  <div className="formErrors">{firstNameErr}</div>
                </div>
                <div className="inputGroup">
                  <label htmlFor="lastName">
                    Last Name <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    style={{borderRadius:"17px"}}
                    value={this.state.lastName}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="Last name"
                    className={lastNameErr ? " showError" : ""}
                  />
                  <div className="formErrors">{lastNameErr}</div>
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="Email">Email</label>
                  <input
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                      backgroundColor: "#fff",
                    }}
                    disabled
                    defaultValue={email}
                  />
                </div>
                <div className="inputGroup">
                  <label htmlFor="phoneNumber">
                    Phone Number <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    name="mobileNo"
                    style={{borderRadius:"17px"}}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    value={this.state.mobileNo}
                    placeholder="Phone Number"
                    className={phoneNumberErr ? " showError" : ""}
                  />
                  <div className="formErrors">{phoneNumberErr}</div>
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="address1">
                    Address Line <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    style={{borderRadius:"17px"}}
                    name="address1"
                    value={this.state.address1}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="Address Line"
                    className={landmarkErr ? " showError" : ""}
                  />
                  <div className="formErrors">{landmarkErr}</div>
                </div>
                <div className="inputGroup">
                  <label>
                    State <i className="text-danger">*</i>
                  </label>
                  <select
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                    }}
                    className="form-select"
                    value={this.state.state}
                    onChange={this.changeState}
                  >
                    <option value="Select State">{this.state.state} </option>
                    {this.state.states.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                    })}
                  </select>
                  <div className="formErrors">{stateErr}</div>
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>
                    City <i className="text-danger">*</i>{" "}
                  </label>
                  <select
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                    }}
                    className="form-select"
                    value={this.state.city}
                    onChange={this.changeCity}
                  >
                    <option value="Select City">{this.state.city}</option>
                    {this.state.cities.map((e, key) => {
                      return <option key={key}>{e}</option>;
                    })}
                  </select>
                  <div className="formErrors">{cityErr}</div>
                </div>
                <div className="inputGroup">
                  <label htmlFor="pincode">
                    Pincode <i className="text-danger">*</i>
                  </label>
                  <input
                    type="pincode"
                    style={{borderRadius:"17px"}}
                    name="pinCode"
                    value={this.state.pinCode}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="Pincode"
                    className={pincodeErr ? " showError" : ""}
                  />
                  <div className="formErrors">{pincodeErr}</div>
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="GSTIN">
                    GSTNo <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    style={{borderRadius:"17px"}}
                    name="gstNo"
                    value={this.state.gstNo}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="Enter GSTIN"
                  />
                  <div className="formErrors">{gstErr}</div>
                </div>
                <div className="inputGroup">
                  <label htmlFor="Registration Certificate No.">
                    Registration Number <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    name="registrationNo"
                    style={{borderRadius:"17px"}}
                    value={this.state.registrationNo}
                    onChange={(e)=>this.setState({ [e.target.name]: e.target.value })}
                    placeholder="Enter Registration Number"
                  />
                  <div className="formErrors">{registrationErr}</div>
                </div>
              </div>
            </div>
            <div className="cont">
              <div className="vertical-center">
                <button onClick={this.handleSubmit} className="profilebtn">
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default VendorProfile;