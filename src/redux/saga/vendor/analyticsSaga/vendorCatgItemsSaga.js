import {takeLatest, put, call} from "redux-saga/effects";
import {VENDOR_CATGITEMS_REQUEST} from "../../../config/actionType";
import {vendorCatgItemsService} from "../../../service/vendor/analyicsService/vendorCatgItemsService";
import {
  vendorCatgItemsError,
  vendorCatgItemsSuccess,
} from "../../../action/vendor/analyticsAction/vendorCatgItemsAction";

export function* vendorCatgItemsSaga() {
  try {
    let response = yield call(vendorCatgItemsService);
    yield put(vendorCatgItemsSuccess(response));
  } catch (error) {
    yield put(vendorCatgItemsError(error));
  }
}

export function* watchVendorCatgItems() {
  yield takeLatest(VENDOR_CATGITEMS_REQUEST, vendorCatgItemsSaga);
}
