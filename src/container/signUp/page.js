import {Formik, Form, Field} from "formik";
import React, {useState, useEffect} from "react";
import * as Yup from "yup";
import {FNAME_REQUIRED} from "../constant/constant";
import Dropdown from "../components/dropdown";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {statescity} from "./states";

let validationSchema = {
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
};

const page = () => {
  const [states, setStates] = useState(null);

  useEffect(() => {
    setStates(statescity);
  });

  const togglePassword = () => {
    if (this.state.passwordType === "password") {
      this.setState({passwordType: "text"});
      return;
    }
    this.setState({passwordType: "password"});
  };
  const confirmtogglePassword = () => {
    if (this.state.confirmPasswordType === "password") {
      this.setState({confirmPasswordType: "text"});
      return;
    }
    this.setState({confirmPasswordType: "password"});
  };
  const changeState = (event) => {
    this.setState({selectedState: event.target.value});
    this.setState({
      cities: states.find((states) => states.name === event.target.value)
        .cities,
    });
  };
  const changeCity = (event) => {
    this.setState({city: event.target.value});
  };
  return (
    <div className="signUp">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          mobileNo: "",
          password: "",
          confirmPassword: "",
          address1: "",
          state: "",
          city: "",
          pinCode: "",
          role: "",
          gstNo: "",
          registrationNo: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
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
                    <Field
                      type="text"
                      name="firstName"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="off"
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="formErrors">{errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="lastName">
                      Last Name <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="emailId">
                      E-mail Id <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="email"
                      name="email"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Mail"
                      autoComplete="off"
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="mobileNo">
                      Mobile Number <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      name="mobileNo"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="password">
                      Password <i className="text-danger">*</i>
                    </label>
                    <div className="inputWithButton">
                      <Field
                        type={this.state.passwordType}
                        name="password"
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        autoComplete="off"
                      />
                      <div className="input-group-btn">
                        <button
                          onClick={togglePassword}
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
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="confirmPassword">
                      Confirm Password <i className="text-danger">*</i>
                    </label>
                    <div className="inputWithButton">
                      <Field
                        type={this.state.confirmPasswordType}
                        name="confirmPassword"
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        autoComplete="off"
                      />
                      <div className="input-group-btn">
                        <button
                          onClick={confirmtogglePassword}
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
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Address"
                      autoComplete="off"
                    />
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
                      name="state"
                      onChange={changeState}
                    >
                      <option value="Select State">{"Select State"} </option>
                      {states.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })}
                    </select>
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
                      name="city"
                      onChange={changeCity}
                    >
                      <option value="Select City">{" Select City"}</option>
                      {this.state.cities.map((e, key) => {
                        return <option key={key}>{e}</option>;
                      })}
                    </select>
                  </div>

                  <div className="inputGroup">
                    <label htmlFor="pincode">
                      Pincode <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="pincode"
                      style={{borderRadius: "17px"}}
                      name="pinCode"
                      onChange={handleChange}
                      placeholder="Pincode"
                      autoComplete="off"
                    />
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
                            {label: "Customer"},
                            {label: "Collector"},
                            {label: "Vendor"},
                          ]}
                          name="role"
                          value={this.state.role.name}
                          style={{borderRadius: "17px"}}
                          placeholder="Select your Role"
                          onChange={this.handleDropdown}
                          optionValues={this.optionValues}
                        />
                        {/* {fields} */}
                      </>
                    </div>
                    {/* <div className="formErrors">{roleErr}</div> */}
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default page;
