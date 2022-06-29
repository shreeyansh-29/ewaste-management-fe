import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  cusRequestCollectorSuccess,
  cusRequestCollectorError,
} from "../../action/customer/viewCollectorProfileAction";
import {viewCollectorProfileService} from "../../service/customer/viewCollectorProfileService";
import {CUSTOMER_COLLECTORPROFILE_REQUEST} from "../../config/actionType";

function* viewCollectorProfileSaga(data) {
  try {
    let response = yield call(viewCollectorProfileService, data);
    yield put(cusRequestCollectorSuccess(response));
  } catch (err) {
    yield put(cusRequestCollectorError(err));
  }
}

export function* watchViewCollectorProfileSaga() {
  yield takeLatest(CUSTOMER_COLLECTORPROFILE_REQUEST, viewCollectorProfileSaga);
}
