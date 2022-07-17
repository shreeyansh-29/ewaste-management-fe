import {call, put, takeLatest} from "redux-saga/effects";
import {
  customerWasteGeneratedError,
  customerWasteGeneratedSuccess,
} from "../../../action/customer/analyticsAction/customerWasteGeneratedAction";
import {CUSTOMER_WASTEGENERATED_REQUEST} from "../../../config/actionType";
import {customerWasteGeneratedService} from "../../../service/customer/analyticsService/customerWasteGeneratedService";

export function* customerWasteGeneratedSaga() {
  try {
    let response = yield call(customerWasteGeneratedService);
    yield put(customerWasteGeneratedSuccess(response));
  } catch (error) {
    yield put(customerWasteGeneratedError(error));
  }
}

export function* watchCustomerWasteGenerated() {
  yield takeLatest(CUSTOMER_WASTEGENERATED_REQUEST, customerWasteGeneratedSaga);
}
