import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  vendorCollectorProfileSuccess,
  vendorCollectorProfileError,
} from "../../action/vendor/viewAcceptCollectorProfileAction";
import {viewAcceptCollProfileService} from "../../service/vendor/viewAcceptCollProfileService";
import {VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST} from "../../config/actionType";

function* viewColProfileSaga(data) {
  try {
    let response = yield call(viewAcceptCollProfileService, data);
    yield put(vendorCollectorProfileSuccess(response));
  } catch (err) {
    yield put(vendorCollectorProfileError(err));
  }
}

export function* watchViewAcceptColProfileSaga() {
  yield takeLatest(VENDOR_COLLECTORPROFILE_ACCEPT_REQUEST, viewColProfileSaga);
}
