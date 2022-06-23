import {call, put, takeLatest} from "redux-saga/effects";
import {customerNotificationService} from "../../service/customerNotificationService/customerNotificationService";
import {
  customerNotificationSuccess,
  customerNotificationError,
} from "../../action/customerNotificationAction/customerNotificationAction";
import * as types from "../../config/actionType";

function* customerNotificationSaga() {
  try {
    let response = yield call(customerNotificationService);
    console.log("saga", response);
    yield put(customerNotificationSuccess(response));
  } catch (error) {
    yield put(customerNotificationError(error));
  }
}

export function* watchCustomerNotification() {
  yield takeLatest(
    types.CUSTOMER_NOTIFICATION_REQUEST,
    customerNotificationSaga
  );
}
