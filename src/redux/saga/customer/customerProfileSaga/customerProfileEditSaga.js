import {takeLatest, put, call} from "redux-saga/effects";
import {CUSTOMER_PROFILE_EDIT_REQUEST} from "../../../config/actionType";
import {customerProfileEditService} from "../../../service/customer/customerProfileService/customerProfileEditService";
import {
  customerProfileEditError,
  customerProfileEditSuccess,
} from "../../../action/customer/customerProfileAction/customerProfileEditAction";

export function* customerProfileEditSaga(data) {
  try {
    let response = yield call(customerProfileEditService, data);
    yield put(customerProfileEditSuccess(response));
  } catch (error) {
    yield put(customerProfileEditError(error));
  }
}

export function* watchCustomerProfileEdit() {
  yield takeLatest(CUSTOMER_PROFILE_EDIT_REQUEST, customerProfileEditSaga);
}
