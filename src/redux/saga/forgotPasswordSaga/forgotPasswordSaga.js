import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  forgotPasswordError,
  forgotPasswordSuccess,
} from "../../action/forgotPasswordAction/forgotPasswordAction";
import * as types from "../../config/actionType";
import {forgotPasswordService} from "../../../services/forgotPasswordService/forgotPasswordService";

export function* forgotPassword(email) {
  try {
    let response = yield call(forgotPasswordService, email);
    yield put(forgotPasswordSuccess(response.status));
  } catch (err) {
    yield put(forgotPasswordError(err));
  }
}

export function* watchForgotPasswordSaga() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPassword);
}
