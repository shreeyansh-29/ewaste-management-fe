import {call, put, takeLatest} from "redux-saga/effects";
import {
  signInError,
  signInSuccess,
} from "../../action/signInAction/signInActions";
import * as types from "../../config/actionType";
import {signInService} from "../../../services/signInService/signInService";

export function* signInSaga(data) {
  try {
    let response = yield call(signInService, data);
    yield put(signInSuccess(response));
  } catch (error) {
    yield put(signInError(error));
  }
}

export function* watchSignInSaga() {
  yield takeLatest(types.SIGN_IN_REQUEST, signInSaga);
}
