import * as types from "../../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import {
  collectorNotificationDataError,
  collectorNotificationDataSuccess,
} from "../../../action/collector/collectorNotificationAction/collectorNotificationDataAction";
import {collectorNotificationDataService} from "../../../service/collector/collectorNotificationService/collectorNotificationDataService";

function* collectorNotificationDataSaga() {
  try {
    let response = yield call(collectorNotificationDataService);
    console.log("saga", response);
    yield put(collectorNotificationDataSuccess(response));
  } catch (error) {
    yield put(collectorNotificationDataError(error));
  }
}

export function* watchCollectorNotificationData() {
  yield takeLatest(
    types.COLLECTOR_NOTIFICATION_DATA_REQUEST,
    collectorNotificationDataSaga
  );
}
