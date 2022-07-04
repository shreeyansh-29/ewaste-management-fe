import {Field, Form, Formik} from "formik";
import React from "react";
import "./password.css";
import {useSelector, useDispatch} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {forgotPasswordRequest} from "../../redux/action/forgotPasswordAction/forgotPasswordAction";
import {MSG} from "../constant/constant";
import {useNavigate} from "react-router-dom";
import {ForgotPasswordValidations} from "../constant/validations";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forgotPassword);

  return (
    <div className="ForPassword">
      <div className="Form-body">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={ForgotPasswordValidations}
          validator={() => ({})}
          onSubmit={(values) => {
            console.log("value", values);
            dispatch(forgotPasswordRequest(values));
          }}
        >
          {({errors, touched, handleChange}) => (
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
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={handleChange}
                  autoComplete="off"
                  style={{borderRadius: "17px"}}
                />
              </div>
              {touched.email && errors.email ? (
                <div className="formerrors">{errors.email}</div>
              ) : null}
              {data?.status === 200 && (
                <div
                  style={{
                    color: "green",
                    marginRight: "7%",
                    marginLeft: "9%",
                  }}
                >
                  {MSG}
                </div>
              )}
              <div className="row">
                <div className="container">
                  <button
                    type="button"
                    onClick={() => {
                      navigate("/Signin");
                    }}
                    className="back-button"
                  >
                    BACK
                  </button>
                  <button type="submit" className="psswd-button">
                    NEXT
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ForgotPassword;
