/* eslint-disable react/prop-types */
import React, {useEffect, useState} from "react";
import "../customer/customer.css";
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import {viewAcceptCollectorRequest} from "../../redux/action/vendor/viewCollProfileAction";
import {isEmpty} from "lodash";
import {venRequestCollectorAcceptRequest} from "../../redux/action/vendor/viewAcceptCollectorProfileAction";
import {cusRequestCollectorRequest} from "../../redux/action/customer/viewCollectorProfileAction";
import {colRequestCustomerRequest} from "../../redux/action/collector/viewCustomerProfileAction";
function popup(props) {
  const [data, setData] = useState();
  const [add, setadd] = useState();
  const [mobile, setmobile] = useState();
  const dispatch = useDispatch();
  let res = useSelector((state) => state.viewAcceptColReducer);
  let res2 = useSelector((state) => state.viewColProfileReducer);
  let res3 = useSelector((state) => state.viewCollectorProfileReducer);
  let res4 = useSelector((state) => state.viewCustomerProfileReducer);
  useEffect(() => {
    if (isEmpty(res) !== true) {
      const name = res.firstName + " " + res.lastName;
      const address1 = res.address1 + " " + res.city + " " + res.state;
      setmobile(res.mobileNo);
      setData(name);
      setadd(address1);
    }
  }, [res]);
  useEffect(() => {
    if (isEmpty(res2) !== true) {
      const name = res2.firstName + " " + res2.lastName;
      const address1 = res2.address1 + " " + res2.city + " " + res2.state;
      setmobile(res2.mobileNo);
      setData(name);
      setadd(address1);
    }
  }, [res2]);
  useEffect(() => {
    if (isEmpty(res3) !== true) {
      const name = res3.firstName + " " + res3.lastName;
      const address1 = res3.address1 + " " + res3.city + " " + res3.state;
      setmobile(res3.mobileNo);
      setData(name);
      setadd(address1);
    }
  }, [res3]);
  useEffect(() => {
    if (isEmpty(res4) !== true) {
      const name = res4.firstName + " " + res4.lastName;
      const address1 = res4.address1 + " " + res4.city + " " + res4.state;
      setmobile(res4.mobileNo);
      setData(name);
      setadd(address1);
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
export default popup;
