import {call, put, takeLatest} from "redux-saga/effects";
import * as types from "../../config/actionType";
import * as actions from "../../action/vendorProfileAction/vendorProfileAction";
import {vendorProfileService} from "../../service/vendorProfileService/vendorProfileService";

function* vendorProfileSaga() {
  try {
    let response = yield call(vendorProfileService);
    // console.log("saga", response.data);
    yield put(actions.vendorProfileSuccess(response));
  } catch (error) {
    yield put(actions.vendorProfileError(error));
  }
}

export function* watchVendorProfile() {
  yield takeLatest(types.VENDOR_PROFILE_REQUEST, vendorProfileSaga);
}
