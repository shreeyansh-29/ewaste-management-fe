import {Field, Form, Formik} from "formik";
import React, {useEffect} from "react";
import Toast from "../../components/toast";
import "../customer.css";
import * as Yup from "yup";
import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  FNAME_REQUIRED,
  LNAME_REQUIRED,
  MOBILE_INVALID,
  MOBILE_REQUIRED,
  PASSWORD_REQUIRED,
  PINCODE_REQUIRED,
  STATE_REQUIRED,
  TOAST_SUCCESS5,
  PINCODE_INVALID,
} from "../../constant/constant";
import {useDispatch} from "react-redux";
import {customerProfileEditRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileEditAction";
import {customerProfileRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileAction";
// import { useSelector } from "react-redux";
const pinCodeReg = /^\d{6}$/;

let validationSchema = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED),
  lastName: Yup.string().required(LNAME_REQUIRED),
  city: Yup.string().required(CITY_REQUIRED),
  password: Yup.string().required(PASSWORD_REQUIRED),
  state: Yup.string().required(STATE_REQUIRED),
  mobileNo: Yup.string().phone(MOBILE_INVALID).required(MOBILE_REQUIRED),
  address1: Yup.string().required(ADDRESS_REQUIRED),
  pincode: Yup.string()
    .matches(pinCodeReg, {PINCODE_INVALID})
    .required(PINCODE_REQUIRED),
});
const email = localStorage.getItem("email");
function profile() {
  const dispatch = useDispatch();
  //   const res = useSelector(state => state.)
  useEffect(() => {
    dispatch(customerProfileRequest());
  });
  function handleSubmit(values) {
    const email = email;
    const {data} = {values, email};
    dispatch(customerProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }

  return (
    <div className="profile" style={{marginTop: "85px"}}>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          state: "",
          city: "",
          password: "",
          mobileNo: "",
          address1: "",
          pincode: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
            <div className="constainers">
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
                      First Name <i className="text-danger">*</i>
                    </label>
                    <Field
                      autoComplete="off"
                      type="text"
                      name="firstName"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="First name"
                    />
                  </div>
                  {touched.firstName && errors.firstName ? (
                    <div className="formErrors">{errors.firstName}</div>
                  ) : null}
                  <div className="inputGroup">
                    <label htmlFor="lastName">
                      Last Name<i className="text-danger">*</i>
                    </label>
                    <Field
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Last name"
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="lastName"
                    />
                  </div>
                  {touched.lastName && errors.lastName ? (
                    <div className="formErrors">{errors.lastName}</div>
                  ) : null}
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
                        defaultValue={email}
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
                    </div>
                    {touched.mobileNo && errors.mobileNo ? (
                      <div className="formErrors">{errors.mobileNo}</div>
                    ) : null}
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
                        onChange={handleChange}
                        placeholder="Address Line"
                      />
                    </div>
                    {touched.address1 && errors.address1 ? (
                      <div className="formErrors">{errors.address1}</div>
                    ) : null}
                    <div className="inputGroup">
                      <label>
                        State <i className="text-danger">*</i>
                      </label>
                      <select
                        style={{borderRadius: "17px", padding: "4px"}}
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option value="Select State">
                          {this.state.state}{" "}
                        </option>
                        {this.state.states.map((e, key) => {
                          return <option key={key}>{e.name}</option>;
                        })}
                      </select>
                    </div>
                    {touched.state && errors.state ? (
                      <div className="formErrors">{errors.state}</div>
                    ) : null}
                  </div>
                  <div className="row">
                    <div className="inputGroup">
                      <label>
                        City <i className="text-danger">*</i>{" "}
                      </label>
                      <select
                        style={{borderRadius: "17px", padding: "4px"}}
                        className="form-select"
                        onChange={handleChange}
                      >
                        <option value="Select City">{this.state.city}</option>
                        {this.state.cities.map((e, key) => {
                          return <option key={key}>{e}</option>;
                        })}
                      </select>
                    </div>
                    {touched.city && errors.city ? (
                      <div className="formErrors">{errors.city}</div>
                    ) : null}
                    <div className="inputGroup">
                      <label htmlFor="pincode">
                        Pincode <i className="text-danger">*</i>
                      </label>
                      <Field
                        type="pincode"
                        style={{borderRadius: "17px"}}
                        name="pincode"
                        autoComplete="off"
                        onChange={handleChange}
                        placeholder="Pincode"
                      />
                    </div>
                    {touched.pincode && errors.pincode ? (
                      <div className="formErrors">{errors.pincode}</div>
                    ) : null}
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
        )}
      </Formik>
    </div>
  );
}

export default profile;
