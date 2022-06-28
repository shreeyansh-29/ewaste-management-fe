import {
  vendorViewItemsSuccess,
  vendorViewItemsError,
} from "../../../action/vendor/vendorSalesAction/vendorViewItemsAction";
import {takeLatest, put, call} from "redux-saga/effects";
import {vendorViewItemsService} from "../../../service/vendor/vendorSalesService/vendorSalesService";
import {VENDOR_VIEW_ITEMS_REQUEST} from "../../../config/actionType";

function* vendorViewItemsSaga() {
  try {
    let response = yield call(vendorViewItemsService);
    console.log(response);
    yield put(vendorViewItemsSuccess(response));
  } catch (error) {
    yield put(vendorViewItemsError(error));
  }
}

export function* watchVendorViewItems() {
  yield takeLatest(VENDOR_VIEW_ITEMS_REQUEST, vendorViewItemsSaga);
}
