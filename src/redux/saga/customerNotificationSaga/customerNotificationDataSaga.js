import * as types from "../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import * as actions from "../../action/customerNotificationAction/customerNotificationDataAction";
import {customerNotificationDataService} from "../../service/customerNotificationService/customerNotificationDataService";

function* customerNotificationDataSaga() {
  try {
    let response = yield call(customerNotificationDataService);
    console.log("success saga", response);
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
