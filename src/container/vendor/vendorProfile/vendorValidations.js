import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  FNAME_REQUIRED,
  LNAME_REQUIRED,
  MOBILE_INVALID,
  MOBILE_REQUIRED,
  PINCODE_INVALID,
  PINCODE_REQUIRED,
  STATE_REQUIRED,
  GSTNO_INVALID,
  GSTNO_REQUIRED,
  REGISTRATION_INVALID,
  REGISTRATION_REQUIRED,
} from "../../constant/constant";
export default function validationVendor(values) {
  let formErrors = {};
  let formIsValid = true;
  //FirstName
  if (!values.firstName) {
    formIsValid = false;
    formErrors["firstNameErr"] = FNAME_REQUIRED;
  }
  //Lastname
  if (!values.lastName) {
    formIsValid = false;
    formErrors["lastNameErr"] = LNAME_REQUIRED;
  }
  //Phone number
  if (!values.mobileNo) {
    formIsValid = false;
    formErrors["phoneNumberErr"] = MOBILE_REQUIRED;
  } else {
    var mobPattern = /^[6-9]\d{9}$/;
    if (!mobPattern.test(values.mobileNo)) {
      formIsValid = false;
      formErrors["phoneNumberErr"] = MOBILE_INVALID;
    }
  }
  //Landmark
  if (!values.address1) {
    formIsValid = false;
    formErrors["landmarkErr"] = ADDRESS_REQUIRED;
  }
  //City
  if (!values.city) {
    formIsValid = false;
    formErrors["cityErr"] = CITY_REQUIRED;
  }
  //State
  if (!values.state) {
    formIsValid = false;
    formErrors["stateErr"] = STATE_REQUIRED;
  }
  //Pincode
  if (!values.pinCode) {
    formIsValid = false;
    formErrors["pincodeErr"] = PINCODE_REQUIRED;
  } else if (!/^\d{6}$/.test(values.pinCode)) {
    formIsValid = false;
    formErrors["pincodeErr"] = PINCODE_INVALID;
  }
  if (!values.gstNo) {
    formIsValid = false;
    formErrors["gstErr"] = GSTNO_REQUIRED;
  } else {
    var gst = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/;
    if (!gst.test(values.gstNo)) {
      formIsValid = false;
      formErrors["gstErr"] = GSTNO_INVALID;
    }
  }
  if (!values.registrationNo) {
    formIsValid = false;
    formErrors["registrationErr"] = REGISTRATION_REQUIRED;
  } else {
    var reg = /^\d{6,}$/;
    if (!reg.test(values.registrationNo)) {
      formIsValid = false;
      formErrors["registrationErr"] = REGISTRATION_INVALID;
    }
  }
  return {formErrors, formIsValid};
}
