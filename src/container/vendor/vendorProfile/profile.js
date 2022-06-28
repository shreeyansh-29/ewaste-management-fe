import {Field, Form, Formik} from "formik";
import React, {useEffect} from "react";
import * as Yup from "yup";
import "../vendor.css";
import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  FNAME_REQUIRED,
  LNAME_REQUIRED,
  // MOBILE_INVALID,
  // MOBILE_REQUIRED,
  PASSWORD_REQUIRED,
  PINCODE_REQUIRED,
  STATE_REQUIRED,
  //   TOAST_SUCCESS5,
  PINCODE_INVALID,
} from "../../constant/constant";
import {useDispatch} from "react-redux";

const pinCodeReg = /^\d{6}$/;
let validationSchema = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED),
  lastName: Yup.string().required(LNAME_REQUIRED),
  city: Yup.string().required(CITY_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED),
  state: Yup.string().required(STATE_REQUIRED),
  // mobileNo: Yup.string().phone(MOBILE_INVALID).required(MOBILE_REQUIRED),
  address1: Yup.string().required(ADDRESS_REQUIRED),
  pincode: Yup.string()
    .matches(pinCodeReg, {PINCODE_INVALID})
    .required(PINCODE_REQUIRED),
});

const profile = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch;
  }, []);
  return (
    <div className="vendor" style={{marginTop: "85px"}}>
      <Formik
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
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
                    <Field autoComplete="off" onChange={handleChange} />
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
                      //   name="lastName"
                      autoComplete="off"
                      style={{borderRadius: "17px"}}
                      //   value={this.state.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
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
                      value={localStorage.getItem("email")}
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="phoneNumber">
                      Phone Number <i className="text-danger">*</i>
                    </label>
                    <Field
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
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="address1"
                      autoComplete="off"
                      value={this.state.address1}
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
                      className="form-select"
                      //   value={this.state.state}
                      onChange={handleChange}
                    >
                      {/* <option value="Select State">{this.state.state} </option>
                      {this.state.states.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })} */}
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
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      className="form-select"
                      //   value={this.state.city}
                      onChange={handleChange}
                    >
                      {/* <option value="Select City">{this.state.city}</option>
                      {this.state.cities.map((e, key) => {
                        return <option key={key}>{e}</option>;
                      })} */}
                    </select>
                    {touched.city && errors.city ? (
                      <div className="formErrors">{errors.city}</div>
                    ) : null}
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
                      onChange={handleChange}
                      placeholder="Pincode"
                    />
                    {touched.pincode && errors.pincode ? (
                      <div className="formErrors">{errors.pincode}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="GSTIN">
                      GSTNo <i className="text-danger">*</i>
                    </label>
                    <input
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="gstNo"
                      autoComplete="off"
                      //   value={this.state.gstNo}
                      onChange={handleChange}
                      placeholder="Enter GSTIN"
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="Registration Certificate No.">
                      Registration Number <i className="text-danger">*</i>
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      name="registrationNo"
                      style={{borderRadius: "17px"}}
                      //   value={this.state.registrationNo}
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

export default profile;
