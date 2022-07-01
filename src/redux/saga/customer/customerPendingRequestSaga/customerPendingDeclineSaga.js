import {takeLatest, put, call} from "redux-saga/effects";
import {CUSTOMER_PENDING_DECLINE_REQUEST} from "../../../config/actionType";
import {customerPendingDeclineService} from "../../../service/customer/customerPendingRequestService/customerPendingDeclineService";
import {
  customerPendingDeclineError,
  customerPendingDeclineSuccess,
} from "../../../action/customer/customerPendingRequestAction/customerPendingDeclineAction";

function* customerPendingDeclineSaga(data) {
  try {
    let response = yield call(customerPendingDeclineService, data);
    yield put(customerPendingDeclineSuccess(response));
  } catch (error) {
    yield put(customerPendingDeclineError(error));
  }
}

export function* watchCustomerPendingDecline() {
  yield takeLatest(
    CUSTOMER_PENDING_DECLINE_REQUEST,
    customerPendingDeclineSaga
  );
}
