/*
  @module Reset Password
*/
import React, {useState, useEffect} from "react";
import {Formik, Field, Form} from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import {useParams} from "react-router-dom";
import "../signIn/signIn";
import "./password.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import {TOAST_SUCCESS2, MSG_1, SUCCESSFULL_REQUEST} from "../constant/constant";
import Toast from "../../components/toast";
import {useDispatch, connect} from "react-redux";
import {resetPasswordRequest} from "../../redux/action/resetPasswordAction/resetPasswordAction";
import {ResetPasswordValidations} from "../constant/validations";
import {togglePassword} from "../../components/togglePassword/togglePassword";
import {ButtonStyle} from "../../components/styles";

const ResetPassword = ({res}) => {
  const dispatch = useDispatch();
  const {token} = useParams();
  const [passwordType, setPasswordType] = useState("text");
  const [confirmPasswordType, setConfirmPasswordType] = useState("text");
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

  useEffect(() => {
    if (res !== undefined) {
      if (res?.data === SUCCESSFULL_REQUEST) {
        Toast.success(TOAST_SUCCESS2);
        setTimeout(() => {
          window.location.href = "/Signin";
        }, 3000);
      } else {
        Toast.error(MSG_1);
      }
    }
  }, [res]);
  /* 
    @function handleClick
    @params {values} contains the field values required to reset the password
    @detail dispatch resetPasswordRequest function from resetPasswordAction
    @return {void}
  */
  const handleClick = async (values) => {
    const data = {values, token};
    dispatch(resetPasswordRequest(data));
  };

  return (
    <div className="ForPassword">
      <div className="Form-body">
        <Formik
          initialValues={{
            password: "",
            confirmPassword: "",
          }}
          validationSchema={ResetPasswordValidations}
          onSubmit={(values) => {
            handleClick(values);
          }}
        >
          {({errors, touched, handleChange}) => (
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
                    id="input1"
                    className="form-control"
                    type={passwordType}
                    placeholder="New Password"
                    style={{borderRadius: "17px"}}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <div className="input-group-btn">
                    <ButtonStyle
                      id="btn1"
                      onClick={togglePasswords}
                      type="button"
                    >
                      {passwordType === "password" ? (
                        <ShowOffIcon />
                      ) : (
                        <ShowIcon />
                      )}
                    </ButtonStyle>
                  </div>
                </div>
              </div>
              {touched.password && errors.password ? (
                <div className="formErrors1">{errors.password}</div>
              ) : null}
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
                    name="confirmPassword"
                    id="input2"
                    className="form-control"
                    type={confirmPasswordType}
                    style={{borderRadius: "17px"}}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                  />
                  <div className="input-group-btn">
                    <ButtonStyle
                      id="btn2"
                      onClick={confirmTogglePasswords}
                      type="button"
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
              {touched.confirmPassword && errors.confirmPassword ? (
                <div className="formErrors1">{errors.confirmPassword}</div>
              ) : null}

              <div className="cont" style={{marginLeft: "25px"}}>
                <button type="submit" className="reset-button">
                  Reset
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.resetPassword,
  };
};

export default connect(mapStateToProps)(ResetPassword);
