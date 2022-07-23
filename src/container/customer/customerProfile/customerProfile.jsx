/* 
  @module customerProfile
*/
/* eslint-disable indent */
import {Field, Form, Formik} from "formik";
import React, {useEffect, useState} from "react";
import Toast from "../../../components/toast";
import {statescity} from "../../signUp/states";
import "../customer.css";
import {isEmpty} from "lodash";
import {TOAST_SUCCESS5} from "../../constant/constant";
import {useDispatch, useSelector} from "react-redux";
import {customerProfileEditRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileEditAction";
import {customerProfileRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileAction";
import {CustomerValidations} from "../../constant/validations";
import {ProfileHeading, SelectStyle} from "../../../components/styles";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const [state1, setState1] = useState();
  const [city, setCity] = useState();
  const [initialcities, setCities] = useState([]);

  let res = useSelector((state) => state.customerProfile?.data);
  useEffect(() => {
    dispatch(customerProfileRequest());
  }, []);
  useEffect(() => {
    setState1(res?.state);
    setCity(res?.city);
  }, [res]);

  /* 
    @function handleSubmit
    @params {values} contains all the details of the user
    @detail dispatch the editCusProfileRequest from CustomerProfileAction
    @return {void}
  */
  const handleSubmit = (values) => {
    const data = {values, password: res?.password, state: state1, city: city};
    dispatch(customerProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };
  /* 
    @function changeState
    @params {event}
    @detail set the value of state field whenever it is updated by user
    @return {void}
  */
  const changeState = (event) => {
    setState1(event.target.value);
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
        validationSchema={CustomerValidations}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
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
                      <SelectStyle
                        id="state"
                        className="form-select"
                        value={state1}
                        onChange={(e) => changeState(e)}
                      >
                        <option value="Select State">{state1} </option>
                        {statescity.map((e, key) => {
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
                        {isEmpty(initialcities) !== true
                          ? initialcities?.cities.map((e, key) => {
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
