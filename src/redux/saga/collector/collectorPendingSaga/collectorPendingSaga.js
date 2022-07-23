import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_PENDING_REQUEST} from "../../../config/actionType";
import {collectorPendingService} from "../../../../services/collector/collectorPendingService/collectorPendingService";
import {
  collectorPendingError,
  collectorPendingSuccess,
} from "../../../action/collector/collectorPendingAction/collectorPendingAction";

export function* collectorPendingSaga() {
  try {
    let response = yield call(collectorPendingService);
    yield put(collectorPendingSuccess(response));
  } catch (error) {
    yield put(collectorPendingError(error));
  }
}

export function* watchCollectorPending() {
  yield takeLatest(COLLECTOR_PENDING_REQUEST, collectorPendingSaga);
}
