import {call, put, takeLatest} from "redux-saga/effects";
import {customerNotificationCountService} from "../../service/customerNotificationService/customerNotificationCountService";
import {
  customerNotificationCountSuccess,
  customerNotificationCountError,
} from "../../action/customerNotificationAction/customerNotificationCountAction";
import * as types from "../../config/actionType";

function* customerNotificationCountSaga() {
  try {
    let response = yield call(customerNotificationCountService);
    console.log("saga", response);
    yield put(customerNotificationCountSuccess(response));
  } catch (error) {
    yield put(customerNotificationCountError(error));
  }
}

export function* watchCustomerNotificationCount() {
  yield takeLatest(
    types.CUSTOMER_NOTIFICATION_COUNT_REQUEST,
    customerNotificationCountSaga
  );
}
