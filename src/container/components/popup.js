// /* eslint-disable react/prop-types */
// import React, {useEffect, useState} from "react";
// import "./customer.css";
// import {useDispatch, useSelector} from "react-redux";
// import {Formik, Field, Form} from "formik";
// import {viewAcceptCollectorRequest} from "../../redux/actions/vendor/viewCollProfileAction";
// import {isEmpty} from "lodash";
// import {venRequestCollectorAcceptRequest} from "../../redux/actions/vendor/viewAcceptCollectorProfileAction";
// import {cusRequestCollectorRequest} from "../../redux/actions/customer/viewCollectorProfileAction";
// function popup(props) {
//   const [data, setData] = useState();
//   const [add, setadd] = useState();
//   const [mobile, setmobile] = useState();
//   const dispatch = useDispatch();
//   let res = useSelector((state) => state.viewAcceptColReducer);
//   let res2 = useSelector((state) => state.viewColProfileReducer);
//   let res3 = useSelector((state) => state.viewCollectorProfileReducer);
//   useEffect(() => {
//     if (isEmpty(res) !== true) {
//       const name = res.firstName + " " + res.lastName;
//       const address1 = res.address1 + " " + res.city + " " + res.state;
//       setmobile(res.mobileNo);
//       setData(name);
//       setadd(address1);
//     }
//   }, [res]);
//   useEffect(() => {
//     if (isEmpty(res2) !== true) {
//       const name = res2.firstName + " " + res2.lastName;
//       const address1 = res2.address1 + " " + res2.city + " " + res2.state;
//       setmobile(res2.mobileNo);
//       setData(name);
//       setadd(address1);
//     }
//   }, [res2]);
//   useEffect(() => {
//     if (isEmpty(res3) !== true) {
//       const name = res3.firstName + " " + res3.lastName;
//       const address1 = res3.address1 + " " + res3.city + " " + res3.state;
//       setmobile(res3.mobileNo);
//       setData(name);
//       setadd(address1);
//     }
//   }, [res3]);
//   useEffect(() => {
//     dispatch(venRequestCollectorAcceptRequest(props.c));
//     dispatch(viewAcceptCollectorRequest(props.cont));
//     dispatch(cusRequestCollectorRequest(props.contents));
//     // (async function () {
//     //   if (props.content) {
//     //     url = `http://localhost:8083/collector/request/pending/customerProfile?id=${props.content}`;
//     //   }
//   }, []);

//   return (
//     <>
//       <div className="popup-box">
//         <Formik>
//           <Form>
//             <div className="box">
//               <button className="btn-close" onClick={props.handleClose}>
//                 x
//               </button>

//               <div className="customersprofile">
//                 <h1
//                   style={{
//                     textAlign: "center",
//                     padding: "7px",
//                     fontSize: "2.5rem",
//                     fontFamily: "sans-serif",
//                     color: "white",
//                   }}
//                 >
//                   Profile
//                 </h1>
//               </div>
//               <div className="popupbody">
//                 <label>Name</label>
//                 <Field
//                   name="lastName"
//                   className="form-control"
//                   type="text"
//                   style={{
//                     fontWeight: "bold",
//                     textDecorationColor: "black",
//                     borderRadius: "17px",
//                     padding: "10px",
//                     margin: "10px",
//                     fontSize: "14px",
//                   }}
//                   value={data}
//                   disabled
//                 />

//                 <label>Address</label>
//                 <Field
//                   name="address"
//                   className="form-control"
//                   type="text"
//                   style={{
//                     fontWeight: "bold",
//                     textDecorationColor: "black",
//                     borderRadius: "17px",
//                     padding: "10px",
//                     margin: "10px",
//                     fontSize: "14px",
//                   }}
//                   value={add}
//                   disabled
//                 />

//                 <label>Contact Number</label>
//                 <Field
//                   name="mobileNo"
//                   className="form-control"
//                   type="text"
//                   style={{
//                     fontWeight: "bold",
//                     textDecorationColor: "black",
//                     borderRadius: "17px",
//                     fontSize: "14px",
//                     margin: "10px",
//                   }}
//                   value={mobile}
//                   disabled
//                 />
//               </div>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </>
//   );
// }
// export default popup;

/* eslint-disable react/prop-types */

import React, {useEffect, useState} from "react";
import "../customer/customer.css";
import api from "../../core/utilities/httpProvider";
import {Formik, Field, Form} from "formik";
function Popup(props) {
  const [data, setData] = useState();
  const [add, setadd] = useState();
  const [mobile, setmobile] = useState();
  let url;
  useEffect(() => {
    (async function () {
      if (props.content) {
        url = `http://localhost:8083/collector/request/pending/customerProfile?id=${props.content}`;
      } else if (props.contents) {
        url = `http://localhost:8083/customer/request/all/collectorProfile?id=${props.contents}`;
      } else if (props.c) {
        url = `http://localhost:8083/vendor/view/items/accept/collectorProfile?id=${props.c}`;
      } else if (props.cont) {
        url = `http://localhost:8083/vendor/view/items/collectorProfile?id=${props.cont}`;
      }

      const res = await api.get(url);

      if (res.status === "success") {
        const name = res.data.firstName + " " + res.data.lastName;
        const address1 =
          res.data.address1 + " " + res.data.city + " " + res.data.state;
        setmobile(res.data.mobileNo);
        setData(name);
        setadd(address1);
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
                    fontSize: "14px",
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
                    fontSize: "14px",
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
                    fontSize: "14px",
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
