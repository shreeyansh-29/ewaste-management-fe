import {
  collectorEWasteDrivesError,
  collectorEWasteDrivesSuccess,
} from "../../../action/collector/analyticsAction/collectorEWasteDrivesAction";
import {COLLECTOR_EWASTE_DRIVES_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorEWasteDrivesService} from "../../../service/collector/analyticsService/collectorEWasteDrivesService";

function* collectorEWasteDrivesSaga() {
  try {
    let response = yield call(collectorEWasteDrivesService);
    yield put(collectorEWasteDrivesSuccess(response));
  } catch (error) {
    yield put(collectorEWasteDrivesError(error));
  }
}

export function* watchCollectorEWasteDrives() {
  yield takeLatest(COLLECTOR_EWASTE_DRIVES_REQUEST, collectorEWasteDrivesSaga);
}
