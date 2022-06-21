import {all} from "redux-saga/effects";
import {watchForgotPasswordSaga} from "./forgotPasswordSaga";

function* rootSaga() {
  yield all([watchForgotPasswordSaga()]);
}

export default rootSaga;
