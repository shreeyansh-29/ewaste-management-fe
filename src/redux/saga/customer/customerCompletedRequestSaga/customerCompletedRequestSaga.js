import {CUSTOMER_COMPLETED_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {customerCompletedRequestService} from "../../../../services/customer/customerCompletedRequestService/customerCompletedRequestService";
import {
  customerCompletedError,
  customerCompletedSuccess,
} from "../../../action/customer/customerCompletedRequestAction/customerCompletedRequestAction";

export function* customerCompletedRequestSaga() {
  try {
    let response = yield call(customerCompletedRequestService);
    yield put(customerCompletedSuccess(response));
  } catch (error) {
    yield put(customerCompletedError(error));
  }
}

export function* watchCustomerCompletedRequest() {
  yield takeLatest(CUSTOMER_COMPLETED_REQUEST, customerCompletedRequestSaga);
}
