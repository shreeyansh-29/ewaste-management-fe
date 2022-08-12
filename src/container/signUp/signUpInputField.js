import React from "react";
import {Field} from "formik";
import "./signUp.css";

function signUpInputField({label, name, placeholder, type, ...props}) {
  return (
    <>
      <div className="inputGroup">
        <label>
          {label} <i className="text-danger">*</i>
        </label>
        <Field
          type={type}
          name={name}
          className="signUpField"
          onChange={props.handleChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {props.touched.name && props.errors.name ? (
          <div className="formErrors">{props.errors.name}</div>
        ) : null}
      </div>
    </>
  );
}

export default signUpInputField;
