import {CUSTOMER_EXPIRED_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {customerExpiredRequestService} from "../../../service/customer/customerExpiredRequestService/customerExpiredRequestService";
import {
  customerExpiredSuccess,
  customerExpiredError,
} from "../../../action/customer/customerExpiredRequestAction/customerExpiredRequestAction";

function* customerExpiredRequestSaga() {
  try {
    let response = yield call(customerExpiredRequestService);
    yield put(customerExpiredSuccess(response));
  } catch (error) {
    yield put(customerExpiredError(error));
  }
}

export function* watchCustomerExpiredRequest() {
  yield takeLatest(CUSTOMER_EXPIRED_REQUEST, customerExpiredRequestSaga);
}
