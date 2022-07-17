import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_SOLD_REQUEST} from "../../../config/actionType";
import {
  collectorSoldError,
  collectorSoldSuccess,
} from "../../../action/collector/collectorSoldAction/collectorSoldAction";
import {collectorSoldService} from "../../../service/collector/collectorSoldService/collectorSoldService";

export function* collectorSoldSaga() {
  try {
    let response = yield call(collectorSoldService);
    yield put(collectorSoldSuccess(response.data));
  } catch (error) {
    yield put(collectorSoldError(error));
  }
}

export function* watchCollectorSold() {
  yield takeLatest(COLLECTOR_SOLD_REQUEST, collectorSoldSaga);
}
