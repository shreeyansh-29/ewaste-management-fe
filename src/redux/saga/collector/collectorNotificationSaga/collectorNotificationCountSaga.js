import {call, takeLatest, put} from "redux-saga/effects";
import {COLLECTOR_NOTIFICATION_COUNT_REQUEST} from "../../../config/actionType";
import {collectorNotificationCountService} from "../../../service/collector/collectorNotificationService/collectorNotificationCountService";
import {
  collectorNotificationCountError,
  collectorNotificationCountSuccess,
} from "../../../action/collector/collectorNotificationAction/collectorNotificationCountAction";

export function* collectorNotificationCountSaga() {
  try {
    let response = yield call(collectorNotificationCountService);
    yield put(collectorNotificationCountSuccess(response.data));
  } catch (error) {
    yield put(collectorNotificationCountError(error));
  }
}

export function* watchCollectorNotificationCount() {
  yield takeLatest(
    COLLECTOR_NOTIFICATION_COUNT_REQUEST,
    collectorNotificationCountSaga
  );
}
