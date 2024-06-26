import {COLLECTOR_MYDRIVES_STATUS_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorMyDrivesStatusService} from "../../../../services/collector/collectorMyDrivesStatusService/collectorMyDrivesStatusService";
import {
  collectorMyDrivesStatusSuccess,
  collectorMyDrivesStatusError,
} from "../../../action/collector/collectorMyDrivesStatusAction/collectorMyDrivesStatusAction";

export function* collectorMyDrivesStatusSaga(data) {
  try {
    let response = yield call(collectorMyDrivesStatusService, data);
    yield put(collectorMyDrivesStatusSuccess(response));
  } catch (error) {
    yield put(collectorMyDrivesStatusError(error));
  }
}

export function* watchCollectorMyDrivesStatus() {
  yield takeLatest(
    COLLECTOR_MYDRIVES_STATUS_REQUEST,
    collectorMyDrivesStatusSaga
  );
}
