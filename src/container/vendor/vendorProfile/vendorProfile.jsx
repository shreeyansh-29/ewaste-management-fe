import {Field, Form, Formik} from "formik";
import React, {useEffect} from "react";
// import * as Yup from "yup";
import "../vendor.css";
// import {isEmpty} from "lodash";
import Toast from "../../components/toast";
import {
  //   ADDRESS_REQUIRED,
  //   // CITY_REQUIRED,
  //   FNAME_REQUIRED,
  //   GSTNO_REQUIRED,
  //   LNAME_REQUIRED,
  //   MOBILE_REQUIRED,
  //   PASSWORD_REQUIRED,
  //   PINCODE_REQUIRED,
  //   REGISTRATION_REQUIRED,
  //   // STATE_REQUIRED,
  TOAST_SUCCESS5,
  //   // PINCODE_INVALID,
} from "../../constant/constant";
import {useDispatch, useSelector} from "react-redux";
import {vendorProfileRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileAction";
import {vendorProfileEditRequest} from "../../../redux/action/vendor/vendorProfileAction/vendorProfileEditAction";

// const pinCodeReg = /^\d{6}$/;
// let validationSchema = Yup.object().shape({
//   firstName: Yup.string().required(FNAME_REQUIRED),
//   lastName: Yup.string().required(LNAME_REQUIRED),
//   // city: Yup.string().required(CITY_REQUIRED),
//   password: Yup.string().required(PASSWORD_REQUIRED),
//   // state: Yup.string().required(STATE_REQUIRED),
//   mobileNo: Yup.string().required(MOBILE_REQUIRED),
//   address1: Yup.string().required(ADDRESS_REQUIRED),
//   pinCode: Yup.string().required(PINCODE_REQUIRED),
//   gstNo: Yup.string().required(GSTNO_REQUIRED),
//   registrationNo: Yup.string().required(REGISTRATION_REQUIRED),
// });

const VendorProfile = () => {
  const dispatch = useDispatch();

  let res = useSelector((state) => state.vendorProfile);
  console.log("res", res);
  useEffect(() => {
    dispatch(vendorProfileRequest());
  }, []);

  const handleSubmit = (values) => {
    const data = {values, password: res?.data.password};
    console.log(data);
    dispatch(vendorProfileEditRequest(data));
    Toast.success(TOAST_SUCCESS5, 1500);
  };

  return (
    <div className="vendor" style={{marginTop: "85px"}}>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          email: res.data.email,
          mobileNo: res.data.mobileNo,
          address1: res.data.address1,
          state: res?.data.state,
          city: res?.data.city,
          pinCode: res.data.pinCode,
          gstNo: res?.data.gstNo,
          registrationNo: res?.data.registrationNo,
        }}
        // validationSchema={validationSchema}
        validator={() => ({})}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({errors, touched, handleChange}) => (
          <Form>
            <div className="formbody">
              <div className="vendorsprofile">
                <h1
                  style={{
                    textAlign: "center",
                    padding: "20px",
                    fontSize: "2rem",
                    fontFamily: "sans-serif",
                    color: "white",
                  }}
                >
                  Profile
                </h1>
              </div>
              <div className="vendorbody">
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="firstName">
                      First Name <i className="text-danger">*</i>{" "}
                    </label>
                    <Field
                      autoComplete="off"
                      onChange={handleChange}
                      style={{borderRadius: "17px"}}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                    />
                    {touched.firstName && errors.firstName ? (
                      <div className="formErrors">{errors.firstName}</div>
                    ) : null}
                  </div>

                  <div className="inputGroup">
                    <label htmlFor="lastName">
                      Last Name <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      name="lastName"
                      autoComplete="off"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                    {touched.lastName && errors.lastName ? (
                      <div className="formErrors">{errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="email">Email</label>
                    <Field
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                        backgroundColor: "white",
                      }}
                      disabled
                      name="email"
                    />
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="phoneNumber">
                      Phone Number <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="mobileNo"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Phone Number"
                    />
                    {touched.mobileNo && errors.mobileNo ? (
                      <div className="formErrors">{errors.mobileNo}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="address1">
                      Address Line <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="address1"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Address Line"
                    />
                    {touched.address1 && errors.address1 ? (
                      <div className="formErrors">{errors.address1}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label>
                      State <i className="text-danger">*</i>
                    </label>
                    <Field
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      className="form-select"
                      name="state"
                      onChange={handleChange}
                    >
                      {/* <option value="Select State">{this.state.state} </option>
                      {this.state.states.map((e, key) => {
                        return <option key={key}>{e.name}</option>;
                      })} */}
                    </Field>
                    {touched.state && errors.state ? (
                      <div className="formErrors">{errors.state}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label>
                      City <i className="text-danger">*</i>{" "}
                    </label>
                    <Field
                      style={{
                        borderRadius: "17px",
                        padding: "4px",
                      }}
                      type="select"
                      className="form-select"
                      name="city"
                      onChange={handleChange}
                    >
                      {/* <option value="Select City">{this.state.city}</option>
                      {this.state.cities.map((e, key) => {arget.valu
                        return <option key={key}>{e}</option>;
                      })} */}
                    </Field>
                    {touched.city && errors.city ? (
                      <div className="formErrors">{errors.city}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="pinCode">
                      Pincode <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="pinCode"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Pincode"
                    />
                    {touched.pinCode && errors.pinCode ? (
                      <div className="formErrors">{errors.pinCode}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="inputGroup">
                    <label htmlFor="GSTIN">
                      GSTNo <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      style={{borderRadius: "17px"}}
                      name="gstNo"
                      autoComplete="off"
                      onChange={handleChange}
                      placeholder="Enter GSTIN"
                    />
                    {touched.gstNo && errors.gstNo ? (
                      <div className="formErrors">{errors.gstNo}</div>
                    ) : null}
                  </div>
                  <div className="inputGroup">
                    <label htmlFor="Registration Certificate No.">
                      Registration Number <i className="text-danger">*</i>
                    </label>
                    <Field
                      type="text"
                      autoComplete="off"
                      name="registrationNo"
                      style={{borderRadius: "17px"}}
                      onChange={handleChange}
                      placeholder="Enter Registration Number"
                    />
                    {touched.registrationNo && errors.registrationNo ? (
                      <div className="formErrors">{errors.registrationNo}</div>
                    ) : null}
                  </div>
                </div>
                <div className="cont">
                  <div className="vertical-center">
                    <button
                      type="button"
                      className="profilebtn"
                      // onClick={submitForm}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default VendorProfile;
