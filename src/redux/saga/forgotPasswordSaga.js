import {call, takeLatest, put} from "@redux-saga/core/effects";
import {
  forgotPasswordError,
  forgotPasswordSuccess,
} from "../action/forgotPasswordAction";
import * as types from "../config/actionType";
import {helper} from "../service/forgotPasswordService";

function* forgotPassword(email) {
  try {
    let response = yield call(helper, email);
    console.log("heyyy", response);
    yield put(forgotPasswordSuccess(response.status));
  } catch (err) {
    console.log(err);
    yield put(forgotPasswordError(err));
  }
}

export function* watchForgotPasswordSaga() {
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPassword);
}
