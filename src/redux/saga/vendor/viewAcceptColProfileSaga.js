import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  venRequestCollectorAcceptSuccess,
  venRequestCollectorAcceptError,
} from "../../action/vendor/viewAcceptCollectorProfileAction";
import {viewAcceptCollProfileService} from "../../service/vendor/viewAcceptCollProfileService";
import {VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST} from "../../config/actionType";

function* viewColProfileSaga(data) {
  try {
    let response = yield call(viewAcceptCollProfileService, data);
    yield put(venRequestCollectorAcceptSuccess(response));
  } catch (err) {
    yield put(venRequestCollectorAcceptError(err));
  }
}

export function* watchViewAcceptColProfileSaga() {
  yield takeLatest(VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST, viewColProfileSaga);
}
