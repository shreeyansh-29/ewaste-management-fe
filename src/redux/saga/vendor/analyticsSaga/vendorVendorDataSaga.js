import {takeLatest, put, call} from "redux-saga/effects";
import {VENDOR_VENDOR_DATA_REQUEST} from "../../../config/actionType";
import {vendorVendorDataService} from "../../../../services/vendor/analyicsService/vendorVendorDataService";
import {
  vendorVendorDataError,
  vendorVendorDataSuccess,
} from "../../../action/vendor/analyticsAction/vendorVendorDataAction";

export function* vendorVendorDataSaga() {
  try {
    let response = yield call(vendorVendorDataService);
    yield put(vendorVendorDataSuccess(response));
  } catch (error) {
    yield put(vendorVendorDataError(error));
  }
}

export function* watchVendorVendorData() {
  yield takeLatest(VENDOR_VENDOR_DATA_REQUEST, vendorVendorDataSaga);
}
