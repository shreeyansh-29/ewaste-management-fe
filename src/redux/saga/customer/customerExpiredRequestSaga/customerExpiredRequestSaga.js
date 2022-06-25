import {CUSTOMER_COMPLETED_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {customerCompletedRequestService} from "../../../service/customer/customerCompletedRequestService/customerCompletedRequestService";
import {customerCompletedError} from "../../../action/customer/customerCompletedRequestAction/customerCompletedRequestAction";

function* customerCompletedRequestSaga() {
  try {
    let response = yield call(customerCompletedRequestService);
    console.log("Saga", response);
  } catch (error) {
    yield put(customerCompletedError(error));
  }
}

export function* watchCustomerExpiredRequest() {
  yield takeLatest(CUSTOMER_COMPLETED_REQUEST, customerCompletedRequestSaga);
}
