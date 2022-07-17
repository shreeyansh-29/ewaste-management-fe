import * as types from "../../config/actionType";
import {call, put, takeLatest} from "redux-saga/effects";
import {signUpService} from "../../service/signUpService/signUpService";
import {
  signUpSuccess,
  signUpError,
} from "../../action/signUpAction/signUpAction";
export function* signUpSaga(data) {
  try {
    let response = yield call(signUpService, data);
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpError(error));
  }
}

export function* watchSignUpSaga() {
  yield takeLatest(types.SIGN_UP_REQUEST, signUpSaga);
}
