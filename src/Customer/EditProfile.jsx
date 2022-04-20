import React, { Component } from "react";
import InputField from "../Components/InputField";
import "./Customer.css";
import { toast } from "react-toastify";
import {statescity} from "../Sign-Up/states";
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
      password,
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
      formErrors["firstNameErr"] = " First Name is required.";
    }
    //Lastname
    if (!lastName) {
      formIsValid = false;
      formErrors["lastNameErr"] = " Last Name is required.";
    }
    const pass = localStorage.getItem("Password");
    this.setState({ password: pass });
    //password
    if (!password) {
      formIsValid = false;
      var str1 = "Password is required.";
      formErrors["passwordErr"] = str1;
    } else if (!/^[a-zA-Z0-9]{6,20}$/.test(password)) {
      formIsValid = false;
      var str = "Password should be of atleast six characters";
      formErrors["passwordErr"] =
        str;
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

    this.setState({ formErrors: formErrors });
    return formIsValid;
  }

  handleSubmit = async (e) => {
    e.preventDefault();

    if (this.handleFormValidation()) {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");

      try {
        const response = await fetch(
          "http://localhost:8083/customer/profile/edit",
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
              shopTime: "10",
            }),
          }
        );

        localStorage.removeItem("name");
        localStorage.setItem("name", this.state.firstName);
        const res = await response.json();
        toast.success("Updated successfully", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
        this.setState(res.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(this.state.formErrors);
    }
  };
  componentDidMount = async () => {
    this.setState({
      states: statescity
      
    });
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const pass = localStorage.getItem("Password");
    try {
      const response = await fetch(
        "http://localhost:8083/customer/profile/view",
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
      res.data.password = pass;
      this.setState(res.data);
    } catch (err) {
      console.log(err);
      //   }
    }
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
    } = this.state.formErrors;
    return (
      <div className="profile"  style={{marginTop:"85px"}}>
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
                  <InputField
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleChange("firstName")}
                    placeholder="First name"
                    className={firstNameErr ? " showError" : ""}
                  />
                  <div className="formErrors">{firstNameErr}</div>
                </div>
                <div className="inputGroup">
                  <label htmlFor="lastName">
                    Last Name <i className="text-danger">*</i>
                  </label>
                  <InputField
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange("lastName")}
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
                    style={{ borderRadius: "17px", padding: "4px" , backgroundColor:"white", width:"300px"}}
                    disabled
                    defaultValue={email}
                  />
                </div>
                <div className="inputGroup">
                  <label htmlFor="phoneNumber">
                    Phone Number <i className="text-danger">*</i>
                  </label>
                  <InputField
                    type="text"
                    name="phoneNumber"
                    onChange={this.handleChange("mobileNo")}
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
                  <InputField
                    type="text"
                    name="landmark"
                    value={this.state.address1}
                    onChange={this.handleChange("address1")}
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
                    style={{ borderRadius: "17px", padding:"4px", width:"300px" }}
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
                    style={{ borderRadius: "17px" , padding:"4px", width:"300px"}}
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
                  <InputField
                    type="pincode"
                    name="pincode"
                    value={this.state.pinCode}
                    onChange={this.handleChange("pinCode")}
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
