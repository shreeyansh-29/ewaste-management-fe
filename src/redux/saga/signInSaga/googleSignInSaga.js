import {takeLatest, call, put} from "redux-saga/effects";
import {googleSignInService} from "../../service/signInService/googleSignInService";
import {GOOGLE_SIGNIN_REQUEST} from "../../config/actionType";
import {
  googleSignInError,
  googleSignInSuccess,
} from "../../action/signInAction/googleSignInAction";

function* googleSignInSaga(data) {
  try {
    let response = yield call(googleSignInService, data);
    response = yield response.json();
    yield put(googleSignInSuccess(response));
  } catch (error) {
    yield put(googleSignInError(error));
  }
}

export function* watchGoogleSignIn() {
  yield takeLatest(GOOGLE_SIGNIN_REQUEST, googleSignInSaga);
}
