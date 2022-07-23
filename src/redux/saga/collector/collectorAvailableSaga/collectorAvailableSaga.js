import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_AVAILABLE_REQUEST} from "../../../config/actionType";
import {
  collectorAvailableError,
  collectorAvailableSuccess,
} from "../../../action/collector/collectorAvailableAction/collectorAvailableAction";
import {collectorAvailableService} from "../../../../services/collector/collectorAvailableService/collectorAvailableService";

export function* collectorAvailableSaga() {
  try {
    let response = yield call(collectorAvailableService);
    yield put(collectorAvailableSuccess(response));
  } catch (error) {
    yield put(collectorAvailableError(error));
  }
}

export function* watchCollectorAvailable() {
  yield takeLatest(COLLECTOR_AVAILABLE_REQUEST, collectorAvailableSaga);
}
