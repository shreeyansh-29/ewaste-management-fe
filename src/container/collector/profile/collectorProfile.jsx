import React, { Component } from "react";
import "../Collector.css";
import TimeRange from "react-time-range";
import { statescity } from "../../sign-Up/states";
import api from "../../../core/utilities/httpProvider";
import validationCollector from "./validationCollector";
import moment from "moment";
import {
  COLLECTOR_AUTH_URL,
  COLLECTOR_PROFILE_EDIT,
  TOAST_SUCCESS5,
} from "../../constant/constant";
import Toast from "../../components/toast";
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
    let Errors = {};
    Errors = validationCollector(this.state);
    this.setState({ formErrors: Errors.formErrors });

    return Errors.formIsValid;
  }
  setTime = () => {
    var start = this.state.startTime.toString().split("T");
    start = start[1].split(":");
    start = (parseInt(start[0]) + 6) % 24;
    start = start + ":" + "00" + "-";
    var end = this.state.endTime.toString().split("T");
    end = end[1].split(":");
    end = (parseInt(end[0]) + 6) % 24;
    end = end + ":" + "00";
    return start.toString() + end.toString();
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    var dropoff = this.setTime();
    if (this.handleFormValidation()) {
      const email = localStorage.getItem("email");
      const data = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: email,
        password: this.state.password,
        mobileNo: this.state.mobileNo,
        address1: this.state.address1,
        city: this.state.city,
        state: this.state.state,
        pinCode: this.state.pinCode,
        shopTime: dropoff,
        gstNo: this.state.gstNo,
        registrationNo: this.state.registrationNo,
        categoriesAcceptedSet: [...this.state.categoriesAcceptedSet],
      };

      const res = await api.put(COLLECTOR_PROFILE_EDIT, data);
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
    const res = await api.get(COLLECTOR_AUTH_URL);

    this.setState(res.data);
    var times;
    const shopTimes = res.data.shopTime.toString().split("-");
    times = shopTimes[0].split(":");
    const dates = moment.utc().hour(times[0]).minute(0);
    this.setState({ startTime: dates });
    times = shopTimes[1].split(":");
    const enddates = moment.utc().hour(times[0]).minute(0);
    this.setState({ endTime: enddates });
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
                  fontSize: "2rem",
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
                    name="address1"
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
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
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
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
                    name="gstNo"
                    autoComplete="off"
                    style={{ borderRadius: "17px" }}
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
                    name="registrationNo"
                    autoComplete="off"
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
