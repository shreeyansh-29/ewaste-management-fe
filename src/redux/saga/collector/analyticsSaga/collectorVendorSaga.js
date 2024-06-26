import {COLLECTOR_VENDOR_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorVendorService} from "../../../../services/collector/analyticsService/collectorVendorService";
import {
  collectorVendorSuccess,
  collectorVendorError,
} from "../../../action/collector/analyticsAction/collectorVendorAction";

export function* collectorVendorSaga() {
  try {
    let response = yield call(collectorVendorService);
    yield put(collectorVendorSuccess(response));
  } catch (error) {
    yield put(collectorVendorError(error));
  }
}

export function* watchCollectorVendor() {
  yield takeLatest(COLLECTOR_VENDOR_REQUEST, collectorVendorSaga);
}
