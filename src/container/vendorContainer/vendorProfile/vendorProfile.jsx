/*
  @module vendorProfile
*/
/* eslint-disable indent */
import {Formik} from "formik";
import React, {useEffect, useState} from "react";
import "../vendor.css";
import Toast from "../../../components/toast";
import {TOAST_SUCCESS5} from "../../constant/constants";
import {useDispatch, connect} from "react-redux";
import {vendorProfileRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileAction";
import {vendorProfileEditRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileEditAction";
import {VendorValidations} from "../../constant/validations";
import VendorProfileForm from "./vendorProfileForm";

const VendorProfile = ({res}) => {
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(vendorProfileRequest());
  }, []);

  useEffect(() => {
    setState(res.state);
    setCity(res.city);
  }, [res]);

  /* 
    @function handleSubmit
    @params {values} contains all the details of the user
    @detail dispatch the vendorEditProfileRequest from vendorProfileAction
    @return {void}
  */
  const handleSubmit = (values) => {
    const data = {values, password: res?.password, state: state, city: city};
    dispatch(vendorProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };

  return (
    <div className="vendor vendorProfile">
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res.firstName,
          lastName: res.lastName,
          email: res.email,
          mobileNo: res.mobileNo,
          address1: res.address1,
          pinCode: res.pinCode,
          gstNo: res?.gstNo,
          registrationNo: res?.registrationNo,
        }}
        validationSchema={VendorValidations}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) =>
          city !== undefined ? (
            <VendorProfileForm
              errors={errors}
              touched={touched}
              handlechange={handleChange}
              states={state}
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

const mapStateToProps = (state) => {
  return {
    res: state.vendorProfile?.data,
  };
};

export default connect(mapStateToProps)(VendorProfile);
