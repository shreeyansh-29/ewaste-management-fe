/*
  @module vendorProfile
*/
/* eslint-disable indent */
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import "../vendor.css";
import {statescity} from "../../signUp/states";
import Toast from "../../../components/toast";
import {TOAST_SUCCESS5} from "../../constant/constants";
import {useDispatch, connect} from "react-redux";
import {vendorProfileRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileAction";
import {vendorProfileEditRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileEditAction";
import {isEmpty} from "lodash";
import {VendorValidations} from "../../constant/validations";

const VendorProfile = ({res}) => {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vendorProfileRequest());
  }, []);
  const [initialcities, setCities] = useState([]);
  useEffect(() => {
    setState(res.state);
    setCity(res.city);
  }, [res]);

  /* 
    @function handleSubmit
    @params {values} contains all the details of the user
    @detail dispatch the vendorEditProfileRequest from vendorProfileAction
    @return {void}
  */
  const handleSubmit = (values) => {
    const data = {values, password: res?.password, state: state, city: city};
    dispatch(vendorProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };

  /* 
    @function changeState
    @params {event}
    @detail set the value of state field whenever it is updated by user
    @return {void}
  */
  const changeState = (event) => {
    setState(event.target.value);
    setCities(statescity.find((obj) => obj.name === event.target.value));
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
    <div className="vendor" style={{marginTop: "85px"}}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          mobileNo: res.mobileNo,
          address1: res.address1,
          pinCode: res.pinCode,
          gstNo: res?.gstNo,
          registrationNo: res?.registrationNo,
        }}
        validationSchema={VendorValidations}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
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
                    <Field
                      autoComplete="off"
                      onChange={handleChange}
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                        backgroundColor: "white",
                      }}
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
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
                    <select
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      id="state"
                      className="form-select"
                      value={state}
                      onChange={(e) => changeState(e)}
                    >
                      <option value="Select State">{state} </option>
                      {statescity.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })}
                    </select>
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
                    <select
                      id="city"
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      className="form-select"
                      value={city}
                      onChange={(e) => changeCity(e)}
                    >
                      <option value="Select City">{city}</option>

                      {isEmpty(initialcities) !== true
                        ? initialcities?.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                          })
                        : ""}
                    </select>
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
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.vendorProfile?.data,
  };
};

export default connect(mapStateToProps)(VendorProfile);
