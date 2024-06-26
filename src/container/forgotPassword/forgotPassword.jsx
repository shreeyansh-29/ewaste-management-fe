/*
  @module Forgot Password
*/
import {Field, Form, Formik} from "formik";
import React from "react";
import "./password.css";
import {useDispatch, connect} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {forgotPasswordRequest} from "../../redux/action/forgotPasswordAction/forgotPasswordAction";
import {
  FORBIDDEN,
  MSG,
  MSG1_404,
  MSG2_403,
  RESOURCE_NOT_FOUND,
  SUCCESSFULL_REQUEST,
} from "../constant/constants";
import {useNavigate} from "react-router-dom";
import {ForgotPasswordValidations} from "../constant/validations";
import {Heading, MsgStyle} from "../../components/styles";

const ForgotPassword = ({res}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <>
      <div className="ForPassword">
        <div className="Form-body">
          <Formik
            enableReinitialize
            initialValues={{
              email: "",
            }}
            validationSchema={ForgotPasswordValidations}
            onSubmit={(email) => {
              dispatch(forgotPasswordRequest(email));
            }}
          >
            {({errors, touched, handleChange}) => (
              <Form>
                <div className="psswd-heading">
                  <Heading>Forgot Password</Heading>
                </div>
                <div className="form-group signIn-body">
                  <Field
                    type="email"
                    name="email"
                    className="form-control forgotPasswordField"
                    placeholder="Email"
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="formerrors">{errors.email}</div>
                ) : null}

                {res?.data === SUCCESSFULL_REQUEST ||
                  (res?.type === "FORGOT_PASSWORD_SUCCESS" && (
                    <MsgStyle id="message">{MSG}</MsgStyle>
                  ))}
                {res?.data === FORBIDDEN && (
                  <div className="forbidden">{MSG2_403}</div>
                )}
                {res?.data === RESOURCE_NOT_FOUND && (
                  <div className="forbidden">{MSG1_404}</div>
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.forgotPassword?.data,
  };
};

export default connect(mapStateToProps)(ForgotPassword);
