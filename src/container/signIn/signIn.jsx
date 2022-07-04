import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Formik, Field, Form} from "formik";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowIcon from "@mui/icons-material/VisibilityOutlined";
import ShowOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleSignin from "./googleSignin";
import jwt from "jwt-decode";
import {TOAST_ERROR1, TOAST_ERROR2} from "../constant/constant";
import Toast from "../../components/toast";
import "./signin.css";
import {useDispatch, useSelector} from "react-redux";
import {signInRequest} from "../../redux/action/signInAction/signInActions";
import {SignInValidations} from "../constant/validations";

const SignIn = () => {
  const dispatch = useDispatch();
  const [passwordType, setpasswordType] = useState("password");
  const res = useSelector((state) => state.signIn?.data);
  const togglePassword = () => {
    if (passwordType === "password") {
      setpasswordType("text");
      return;
    }
    setpasswordType("password");
  };

  useEffect(() => {
    if (res !== undefined) {
      if (res.status == "Fail") {
        Toast.error(TOAST_ERROR1);
      }
      if (res.status == "fail") {
        Toast.error(TOAST_ERROR2);
      } else if (res.status == "success") {
        localStorage.setItem("token", res.data.token);
        const tokens = localStorage.getItem("token");
        var token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        localStorage.setItem("email", token.sub);
        const role = localStorage.getItem("Roles");
        if (role === "CUSTOMER") {
          window.location.href = "/CustomerHome";
        } else if (role === "COLLECTOR") {
          window.location.href = "/CollectorHome";
        } else if (role === "VENDOR") {
          window.location.href = "/VendorHome";
        } else {
          window.location.href = "/";
        }
      }
    }
  }, [res]);

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
            validator={() => ({})}
            validationSchema={SignInValidations}
            onSubmit={(values) => {
              handleClick(values);
            }}
          >
            {({errors, touched, handleChange}) => (
              <Form>
                <div className="heading">
                  <h2
                    style={{
                      textAlign: "center",
                      padding: "20px",
                      fontSize: "1.7rem",
                      fontFamily: "sans-serif",
                      color: "white",
                    }}
                  >
                    Sign In
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
                    style={{borderRadius: "17px"}}
                    onChange={handleChange}
                  />
                </div>
                {touched.email && errors.email ? (
                  <div className="formError">{errors.email}</div>
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
                      name="password"
                      className="form-control"
                      type={passwordType}
                      placeholder="Password"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
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
                {touched.password && errors.password ? (
                  <div className="formError">{errors.password}</div>
                ) : null}
                <div style={{float: "right"}}>
                  <Link
                    to="/ForgotPassword"
                    style={{
                      color: "gray",
                      fontFamily: "Poppins",
                      marginRight: "20px",
                    }}
                  >
                    Forgot Password
                  </Link>
                </div>
                <div className="text-center" style={{marginTop: "50px"}}>
                  <button type="submit" className="signin-button">
                    <div style={{textAlign: "center"}}>Sign In</div>
                  </button>
                </div>
                <div>
                  <GoogleSignin />
                </div>

                <div
                  style={{
                    textAlign: "center",
                    padding: "8px",
                    fontFamily: "Poppins",
                    marginTop: "45px",
                  }}
                >
                  {" "}
                  New User?{" "}
                  <Link
                    to="/SignUp"
                    style={{
                      color: "grey",
                      fontFamily: "Poppins",
                      fontSize: "16.5px",
                    }}
                  >
                    <strong>SIGN UP</strong>
                  </Link>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default SignIn;
