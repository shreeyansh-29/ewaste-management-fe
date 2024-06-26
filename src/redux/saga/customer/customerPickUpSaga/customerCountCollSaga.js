import {call, put, takeLatest} from "redux-saga/effects";
import {CUSTOMER_COUNT_COLL_REQUEST} from "../../../config/actionType";
import * as types from "../../../action/customer/customerPickUpAction/customerCountCollAction";
import {customerCountCollService} from "../../../../services/customer/customerPickUpService/customerCountCollService";

export function* customerCountCollSaga(data) {
  try {
    let response = yield call(customerCountCollService, data);
    yield put(types.customerCountCollSuccess(response));
  } catch (error) {
    yield put(types.customerCountCollError(error));
  }
}

export function* watchCustomerCountColl() {
  yield takeLatest(CUSTOMER_COUNT_COLL_REQUEST, customerCountCollSaga);
}
