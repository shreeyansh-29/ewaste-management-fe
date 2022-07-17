import {call, put, takeLatest} from "redux-saga/effects";
import {CUSTOMER_PICKUP_REQUEST} from "../../../config/actionType";
import * as types from "../../../action/customer/customerPickUpAction/customerPickUpAction";
import {customerPickUpService} from "../../../service/customer/customerPickUpService/customerPickUpService";

export function* customerPickUpSaga(data) {
  try {
    let response = yield call(customerPickUpService, data);
    yield put(types.customerPickUpSuccess(response));
  } catch (error) {
    yield put(types.customerPickUpError(error));
  }
}

export function* watchCustomerPickUp() {
  yield takeLatest(CUSTOMER_PICKUP_REQUEST, customerPickUpSaga);
}
