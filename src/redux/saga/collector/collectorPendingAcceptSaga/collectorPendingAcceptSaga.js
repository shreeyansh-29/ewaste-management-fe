import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_PENDING_ACCEPT_REQUEST} from "../../../config/actionType";
import {collectorPendingAcceptService} from "../../../service/collector/collectorPendingAcceptService/collectorPendingAcceptService";
import {
  collectorPendingAcceptError,
  collectorPendingAcceptSuccess,
} from "../../../action/collector/collectorPendingAcceptAction/collectorPendingAcceptAction";

function* collectorPendingAcceptSaga(data) {
  try {
    let response = yield call(collectorPendingAcceptService, data);
    console.log(response);
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
