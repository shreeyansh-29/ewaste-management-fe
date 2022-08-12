import {
  vendorAcceptItemsSuccess,
  vendorAcceptItemsError,
} from "../../../action/vendor/vendorSalesAction/vendorAcceptItemsAction";
import {takeLatest, put, call} from "redux-saga/effects";
import {vendorAcceptItemsService} from "../../../../services/vendor/vendorSalesService/vendorAcceptItemsService";
import {VENDOR_ACCEPT_ITEMS_REQUEST} from "../../../config/actionType";

export function* vendorAcceptItemsSaga(data) {
  try {
    let response = yield call(vendorAcceptItemsService, data);
    yield put(vendorAcceptItemsSuccess(response.data));
  } catch (error) {
    yield put(vendorAcceptItemsError(error));
  }
}

export function* watchVendorAcceptItems() {
  yield takeLatest(VENDOR_ACCEPT_ITEMS_REQUEST, vendorAcceptItemsSaga);
}
