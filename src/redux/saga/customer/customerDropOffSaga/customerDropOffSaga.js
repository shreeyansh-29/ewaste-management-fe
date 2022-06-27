import {call, put, takeLatest} from "redux-saga/effects";
import {CUSTOMER_DROPOFF_REQUEST} from "../../../config/actionType";
import {customerDropOffService} from "../../../service/customer/customerDropOffService/customerDropOffService";
import {
  customerDropOffError,
  customerDropOffSuccess,
} from "../../../action/customer/customerDropOffAction/customerDropOffAction";

function* customerDropOffSaga(action) {
  try {
    let response = yield call(customerDropOffService, action);
    console.log("Saga", response);
    yield put(customerDropOffSuccess(response));
  } catch (error) {
    yield put(customerDropOffError(error));
  }
}

export function* watchCustomerDropOff() {
  yield takeLatest(CUSTOMER_DROPOFF_REQUEST, customerDropOffSaga);
}
