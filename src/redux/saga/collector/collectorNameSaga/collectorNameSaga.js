import {call, put, takeLatest} from "redux-saga/effects";
import * as types from "../../../config/actionType";
import {collectorNameService} from "../../../service/collector/collectorNameService/collectorNameService";
import {
  collectorNameSuccess,
  collectorNameError,
} from "../../../action/collector/collectorNameAction/collectorNameAction";

function* collectorNameSaga() {
  try {
    let response = yield call(collectorNameService);
    yield put(collectorNameSuccess(response.data));
  } catch (error) {
    yield put(collectorNameError(error));
  }
}

export function* watchCollectorName() {
  yield takeLatest(types.COLLECTOR_NAME_REQUEST, collectorNameSaga);
}
