import {call, put, takeLatest} from "redux-saga/effects";
import {COLLECTOR_SUMMARY_REQUEST} from "../../../config/actionType";
import {collectorSummaryService} from "../../../service/collector/collectorSummaryService/collectorSummaryService";
import {
  collectorSummaryError,
  collectorSummarySuccess,
} from "../../../action/collector/collectorSummaryAction/collectorSummaryAction";

function* collectorSummarySaga() {
  try {
    let response = yield call(collectorSummaryService);
    yield put(collectorSummarySuccess(response));
  } catch (error) {
    yield put(collectorSummaryError(error));
  }
}

export function* watchCollectorSummary() {
  yield takeLatest(COLLECTOR_SUMMARY_REQUEST, collectorSummarySaga);
}
