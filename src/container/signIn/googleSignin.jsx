/*
  @module Google SignIn
*/
import jwt from "jwt-decode";
import toast from "../../components/toast";
import {googleSignInRequest} from "../../redux/action/signInAction/googleSignInAction";
import googleLogo from "../../assets/images/google-logo.png";
import React, {useState, useEffect} from "react";
import GoogleLogin from "react-google-login";
import {useDispatch, connect} from "react-redux";
import {isEmpty} from "lodash";
import {TOAST_ERROR1} from "../constant/constants";
import "./signin.css";
import {routeRole} from "../../components/routeRole/routeRole";
import {encryptData} from "../../core/utilities/utils";
import log from "loglevel";
const {clientId} = require("../../core/config/index") || {};

const GoogleSignin = ({res}) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(res) !== true) {
      if (res.status == "Fail") {
        toast.error(TOAST_ERROR1);
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
    @function onSuccess
    @detail on successful login redirect to dashboard according to role
    @return {void}
  */
  const onSuccess = async (result) => {
    setEmail(result.profileObj.email);
    dispatch(googleSignInRequest(email));
  };

  /* 
    @function onFailure
    @detail handling failure while signIn with google
    @return {void}
  */
  const onFailure = (response) => {
    log(response);
  };

  return (
    <div className="googleDiv">
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <div className="text-center">
            <button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="googlebtn"
            >
              <img
                src={googleLogo}
                alt="Google"
                width="30px"
                className="googleImg"
              />
              Sign in
            </button>
          </div>
        )}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        approvalPrompt="force"
        prompt="consent"
        className="googleLogin"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    res: state.googleSignIn,
  };
};

export default connect(mapStateToProps)(GoogleSignin);
