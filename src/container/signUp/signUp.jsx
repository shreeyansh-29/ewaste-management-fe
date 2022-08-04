/* eslint-disable indent */
/* 
  @module SignUp 
*/

import {Formik} from "formik";
import React, {useState, useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import Toast from "../../components/toast";
import {SignUpValidations} from "../constant/validations";
import {SERVER_MSG, TOAST_ERROR3, TOAST_SUCCESS1} from "../constant/constants";
import "./signUp.css";
import {statesCity, data} from "./states";
import {isEmpty} from "lodash";
import {signUpRequest} from "../../redux/action/signUpAction/signUpAction";
import SignUpForm from "./signUpForm";

const signUp = ({res}) => {
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
        {({errors, touched, handleChange}) => (
          <SignUpForm
            errors={errors}
            touched={touched}
            handleChange={handleChange}
            data={data}
            state={state1}
            city={city}
            changeCity={changeCity}
            changeState={changeState}
            returnFunctionEnd={returnFunctionEndTime}
            returnFunctionStart={returnFunctionStartTime}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
            msg={msg}
            initialcities={initialCities}
            role={role}
            startTime={startTime}
            endTime={endTime}
            categoryAccepted={categoryAccepted}
          />
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
