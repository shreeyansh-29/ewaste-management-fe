import {takeLatest, call, put} from "redux-saga/effects";
import {
  resetPasswordError,
  resetPasswordSuccess,
} from "../action/resetPasswordAction";
import {RESET_PASSWORD_REQUEST} from "../config/actionType";
import {resetPasswordService} from "../service/resetPasswordService";

function* resetPassword(action) {
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
