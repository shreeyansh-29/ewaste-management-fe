import React, {useState} from "react";
import InputField from "../Components/InputField";

import {useParams} from "react-router-dom";
import "../Components/signin.css";
import {NotificationContainer} from "react-notifications";

import "./password.css";
import {toast} from "react-toastify";

import ShowIcon from "@mui/icons-material/VisibilityOutlined";

import ShowOffIcon from "@mui/icons-material/VisibilityOff";
function ResetPass() {
  const {token} = useParams();
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
      setErr("Password is required.");
    } else if (!/^[a-zA-Z0-9]{6,20}$/.test(password)) {
      formIsValid = false;
      setErr("Password should be of atleast six characters/numbers  ");
    }
    //Confirm Password
    if (!confirmPassword) {
      formIsValid = false;
      setConfirmErr("Confirm password required");
    } else if (password !== confirmPassword) {
      formIsValid = false;
      setConfirmErr("Passwords should match");
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
      try {
        const response = await fetch(
          `http://localhost:8083/password/save?token=${token}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              oldPassword: password,
              newPassword: confirmPassword,
            }),
          }
        );
        if (response.status === 200) {
          toast.success("Password updated successfully", {
            position: toast.POSITION.TOP_RIGHT,
          });
          setTimeout(() => change(), 2000);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const change = () => {
    setMsg("");
    window.location.href = "/Signin";
  };

  return (
    <div className="ForPassword">
      <div className="Form-body" style={{marginLeft: "30px"}}>
        <NotificationContainer />
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

        <div className="form-cont">
          <div className="inputGroup1">
            <div className="inputWithButton">
              <InputField
                value={password}
                type={passwordType}
                placeholder="Password"
                onChange={(e) => setpassword(e)}
              />
              <div className="input-group-btn">
                <button
                  onClick={togglePassword}
                  style={{
                    border: "1px solid white",
                    backgroundColor: "white",
                  }}
                >
                  {passwordType === "password" ? <ShowOffIcon /> : <ShowIcon />}
                </button>
              </div>
            </div>
          </div>
          <div className="formErrors1">{passwordErr}</div>

          <div className="inputGroup1">
            <div className="inputWithButton">
              <InputField
                value={confirmPassword}
                type={confirmPasswordType}
                placeholder="Confirm Password"
                onChange={(e) => setconfirmPsswd(e)}
              />
              <div className="input-group-btn">
                <button
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
          <div className="formErrors1">{confirmPasswordErr}</div>

          <div className="cont" style={{marginLeft: "25px"}}>
            <button onClick={handleClick} className="reset-button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPass;
