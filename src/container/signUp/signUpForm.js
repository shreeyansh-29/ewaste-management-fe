/* eslint-disable indent */
import React, {useState} from "react";
import "./signUp.css";
import {Form} from "formik";
import {togglePassword} from "../../components/togglePassword/togglePassword";
import {Heading} from "../../components/styles";
import {PASSWORD} from "../constant/constants";
import SignUpInputField from "./signUpInputField";
import SignUpPasswordField from "./signUpPasswordField";
import SignUpStateField from "./signUpStateField";
import SignUpCityField from "./signUpCityField";
import SignUpRoleField from "./signUpRoleField";
import DropOffTimeField from "./dropOffTimeField";
import CategoriesField from "./categoriesField";
import {renderRole} from "../../components/renderRole/renderRole";

const signUpForm = (props) => {
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");
  const [passwordType, setPasswordType] = useState("text");
  /* 
      @function togglePassword
      @detail set the password type of field name 'password'
      @return {void}
    */
  const togglePasswords = () => {
    setPasswordType(togglePassword(passwordType));
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
    <div>
      <Form>
        <div className="Form-bodY">
          <div className="signup-heading">
            <Heading>Sign Up</Heading>
          </div>
          <div className="signup-form-cont">
            <div className="row">
              <SignUpInputField
                label="First Name"
                type="text"
                name="firstName"
                {...props}
                placeholder="First Name"
              />
              <SignUpInputField
                label="Last Name"
                type="text"
                name="lastName"
                placeholder="Last Name"
                {...props}
              />
            </div>
            <div className="row">
              <SignUpInputField
                label="E-mail Id"
                type="email"
                name="email"
                placeholder="Mail"
                {...props}
              />
              <SignUpInputField
                label="Mobile Number"
                type="text"
                name="mobileNo"
                placeholder="Mobile Number"
                {...props}
              />
            </div>
            <div className="row">
              <SignUpPasswordField
                label="Password"
                type={passwordType}
                name="password"
                onClick={togglePasswords}
                placeholder="Enter Password"
                PASSWORD={PASSWORD}
                type1="button"
                {...props}
              />
              <SignUpPasswordField
                label="Confirm Password"
                type={confirmPasswordType}
                name="confirmPassword"
                onClick={confirmTogglePasswords}
                placeholder="Confirm Password"
                PASSWORD={PASSWORD}
                type1="button"
                {...props}
              />
            </div>
            <div className="row">
              <SignUpInputField
                label="Address Line"
                name="address1"
                type="text"
                placeholder="Address"
                {...props}
              />
              <SignUpStateField {...props} />
            </div>
            <div className="row">
              <SignUpCityField {...props} />
              <SignUpInputField
                label="Pincode"
                type="text"
                name="pinCode"
                placeholder="Pincode"
                {...props}
              />
            </div>
            <div className="row">
              <SignUpRoleField {...props} />
            </div>
            {renderRole[props.role] === "Vendor" && (
              <div className="row">
                <SignUpInputField
                  label="GST-IN"
                  type="text"
                  name="gstNo"
                  placeholder="GST Number"
                  {...props}
                />
                <SignUpInputField
                  label="Registration Number"
                  type="text"
                  name="registrationNo"
                  placeholder="Registration Number"
                  {...props}
                />
              </div>
            )}
            {renderRole[props.role] === "Collector" && (
              <div className="row">
                <SignUpInputField
                  label="GST-IN"
                  type="text"
                  name="gstNo"
                  placeholder="GST Number"
                  {...props}
                />
                <SignUpInputField
                  label="Registration Number"
                  type="text"
                  name="registrationNo"
                  placeholder="Registration Number"
                  {...props}
                />
                <div className="row">
                  <DropOffTimeField {...props} />
                  <div className="inputGroup"></div>
                </div>
                <>
                  <CategoriesField {...props} />
                </>
              </div>
            )}
            <span className="error">{props.msg !== "" ? props.msg : ""}</span>
            <div className="row">
              <div className="cont">
                <button type="submit" className="signup-button">
                  SIGN UP
                </button>
              </div>
              <div className="cont">
                <button className="backbutton">
                  BACK
                </button>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default signUpForm;
