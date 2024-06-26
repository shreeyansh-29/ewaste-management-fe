import {call, put, takeLatest} from "redux-saga/effects";
import * as types from "../../../config/actionType";
import * as actions from "../../../action/vendor/vendorNameAction/vendorNameAction";
import {vendorNameService} from "../../../../services/vendor/vendorNameService/vendorNameService";

export function* vendorNameSaga() {
  try {
    let response = yield call(vendorNameService);
    yield put(actions.vendorNameSuccess(response.data));
  } catch (error) {
    yield put(actions.vendorNameError(error));
  }
}

export function* watchVendorName() {
  yield takeLatest(types.VENDOR_NAME_REQUEST, vendorNameSaga);
}
