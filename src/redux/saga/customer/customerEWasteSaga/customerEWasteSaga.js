import * as types from "../../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import {customerEWasteService} from "../../../service/customer/customerEWasteService/customerEWasteService";
import {customerEWasteDrivesError} from "../../../action/customer/customerEWasteAction/customerEWasteAction";

function* customerEWasteSaga() {
  try {
    let response = yield call(customerEWasteService);
    console.log("saga", response);
  } catch (error) {
    yield put(customerEWasteDrivesError(error));
  }
}

export function* watchCustomerEWaste() {
  yield takeLatest(types.CUSTOMER_EWASTE_DRIVES_REQUEST, customerEWasteSaga);
}
