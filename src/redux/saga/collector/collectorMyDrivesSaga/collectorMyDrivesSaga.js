import {COLLECTOR_MYDRIVES_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorMyDrivesService} from "../../../service/collector/collectorMyDrivesService/collectorMyDrivesService";
import {
  collectorMyDrivesSuccess,
  collectorMyDrivesError,
} from "../../../action/collector/collectorMyDrivesAction/collectorMyDrivesAction";

function* collectorMyDrivesSaga() {
  try {
    let response = yield call(collectorMyDrivesService);
    yield put(collectorMyDrivesSuccess(response.data));
  } catch (error) {
    yield put(collectorMyDrivesError(error));
  }
}

export function* watchCollectorMyDrives() {
  yield takeLatest(COLLECTOR_MYDRIVES_REQUEST, collectorMyDrivesSaga);
}
