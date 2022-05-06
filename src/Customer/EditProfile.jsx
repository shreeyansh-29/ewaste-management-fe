import React, { Component } from "react";
import "./Customer.css";
import { statescity } from "../Sign-Up/states";
import api from "../api";
import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  CUSTOMER_AUTH_URL,
  CUSTOMER_PROFILE_EDIT,
  FNAME_REQUIRED,
  LNAME_REQUIRED,
  MOBILE_INVALID,
  MOBILE_REQUIRED,
  PINCODE_INVALID,
  PINCODE_REQUIRED,
  STATE_REQUIRED,
  TOAST_SUCCESS5,
} from "../constant/constant";
import Toast from "../Components/Toast";
class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      city: "",
      state: "",
      password: "",
      mobileNo: "",
      address1: "",
      pinCode: "",
      states: [],
      cities: [],
      formErrors: {},
    };
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }
  changeState(event) {
    this.setState({ state: event.target.value });
    this.setState({
      cities: this.state.states.find(
        (states) => states.name === event.target.value
      ).cities,
    });
  }
  changeCity(event) {
    this.setState({ city: event.target.value });
  }
  handleFormValidation() {
    const {
      firstName,
      lastName,
      // password,
      mobileNo,
      address1,
      city,
      state,
      pinCode,
    } = this.state;
    let formErrors = {};
    let formIsValid = true;

    //FirstName
    if (!firstName) {
      formIsValid = false;
      formErrors["firstNameErr"] = FNAME_REQUIRED;
    }
    //Lastname
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = LNAME_REQUIRED;
    }
    //Phone number
    if (!mobileNo) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = MOBILE_REQUIRED;
    } else {
      var mobPattern = /^[6-9]\d{9}$/;
      if (!mobPattern.test(mobileNo)) {
        formIsValid = false;
        formErrors["phoneNumberErr"] = MOBILE_INVALID;
      }
    }
    //Landmark
    if (!address1) {
      formIsValid = false;
      formErrors["landmarkErr"] = ADDRESS_REQUIRED;
    }
    //City
    if (!city) {
      formIsValid = false;
      formErrors["cityErr"] = CITY_REQUIRED;
    }
    //State
    if (!state) {
      formIsValid = false;
      formErrors["stateErr"] = STATE_REQUIRED;
    }
    //Pincode
    if (!pinCode) {
      formIsValid = false;
      formErrors["pincodeErr"] = PINCODE_REQUIRED;
    } else if (!/^\d{6}$/.test(pinCode)) {
      formIsValid = false;
      formErrors["pincodeErr"] = PINCODE_INVALID;
    }

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      const email = localStorage.getItem("email");
      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: email,
        address1: this.state.address1,
        mobileNo: this.state.mobileNo,
        city: this.state.city,
        state: this.state.state,
        pinCode: this.state.pinCode,
        password: this.state.password,
        shopTime: "10",
      };
      const res = await api.put(CUSTOMER_PROFILE_EDIT, data);
      console.log(res);

      localStorage.removeItem("name");
      localStorage.setItem("name", this.state.firstName);
      Toast.success(TOAST_SUCCESS5,1500);
     
      this.setState(res.data);
    } else {
      console.log(this.state.formErrors);
    }
  };
  componentDidMount = async () => {
    this.setState({
      states: statescity,
    });
    const res = await api.get(CUSTOMER_AUTH_URL);
    this.setState(res.data);
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
    } = this.state.formErrors;
    return (
      <div className="profile" style={{ marginTop: "85px" }}>
        <form>
          <div className="containers">
            <div className="customersprofile">
              <h1
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "2.5rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Profile
              </h1>
            </div>
            <div className="customerbody">
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="firstName">
                    First Name <i className="text-danger">*</i>{" "}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    style={{ borderRadius: "17px" }}
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    autoComplete="off"
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
                    style={{ borderRadius: "17px" }}
                    name="lastName"
                    value={this.state.lastName}
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
                      backgroundColor: "white",
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
                    style={{ borderRadius: "17px" }}
                    name="mobileNo"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
                    style={{ borderRadius: "17px" }}
                    name="address1"
                    value={this.state.address1}
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
                    style={{ borderRadius: "17px", padding: "4px" }}
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
                    style={{ borderRadius: "17px", padding: "4px" }}
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
                    style={{ borderRadius: "17px" }}
                    name="pinCode"
                    autoComplete="off"
                    value={this.state.pinCode}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
                    placeholder="Pincode"
                    className={pincodeErr ? " showError" : ""}
                  />
                  <div className="formErrors">{pincodeErr}</div>
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
          </div>
        </form>
      </div>
    );
  }
}
export default EditProfile;
