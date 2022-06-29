import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  viewAcceptCollectorSuccess,
  viewAcceptCollectorError,
} from "../../action/vendor/viewCollProfileAction";
import {viewColProfileService} from "../../service/vendor/viewColProfileService";
import {VENDOR_COLLECTORPROFILE_REQUEST} from "../../config/actionType";

function* viewAcceptColProfileSaga(data) {
  try {
    let response = yield call(viewColProfileService, data);
    yield put(viewAcceptCollectorSuccess(response.data));
  } catch (err) {
    yield put(viewAcceptCollectorError(err));
  }
}

export function* watchViewCollProfileSaga() {
  yield takeLatest(VENDOR_COLLECTORPROFILE_REQUEST, viewAcceptColProfileSaga);
}
