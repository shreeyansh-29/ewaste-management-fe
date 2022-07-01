/* eslint-disable indent */
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import Toast from "../../components/toast";
import {statescity} from "../../signUp/states";
import "../customer.css";
import {isEmpty} from "lodash";
import * as Yup from "yup";
import {
  ADDRESS_REQUIRED,
  FNAME_REQUIRED,
  LNAME_REQUIRED,
  MOBILE_REQUIRED,
  PINCODE_REQUIRED,
  TOAST_SUCCESS5,
} from "../../constant/constant";
import {useDispatch, useSelector} from "react-redux";
import {customerProfileEditRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileEditAction";
import {customerProfileRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileAction";

let validationSchema = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
  lastName: Yup.string().required(LNAME_REQUIRED).nullable(),
  mobileNo: Yup.string().required(MOBILE_REQUIRED).nullable(),
  address1: Yup.string().required(ADDRESS_REQUIRED).nullable(),
  pinCode: Yup.string().required(PINCODE_REQUIRED).nullable(),
});

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [initialcities, setCities] = useState([]);

  let res = useSelector((state) => state.customerProfile?.data);
  useEffect(() => {
    dispatch(customerProfileRequest());
  }, []);
  useEffect(() => {
    setState(res?.state);
    setCity(res?.city);
  }, [res]);

  const handleSubmit = (values) => {
    const data = {values, password: res?.password, state: state, city: city};
    console.log(data);
    dispatch(customerProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };
  const changeState = (event) => {
    setState(event.target.value);
    setCities(statescity.find((obj) => obj.name === event.target.value));
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className="profile" style={{marginTop: "85px"}}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res?.firstName,
          lastName: res?.lastName,
          mobileNo: res?.mobileNo,
          address1: res?.address1,
          pinCode: res?.pinCode,
          email: res?.email,
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
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
                      First Name <i className="text-danger">*</i>
                    </label>
                    <Field
                      autoComplete="off"
                      type="text"
                      name="firstName"
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
                        style={{
                          borderRadius: "17px",
                          padding: "4px",
                          backgroundColor: "white",
                        }}
                        disabled
                        name="email"
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
                        value={state}
                        onChange={(e) => changeState(e)}
                      >
                        <option value="Select State">{state} </option>
                        {statescity.map((e, key) => {
                          return <option key={key}>{e.name}</option>;
                        })}
                      </select>
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
                    </div>

                    <div className="inputGroup">
                      <label htmlFor="pincode">
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
};

export default CustomerProfile;
