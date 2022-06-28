import {put, takeLatest, call} from "redux-saga/effects";
import * as types from "../../../config/actionType";
import {collectorProfileService} from "../../../service/collector/collectorProfileService/collectorProfileService";
import {
  collectorProfileSuccess,
  collectorProfileError,
} from "../../../action/collector/collectorProfileAction/collectorProfileAction";

function* collectorProfileSaga() {
  try {
    let response = yield call(collectorProfileService);
    yield put(collectorProfileSuccess(response.data));
  } catch (error) {
    yield put(collectorProfileError(error));
  }
}

export function* watchCollectorProfile() {
  yield takeLatest(types.COLLECTOR_PROFILE_REQUEST, collectorProfileSaga);
}
