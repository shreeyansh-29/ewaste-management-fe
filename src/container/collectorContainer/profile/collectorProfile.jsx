/*
  @module collectorProfile
*/
/* eslint-disable indent */
import { Formik} from "formik";
import React, {useEffect, useState} from "react";
import "../collector.css";
import Toast from "../../../components/toast";
import {collectorProfileRequest} from "../../../redux/action/collector/collectorProfileAction/collectorProfileAction";
import {TOAST_SUCCESS5} from "../../constant/constants";
import {useDispatch, useSelector} from "react-redux";
import {collectorProfileEditRequest} from "../../../redux/action/collector/collectorProfileAction/collectorProfileEditAction";
import {CollectorValidations} from "../../constant/validations";
import CollectorProfileForm from "./collectorProfileForm"

const CollectorProfile = () => {
  const [state1, setState1] = useState();
  const [city, setCity] = useState();
  const dispatch = useDispatch();

  let res = useSelector((state) => state.collectorProfile?.data);
  useEffect(() => {
    dispatch(collectorProfileRequest());
  }, []);

  useEffect(() => {
    setState1(res?.state);
    setCity(res?.city);
  }, [res]);
  
  const handleSubmit = (values) => {
    const data = {
      values,
      password: res?.password,
      categoriesAcceptedSet: res?.categoriesAcceptedSet,
      shopTime: res?.shopTime,
      state: state1,
      city: city,
    };
    dispatch(collectorProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };
  return (
    <div className="vendor collectorProfile">
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res?.firstName,
          lastName: res?.lastName,
          email: res?.email,
          mobileNo: res?.mobileNo,
          address1: res?.address1,
          pinCode: res?.pinCode,
          gstNo: res?.gstNo,
          registrationNo: res?.registrationNo,
        }}
        validationSchema={CollectorValidations}
        validator={() => ({})}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched, handleChange }) =>
          city !== undefined ? (
            <CollectorProfileForm
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

export default CollectorProfile;
