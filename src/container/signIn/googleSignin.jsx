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

const GoogleSignin = ({res}) => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(res) !== true) {
      if (res.status == "Fail") {
        toast.error(TOAST_ERROR1);
      } else if (res.status == "success") {
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("email", email);
        const tokens = localStorage.getItem("token");
        const token = jwt(tokens);
        localStorage.setItem("Roles", token.Roles[0]);
        const role = localStorage.getItem("Roles");
        if (role === "CUSTOMER") {
          window.location.href = "/CustomerHome";
        } else if (role === "COLLECTOR") {
          window.location.href = "/CollectorHome";
        } else if (role === "VENDOR") {
          window.location.href = "/VendorHome";
        }
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
    console.log(response);
  };

  return (
    <div style={{marginTop: "4%"}}>
      <GoogleLogin
        clientId="890963815850-bguvaqnq3mc0jt0q3l459oufv2b7uocu.apps.googleusercontent.com"
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
                style={{paddingBottom: "4px"}}
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
        style={{backgroundColor: "blue", width: 50, height: "50px"}}
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
