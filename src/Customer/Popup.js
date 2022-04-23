/* eslint-disable react/prop-types */

import React, { useEffect, useState } from "react";
import "./Customer.css";

import { Formik, Field, Form } from "formik";
function Popup(props) {
  const [data, setData] = useState();
  const [add, setadd] = useState();
  const [mobile, setmobile] = useState();
  let url;
  useEffect(() => {
    (async function () {
      const tokens = localStorage.getItem("token");
      const email = localStorage.getItem("email");
      if (props.content) {
        url = `http://localhost:8083/collector/request/pending/customerProfile?id=${props.content}`;
      } else if (props.contents) {
        url = `http://localhost:8083/customer/request/all/collectorProfile?id=${props.contents}`;
      } else if (props.c) {
        url = `http://localhost:8083/vendor/view/items/accept/collectorProfile?id=${props.c}`;
      } else if (props.cont) {
        url = `http://localhost:8083/vendor/view/items/collectorProfile?id=${props.cont}`;
      }
      try {
        const response = await fetch(url, {
          method: "GET",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + tokens,
            EMAIL: email,
          },
        });
        const res = await response.json();

        if (res.status === "success") {
          const name = res.data.firstName + " " + res.data.lastName;
          const address1 =
            res.data.address1 + " " + res.data.city + " " + res.data.state;
          setmobile(res.data.mobileNo);
          setData(name);
          setadd(address1);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <>
      <div className="popup-box">
        <Formik>
          <Form>
            <div className="box">
              <button className="btn-close" onClick={props.handleClose}>
                x
              </button>

              <div className="customersprofile">
                <h1
                  style={{
                    textAlign: "center",
                    padding: "7px",
                    fontSize: "2.5rem",
                    fontFamily: "sans-serif",
                    color: "white",
                  }}
                >
                  Profile
                </h1>
              </div>
              <div className="popupbody">
                <label>Name</label>
                <Field
                  name="lastName"
                  className="form-control"
                  type="text"
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    padding: "10px",
                    margin: "10px",
                    fontSize:"16px"
                  }}
                  value={data}
                  disabled
                />

                <label>Address</label>
                <Field
                  name="address"
                  className="form-control"
                  type="text"
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    padding: "10px",
                    margin: "10px",
                    fontSize:"16px"
                  }}
                  value={add}
                  disabled
                />

                <label>Contact Number</label>
                <Field
                  name="mobileNo"
                  className="form-control"
                  type="text"
                  style={{
                    fontWeight: "bold",
                    textDecorationColor: "black",
                    borderRadius: "17px",
                    fontSize:"16px",
                    margin: "10px",
                  }}
                  value={mobile}
                  disabled
                />
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default Popup;

// import React, { useState } from "react";
// import { Formik, Field, Form } from "formik";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useParams } from "react-router-dom";
// import "../Components/signin.css";
// import { NotificationContainer } from "react-notifications";

// import "./password.css";
// import { toast } from "react-toastify";

// import ShowIcon from "@mui/icons-material/VisibilityOutlined";

// import ShowOffIcon from "@mui/icons-material/VisibilityOff";
// function ResetPass() {
//   const { token } = useParams();
//   const [password, setpassword] = useState("");
//   const [confirmPassword, setconfirmPsswd] = useState("");
//   const [passwordErr, setErr] = useState();
//   const [confirmPasswordErr, setConfirmErr] = useState();
//   const [passwordType, setpasswordType] = useState("password");
//   const [confirmPasswordType, setConfirmPasswordType] = useState("password");
//   const [msg, setMsg] = useState("");
//   const validateForm = () => {
//     let formIsValid = true;

//     if (!password) {
//       formIsValid = false;
//       setErr("Password is required.");
//     } else if (!/^[a-zA-Z0-9]{6,20}$/.test(password)) {
//       formIsValid = false;
//       setErr("Password should be of atleast six characters/numbers  ");
//     }
//     //Confirm Password
//     if (!confirmPassword) {
//       formIsValid = false;
//       setConfirmErr("Confirm password required");
//     } else if (password !== confirmPassword) {
//       formIsValid = false;
//       setConfirmErr("Passwords should match");
//     }

//     return formIsValid;
//   };
//   const togglePassword = () => {
//     if (passwordType === "password") {
//       setpasswordType("text");
//       return;
//     }
//     setpasswordType("password");
//   };
//   const confirmtogglePassword = () => {
//     if (confirmPasswordType === "password") {
//       setConfirmPasswordType("text");
//       return;
//     }
//     setConfirmPasswordType("password");
//   };
//   const handleClick = async (event) => {
//     event.preventDefault();
//     if (validateForm()) {
//       try {
//         const response = await fetch(
//           `http://localhost:8083/password/save?token=${token}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               oldPassword: password,
//               newPassword: confirmPassword,
//             }),
//           }
//         );
//         if (response.status === 200) {
//           toast.success("Password updated succefully", {
//             position: toast.POSITION.TOP_RIGHT,
//           });
//           setTimeout(() => change(), 2000);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     }
//   };
//   const change = () => {
//     setMsg("");
//     window.location.href = "/Signin";
//   };

//   return (
//     <div className="ForPassword">
//       <div className="Form-body" >
//         <NotificationContainer />
//         <Formik>
//           <Form>
//             <div className="psswd-heading">
//               <h2
//                 style={{
//                   textAlign: "center",
//                   padding: "12px",
//                   fontSize: "1.7rem",
//                   fontFamily: "sans-serif",
//                   color: "white",
//                 }}
//               >
//                 Reset Password
//               </h2>
//             </div>
//             <div className="Req"> {msg === "" ? "" : msg}</div>

//             <div
//               className="form-group"
//               style={{
//                 marginTop: "30px",
//                 marginLeft: "20px",
//                 marginRight: "20px",
//               }}
//             >
//               <div className="inputWithButtons">
//                 <Field
//                   name="password"
//                   className="form-control"
//                   type={passwordType}
//                   placeholder="New Password"
//                   style={{ borderRadius: "17px" }}
//                   onChange={(e) => setpassword(e.target.value)}
//                   autoComplete="off"
//                 />
//                 <div className="input-group-btn">
//                   <button
//                     onClick={togglePassword}
//                     style={{
//                       border: "1px solid white",
//                       backgroundColor: "white",
//                     }}
//                     type="button"
//                   >
//                     {passwordType === "password" ? (
//                       <ShowOffIcon />
//                     ) : (
//                       <ShowIcon />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="formErrors1">{passwordErr}</div>
//             <div
//               className="form-group"
//               style={{
//                 marginTop: "30px",
//                 marginLeft: "20px",
//                 marginRight: "20px",
//               }}
//             >
//               <div className="inputWithButtons">
//                 <Field
//                   name="confirm-password"
//                   className="form-control"
//                   type={confirmPasswordType}
//                   style={{ borderRadius: "17px" }}
//                   placeholder="Confirm Password"
//                   onChange={(e) => setconfirmPsswd(e.target.value)}
//                 />
//                 <div className="input-group-btn">
//                   <button
//                     onClick={confirmtogglePassword}
//                     style={{
//                       border: "1px solid white",
//                       backgroundColor: "white",
//                     }}
//                     type="button"
//                   >
//                     {confirmPasswordType === "password" ? (
//                       <ShowOffIcon />
//                     ) : (
//                       <ShowIcon />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             <div className="formErrors1">{confirmPasswordErr}</div>

//             <div className="cont" style={{ marginLeft: "25px" }}>
//               <button onClick={handleClick} className="reset-button">
//                 Reset
//               </button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// }

// export default ResetPass;
