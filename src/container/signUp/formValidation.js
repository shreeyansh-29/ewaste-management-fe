import {
  ADDRESS_REQUIRED,
  CATEGORY_REQUIRED,
  CITY_REQUIRED,
  CONFIRM_PASSWORD_INVALID,
  CONFIRM_PASSWORD_REQUIRED,
  EMAIL_INVALID,
  EMAIL_REQUIRED,
  FNAME_REQUIRED,
  GSTNO_INVALID,
  GSTNO_REQUIRED,
  LNAME_REQUIRED,
  MOBILE_INVALID,
  MOBILE_REQUIRED,
  PASSWORD_INVALID,
  PASSWORD_REQUIRED,
  PINCODE_INVALID,
  PINCODE_REQUIRED,
  REGISTRATION_INVALID,
  REGISTRATION_REQUIRED,
  ROLE_REQUIRED,
  STATE_REQUIRED,
  TIME_REQUIRED,
} from "../constant/constant";
export default function validationForm(values) {
  let formErrors = {};
  let formIsValid=true;
  if (!values.firstName) {
    formErrors["firstNameErr"] = FNAME_REQUIRED;
    formIsValid=false;
  }

  //Lastname
  if (!values.lastName) {
    formErrors["lastNameErr"] = LNAME_REQUIRED;
    formIsValid=false;
  }

  //Email
  if (!values.email) {
    formErrors["emailIdErr"] = EMAIL_REQUIRED;
    formIsValid=false;
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    formErrors["emailIdErr"] = EMAIL_INVALID;
    formIsValid=false;
  }
  //Password
  if (!values.password) {
    var str1 = PASSWORD_REQUIRED;
    formIsValid=false;
    formErrors["passwordErr"] = str1;
  } else if (!/^[a-zA-Z0-9]{6,20}$/.test(values.password)) {
    var str = PASSWORD_INVALID;
    formIsValid=false;
    formErrors["passwordErr"] = str;
  }
  //Confirm Password
  if (!values.confirmPassword) {
    formErrors["confirmPasswordErr"] = CONFIRM_PASSWORD_REQUIRED;
    formIsValid=false;
  } else if (values.password !== values.confirmPassword) {
    formErrors["confirmPasswordErr"] = CONFIRM_PASSWORD_INVALID;
    formIsValid=false;
  }
  //Phone number
  if (!values.mobileNo) {
    formErrors["mobileNoErr"] = MOBILE_REQUIRED;
    formIsValid=false;
  } else {
    var mobPattern = /^[6-9]\d{9}$/;
    if (!mobPattern.test(values.mobileNo)) {
      formErrors["mobileNoErr"] = MOBILE_INVALID;
      formIsValid=false;
    }
  }
  //Address
  if (!values.address1) {
    formErrors["addressErr"] = ADDRESS_REQUIRED;
    formIsValid=false;
  }
  //City
  if (values.city === "" || values.city === "Select City") {
    formErrors["cityErr"] = CITY_REQUIRED;
    formIsValid=false;
  }
  //State
  if (values.selectedState === "" || values.selectedState === "Select State") {
    formErrors["stateErr"] = STATE_REQUIRED;
    formIsValid=false;
  }
  //Pincode
  if (!values.pincode) {
    formErrors["pincodeErr"] = PINCODE_REQUIRED;
    formIsValid=false;
  } else {
    var pincodes = /^\d{6}$/;
    if (!pincodes.test(values.pincode)) {
      formErrors["pincodeErr"] = PINCODE_INVALID;
      formIsValid=false;
    }
  }
  //role
  if (values.role.name === "" || values.role.name === "select") {
    formErrors["roleErr"] = ROLE_REQUIRED;
    formIsValid=false;
  }
  if (values.role.name === "Collector" || values.role.name === "Vendor") {
    if (!values.gstNo) {
      formErrors["gstErr"] = GSTNO_REQUIRED;
      formIsValid=false;
    } else {
      var gst = /^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/;
      if (!gst.test(values.gstNo)) {
        formErrors["gstErr"] = GSTNO_INVALID;
        formIsValid=false;
      }
    }
    if (!values.registrationNo) {
      formErrors["registrationErr"] = REGISTRATION_REQUIRED;
      formIsValid=false;
    } else {
      var reg = /^\d{6}$/;
      if (!reg.test(values.registrationNo)) {
        formErrors["registrationErr"] = REGISTRATION_INVALID;
        formIsValid=false;
      }
    }
  }
  if (values.role.name === "Collector") {
    if (
      values.startTime._isAMomentObject === true ||
      values.endTime._isAMomentObject === true
    ) {
      formErrors["timeErr"] = TIME_REQUIRED;formIsValid=false;
    }
    if (
      values.inputList[0][0].categoryAccepted === "Select Categories" ||
      values.inputList[0][0].categoryAccepted === ""
    ) {
      formErrors["categoryErr"] = CATEGORY_REQUIRED;formIsValid=false;
    }
  }
  return {formErrors,formIsValid};
}
