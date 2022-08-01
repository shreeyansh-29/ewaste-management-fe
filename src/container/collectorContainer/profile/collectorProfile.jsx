/*
  @module collectorProfile
*/
/* eslint-disable indent */
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import "../collector.css";
import {statesCity} from "../../signUp/states";
import Toast from "../../../components/toast";
import {isEmpty} from "lodash";
import {collectorProfileRequest} from "../../../redux/action/collector/collectorProfileAction/collectorProfileAction";
import {TOAST_SUCCESS5} from "../../constant/constants";
import {useDispatch, useSelector} from "react-redux";
import {collectorProfileEditRequest} from "../../../redux/action/collector/collectorProfileAction/collectorProfileEditAction";
import {CollectorValidations} from "../../constant/validations";
import {ProfileHeading, SelectStyle} from "../../../components/styles";

const CollectorProfile = () => {
  const [state1, setState1] = useState();
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  const [initialCities, setInitialCities] = useState([]);

  let res = useSelector((state) => state.collectorProfile?.data);
  useEffect(() => {
    dispatch(collectorProfileRequest());
  }, []);

  useEffect(() => {
    setState1(res?.state);
    setCity(res?.city);
  }, [res]);
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
  /* 
    @function handleSubmit
    @params {values} contains all the details of the user
    @detail dispatch the editColProfileRequest from CollectorProfileAction
    @return {void}
  */
  const handleSubmit = (values) => {
    const data = {
      values,
      password: res?.password,
      categoriesAcceptedSet: res?.categoriesAcceptedSet,
      shopTime: res?.shopTime,
      state: state1,
      city: city,
    };
    dispatch(collectorProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };
  return (
    <div className="vendor collectorProfile">
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res?.firstName,
          lastName: res?.lastName,
          email: res?.email,
          mobileNo: res?.mobileNo,
          address1: res?.address1,
          pinCode: res?.pinCode,
          gstNo: res?.gstNo,
          registrationNo: res?.registrationNo,
        }}
        validationSchema={CollectorValidations}
        validator={() => ({})}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
            <div className="formbody">
              <div className="vendorsprofile">
                <ProfileHeading>Profile</ProfileHeading>
              </div>
              <div className="vendorbody">
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="firstName">
                      First Name <i className="text-danger">*</i>
                    </label>
                    <Field
                      autoComplete="off"
                      onChange={handleChange}
                      className="collectorProfileField"
                      name="firstName"
                      type="text"
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
                      className="collectorProfileField"
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
                      className="collectorProfileEmail"
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
                      className="collectorProfileField"
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
                      className="collectorProfileField"
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
                    {touched.city && errors.city ? (
                      <div className="formErrors">{errors.city}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="pincode">
                      Pincode <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="pincode"
                      className="collectorProfileField"
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
                      type="text"
                      id="gst"
                      className="collectorProfileField"
                      name="gstNo"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Enter GSTIN"
                    />
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
                      className="collectorProfileField"
                      onChange={handleChange}
                      placeholder="Enter Registration Number"
                    />
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
        )}
      </Formik>
    </div>
  );
};

export default CollectorProfile;
