import {SIGN_UP} from "../../container/constant/constants";
import api from "../../core/utilities/httpProvider";

export const signUpService = (data) => {
  const flag = data?.payload?.role === "COLLECTOR" ? true : false;
  return api.post(SIGN_UP, {
    firstName: data?.payload?.values.firstName,
    lastName: data?.payload?.values.lastName,
    email: data?.payload?.values.email,
    password: data?.payload?.values.password,
    mobileNo: data?.payload?.values.mobileNo,
    address1: data?.payload?.values.address1,
    city: data?.payload?.city,
    state: data?.payload?.state,
    pinCode: data?.payload?.values.pinCode,
    role: {name: data?.payload?.role},
    gstNo: data?.payload?.values.gstNo,
    registrationNo: data?.payload?.values.registrationNo,
    shopTime: data?.payload?.dropOff,
    categoriesAcceptedSet: flag
      ? [...data.payload.categoryAccepted[0]]
      : data?.payload?.categoryAccepted,
  });
};
