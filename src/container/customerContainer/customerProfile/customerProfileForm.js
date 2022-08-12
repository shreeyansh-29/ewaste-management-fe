/* eslint-disable indent */
import React, {useState} from "react";
import {Form, Field} from "formik";
import {ProfileHeading, SelectStyle} from "../../../components/styles";
import {isEmpty} from "lodash";
import {statesCity} from "../../signUp/states";

const customerProfileForm = ({
  errors,
  touched,
  handleChange,
  states,
  city1,
}) => {
  const [state1, setState1] = useState(states);
  const [city, setCity] = useState(city1);
  const [initialCities, setInitialCities] = useState([]);

  /* 
    @function changeState
    @params {event}
    @detail set the value of state field whenever it is updated by user
    @return {void}
  */
  const changeState = (event) => {
    setState1(event.target.value);
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
        <div className="containers">
          <div className="customersprofile">
            <ProfileHeading>Profile</ProfileHeading>
          </div>
          <div className="customerbody">
            <div className="row">
              <div className="inputGroup">
                <label htmlFor="firstName">
                  First Name <i className="text-danger">*</i>
                </label>
                <Field
                  autoComplete="off"
                  type="text"
                  name="firstName"
                  className="customerProfileField"
                  onChange={handleChange}
                  placeholder="First Name"
                />
                {touched.firstName && errors.firstName ? (
                  <div className="formErrors">{errors.firstName}</div>
                ) : null}
              </div>

              <div className="inputGroup">
                <label htmlFor="lastName">
                  Last Name<i className="text-danger">*</i>
                </label>
                <Field
                  autoComplete="off"
                  onChange={handleChange}
                  placeholder="Last Name"
                  type="text"
                  className="customerProfileField"
                  name="lastName"
                />
                {touched.lastName && errors.lastName ? (
                  <div className="formErrors">{errors.lastName}</div>
                ) : null}
              </div>

              <div className="row">
                <div className="inputGroup">
                  <label htmlFor="email">Email</label>
                  <Field
                    className="customerProfileEmail"
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
                    className="customerProfileField"
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
                    className="customerProfileField"
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
                    value={state1}
                    onChange={(e) => changeState(e)}
                  >
                    <option value="Select State">{state1} </option>
                    {statesCity.map((e, key) => {
                      return <option key={key}>{e.name}</option>;
                    })}
                  </SelectStyle>
                </div>
              </div>
              <div className="row">
                <div className="inputGroup">
                  <label>
                    City <i className="text-danger">*</i>{" "}
                  </label>
                  <SelectStyle
                    id="city"
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
                </div>

                <div className="inputGroup">
                  <label htmlFor="pincode">
                    Pincode <i className="text-danger">*</i>
                  </label>
                  <Field
                    type="pincode"
                    className="customerProfileField"
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
              <div className="cont">
                <div className="vertical-center">
                  <button type="submit" className="profilebtn">
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default customerProfileForm;
