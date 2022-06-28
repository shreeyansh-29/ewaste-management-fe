import {
  vendorViewItemsSuccess,
  vendorViewItemsError,
} from "../../../action/vendor/vendorSalesAction/vendorViewItemsAction";
import {takeLatest, put, call} from "redux-saga/effects";
import {vendorAcceptItemsService} from "../../../service/vendor/vendorSalesService/vendorAcceptItemsService";
import {VENDOR_ACCEPT_ITEMS_REQUEST} from "../../../config/actionType";

function* vendorAcceptItemsSaga(data) {
  try {
    let response = yield call(vendorAcceptItemsService, data);
    console.log(response);
    response = yield response.json();
    yield put(vendorViewItemsSuccess(response));
  } catch (error) {
    yield put(vendorViewItemsError(error));
  }
}

export function* watchVendorAcceptItems() {
  yield takeLatest(VENDOR_ACCEPT_ITEMS_REQUEST, vendorAcceptItemsSaga);
}
