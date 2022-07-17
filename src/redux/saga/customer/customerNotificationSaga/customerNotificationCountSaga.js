import {call, put, takeLatest} from "redux-saga/effects";
import {customerNotificationCountService} from "../../../service/customer/customerNotificationService/customerNotificationCountService";
import {
  customerNotificationCountSuccess,
  customerNotificationCountError,
} from "../../../action/customer/customerNotificationAction/customerNotificationCountAction";
import * as types from "../../../config/actionType";

export function* customerNotificationCountSaga() {
  try {
    let response = yield call(customerNotificationCountService);
    yield put(customerNotificationCountSuccess(response.data));
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
