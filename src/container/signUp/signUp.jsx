/* eslint-disable indent */
/* 
  @module SignUp 
*/

import {Formik, Form, Field} from "formik";
import React, {useState, useEffect} from "react";
import Select from "react-select";
import {connect, useDispatch} from "react-redux";
import Toast from "../../components/toast";
import ReactTooltip from "react-tooltip";
import TimeRange from "react-time-range";
import {SignUpValidations} from "../constant/validations";
import {
  PASSWORD,
  SERVER_MSG,
  TOAST_ERROR3,
  TOAST_SUCCESS1,
} from "../constant/constants";
import Dropdown from "../../components/dropDown/dropdown";
import "./signUp.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {statesCity, data} from "./states";
import {isEmpty} from "lodash";
import {signUpRequest} from "../../redux/action/signUpAction/signUpAction";
import {togglePassword} from "../../components/togglePassword/togglePassword";
import {Heading, ButtonStyle, SelectStyle} from "../../components/styles";
import {useNavigate} from "react-router-dom";

const signUp = ({res}) => {
  const navigate = useNavigate();
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");
  const [passwordType, setPasswordType] = useState("text");
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [state1, setState1] = useState();
  const [msg, setMsg] = useState();
  const [city, setCity] = useState();
  const [categoryAccepted, setCategoryAccepted] = useState([
    {
      category: "",
    },
  ]);
  const [role, setRole] = useState();
  const [initialCities, setInitialCities] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(res) !== true) {
      if (res?.status === "success") {
        Toast.success(TOAST_SUCCESS1, 1500);
        setTimeout(() => {
          window.location.href = "/Signin";
        }, 3000);
      } else if (res?.status === "fail") {
        Toast.error(TOAST_ERROR3);
      } else {
        setMsg(SERVER_MSG);
      }
    }
  });
  /* 
    @function returnFunctionStart
    @detail set the value of startTime field
    @return {void}
  */
  const returnFunctionStartTime = (event) => {
    setStartTime(event.startTime);
  };

  /* 
    @function returnFunctionEnd
    @detail set the value of endTime field
    @return {void}
  */
  const returnFunctionEndTime = (event) => {
    setEndTime(event.endTime);
  };

  /* 
    @function handleInputChange
    @detail set the value of categories selected by user
    @return {void}
  */
  const handleInputChange = (e) => {
    let list = [...e];
    list[list.length - 1].categoryAccepted = e[e.length - 1].value;
    setCategoryAccepted([list]);
  };

  /* 
    @function changeState
    @detail set the value of state field
    @return {void}
  */
  const changeState = (event) => {
    setState1(event.target.value);
    setInitialCities(statesCity.find((obj) => obj.name === event.target.value));
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const handleDropdown = (e) => {
    setRole(e);
  };
  /* 
    @function togglePassword
    @detail set the password type of field name 'password'
    @return {void}
  */

  const togglePasswords = () => {
    setPasswordType(togglePassword(passwordType));
  };

  const handleDropOffTime = () => {
    if (role === "Collector") {
      let start = startTime.toString().split("T");
      start = start[1].split(":");
      start = (parseInt(start[0]) + 6) % 24;
      start = start + ":" + "00" + "-";
      let end = endTime.toString().split("T");
      end = end[1].split(":");
      end = (parseInt(end[0]) + 6) % 24;
      end = end + ":" + "00";
      return start.toString() + end.toString();
    }
    setCategoryAccepted([]);
    return "10";
  };
  /* 
    @function confirmTogglePassword
    @detail set the password type of field name 'confirmpassword'
    @return {void}
  */
  const confirmTogglePasswords = () => {
    setConfirmPasswordType(togglePassword(confirmPasswordType));
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
        validationSchema={SignUpValidations}
        onSubmit={(values) => {
          const dropoff = handleDropOffTime();
          const info = {
            values,
            state: state1,
            city: city,
            role: role.toUpperCase(),
            categoryAccepted: categoryAccepted,
            dropOff: dropoff,
          };

          dispatch(signUpRequest(info));
        }}
      >
        {(
          {errors, touched, handleChange} //NoSonar
        ) => (
          <Form>
            <div className="Form-bodY">
              <div className="signup-heading">
                <Heading>Sign Up</Heading>
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
                      className="signUpField"
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
                      className="signUpField"
                      onChange={handleChange}
                      placeholder="Last Name"
                      autoComplete="off"
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className="formErrors">{errors.lastName}</div>
                    ) : null}
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
                      className="signUpField"
                      onChange={handleChange}
                      placeholder="Mail"
                      autoComplete="off"
                    />
                    {touched.email && errors.email ? (
                      <div className="formErrors">{errors.email}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="mobileNo">
                      Mobile Number <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      name="mobileNo"
                      className="signUpField"
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      autoComplete="off"
                    />
                    {touched.mobileNo && errors.mobileNo ? (
                      <div className="formErrors">{errors.mobileNo}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="password">
                      Password <i className="text-danger">*</i>
                    </label>
                    <div className="inputWithButton">
                      <Field
                        type={passwordType}
                        name="password"
                        className="signUpField"
                        onChange={handleChange}
                        placeholder="Enter Password"
                        autoComplete="off"
                      />
                      {touched.password && errors.password ? (
                        <div className="formErrors">{errors.password}</div>
                      ) : null}
                      <div className="input-group-btn">
                        <ButtonStyle
                          id="btn1"
                          type="button"
                          onClick={togglePasswords}
                        >
                          {passwordType === PASSWORD ? (
                            <ShowOffIcon />
                          ) : (
                            <ShowIcon />
                          )}
                        </ButtonStyle>
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
                        type={confirmPasswordType}
                        name="confirmPassword"
                        className="signUpField"
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        autoComplete="off"
                      />
                      {touched.confirmPassword && errors.confirmPassword ? (
                        <div className="formErrors">
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                      <div className="input-group-btn">
                        <ButtonStyle
                          id="btn2"
                          type="button"
                          onClick={confirmTogglePasswords}
                        >
                          {confirmPasswordType === PASSWORD ? (
                            <ShowOffIcon />
                          ) : (
                            <ShowIcon />
                          )}
                        </ButtonStyle>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="address1">
                      Address Line <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      name="address1"
                      className="signUpField"
                      onChange={handleChange}
                      placeholder="Address"
                      autoComplete="off"
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
                      <option value="Select State">{"Select State"} </option>
                      {statesCity.map((e, key) => {
                        return (
                          <option key={key} id="selectedState">
                            {e.name}
                          </option>
                        );
                      })}
                    </SelectStyle>
                    {touched.state && errors.state ? (
                      <div className="formErrors">{errors.state}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label id="city">
                      City <i className="text-danger">*</i>
                    </label>
                    <SelectStyle
                      id="city"
                      className="form-select"
                      value={city}
                      onChange={(e) => changeCity(e)}
                    >
                      <option value="Select City">{"Select city"}</option>
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
                      type="text"
                      className="signUpField"
                      name="pinCode"
                      onChange={handleChange}
                      placeholder="Pincode"
                      autoComplete="off"
                    />
                    {touched.pinCode && errors.pinCode ? (
                      <div className="formErrors">{errors.pinCode}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label id="role" htmlFor="role">
                      Role <i className="text-danger">*</i>
                    </label>
                    <div id="role" className="role">
                      <>
                        <Dropdown
                          data={[
                            {label: "Customer"},
                            {label: "Collector"},
                            {label: "Vendor"},
                          ]}
                          name="role"
                          value={role}
                          className="signUpField"
                          placeholder="Select your Role"
                          onChange={(e) => handleDropdown(e)}
                        />
                      </>
                    </div>
                  </div>
                </div>
                {role === "Vendor" || role === "Collector" ? (
                  <div className="row">
                    <div className="inputGroup">
                      <label htmlFor="gstNo">
                        GST-IN <i className="text-danger">*</i>
                      </label>
                      <Field
                        type="text"
                        name="gstNo"
                        className="signUpField"
                        onChange={handleChange}
                        placeholder="GST Number"
                        autoComplete="off"
                      />
                      {() => {
                        if (errors.gstNo) {
                          <div className="formErrors">{errors.gstNo}</div>;
                        }
                      }}
                    </div>
                    <div className="inputGroup">
                      <label htmlFor="reg">
                        Registration Number <i className="text-danger">*</i>
                      </label>
                      <Field
                        type="text"
                        name="registrationNo"
                        className="signUpField"
                        onChange={handleChange}
                        placeholder="Registration Number"
                        autoComplete="off"
                      />
                      {() => {
                        if (errors.registrationNo) {
                          <div className="formErrors">
                            {errors.registrationNo}
                          </div>;
                        }
                      }}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {role === "Collector" ? (
                  <>
                    <div className="row">
                      <div className="inputGroup">
                        <label
                          htmlFor="time"
                          data-tip
                          data-for="registerTip"
                          className="timelabel dropOffTime"
                        >
                          Drop-Off Time <i className="text-danger">*</i>
                        </label>
                        <ReactTooltip
                          id="registerTip"
                          place="bottom"
                          effect="solid"
                        >
                          Drop-Off is required for drop off delivery from
                          customers
                        </ReactTooltip>
                        <TimeRange
                          onStartTimeChange={returnFunctionStartTime}
                          onEndTimeChange={returnFunctionEndTime}
                          startMoment={startTime}
                          endMoment={endTime}
                          use24Hours={true}
                          minuteIncrement="60"
                          className="time"
                        />
                      </div>
                      <div className="inputGroup"></div>
                    </div>

                    <label
                      htmlFor="categories"
                      data-tip
                      data-for="Tip"
                      className="categoriesLabel"
                    >
                      Categories <i className="text-danger">*</i>
                    </label>
                    <ReactTooltip id="Tip" place="bottom" effect="solid">
                      Select the categories of ewaste you can collect from
                      customers
                    </ReactTooltip>
                    {categoryAccepted.map((v, i) => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <div className="inputGroups categories">
                          <Select
                            value={categoryAccepted.category}
                            options={data}
                            placeholder="Select Categories"
                            onChange={(e) => handleInputChange(e, i)}
                            isMulti
                          />
                        </div>
                      );
                    })}
                    {() => {
                      if (errors.category) {
                        <div className="formErrors">{errors.category}</div>;
                      }
                    }}
                  </>
                ) : (
                  ""
                )}
                <span className="error">{msg !== "" ? msg : ""}</span>
                <div className="row">
                  <div className="cont">
                    <button
                      type="button"
                      onClick={() => {
                        navigate("/Signin");
                      }}
                      className="backbutton"
                    >
                      BACK
                    </button>
                    <button type="submit" className="signup-button">
                      SIGN UP
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
    res: state.signUp?.data,
  };
};

export default connect(mapStateToProps)(signUp);
