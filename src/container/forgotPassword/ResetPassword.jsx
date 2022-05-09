import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import "../components/signin.css";
import { NotificationContainer } from "react-notifications";

import "./password.css";

import ShowIcon from "@mui/icons-material/VisibilityOutlined";

import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {
  CONFIRM_PASSWORD_INVALID,
  CONFIRM_PASSWORD_REQUIRED,
  PASSWORD_INVALID,
  PASSWORD_REQUIRED,
  TOAST_SUCCESS2,
} from "../constant/constant";
import api from "../../core/utilities/httpProvider";
import Toast from "../components/Toast";
function ResetPass() {
  const { token } = useParams();
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPsswd] = useState("");
  const [passwordErr, setErr] = useState();
  const [confirmPasswordErr, setConfirmErr] = useState();
  const [passwordType, setpasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [msg, setMsg] = useState("");
  const validateForm = () => {
    let formIsValid = true;

    if (!password) {
      formIsValid = false;
      setErr(PASSWORD_REQUIRED);
    } else if (!/^[a-zA-Z0-9]{6,20}$/.test(password)) {
      formIsValid = false;
      setErr(PASSWORD_INVALID);
    }
    //Confirm Password
    if (!confirmPassword) {
      formIsValid = false;
      setConfirmErr(CONFIRM_PASSWORD_REQUIRED);
    } else if (password !== confirmPassword) {
      formIsValid = false;
      setConfirmErr(CONFIRM_PASSWORD_INVALID);
    }

    return formIsValid;
  };
  const togglePassword = () => {
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };
  const confirmtogglePassword = () => {
    if (confirmPasswordType === "password") {
      setConfirmPasswordType("text");
      return;
    }
    setConfirmPasswordType("password");
  };
  const handleClick = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const data = {
        oldPassword: password,
        newPassword: confirmPassword,
      };

      const response = await api.post(
        `http://localhost:8083/password/save?token=${token}`,
        data
      );

      if (response.status === 200) {
        Toast.success(TOAST_SUCCESS2);
        setTimeout(() => change(), 2000);
      }
    }
  };
  const change = () => {
    setMsg("");
    window.location.href = "/Signin";
  };

  return (
    <div className="ForPassword">
      <div className="Form-body">
        <NotificationContainer />
        <Formik>
          <Form>
            <div className="psswd-heading">
              <h2
                style={{
                  textAlign: "center",
                  padding: "12px",
                  fontSize: "1.7rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Reset Password
              </h2>
            </div>
            <div className="Req"> {msg === "" ? "" : msg}</div>

            <div
              className="form-group"
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <div className="inputWithButtons">
                <Field
                  name="password"
                  className="form-control"
                  type={passwordType}
                  placeholder="New Password"
                  style={{ borderRadius: "17px" }}
                  onChange={(e) => setpassword(e.target.value)}
                  autoComplete="off"
                />
                <div className="input-group-btn">
                  <button
                    onClick={togglePassword}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                    }}
                    type="button"
                  >
                    {passwordType === "password" ? (
                      <ShowOffIcon />
                    ) : (
                      <ShowIcon />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className="formErrors1">{passwordErr}</div>
            <div
              className="form-group"
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <div className="inputWithButtons">
                <Field
                  name="confirm-password"
                  className="form-control"
                  type={confirmPasswordType}
                  style={{ borderRadius: "17px" }}
                  placeholder="Confirm Password"
                  onChange={(e) => setconfirmPsswd(e.target.value)}
                />
                <div className="input-group-btn">
                  <button
                    onClick={confirmtogglePassword}
                    style={{
                      border: "1px solid white",
                      backgroundColor: "white",
                    }}
                    type="button"
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

            <div className="formErrors1">{confirmPasswordErr}</div>

            <div className="cont" style={{ marginLeft: "25px" }}>
              <button onClick={handleClick} className="reset-button">
                Reset
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default ResetPass;
