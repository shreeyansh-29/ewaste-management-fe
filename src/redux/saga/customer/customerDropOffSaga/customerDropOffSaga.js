import {call, put, takeLatest} from "redux-saga/effects";
import {CUSTOMER_DROPOFF_REQUEST} from "../../../config/actionType";
import {customerDropOffService} from "../../../../services/customer/customerDropOffService/customerDropOffService";
import {
  customerDropOffError,
  customerDropOffSuccess,
} from "../../../action/customer/customerDropOffAction/customerDropOffAction";

export function* customerDropOffSaga(action) {
  try {
    let response = yield call(customerDropOffService, action);
    yield put(customerDropOffSuccess(response));
  } catch (error) {
    yield put(customerDropOffError(error));
  }
}

export function* watchCustomerDropOff() {
  yield takeLatest(CUSTOMER_DROPOFF_REQUEST, customerDropOffSaga);
}
