import React, {Component} from "react";
import "../customer.css";
import {statescity} from "../../sign-Up/states";
import api from "../../../core/utilities/httpProvider";
import validation from "./customerValidations";
import {
  CUSTOMER_AUTH_URL,
  CUSTOMER_PROFILE_EDIT,
  TOAST_SUCCESS5,
} from "../../constant/constant";
import Toast from "../../components/toast";
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
    let Errors = {};
    Errors = validation(this.state);
    this.setState({formErrors: Errors.formErrors});

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
        shopTime: "10",
      };
      const res = await api.put(CUSTOMER_PROFILE_EDIT, data);

      localStorage.removeItem("name");
      localStorage.setItem("name", this.state.firstName);
      Toast.success(TOAST_SUCCESS5, 1500);

      this.setState(res.data);
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
      <div className="profile" style={{marginTop: "85px"}}>
        <form>
          <div className="containers">
            <div className="customersprofile">
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
            <div className="customerbody">
              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="firstName">
                    First Name <i className="text-danger">*</i>{" "}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    style={{borderRadius: "17px"}}
                    value={this.state.firstName}
                    onChange={(e) =>
                      this.setState({[e.target.name]: e.target.value})
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
                    style={{borderRadius: "17px"}}
                    name="lastName"
                    value={this.state.lastName}
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({[e.target.name]: e.target.value})
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
                    style={{borderRadius: "17px"}}
                    name="mobileNo"
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({[e.target.name]: e.target.value})
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
                    style={{borderRadius: "17px"}}
                    name="address1"
                    value={this.state.address1}
                    autoComplete="off"
                    onChange={(e) =>
                      this.setState({[e.target.name]: e.target.value})
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
                    style={{borderRadius: "17px", padding: "4px"}}
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
                    style={{borderRadius: "17px", padding: "4px"}}
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
                    style={{borderRadius: "17px"}}
                    name="pinCode"
                    autoComplete="off"
                    value={this.state.pinCode}
                    onChange={(e) =>
                      this.setState({[e.target.name]: e.target.value})
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
