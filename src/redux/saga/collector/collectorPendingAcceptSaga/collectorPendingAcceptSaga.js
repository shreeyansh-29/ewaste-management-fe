import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_PENDING_ACCEPT_REQUEST} from "../../../config/actionType";
import {collectorPendingService} from "../../../service/collector/collectorPendingService/collectorPendingService";
import {
  collectorPendingAcceptError,
  collectorPendingAcceptSuccess,
} from "../../../action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";

function* collectorPendingAcceptSaga() {
  try {
    let response = yield call(collectorPendingService);
    yield put(collectorPendingAcceptSuccess(response.data));
  } catch (error) {
    yield put(collectorPendingAcceptError(error));
  }
}

export function* watchCollectorPendingAccept() {
  yield takeLatest(
    COLLECTOR_PENDING_ACCEPT_REQUEST,
    collectorPendingAcceptSaga
  );
}
