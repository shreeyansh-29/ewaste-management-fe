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
} from "../constant/constant";
export default function validation(values) {
  let formErrors = {};
  let formIsValid = true;
  //FirstName
  if (values.firstName === '') {
    formErrors["firstNameErr"] = FNAME_REQUIRED;
    formIsValid = false;
  }
  //Lastname
  if (values.lastName === '') {
    formErrors["lastNameErr"] = LNAME_REQUIRED;
    formIsValid = false;
  }
  //Phone number
  if (!values.mobileNo) {
    formErrors["phoneNumberErr"] = MOBILE_REQUIRED;
    formIsValid = false;
  } else {
    var mobPattern = /^[6-9]\d{9}$/;
    if (!mobPattern.test(values.mobileNo)) {
      formErrors["phoneNumberErr"] = MOBILE_INVALID;
      formIsValid = false;
    }
  }
  //Landmark
  if (!values.address1) {
    formErrors["landmarkErr"] = ADDRESS_REQUIRED;
    formIsValid = false;
  }
  //City
  if (!values.city) {
    formErrors["cityErr"] = CITY_REQUIRED;
    formIsValid = false;
  }
  //State
  if (!values.state) {
    formErrors["stateErr"] = STATE_REQUIRED;
    formIsValid = false;
  }
  //Pincode
  if (!values.pinCode) {
    formErrors["pincodeErr"] = PINCODE_REQUIRED;
    formIsValid = false;
  } else if (!/^\d{6}$/.test(values.pinCode)) {
    formErrors["pincodeErr"] = PINCODE_INVALID;
    formIsValid = false;
  }
  return {formErrors,formIsValid};
}
