import {takeLatest, call, put} from "redux-saga/effects";
import {
  resetPasswordError,
  resetPasswordSuccess,
} from "../../action/resetPasswordAction/resetPasswordAction";
import {RESET_PASSWORD_REQUEST} from "../../config/actionType";
import {resetPasswordService} from "../../../services/resetPasswordService/resetPasswordService";

export function* resetPassword(action) {
  try {
    let response = yield call(resetPasswordService, action);
    yield put(resetPasswordSuccess(response.status));
  } catch (err) {
    yield put(resetPasswordError(err));
  }
}

export function* watchResetPasswordSaga() {
  yield takeLatest(RESET_PASSWORD_REQUEST, resetPassword);
}
