import * as types from "../../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "../../../action/customer/customerNotificationAction/customerNotificationDataAction";
import {customerNotificationDataService} from "../../../service/customer/customerNotificationService/customerNotificationDataService";

function* customerNotificationDataSaga() {
  try {
    let response = yield call(customerNotificationDataService);
    response = yield response.json();
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
