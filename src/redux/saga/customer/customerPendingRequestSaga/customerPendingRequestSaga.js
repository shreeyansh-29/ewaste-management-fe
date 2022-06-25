import {takeLatest, put, call} from "redux-saga/effects";
import {CUSTOMER_PENDING_REQUEST} from "../../../config/actionType";
import {customerPendingRequestService} from "../../../service/customer/customerPendingRequestService/customerPendingRequestService";
import {customerPendingError} from "../../../action/customer/customerPendingRequestAction/customerPendingRequestAction";

function* customerPendingRequestSaga() {
  try {
    let response = yield call(customerPendingRequestService);
    console.log(response);
  } catch (error) {
    yield put(customerPendingError(error));
  }
}

export function* watchCustomerPendingRequest() {
  yield takeLatest(CUSTOMER_PENDING_REQUEST, customerPendingRequestSaga);
}
