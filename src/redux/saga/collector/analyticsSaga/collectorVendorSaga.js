import {COLLECTOR_VENDOR_REQUEST} from "../../../config/actionType";
import {takeLatest, put, call} from "redux-saga/effects";
import {collectorVendorService} from "../../../service/collector/analyticsService/collectorVendorService";
import {
  collectorVendorSuccess,
  collectorVendorError,
} from "../../../action/collector/analyticsAction/collectorVendorAction";

function* collectorVendorSaga() {
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
