/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import "../../container/customerContainer/customer.css";
import {useDispatch, useSelector} from "react-redux";
import {Formik, Field, Form} from "formik";
import {vendorViewAcceptCollectorRequest} from "../../redux/action/vendor/viewCollProfileAction";
import {isEmpty} from "lodash";
import {vendorCollectorProfileRequest} from "../../redux/action/vendor/viewAcceptCollectorProfileAction";
import {viewCollectorProfileRequest} from "../../redux/action/customer/viewCollectorProfileAction";
import {viewCustomerProfileRequest} from "../../redux/action/collector/viewCustomerProfileAction";
import "./popUp.css";

const Popup = (props) => {
  const [value, setValue] = useState({
    name: "",
    address1: "",
    mobileNo: "",
  });

  const dispatch = useDispatch();
  let res = useSelector((state) => state.viewAcceptColReducer?.data);
  let res2 = useSelector((state) => state.viewColProfileReducer?.data);
  let res3 = useSelector((state) => state.viewCollectorProfileReducer?.data);
  let res4 = useSelector((state) => state.viewCustomerProfileReducer?.data);

  useEffect(() => {
    if (isEmpty(res?.data) !== true || res?.status === "success") {
      /*istanbul ignore next*/
      setValue((prev) => {
        return {
          ...prev,
          name: res?.data.firstName + " " + res?.data.lastName,
          address1:
            res?.data.address1 + ", " + res?.data.city + ", " + res?.data.state,
          mobileNo: res?.data.mobileNo,
        };
      });
    }
  }, [res]);
  useEffect(() => {
    if (isEmpty(res2?.data) !== true || res2?.status === "success") {
      /*istanbul ignore next*/
      setValue((prev) => {
        return {
          ...prev,
          name: res2?.data.firstName + " " + res2?.data.lastName,
          address1:
            res2?.data.address1 +
            ", " +
            res2?.data.city +
            ", " +
            res2?.data.state,
          mobileNo: res2?.data.mobileNo,
        };
      });
    }
  }, [res2]);
  useEffect(() => {
    if (isEmpty(res3?.data) !== true || res3?.status === "success") {
      /*istanbul ignore next*/
      setValue((prev) => {
        return {
          ...prev,
          name: res3?.data.firstName + " " + res3?.data.lastName,
          address1:
            res3?.data.address1 +
            ", " +
            res3?.data.city +
            ", " +
            res3?.data.state,
          mobileNo: res3?.data.mobileNo,
        };
      });
    }
  }, [res3]);
  useEffect(() => {
    if (isEmpty(res4?.data) !== true || res4?.status === "success") {
      /*istanbul ignore next*/
      setValue((prev) => {
        return {
          ...prev,
          name: res4?.data.firstName + " " + res4?.data.lastName,
          address1:
            res4?.data.address1 +
            ", " +
            res4?.data.city +
            ", " +
            res4?.data.state,
          mobileNo: res4?.data.mobileNo,
        };
      });
    }
  }, [res4]);

  useEffect(() => {
    dispatch(vendorViewAcceptCollectorRequest(props.c));
    dispatch(vendorCollectorProfileRequest(props.cont));
    dispatch(viewCollectorProfileRequest(props.contents));
    dispatch(viewCustomerProfileRequest(props.content));
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
                <h1 className="profile-tab">Profile</h1>
              </div>
              <div className="popupbody">
                <label>Name</label>
                <Field
                  name="lastName"
                  className="form-control profile-field1"
                  type="text"
                  value={value.name}
                  disabled
                />

                <label>Address</label>
                <Field
                  name="address"
                  className="form-control profile-field1"
                  type="text"
                  value={value.address1}
                  disabled
                />

                <label>Contact Number</label>
                <Field
                  name="mobileNo"
                  className="form-control profile-field2"
                  type="text"
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
};
export default Popup;
