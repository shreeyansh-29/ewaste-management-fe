import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  viewCollectorProfileSuccess,
  viewCollectorProfileError,
} from "../../action/customer/viewCollectorProfileAction";
import {viewCollectorProfileService} from "../../../services/customer/viewCollectorProfileService";
import {CUSTOMER_COLLECTORPROFILE_REQUEST} from "../../config/actionType";

export function* viewCollectorProfileSaga(data) {
  try {
    let response = yield call(viewCollectorProfileService, data);
    yield put(viewCollectorProfileSuccess(response));
  } catch (error) {
    yield put(viewCollectorProfileError(error));
  }
}

export function* watchViewCollectorProfileSaga() {
  yield takeLatest(CUSTOMER_COLLECTORPROFILE_REQUEST, viewCollectorProfileSaga);
}
