import {takeLatest, put, call} from "redux-saga/effects";
import {COLLECTOR_PROFILE_EDIT_REQUEST} from "../../../config/actionType";
import {collectorProfileEditService} from "../../../../services/collector/collectorProfileService/collectorProfileEditService";
import {
  collectorProfileEditError,
  collectorProfileEditSuccess,
} from "../../../action/collector/collectorProfileAction/collectorProfileEditAction";

export function* collectorProfileEditSaga(data) {
  try {
    let response = yield call(collectorProfileEditService, data);
    yield put(collectorProfileEditSuccess(response));
  } catch (error) {
    yield put(collectorProfileEditError(error));
  }
}

export function* watchCollectorProfileEdit() {
  yield takeLatest(COLLECTOR_PROFILE_EDIT_REQUEST, collectorProfileEditSaga);
}
