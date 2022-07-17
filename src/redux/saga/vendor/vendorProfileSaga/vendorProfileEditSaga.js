import {takeLatest, put, call} from "redux-saga/effects";
import {VENDOR_PROFILE_EDIT_REQUEST} from "../../../config/actionType";
import {vendorProfileEditService} from "../../../service/vendor/vendorProfileService/vendorProfileEditService";
import {
  vendorProfileEditError,
  vendorProfileEditSuccess,
} from "../../../action/vendor/vendorProfileAction/vendorProfileEditAction";

export function* vendorProfileEditSaga(data) {
  try {
    let response = yield call(vendorProfileEditService, data);
    yield put(vendorProfileEditSuccess(response));
  } catch (error) {
    yield put(vendorProfileEditError(error));
  }
}

export function* watchVendorProfileEdit() {
  yield takeLatest(VENDOR_PROFILE_EDIT_REQUEST, vendorProfileEditSaga);
}
