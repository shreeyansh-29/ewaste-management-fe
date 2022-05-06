import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import { EMAIL_INVALID, EMAIL_REQUIRED, MSG } from "../constant/constant";
import api from "../api";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [emailerr, setemailErr] = useState("");

  const validateForm = () => {
    let formIsValid = true;
    if (!email) {
      setemailErr(EMAIL_REQUIRED);
      formIsValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setemailErr(EMAIL_INVALID);
      formIsValid = false;
    }

    return formIsValid;
  };

  const handleClick = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      const data = {
        email: email,
      };
      const res = await api.post("http://localhost:8083/password/reset", data);

      if (res.status === 200) {
        setMsg(MSG);
      }
    }
  };
  const handleback = () => {
    try {
      window.location.href = "/Signin";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="ForPassword">
      <div className="Form-body">
        <Formik>
          <Form>
            <div className="psswd-heading">
              <h2
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontSize: "1.7rem",
                  fontFamily: "sans-serif",
                  color: "white",
                }}
              >
                Forgot Password
              </h2>
            </div>

            <div
              className="form-group"
              style={{
                marginTop: "30px",
                marginLeft: "20px",
                marginRight: "20px",
              }}
            >
              <Field
                name="email"
                className="form-control"
                type="email"
                placeholder="Email"
                style={{ borderRadius: "17px" }}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="formerrors">{emailerr}</div>
            <div
              style={{ color: "green", marginRight: "7%", marginLeft: "7%" }}
            >
              {msg === "" ? "" : msg}
            </div>
            <div className="row">
              <div className="container">
                <button onClick={handleback} className="back-button">
                  BACK
                </button>
                <button onClick={handleClick} className="psswd-button">
                  NEXT
                </button>
              </div>
            </div>
            {/* </div> */}
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
