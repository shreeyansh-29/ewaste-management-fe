import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  colRequestCustomerError,
  colRequestCustomerSuccess,
} from "../../action/collector/viewCustomerProfileAction";
import {viewCustomerProfileService} from "../../service/collector/viewCustomerProfileService";
import {COLLECTOR_CUSTOMERPROFILE_REQUEST} from "../../config/actionType";

function* viewCustomerProfileSaga(data) {
  try {
    let response = yield call(viewCustomerProfileService, data);
    yield put(colRequestCustomerSuccess(response));
  } catch (err) {
    yield put(colRequestCustomerError(err));
  }
}

export function* watchViewCustomerProfileSaga() {
  yield takeLatest(COLLECTOR_CUSTOMERPROFILE_REQUEST, viewCustomerProfileSaga);
}
