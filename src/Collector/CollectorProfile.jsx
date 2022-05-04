import React, { Component } from "react";
import "./Collector.css";
import { toast } from "react-toastify";
import TimeRange from "react-time-range";
import { statescity } from "../Sign-Up/states";
import moment from "moment";
import { profile } from "../Utils/profile";
import { ADDRESS_REQUIRED, CITY_REQUIRED, COLLECTOR_AUTH_URL, FNAME_REQUIRED, GSTNO_INVALID, GSTNO_REQUIRED, LNAME_REQUIRED, MOBILE_INVALID, MOBILE_REQUIRED, PINCODE_INVALID, PINCODE_REQUIRED, REGISTRATION_INVALID, REGISTRATION_REQUIRED, STATE_REQUIRED, TOAST_SUCCESS5 } from "../constant/constant";
class CollectorProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      mobileNo: "",
      address1: "",
      pinCode: "",
      city: "",
      state: "",
      gstNo: "",
      msg: "",
      startTime: moment(),
      endTime: moment(),
      registrationNo: "",
      categoriesAcceptedSet: [
        [
          {
            categoryAccepted: "",
          },
        ],
      ],
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
      mobileNo,
      // password,
      address1,
      city,
      state,
      pinCode,
      gstNo,
      registrationNo,
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
      formErrors["landmarkErr"] =ADDRESS_REQUIRED;
    }
    //City
    if (!city) {
      formIsValid = false;
      formErrors["cityErr"] = CITY_REQUIRED;
    }
    //State
    if (!state) {
      formIsValid = false;
      formErrors["stateErr"] =STATE_REQUIRED;
    }
    //Pincode
    if (!pinCode) {
      formIsValid = false;
      formErrors["pincodeErr"] = PINCODE_REQUIRED;
    } else if (!/^\d{6}$/.test(pinCode)) {
      formIsValid = false;
      formErrors["pincodeErr"] = PINCODE_INVALID;
    }
    if (!registrationNo) {
      formIsValid = false;
      formErrors["registrationErr"] = REGISTRATION_REQUIRED;
    } else {
      var reg = /^\d{6}$/;
      if (!reg.test(registrationNo)) {
        formIsValid = false;
        formErrors["registrationErr"] = REGISTRATION_INVALID;
      }
    }
    if (!gstNo) {
      formIsValid = false;
      formErrors["gstErr"] = GSTNO_REQUIRED;
    } else {
      var gst = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/;
      if (!gst.test(gstNo)) {
        formIsValid = false;
        formErrors["gstErr"] = GSTNO_INVALID;
      }
    }
    this.setState({ formErrors: formErrors });
    return formIsValid;
  }
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
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      try {
        const response = await fetch(
          "http://localhost:8083/collector/profile/edit",
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
              password:this.state.password,
              mobileNo: this.state.mobileNo,
              address1: this.state.address1,
              city: this.state.city,
              state: this.state.state,
              pinCode: this.state.pinCode,
              shopTime: dropoff,
              gstNo: this.state.gstNo,
              registrationNo: this.state.registrationNo,
              categoriesAcceptedSet: [...this.state.categoriesAcceptedSet],
            }),
          }
        );
        localStorage.removeItem("name");
        localStorage.setItem("name", this.state.firstName);
        console.log(response);
        toast.success(TOAST_SUCCESS5, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 1500,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };
  componentDidMount = async () => {
    this.setState({
      states: statescity,
    });
    (async function () {
      try {
        let val = await profile("collector");

        localStorage.setItem("name", val.data.firstName);
      } catch (err) {
        console.log(err);
      }
    })();
    const tokens = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    try {
      const response = await fetch(
        COLLECTOR_AUTH_URL,
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
      var times;
      const shopTimes = res.data.shopTime.toString().split("-");
      times = shopTimes[0].split(":");
      const dates = moment.utc().hour(times[0]).minute(0);
      this.setState({ startTime: dates });
      times = shopTimes[1].split(":");
      const enddates = moment.utc().hour(times[0]).minute(0);
      this.setState({ endTime: enddates });
    } catch (err) {
      console.log(err);
      //   }
    }
  };
  returnFunctionStart = (event) => {
    this.setState({ startTime: event.startTime });
  };
  returnFunctionEnd = (event) => {
    this.setState({ endTime: event.endTime });
  };
  handleChange = (key) => (value) => {
    this.setState({ [key]: value });
  };
  render() {
    const email = localStorage.getItem("email");
    const {
      firstNameErr,
      lastNameErr,
      gstErr,
      registrationErr,
      phoneNumberErr,
      cityErr,
      landmarkErr,
      stateErr,
      pincodeErr,
    } = this.state.formErrors;
    return (
      <div className="collector_profile" style={{ marginTop: "85px" }}>
        <form>
          <div className="Formbody">
            <div className="collectorsprofile">
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
            <div className="collectorbody">
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
                <div
                  className="inputGroup"
                  style={{
                    paddingRight: "10px",
                    borderRadius: "1px solid lightgrey",
                  }}
                >
                  <label htmlFor="Email">Email</label>
                  <input
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                      backgroundColor: "#fff",
                    }}
                    disabled
                    defaultValue={email}
                  ></input>
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
                    name="address1"
                    style={{borderRadius:"17px"}}
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
                    className="form-select"
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                    }}
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
                    className="form-select"
                    style={{
                      borderRadius: "17px",
                      padding: "4px",
                    }}
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
                    name="pinCode"
                    style={{borderRadius:"17px"}}
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
                    name="gstNo"
                    style={{borderRadius:"17px"}}
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
              <div className="row">
                <div className="inputGroup">
                  <label
                    htmlFor="time"
                    data-tip
                    data-for="registerTip"
                    style={{ marginLeft: "11px" }}
                  >
                    Drop-Off Time <i className="text-danger">*</i>
                  </label>
                  <TimeRange
                    onStartTimeChange={this.returnFunctionStart}
                    onEndTimeChange={this.returnFunctionEnd}
                    startMoment={this.state.startTime}
                    endMoment={this.state.endTime}
                    onChange={this.onChange}
                    use24Hours={true}
                    minuteIncrement="60"
                  />
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
export default CollectorProfile;
