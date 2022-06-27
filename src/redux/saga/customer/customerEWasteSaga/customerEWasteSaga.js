import * as types from "../../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import {customerEWasteService} from "../../../service/customer/customerEWasteService/customerEWasteService";
import {
  customerEWasteDrivesError,
  customerEWasteDrivesSuccess,
} from "../../../action/customer/customerEWasteAction/customerEWasteAction";

function* customerEWasteSaga() {
  try {
    let response = yield call(customerEWasteService);
    yield put(customerEWasteDrivesSuccess(response));
  } catch (error) {
    yield put(customerEWasteDrivesError(error));
  }
}

export function* watchCustomerEWaste() {
  yield takeLatest(types.CUSTOMER_EWASTE_DRIVES_REQUEST, customerEWasteSaga);
}
