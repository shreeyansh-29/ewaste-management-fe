/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import "../container/customer/customer.css";
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import {viewAcceptCollectorRequest} from "../redux/action/vendor/viewCollProfileAction";
import {isEmpty} from "lodash";
import {venRequestCollectorAcceptRequest} from "../redux/action/vendor/viewAcceptCollectorProfileAction";
import {cusRequestCollectorRequest} from "../redux/action/customer/viewCollectorProfileAction";
import {colRequestCustomerRequest} from "../redux/action/collector/viewCustomerProfileAction";
function popup(props) {
  const [value, setValue] = useState({
    name: "",
    address1: "",
    mobileNo: "",
  });
  const [data, setData] = useState();
  const [add, setadd] = useState();
  const [mobile, setmobile] = useState();
  const dispatch = useDispatch();
  let res = useSelector((state) => state.viewAcceptColReducer);
  let res2 = useSelector((state) => state.viewColProfileReducer);
  let res3 = useSelector((state) => state.viewCollectorProfileReducer?.data);
  let res4 = useSelector((state) => state.viewCustomerProfileReducer);
  console.log(res);

  useEffect(() => {
    if (isEmpty(res) !== true) {
      setValue((prev) => {
        return {
          ...prev,
          name: res.firstName + " " + res.lastName,
          address1: res.address1 + ", " + res.city + ", " + res.state,
          mobileNo: res.mobileNo,
        };
      });
    }
  }, [res]);
  useEffect(() => {
    if (isEmpty(res2) !== true) {
      setValue((prev) => {
        return {
          ...prev,
          name: res2.firstName + " " + res2.lastName,
          address1: res2.address1 + ", " + res2.city + ", " + res2.state,
          mobileNo: res2.mobileNo,
        };
      });
    }
  }, [res2]);
  useEffect(() => {
    if (isEmpty(res3) !== true) {
      setValue((prev) => {
        return {
          ...prev,
          name: res3.firstName + " " + res3.lastName,
          address1: res3.address1 + ", " + res3.city + ", " + res3.state,
          mobileNo: res3.mobileNo,
        };
      });
    }
  }, [res3]);
  useEffect(() => {
    if (isEmpty(res4) !== true) {
      setValue((prev) => {
        return {
          ...prev,
          name: res4.firstName + " " + res4.lastName,
          address1: res4.address1 + ", " + res4.city + ", " + res4.state,
          mobileNo: res4.mobileNo,
        };
      });
    }
  }, [res4]);
  useEffect(() => {
    dispatch(venRequestCollectorAcceptRequest(props.c));
    dispatch(viewAcceptCollectorRequest(props.cont));
    dispatch(cusRequestCollectorRequest(props.contents));
    dispatch(colRequestCustomerRequest(props.content));
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
                  value={value.name}
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
                  value={value.address1}
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
                  value={value.mobileNo}
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
export default popup;
