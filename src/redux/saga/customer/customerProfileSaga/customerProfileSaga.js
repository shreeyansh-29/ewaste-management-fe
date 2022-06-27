import {call, put, takeLatest} from "redux-saga/effects";
import * as types from "../../../config/actionType";
import {customerProfileService} from "../../../service/customer/customerProfileService/customerProfileService";
import {
  customerProfileSuccess,
  customerProfileError,
} from "../../../action/customer/customerProfileAction/customerProfileAction";

function* customerProfileSaga() {
  try {
    let response = yield call(customerProfileService);
    // console.log("saga", response);
    yield put(customerProfileSuccess(response.data));
  } catch (error) {
    yield put(customerProfileError(error));
  }
}

export function* watchCustomerProfile() {
  yield takeLatest(types.CUSTOMER_PROFILE_REQUEST, customerProfileSaga);
}
