import {call, put, takeLatest} from "redux-saga/effects";
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorProfileAction/vendorProfileAction";
import {vendorProfileService} from "../../../service/vendor/vendorProfileService/vendorProfileService";

function* vendorProfileSaga() {
  try {
    let response = yield call(vendorProfileService);
    yield put(actions.vendorProfileSuccess(response.data));
  } catch (error) {
    yield put(actions.vendorProfileError(error));
  }
}

export function* watchVendorProfile() {
  yield takeLatest(types.VENDOR_PROFILE_REQUEST, vendorProfileSaga);
}
