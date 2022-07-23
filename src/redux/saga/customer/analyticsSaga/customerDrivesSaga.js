import {call, put, takeLatest} from "redux-saga/effects";
import {
  customerDrivesError,
  customerDrivesSuccess,
} from "../../../action/customer/analyticsAction/customerDrivesAction";
import {CUSTOMER_DRIVES_REQUEST} from "../../../config/actionType";
import {customerDrivesService} from "../../../../services/customer/analyticsService/customerDrivesService";

export function* customerDrivesSaga() {
  try {
    let response = yield call(customerDrivesService);
    yield put(customerDrivesSuccess(response));
  } catch (error) {
    yield put(customerDrivesError(error));
  }
}

export function* watchCustomerDrives() {
  yield takeLatest(CUSTOMER_DRIVES_REQUEST, customerDrivesSaga);
}
