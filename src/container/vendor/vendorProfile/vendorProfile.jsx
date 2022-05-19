import React, { Component } from "react";
import "../vendor.css";
import api from "../../../core/utilities/httpProvider";
import validationVendor from "./vendorValidation";
import { statescity } from "../../sign-Up/states";
import {
  TOAST_SUCCESS5,
  VENDOR_AUTH_URL,
  VENDOR_PROFILE_EDIT,
} from "../../constant/constant";
import Toast from "../../components/toast";
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
    let Errors = {};
    Errors = validationVendor(this.state);
    this.setState({ formErrors: Errors.formErrors });

    return Errors.formIsValid;
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
        gstNo: this.state.gstNo,
        registrationNo: this.state.registrationNo,
        shopTime: "10",
      };

      const res = await api.put(VENDOR_PROFILE_EDIT, data);
      console.log(res);

      localStorage.removeItem("name");
      localStorage.setItem("name", this.state.firstName);
      Toast.success(TOAST_SUCCESS5, 1500);
    }
  };
  componentDidMount = async () => {
    this.setState({
      states: statescity,
    });

    var res = await api.get(VENDOR_AUTH_URL);
    this.setState(res.data);
  };

  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
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
      <div className="vendor" style={{ marginTop: "85px" }}>
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
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
                    value={this.state.lastName}
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
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
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
                    autoComplete="off"
                    value={this.state.address1}
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
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="GSTIN">
                    GSTNo <i className="text-danger">*</i>
                  </label>
                  <input
                    type="text"
                    style={{ borderRadius: "17px" }}
                    name="gstNo"
                    autoComplete="off"
                    value={this.state.gstNo}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
                    autoComplete="off"
                    name="registrationNo"
                    style={{ borderRadius: "17px" }}
                    value={this.state.registrationNo}
                    onChange={(e) =>
                      this.setState({ [e.target.name]: e.target.value })
                    }
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
