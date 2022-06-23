import {call, put, takeLatest} from "redux-saga/effects";
import {
  signInError,
  signInSuccess,
} from "../../action/signInAction/signInActions";
import * as types from "../../config/actionType";
import {signInService} from "../../service/signInService/signInService";

function* signInSaga(data) {
  // console.log(data);
  try {
    let response = yield call(signInService, data);
    // console.log("service", response);
    response = yield response.json();
    yield put(signInSuccess(response));
  } catch (error) {
    // console.log("error", error);
    yield put(signInError(error));
  }
}

export function* watchSignInSaga() {
  yield takeLatest(types.SIGN_IN_REQUEST, signInSaga);
}
