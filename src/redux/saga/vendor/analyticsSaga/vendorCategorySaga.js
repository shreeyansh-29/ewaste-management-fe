import {takeLatest, put, call} from "redux-saga/effects";
import {VENDOR_CATEGORY_REQUEST} from "../../../config/actionType";
import {vendorCategoryService} from "../../../service/vendor/analyicsService/vendorCategoryService";
import {
  vendorCategoryError,
  vendorCategorySuccess,
} from "../../../action/vendor/analyticsAction/vendorCategoryAction";

function* vendorCategorySaga() {
  try {
    let response = yield call(vendorCategoryService);
    yield put(vendorCategorySuccess(response));
  } catch (error) {
    yield put(vendorCategoryError(error));
  }
}

export function* watchVendorCategory() {
  yield takeLatest(VENDOR_CATEGORY_REQUEST, vendorCategorySaga);
}
