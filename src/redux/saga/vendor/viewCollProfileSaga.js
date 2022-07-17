import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  vendorViewAcceptCollectorSuccess,
  vendorViewAcceptCollectorError,
} from "../../action/vendor/viewCollProfileAction";
import {viewColProfileService} from "../../service/vendor/viewColProfileService";
import {VENDOR_COLLECTORPROFILE_REQUEST} from "../../config/actionType";

export function* viewAcceptColProfileSaga(data) {
  try {
    let response = yield call(viewColProfileService, data);
    yield put(vendorViewAcceptCollectorSuccess(response));
  } catch (err) {
    yield put(vendorViewAcceptCollectorError(err));
  }
}

export function* watchViewCollProfileSaga() {
  yield takeLatest(VENDOR_COLLECTORPROFILE_REQUEST, viewAcceptColProfileSaga);
}
