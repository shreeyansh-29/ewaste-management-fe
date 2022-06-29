import {
  vendorMyOrdersSuccess,
  vendorMyOrdersError,
} from "../../../action/vendor/vendorMyOrdersAction/vendorMyOrdersAction";
import {takeLatest, put, call} from "redux-saga/effects";
import {vendorMyOrdersService} from "../../../service/vendor/vendorMyOrdersService/vendorMyOrdersService";
import {VENDOR_MYORDERS_REQUEST} from "../../../config/actionType";

function* vendorMyOrdersSaga() {
  try {
    let response = yield call(vendorMyOrdersService);
    yield put(vendorMyOrdersSuccess(response.data));
  } catch (error) {
    yield put(vendorMyOrdersError(error));
  }
}

export function* watchVendorMyOrders() {
  yield takeLatest(VENDOR_MYORDERS_REQUEST, vendorMyOrdersSaga);
}
