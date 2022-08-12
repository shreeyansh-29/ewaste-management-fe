import * as types from "../../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "../../../action/customer/customerNotificationAction/customerNotificationDataAction";
import {customerNotificationDataService} from "../../../../services/customer/customerNotificationService/customerNotificationDataService";

export function* customerNotificationDataSaga() {
  try {
    let response = yield call(customerNotificationDataService);
    yield put(actions.customerNotificationDataSuccess(response));
  } catch (error) {
    yield put(actions.customerNotificationDataError(error));
  }
}

export function* watchCustomerNotificationData() {
  yield takeLatest(
    types.CUSTOMER_NOTIFICATION_DATA_REQUEST,
    customerNotificationDataSaga
  );
}
