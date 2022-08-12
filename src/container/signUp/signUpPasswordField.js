import React from "react";
import {Field} from "formik";
import "./signUp.css";
import {ButtonStyle} from "../../components/styles";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";

function signUpPasswordField({
  type,
  label,
  name,
  placeholder,
  onClick,
  PASSWORD,
  type1,
  ...props
}) {
  return (
    <>
      <div className="inputGroup">
        <label>
          {label} <i className="text-danger">*</i>
        </label>
        <div className="inputWithButton">
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
          <div className="input-group-btn">
            <ButtonStyle id="btn1" type={type1} onClick={onClick}>
              {type === PASSWORD ? <ShowOffIcon /> : <ShowIcon />}
            </ButtonStyle>
          </div>
        </div>
        <i className="fa-solid fa-eye-slash"></i>
      </div>
    </>
  );
}

export default signUpPasswordField;
