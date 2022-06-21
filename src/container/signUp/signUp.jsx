/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Dropdown from "../components/dropdown";
import Select from "react-select";
import ReactTooltip from "react-tooltip";
import "./signUp.css";
import { statescity } from "./states";
import TimeRange from "react-time-range";
import moment from "moment";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {
  SERVER_MSG,
  SIGN_UP,
  TOAST_ERROR3,
  TOAST_SUCCESS1,
} from "../constant/constant";
import api from "../../core/utilities/httpProvider";
import Toast from "../components/toast";
import validationForm from "./formValidation";
const data = [
  {
    value: "Temp",
    label: "Temperature Exchange Equipment (Air Conditioners, Freezers)",
  },
  {
    value: "Screens",
    label: "Screens, monitors (Televisions , Laptops)",
  },
  { value: "Lamps", label: "Lamps (LED Lamps)" },
  {
    value: "LargeEqip",
    label: "Large Equipment (Washing Machines, Electric Stoves)",
  },
  {
    value: "SmallEquip",
    label: "Small Equipment (Microwaves, Electric Shavers)",
  },
  {
    value: "SmallIT",
    label: "Small IT and Telecommunication Equipment (Mobile phones, Printers)",
  },
];
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      selectedState: "",
      city: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      mobileNo: "",
      location: "",
      lat: "",
      lng: "",
      address1: "",
      time: "",
      passwordType: "password",
      confirmPasswordType: "password",
      role: {
        name: "",
      },
      inputList: [
        [
          {
            categoryAccepted: "",
          },
        ],
      ],
      category: "",
      registrationNo: "",
      selectedOption: null,
      pincode: "",
      msg: "",
      gstNo: "",
      states: [],
      cities: [],
      formErrors: {},
      showMessage: false,
      startTime: moment(),
      endTime: moment(),
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeState = this.changeState.bind(this);
    this.changeCity = this.changeCity.bind(this);
  }
  componentDidMount() {
    this.setState({
      states: statescity,
    });
  }

  changeState(event) {
    this.setState({ selectedState: event.target.value });
    this.setState({
      cities: this.state.states.find(
        (states) => states.name === event.target.value
      ).cities,
    });
  }
  changeCity(event) {
    this.setState({ city: event.target.value });
  }
  getLocation(e) {
    if (!navigator.geolocation) {
      Toast.error("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          localStorage.setItem("collector_lat", position.coords.latitude);
          localStorage.setItem("collector_lng", position.coords.longitude);
        },
        () => {
          Toast.error("Unable to retrieve your location");
        }
      );
    }
  }
  handleFormValidation() {
    let value = validationForm(this.state);
    this.setState({ formErrors: value.formErrors });
    return value.formIsValid;
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  returnFunctionStart = (event) => {
    this.setState({ startTime: event.startTime });
  };

  returnFunctionEnd = (event) => {
    this.setState({ endTime: event.endTime });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    var start = this.state.startTime.toString().split("T");
    start = start[1].split(":");
    start = (parseInt(start[0]) + 6) % 24;
    start = start + ":" + "00" + "-";
    var end = this.state.endTime.toString().split("T");
    end = end[1].split(":");
    end = (parseInt(end[0]) + 6) % 24;
    end = end + ":" + "00";
    var dropoff = start.toString() + end.toString();

    if (this.handleFormValidation()) {
      const fname =
        this.state.firstName.charAt(0).toUpperCase() +
        this.state.firstName.slice(1);

      const name = this.state.role.name.toUpperCase();
      const data = {
        firstName: fname,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        mobileNo: this.state.mobileNo,
        address1: this.state.address1,
        city: this.state.city,
        state: this.state.selectedState,
        pinCode: this.state.pincode,
        role: { name: name },
        gstNo: this.state.gstNo,
        registrationNo: this.state.registrationNo,
        shopTime: dropoff,
        categoriesAcceptedSet: [...this.state.inputList[0]],
      };
      var res = await api.post(SIGN_UP, data);

      res = await res.json();

      if (res.status == "success") {
        Toast.success(TOAST_SUCCESS1, 1500);
        setTimeout(() => {
          window.location.href = "/SignIn";
        }, 2000);
      } else if (res.status == "fail") {
        Toast.error(TOAST_ERROR3);
      } else {
        this.setState({
          msg: SERVER_MSG,
        });
      }
    }
  };

  handleInputChange = (e) => {
    var list = [...e];

    list[list.length - 1].categoryAccepted = e[e.length - 1].value;
    this.setState({ inputList: [list] });
  };
  handleDropdown = (role) => {
    this.setState({ role: { name: role } });
  };
  handleDropdowns = (selectedOption) => {
    this.setState({ selectedOption });
  };
  handleback = () => {
    window.location.href = "/Signin";
  };
  togglePassword = () => {
    if (this.state.passwordType === "password") {
      this.setState({ passwordType: "text" });
      return;
    }
    this.setState({ passwordType: "password" });
  };
  confirmtogglePassword = () => {
    if (this.state.confirmPasswordType === "password") {
      this.setState({ confirmPasswordType: "text" });
      return;
    }
    this.setState({ confirmPasswordType: "password" });
  };
  render() {
    const {
      firstNameErr,
      lastNameErr,
      emailIdErr,
      passwordErr,
      categoryErr,
      confirmPasswordErr,
      mobileNoErr,
      addressErr,
      stateErr,
      cityErr,
      pincodeErr,
      roleErr,
      gstErr,
      timeErr,
      registrationErr,
    } = this.state.formErrors;
    const { role } = this.state;
    let fields;
    if (role.name === "Vendor") {
      fields = (
        <div>
          <div className="row">
            <div className="inputGroup-gst">
              <label htmlFor="GSTIN">
                GST-IN <i className="text-danger">*</i>
              </label>
              <input
                type="text"
                style={{ borderRadius: "17px" }}
                name="gstNo"
                autoComplete="off"
                placeholder="Enter GST-IN"
                onChange={this.handleChange}
              />
              <div className="formErrors">{gstErr}</div>
            </div>
            <div className="inputGroup-reg">
              <label htmlFor="reg">
                Registration Number <i className="text-danger">*</i>
              </label>
              <input
                type="text"
                name="registrationNo"
                style={{ borderRadius: "17px" }}
                placeholder="Enter Number"
                autoComplete="off"
                onChange={this.handleChange}
              />
              <div className="formErrors">{registrationErr}</div>
            </div>
          </div>
        </div>
      );
    }
    if (role.name === "Collector") {
      fields = (
        <div>
          <div className="row">
            <div className="inputGroup-gst">
              <div className="gst">
                <label htmlFor="GSTIN">
                  GST-IN <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  style={{ borderRadius: "17px" }}
                  name="gstNo"
                  placeholder="Enter GST-IN"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
                <div className="formErrors">{gstErr}</div>
              </div>
            </div>
            <div className="inputGroup-reg">
              <div className="reg">
                <label htmlFor="reg">
                  Registration Number <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  name="registrationNo"
                  style={{ borderRadius: "17px" }}
                  placeholder="Enter Number"
                  autoComplete="off"
                  onChange={this.handleChange}
                />
                <div className="formErrors">{registrationErr}</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="inputGroup">
              <label
                htmlFor="time"
                data-tip
                data-for="registerTip"
                style={{ marginTop: "22px" }}
                className="timelabel"
              >
                Drop-Off Time <i className="text-danger">*</i>
              </label>
              <ReactTooltip id="registerTip" place="bottom" effect="solid">
                Drop-Off is required for drop off delivery from customers
              </ReactTooltip>
              <TimeRange
                onStartTimeChange={this.returnFunctionStart}
                onEndTimeChange={this.returnFunctionEnd}
                startMoment={this.state.startTime}
                endMoment={this.state.endTime}
                onChange={this.onChange}
                use24Hours={true}
                minuteIncrement="60"
                className="time"
              />
              <div className="formErrors" style={{ marginLeft: "22px" }}>
                {timeErr}
              </div>
            </div>
            <div
              className="inputGroup"
              style={{ marginTop: "30px", marginLeft: "17px" }}
            >
              <label htmlFo r="maps">
                Centre Location <i className="text-danger">*</i>
              </label>
              <div className="inputWithButton">
                <input
                  type="text"
                  name="location"
                  style={{ borderRadius: "17px" }}
                  placeholder="Location"
                  // onChange={(e)=>this.getLocation(e)}
                  // disabled
                />

                <div className="input-group-btn">
                  <button
                    onClick={(e)=>this.getLocation(e)}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                      marginTop: "-2px",
                    }}
                  >
                    <LocationOnIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <label
            htmlFor="categories"
            data-tip
            data-for="Tip"
            style={{ paddingLeft: "7px" }}
          >
            Categories <i className="text-danger">*</i>
          </label>
          <ReactTooltip id="Tip" place="bottom" effect="solid">
            Select the categories of ewaste you can collect from customers
          </ReactTooltip>
          {this.state.inputList.map((v, i) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div className="inputGroups" style={{ paddingLeft: "15px" }}>
                <Select
                  value={this.state.categoryAccepted}
                  options={data}
                  placeholder="Select Categories"
                  onChange={(e) => this.handleInputChange(e, i)}
                  isMulti
                />

                <div className="formErrors">{categoryErr}</div>
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="signUp">
        <div className="Form-bodY">
          <div className="signup-heading">
            <h2
              style={{
                textAlign: "center",
                padding: "20px",
                fontSize: "1.7rem",
                fontFamily: "Poppins",
                color: "white",
              }}
            >
              Sign Up
            </h2>
          </div>
          <div className="signup-form-cont">
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="firstName">
                  First Name <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  name="firstName"
                  style={{ borderRadius: "17px" }}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  autoComplete="off"
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
                  style={{ borderRadius: "17px" }}
                  onChange={this.handleChange}
                  placeholder="Last Name"
                  autoComplete="off"
                  className={lastNameErr ? " showError" : ""}
                />
                <div className="formErrors">{lastNameErr}</div>
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="emailId">
                  E-mail Id <i className="text-danger">*</i>
                </label>
                <input
                  type="email"
                  name="email"
                  style={{ borderRadius: "17px" }}
                  onChange={this.handleChange}
                  placeholder="Mail"
                  autoComplete="off"
                  className={emailIdErr ? " showError" : ""}
                />
                <div className="formErrors">{emailIdErr}</div>
              </div>
              <div className="inputGroup">
                <label htmlFor="mobileNo">
                  Mobile Number <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  name="mobileNo"
                  style={{ borderRadius: "17px" }}
                  onChange={this.handleChange}
                  placeholder="Mobile Number"
                  autoComplete="off"
                  className={mobileNoErr ? " showError" : ""}
                />
                <div className="formErrors">{mobileNoErr}</div>
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="password">
                  Password <i className="text-danger">*</i>
                </label>
                <div className="inputWithButton">
                  <input
                    type={this.state.passwordType}
                    name="password"
                    style={{ borderRadius: "17px" }}
                    onChange={this.handleChange}
                    placeholder="Enter Password"
                    autoComplete="off"
                    className={passwordErr ? " showError" : ""}
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
                <i className="fa-solid fa-eye-slash"></i>
                <div className="formErrors">{passwordErr}</div>
              </div>
              <div className="inputGroup">
                <label htmlFor="confirmPassword">
                  Confirm Password <i className="text-danger">*</i>
                </label>
                <div className="inputWithButton">
                  <input
                    type={this.state.confirmPasswordType}
                    name="confirmPassword"
                    style={{ borderRadius: "17px" }}
                    onChange={this.handleChange}
                    placeholder="Confirm Password"
                    autoComplete="off"
                    className={confirmPasswordErr ? " showError" : ""}
                  />
                  <div className="input-group-btn">
                    <button
                      onClick={this.confirmtogglePassword}
                      style={{
                        border: "1px solid white",
                        backgroundColor: "white",
                      }}
                    >
                      {this.state.confirmPasswordType === "password" ? (
                        <ShowOffIcon />
                      ) : (
                        <ShowIcon />
                      )}
                    </button>
                  </div>
                </div>
                <div className="formErrors">{confirmPasswordErr}</div>
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="address1">
                  Address Line <i className="text-danger">*</i>
                </label>
                <input
                  type="text"
                  name="address1"
                  style={{ borderRadius: "17px" }}
                  onChange={this.handleChange}
                  placeholder="Address"
                  autoComplete="off"
                  className={addressErr ? " showError" : ""}
                />
                <div className="formErrors">{addressErr}</div>
              </div>
              <div className="inputGroup">
                <label>
                  State <i className="text-danger">*</i>
                </label>
                <select
                  className="forms-select"
                  style={{
                    borderRadius: "17px",
                    padding: "4px",
                  }}
                  value={this.state.selectedState}
                  onChange={this.changeState}
                >
                  <option value="Select State">{"Select State"} </option>
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
                  City <i className="text-danger">*</i>
                </label>
                <select
                  className="forms-select"
                  style={{
                    borderRadius: "17px",
                    padding: "4px 4px 5px ",
                    marginLeft: "0.49%",
                  }}
                  value={this.state.selectedCity}
                  onChange={this.changeCity}
                >
                  <option value="Select City">{" Select City"}</option>
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
                  name="pincode"
                  onChange={this.handleChange}
                  placeholder="Pincode"
                  autoComplete="off"
                  className={pincodeErr ? " showError" : ""}
                />
                <div className="formErrors">{pincodeErr}</div>
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="role">
                  Role <i className="text-danger">*</i>
                </label>
                <div className="role">
                  <>
                    <Dropdown
                      data={[
                        { label: "Customer" },
                        { label: "Collector" },
                        { label: "Vendor" },
                      ]}
                      name="role"
                      value={this.state.role.name}
                      style={{ borderRadius: "17px" }}
                      placeholder="Select your Role"
                      onChange={this.handleDropdown}
                      optionValues={this.optionValues}
                    />
                    {fields}
                  </>
                </div>
                <div className="formErrors">{roleErr}</div>
              </div>
            </div>
            <span className="error">
              {this.state.msg !== "" ? this.state.msg : ""}
            </span>

            <div className="row">
              <div className="cont">
                <button onClick={this.handleback} className="backbutton">
                  BACK
                </button>
                <button
                  // type="submit"
                  onClick={this.handleSubmit}
                  className="signup-button"
                >
                  SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
