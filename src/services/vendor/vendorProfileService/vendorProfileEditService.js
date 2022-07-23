import {VENDOR_PROFILE_EDIT} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const vendorProfileEditService = (data) => {
  return api.put(VENDOR_PROFILE_EDIT, {
    firstName: data.payload.values.firstName,
    lastName: data.payload.values.lastName,
    email: data.payload.values.email,
    address1: data.payload.values.address1,
    mobileNo: data.payload.values.mobileNo,
    city: data.payload.city,
    state: data.payload.state,
    pinCode: data.payload.values.pinCode,
    password: data.payload.password,
    gstNo: data.payload.values.gstNo,
    registrationNo: data.payload.values.registrationNo,
    shopTime: "10",
  });
};
