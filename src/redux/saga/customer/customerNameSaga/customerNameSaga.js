import {call, put, takeLatest} from "redux-saga/effects";
import {
  customerNameError,
  customerNameSuccess,
} from "../../../action/customer/customerNameAction/customerNameAction";
import {customerNameService} from "../../../service/customer/customerNameService/customerNameService";
import * as types from "../../../config/actionType";

export function* customerNameSaga() {
  try {
    let response = yield call(customerNameService);
    yield put(customerNameSuccess(response.data));
  } catch (error) {
    yield put(customerNameError);
  }
}

export function* watchCustomerName() {
  yield takeLatest(types.CUSTOMER_NAME_REQUEST, customerNameSaga);
}
