import {takeLatest, put, call} from "redux-saga/effects";
import {VENDOR_COLLECTOR_DATA_REQUEST} from "../../../config/actionType";
import {vendorCollectorDataService} from "../../../service/vendor/analyicsService/vendorCollectorDataService";
import {
  vendorCollectorDataError,
  vendorCollectorDataSuccess,
} from "../../../action/vendor/analyticsAction/vendorCollectorDataAction";

export function* vendorCollectorDataSaga() {
  try {
    let response = yield call(vendorCollectorDataService);
    yield put(vendorCollectorDataSuccess(response));
  } catch (error) {
    yield put(vendorCollectorDataError(error));
  }
}

export function* watchVendorCollectorData() {
  yield takeLatest(VENDOR_COLLECTOR_DATA_REQUEST, vendorCollectorDataSaga);
}
