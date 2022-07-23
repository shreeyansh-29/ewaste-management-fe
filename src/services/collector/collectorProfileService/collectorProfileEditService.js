import {COLLECTOR_PROFILE_EDIT} from "../../../container/constant/constant";
import api from "../../../core/utilities/httpProvider";

export const collectorProfileEditService = (data) => {
  return api.put(COLLECTOR_PROFILE_EDIT, {
    firstName: data.payload.values.firstName,
    lastName: data.payload.values.lastName,
    email: data.payload.values.email,
    password: data.payload.password,
    mobileNo: data.payload.values.mobileNo,
    address1: data.payload.values.address1,
    city: data.payload.city,
    state: data.payload.state,
    pinCode: data.payload.values.pinCode,
    shopTime: data.payload.shopTime,
    gstNo: data.payload.values.gstNo,
    registrationNo: data.payload.values.registrationNo,
    categoriesAcceptedSet: data.payload.categoriesAcceptedSet,
  });
};
