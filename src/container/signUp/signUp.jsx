/* eslint-disable indent */
import {Formik, Form, Field} from "formik";
import React, {useState} from "react";
import Select from "react-select";
import {useDispatch, useSelector} from "react-redux";
import Toast from "../../components/toast";
import ReactTooltip from "react-tooltip";
import TimeRange from "react-time-range";
import {SERVER_MSG, TOAST_ERROR3, TOAST_SUCCESS1} from "../constant/constant";
import Dropdown from "../../components/dropDown/dropdown";
import "./signUp.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {statescity} from "./states";
import {isEmpty} from "lodash";
import {signUpRequest} from "../../redux/action/signUpAction/signUpAction";
import {SignUpValidations} from "../constant/validations";
import {togglePassword} from "../../components/togglePassword/togglePassword";
import {Heading, ButtonStyle, SelectStyle} from "../../components/styles";

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

  let res = useSelector((state) => state.signUpReducer?.data);

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

  const togglePasswords = () => {
    setPasswordType(togglePassword(passwordType));
  };
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
          state1: "",
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
        }}
      >
        {({errors, handleChange, submitForm}) => (
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
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="First Name"
                      autoComplete="off"
                    />
                    {errors.firstName ? (
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
                    {errors.lastName ? (
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
                    {errors.email ? (
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
                    {errors.mobileNo ? (
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
                      {errors.password ? (
                        <div className="formErrors">{errors.password}</div>
                      ) : null}
                      <div className="input-group-btn">
                        <ButtonStyle type="button" onClick={togglePasswords}>
                          {passwordType === "password" ? (
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
                        style={{borderRadius: "17px"}}
                        onChange={handleChange}
                        placeholder="Confirm Password"
                        autoComplete="off"
                      />
                      {errors.confirmPassword ? (
                        <div className="formErrors">
                          {errors.confirmPassword}
                        </div>
                      ) : null}
                      <div className="input-group-btn">
                        <ButtonStyle
                          type="button"
                          onClick={confirmTogglePasswords}
                        >
                          {confirmPasswordType === "password" ? (
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
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Address"
                      autoComplete="off"
                    />
                    {errors.address1 ? (
                      <div className="formErrors">{errors.address1}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label>
                      State <i className="text-danger">*</i>
                    </label>
                    <SelectStyle
                      className="form-select"
                      value={state1}
                      onChange={(e) => changeState(e)}
                    >
                      <option value="Select State">{"Select State"} </option>
                      {statescity.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })}
                    </SelectStyle>
                    {errors.state1 ? (
                      <div className="formErrors">{errors.state1}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label>
                      City <i className="text-danger">*</i>
                    </label>
                    <SelectStyle
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
                    </SelectStyle>
                    {errors.city ? (
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
                    {errors.pinCode ? (
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
                    {errors.role ? (
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
                        style={{borderRadius: "17px"}}
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
                        window.location.href = "/Signin";
                      }}
                      className="backbutton"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="signup-button"
                      onClick={submitForm}
                    >
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

export default signUp;
