import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  viewCustomerProfileSuccess,
  viewCustomerProfileError,
} from "../../action/collector/viewCustomerProfileAction";
import {viewCustomerProfileService} from "../../../services/collector/viewCustomerProfileService";
import {COLLECTOR_CUSTOMERPROFILE_REQUEST} from "../../config/actionType";

export function* viewCustomerProfileSaga(data) {
  try {
    let response = yield call(viewCustomerProfileService, data);
    yield put(viewCustomerProfileSuccess(response));
  } catch (err) {
    yield put(viewCustomerProfileError(err));
  }
}

export function* watchViewCustomerProfileSaga() {
  yield takeLatest(COLLECTOR_CUSTOMERPROFILE_REQUEST, viewCustomerProfileSaga);
}
