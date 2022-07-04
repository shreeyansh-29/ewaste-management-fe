import * as Yup from "yup";
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
} from "./constant";

export const SignInValidations = Yup.object().shape({
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED).nullable(),
  password: Yup.string().required(PASSWORD_REQUIRED).nullable(),
});

export const SignUpValidations = Yup.object().shape({
  category: Yup.string().required(CATEGORY_REQUIRED).nullable(),
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
  lastName: Yup.string().required(LNAME_REQUIRED).nullable(),
  mobileNo: Yup.string()
    .required(MOBILE_REQUIRED)
    .matches(/^[6-9]\d{9}$/, MOBILE_INVALID)
    .nullable(),
  address1: Yup.string().required(ADDRESS_REQUIRED).nullable(),
  email: Yup.string().email(EMAIL_INVALID).required(EMAIL_REQUIRED).nullable(),
  pinCode: Yup.string()
    .required(PINCODE_REQUIRED)
    .matches(/^\d{6}$/, PINCODE_INVALID)
    .nullable(),
  password: Yup.string()
    .required(PASSWORD_REQUIRED)
    .matches(/^[a-zA-Z0-9]{6,20}$/, PASSWORD_INVALID)
    .min(6, PASSWORD_INVALID)
    .max(20, PASSWORD_INVALID)
    .nullable(),
  city: Yup.string().required(CITY_REQUIRED).nullable(),
  state1: Yup.string().ensure().required(STATE_REQUIRED).nullable(),
  role: Yup.string().required(ROLE_REQUIRED).nullable(),
  registrationNo: Yup.string().when("role", {
    is: (role) => role !== "Customer",
    then: Yup.string()
      .required(REGISTRATION_REQUIRED)
      .matches(/^\d{6}$/, REGISTRATION_INVALID)
      .nullable(),
  }),
  gstNo: Yup.string().when("role", {
    is: (role) => role !== "Customer",
    then: Yup.string()
      .required(GSTNO_REQUIRED)
      .matches(/^\d{2}[A-Z]{5}\d{4}[A-Z]{1}\d{1}Z\d{1}$/, GSTNO_INVALID)
      .nullable(),
  }),
  confirmPassword: Yup.string()
    .required(CONFIRM_PASSWORD_REQUIRED)
    .matches(/^[a-zA-Z0-9]{6,20}$/, PASSWORD_INVALID)
    .oneOf([Yup.ref("password"), null], CONFIRM_PASSWORD_INVALID)
    .min(6, PASSWORD_INVALID)
    .max(20, PASSWORD_INVALID)
    .nullable(),
});

export const ForgotPasswordValidations = Yup.object().shape({
  email: Yup.string().email().required(EMAIL_REQUIRED).nullable(),
});
export const ResetPasswordValidations = Yup.object().shape({
  password: Yup.string().required(PASSWORD_REQUIRED).nullable(),
  confirmpassword: Yup.string().required(CONFIRM_PASSWORD_REQUIRED).nullable(),
});
export const CollectorValidations = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
  lastName: Yup.string().required(LNAME_REQUIRED).nullable(),
  mobileNo: Yup.string().required(MOBILE_REQUIRED).nullable(),
  address1: Yup.string().required(ADDRESS_REQUIRED).nullable(),
  pinCode: Yup.string().required(PINCODE_REQUIRED).nullable(),
});

export const VendorValidations = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
  lastName: Yup.string().required(LNAME_REQUIRED).nullable(),
  mobileNo: Yup.string().required(MOBILE_REQUIRED).nullable(),
  address1: Yup.string().required(ADDRESS_REQUIRED).nullable(),
  pinCode: Yup.string().required(PINCODE_REQUIRED).nullable(),
  gstNo: Yup.string().required(GSTNO_REQUIRED).nullable(),
  registrationNo: Yup.string().required(REGISTRATION_REQUIRED).nullable(),
});

export const CustomerValidations = Yup.object().shape({
  firstName: Yup.string().required(FNAME_REQUIRED).nullable(),
  lastName: Yup.string().required(LNAME_REQUIRED).nullable(),
  mobileNo: Yup.string().required(MOBILE_REQUIRED).nullable(),
  address1: Yup.string().required(ADDRESS_REQUIRED).nullable(),
  pinCode: Yup.string().required(PINCODE_REQUIRED).nullable(),
});
