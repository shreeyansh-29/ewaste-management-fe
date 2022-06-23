import {Field, Form, Formik} from "formik";
import React from "react";
import "./password.css";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import {forgotPasswordRequest} from "../../redux/action/forgotPasswordAction/forgotPasswordAction";
import {EMAIL_INVALID, EMAIL_REQUIRED, MSG} from "../constant/constant";
import {useNavigate} from "react-router-dom";
let validationSchema = Yup.object().shape({
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED),
});

const forgot = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.forgotPassword);
  // console.log("data", data);

  return (
    <div className="ForPassword">
      <div className="Form-body">
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
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

export default forgot;

// import React, {useState} from "react";
// import {Formik, Field, Form} from "formik";
// import "bootstrap/dist/css/bootstrap.min.css";
// import * as Yup from "yup";
// import {
//   EMAIL_INVALID,
//   EMAIL_REQUIRED,
//   // FORGOT_PASSWORD,
//   // MSG,
// } from "../constant/constant";
// // import api from "../../core/utilities/httpProvider";
// import {useDispatch} from "react-redux";
// import {forgotPasswordRequest} from "../../Redux/Action/forgotPasswordAction";

// let validationSchema = Yup.object().shape({
//   email: Yup.string().email().required("Email is Required"),
// });

// const ForgotPassword = (props) => {
//   const [email, setEmail] = useState("");
//   // const [msg, setMsg] = useState("");
//   const [emailerr, setemailErr] = useState("");
//   const dispatch = useDispatch();

//   const validateForm = () => {
//     let formIsValid = true;
//     if (!email) {
//       setemailErr(EMAIL_REQUIRED);
//       formIsValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setemailErr(EMAIL_INVALID);
//       formIsValid = false;
//     }

//     return formIsValid;
//   };

//   const handleClick = async (event) => {
//     event.preventDefault();

//     if (validateForm()) {
//       const data = {
//         email: email,
//       };
//       // const res = await api.post(FORGOT_PASSWORD, data);
//       dispatch(forgotPasswordRequest(data));
//       // if (res.status === 200) {
//       //   setMsg(MSG);
//       // }
//     }
//   };
//   const handleback = () => {
//     try {
//       window.location.href = "/Signin";
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className="ForPassword">
//       <div className="Form-body">
//         <Formik
//           initialValues={{email: ""}}
//           validationSchema={validationSchema}
//           onSubmit={props.onSubmitForm}
//         >
//           {({
//             values,
//             errors,
//             touched,
//             isSubmitting,
//             handleChange,
//             handleSubmit,
//           }) => (
//             <Form>
//               <div className="psswd-heading">
//                 <h2
//                   style={{
//                     textAlign: "center",
//                     padding: "20px",
//                     fontSize: "1.7rem",
//                     fontFamily: "sans-serif",
//                     color: "white",
//                   }}
//                 >
//                   Forgot Password
//                 </h2>
//               </div>

//               <div
//                 className="form-group"
//                 style={{
//                   marginTop: "30px",
//                   marginLeft: "20px",
//                   marginRight: "20px",
//                 }}
//               >
//                 <Field
//                   name="email"
//                   className="form-control"
//                   type="email"
//                   values={values.email}
//                   placeholder="Email"
//                   style={{borderRadius: "17px"}}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="off"
//                 />
//               </div>
//               {errors.email && touched.email && (
//                 <div className="formerrors">{errors.email}</div>
//               )}
//               {/* <div className="formerrors">{emailerr}</div> */}
//               {/* <div style={{color: "green", marginRight: "7%", marginLeft: "9%"}}>
//               {msg === "" ? "" : msg}
//             </div> */}
//               <div className="row">
//                 <div className="container">
//                   <button onClick={handleback} className="back-button">
//                     BACK
//                   </button>
//                   <button onClick={handleClick} className="psswd-button">
//                     NEXT
//                   </button>
//                 </div>
//               </div>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
