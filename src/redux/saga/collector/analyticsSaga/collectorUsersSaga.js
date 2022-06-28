import {COLLECTOR_USERS_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorUsersService} from "../../../service/collector/analyticsService/collectorUsersService";
import {
  collectorUsersSuccess,
  collectorUsersError,
} from "../../../action/collector/analyticsAction/collectorUsersAction";

function* collectorUsersSaga() {
  try {
    let response = yield call(collectorUsersService);
    yield put(collectorUsersSuccess(response));
  } catch (error) {
    yield put(collectorUsersError(error));
  }
}

export function* watchCollectorUsers() {
  yield takeLatest(COLLECTOR_USERS_REQUEST, collectorUsersSaga);
}
