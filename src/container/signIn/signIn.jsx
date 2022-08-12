/* 
  @module SignIn
*/
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleSignin from "./googleSignin";
import jwt from "jwt-decode";
import {TOAST_ERROR1, TOAST_ERROR2} from "../constant/constants";
import Toast from "../../components/toast";
import "./signin.css";
import {useDispatch, connect} from "react-redux";
import {signInRequest} from "../../redux/action/signInAction/signInActions";
import {SignInValidations} from "../constant/validations";
import {Heading, ButtonStyle, Headings} from "../../components/styles";
import {togglePassword} from "../../components/togglePassword/togglePassword";
import {routeRole} from "../../components/routeRole/routeRole";
import {encryptData} from "../../core/utilities/utils";

const SignIn = ({res}) => {
  const dispatch = useDispatch();
  const [passwordType, setPasswordType] = useState("password");
  const togglePasswords = () => {
    setPasswordType(togglePassword(passwordType));
  };

  useEffect(() => {
    if (res !== undefined) {
      if (res.status == "Fail") {
        Toast.error(TOAST_ERROR1);
      }
      if (res.status == "fail") {
        Toast.error(TOAST_ERROR2);
      } else if (res.status == "success") {
        const token1 = encryptData(res?.data?.token);
        localStorage.setItem("token", token1);
        const tokens = res?.data?.token;
        let token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        const email = encryptData(token.sub);
        localStorage.setItem("email", email);
        const role = localStorage.getItem("Roles");
        window.location.href = routeRole[role];
      }
    }
  }, [res]);

  /* 
    @function handleClick
    @params {values} contains the email and password of user
    @detail dispatch the signInRequest function from signInAction
    @return {void}
  */
  const handleClick = (values) => {
    dispatch(signInRequest(values));
  };

  return (
    <>
      <div className="signIn">
        <div className="Form-BOdy">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInValidations}
            onSubmit={(values) => {
              handleClick(values);
            }}
          >
            {({errors, touched, handleChange}) => (
              <Form>
                <div className="heading">
                  <Heading>Sign In</Heading>
                </div>

                <div className="form-group signInForm">
                  <Field
                    name="email"
                    className="form-control signInField"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="formError">{errors.email}</div>
                ) : null}
                <div className="form-group signInForm">
                  <div className="inputWithButtons">
                    <Field
                      name="password"
                      className="form-control signInField"
                      type={passwordType}
                      placeholder="Password"
                      onChange={handleChange}
                      autoComplete="off"
                    />
                    <div className="input-group-btn">
                      <ButtonStyle onClick={togglePasswords} type="button">
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
                  <div className="formError">{errors.password}</div>
                ) : null}
                <div className="forgotLink">
                  <Link
                    to="/ForgotPassword"
                    id="forgot"
                    className="forgotPasswordLink"
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="text-center signInBtnDiv">
                  <button type="submit" className="signin-button">
                    <div>Sign In</div>
                  </button>
                </div>
                <div>
                  <GoogleSignin />
                </div>
                <Headings>
                  New User?
                  <Link to="/SignUp" className="signIn-link">
                    <strong>SIGN UP</strong>
                  </Link>
                </Headings>
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
    res: state.signIn?.data,
  };
};

export default connect(mapStateToProps)(SignIn);
