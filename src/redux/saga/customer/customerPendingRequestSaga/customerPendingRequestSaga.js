import {takeLatest, put, call} from "redux-saga/effects";
import {CUSTOMER_PENDING_REQUEST} from "../../../config/actionType";
import {customerPendingRequestService} from "../../../service/customer/customerPendingRequestService/customerPendingRequestService";
import {
  customerPendingError,
  customerPendingSuccess,
} from "../../../action/customer/customerPendingRequestAction/customerPendingRequestAction";

export function* customerPendingRequestSaga() {
  try {
    let response = yield call(customerPendingRequestService);
    yield put(customerPendingSuccess(response));
  } catch (error) {
    yield put(customerPendingError(error));
  }
}

export function* watchCustomerPendingRequest() {
  yield takeLatest(CUSTOMER_PENDING_REQUEST, customerPendingRequestSaga);
}
