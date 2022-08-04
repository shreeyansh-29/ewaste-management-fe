/* 
  @module customerProfile
*/
/* eslint-disable indent */
import {Formik} from "formik";
import React, {useEffect, useState} from "react";
import Toast from "../../../components/toast";
import "../customer.css";
import CustomerProfileForm from "./customerProfileForm";
import {TOAST_SUCCESS5} from "../../constant/constants";
import {useDispatch, useSelector} from "react-redux";
import {customerProfileEditRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileEditAction";
import {customerProfileRequest} from "../../../redux/action/customer/customerProfileAction/customerProfileAction";
import {CustomerValidations} from "../../constant/validations";

const CustomerProfile = () => {
  const dispatch = useDispatch();
  const [state1, setState1] = useState();
  const [city, setCity] = useState();

  let res = useSelector((state) => state.customerProfile?.data);

  useEffect(() => {
    dispatch(customerProfileRequest());
  }, []);
  useEffect(() => {
    setState1(res?.state);
    setCity(res?.city);
  }, [res]);

  /* 
    @function handleSubmit
    @params {values} contains all the details of the user
    @detail dispatch the editCusProfileRequest from CustomerProfileAction
    @return {void}
  */
  const handleSubmit = (values) => {
    const data = {values, password: res?.password, state: state1, city: city};
    dispatch(customerProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };

  return (
    <div className="profile customerProfile">
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res?.firstName,
          lastName: res?.lastName,
          mobileNo: res?.mobileNo,
          address1: res?.address1,
          pinCode: res?.pinCode,
          email: res?.email,
        }}
        validationSchema={CustomerValidations}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) =>
          city !== undefined ? (
            <CustomerProfileForm
              errors={errors}
              touched={touched}
              handlechange={handleChange}
              states={state1}
              city1={city}
            />
          ) : (
            ""
          )
        }
      </Formik>
    </div>
  );
};

export default CustomerProfile;
