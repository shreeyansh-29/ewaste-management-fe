/* eslint-disable indent */
import React, {useState} from "react";
import {Form, Field} from "formik";
import {ProfileHeading, SelectStyle} from "../../../components/styles";
import {isEmpty} from "lodash";
import {statesCity} from "../../signUp/states";

const vendorProfileForm = ({errors, touched, handleChange, states, city1}) => {
  const [initialCities, setInitialCities] = useState([]);
  const [state, setState] = useState(states);
  const [city, setCity] = useState(city1);
  /* 
    @function changeState
    @params {event}
    @detail set the value of state field whenever it is updated by user
    @return {void}
  */
  const changeState = (event) => {
    setState(event.target.value);
    setInitialCities(statesCity.find((obj) => obj.name === event.target.value));
  };

  /* 
    @function changeCity
    @params {event}
    @detail set the value of city field whenever it is updated by user
    @return {void}
  */
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  return (
    <div>
      <Form>
        <div className="formbody">
          <div className="vendorsprofile">
            <ProfileHeading>Profile</ProfileHeading>
          </div>
          <div className="vendorbody">
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="firstName">
                  First Name <i className="text-danger">*</i>{" "}
                </label>
                <Field
                  autoComplete="off"
                  onChange={handleChange}
                  className="vendorProfileField"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
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
                  autoComplete="off"
                  className="vendorProfileField"
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {touched.lastName && errors.lastName ? (
                  <div className="formErrors">{errors.lastName}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <Field
                  className="vendorProfileEmail"
                  disabled
                  name="email"
                  id="email"
                />
              </div>
              <div className="inputGroup">
                <label htmlFor="phoneNumber">
                  Phone Number <i className="text-danger">*</i>
                </label>
                <Field
                  id="phone"
                  type="text"
                  className="vendorProfileField"
                  name="mobileNo"
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
                {touched.mobileNo && errors.mobileNo ? (
                  <div className="formErrors">{errors.mobileNo}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="address1">
                  Address Line <i className="text-danger">*</i>
                </label>
                <Field
                  id="address"
                  type="text"
                  className="vendorProfileField"
                  name="address1"
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Address Line"
                />
                {touched.address1 && errors.address1 ? (
                  <div className="formErrors">{errors.address1}</div>
                ) : null}
              </div>
              <div className="inputGroup">
                <label>
                  State <i className="text-danger">*</i>
                </label>
                <SelectStyle
                  id="state"
                  className="form-select"
                  value={state}
                  onChange={(e) => changeState(e)}
                >
                  <option value="Select State">{state} </option>
                  {statesCity.map((e, key) => {
                    return <option key={key}>{e.name}</option>;
                  })}
                </SelectStyle>
                {touched.state && errors.state ? (
                  <div className="formErrors">{errors.state}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label>
                  City <i className="text-danger">*</i>{" "}
                </label>
                <SelectStyle
                  className="form-select"
                  value={city}
                  onChange={(e) => changeCity(e)}
                >
                  <option value="Select City">{city}</option>
                  {isEmpty(initialCities) !== true
                    ? initialCities?.cities.map((e, key) => {
                        return <option key={key}>{e}</option>;
                      })
                    : ""}
                </SelectStyle>
                {touched.city && errors.city ? (
                  <div className="formErrors">{errors.city}</div>
                ) : null}
              </div>
              <div className="inputGroup">
                <label htmlFor="pinCode">
                  Pincode <i className="text-danger">*</i>
                </label>
                <Field
                  type="pincode"
                  className="vendorProfileField"
                  name="pinCode"
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Pincode"
                />
                {touched.pinCode && errors.pinCode ? (
                  <div className="formErrors">{errors.pinCode}</div>
                ) : null}
              </div>
            </div>
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="GSTIN">
                  GSTNo <i className="text-danger">*</i>
                </label>
                <Field
                  id="gst"
                  type="text"
                  className="vendorProfileField"
                  name="gstNo"
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Enter GSTIN"
                />
                {touched.gstNo && errors.gstNo ? (
                  <div className="formErrors">{errors.gstNo}</div>
                ) : null}
              </div>
              <div className="inputGroup">
                <label htmlFor="Registration Certificate No.">
                  Registration Number <i className="text-danger">*</i>
                </label>
                <Field
                  id="registrationNo"
                  type="text"
                  autoComplete="off"
                  name="registrationNo"
                  className="vendorProfileField"
                  onChange={handleChange}
                  placeholder="Enter Registration Number"
                />
                {touched.registrationNo && errors.registrationNo ? (
                  <div className="formErrors">{errors.registrationNo}</div>
                ) : null}
              </div>
            </div>
            <div className="cont">
              <div className="vertical-center">
                <button type="submit" className="profilebtn">
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default vendorProfileForm;
