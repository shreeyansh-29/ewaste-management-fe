/* eslint-disable indent */
import {Formik, Form, Field} from "formik";
import React, {useState} from "react";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import Toast from "../../components/toast";
import ReactTooltip from "react-tooltip";
import TimeRange from "react-time-range";
import {SERVER_MSG, TOAST_ERROR3, TOAST_SUCCESS1} from "../constant/constant";
import Dropdown from "../../components/dropdown";
import "./signUp.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {statescity} from "./states";
import {isEmpty} from "lodash";
import {signUpRequest} from "../../redux/action/signUpAction/signUpAction";
import {SignUpValidations} from "../constant/validations";

const data = [
  {
    value: "Temp",
    label: "Temperature Exchange Equipment (Air Conditioners, Freezers)",
  },
  {
    value: "Screens",
    label: "Screens, monitors (Televisions , Laptops)",
  },
  {value: "Lamps", label: "Lamps (LED Lamps)"},
  {
    value: "LargeEqip",
    label: "Large Equipment (Washing Machines, Electric Stoves)",
  },
  {
    value: "SmallEquip",
    label: "Small Equipment (Microwaves, Electric Shavers)",
  },
  {
    value: "SmallIT",
    label: "Small IT and Telecommunication Equipment (Mobile phones, Printers)",
  },
];
const signUp = () => {
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
  const [initialcities, setCities] = useState([]);
  const dispatch = useDispatch();

  let res = useSelector((state) => state.signUpReducer);

  React.useEffect(() => {
    if (isEmpty(res?.data) !== true) {
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
  const returnFunctionStart = (event) => {
    setStartTime(event.startTime);
  };
  const handleInputChange = (e, i) => {
    console.log(i);
    var list = [...e];
    list[list.length - 1].categoryAccepted = e[e.length - 1].value;
    setCategoryAccepted([list]);
    console.log(categoryAccepted);
  };

  const returnFunctionEnd = (event) => {
    setEndTime(event.endTime);
  };

  const changeState = (event) => {
    setState1(event.target.value);
    setCities(statescity.find((obj) => obj.name === event.target.value));
  };
  const changeCity = (event) => {
    setCity(event.target.value);
  };
  const handleDropdown = (e) => {
    setRole(e);
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const confirmtogglePassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
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
        validator={() => ({})}
        onSubmit={(values) => {
          const data1 = {
            values,
            state: state1,
            city: city,
            role: role,
            categoryAccepted: categoryAccepted,
            startTime: startTime,
            endTime: endTime,
          };
          dispatch(signUpRequest(data1));
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
                      style={{borderRadius: "17px"}}
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
                      style={{borderRadius: "17px"}}
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
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="Enter Password"
                        autoComplete="off"
                      />
                      {touched.password && errors.password ? (
                        <div className="formErrors">{errors.password}</div>
                      ) : null}
                      <div className="input-group-btn">
                        <button
                          type="button"
                          onClick={togglePassword}
                          style={{
                            border: "1px solid white",
                            backgroundColor: "white",
                          }}
                        >
                          {passwordType === "password" ? (
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
                        type={confirmPasswordType}
                        name="confirmPassword"
                        style={{borderRadius: "17px"}}
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
                        <button
                          type="button"
                          onClick={confirmtogglePassword}
                          style={{
                            border: "1px solid white",
                            backgroundColor: "white",
                          }}
                        >
                          {confirmPasswordType === "password" ? (
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
                    <Field
                      type="text"
                      name="address1"
                      style={{borderRadius: "17px"}}
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
                    <select
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      className="form-select"
                      value={state1}
                      onChange={(e) => changeState(e)}
                    >
                      <option value="Select State">{"Select State"} </option>
                      {statescity.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })}
                    </select>
                    {touched.state1 && errors.state1 ? (
                      <div className="formErrors">{errors.state1}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label>
                      City <i className="text-danger">*</i>
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
                      <option value="Select City">{"Select city"}</option>
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
                    <label htmlFor="pincode">
                      Pincode <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      style={{borderRadius: "17px"}}
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
                          value={role}
                          style={{borderRadius: "17px"}}
                          placeholder="Select your Role"
                          onChange={(e) => handleDropdown(e)}
                        />
                      </>
                    </div>
                    {touched.role && errors.role ? (
                      <div className="formErrors">{errors.role}</div>
                    ) : null}
                  </div>
                </div>
                {role === "Vendor" || role === "Collector" ? (
                  <div className="row">
                    <div className="inputGroup">
                      <label htmlFor="GSTIN">
                        GST-IN <i className="text-danger">*</i>
                      </label>
                      <Field
                        type="text"
                        name="gstNo"
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="GST Number"
                        autoComplete="off"
                      />
                      {() => {
                        if (touched.gstNo && errors.gstNo) {
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
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="Registration Number"
                        autoComplete="off"
                      />
                      {() => {
                        if (touched.registrationNo && errors.registrationNo) {
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
                          style={{marginTop: "22px"}}
                          className="timelabel"
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
                          onStartTimeChange={returnFunctionStart}
                          onEndTimeChange={returnFunctionEnd}
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
                      style={{paddingLeft: "7px"}}
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
                        <div
                          className="inputGroups"
                          style={{paddingLeft: "15px"}}
                        >
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
                      if (touched.category && errors.category) {
                        <div className="formErrors">{errors.category}</div>;
                      }
                    }}
                  </>
                ) : (
                  ""
                )}
                <span className="error">{msg !== "" ? msg : ""}</span>
                <div className="cont">
                  <div className="vertical-center">
                    <button type="submit" className="profilebtn">
                      Submit
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

export default signUp;
