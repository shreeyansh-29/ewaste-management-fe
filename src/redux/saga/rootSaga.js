import {all} from "redux-saga/effects";
import {watchCustomerName} from "./customerNameSaga/customerNameSaga";
import {watchCustomerNotification} from "./customerNotificationSaga/customerNotificationSaga";
import {watchForgotPasswordSaga} from "./forgotPasswordSaga/forgotPasswordSaga";
import {watchResetPasswordSaga} from "./resetPasswordSaga/resetPasswordSaga";
import {watchSignInSaga} from "./signInSaga/signInSaga";
import {watchSignUpSaga} from "./signUpSaga/signUpSaga";
import {watchCollectorName} from "./collectorNameSaga/collectorNameSaga";
import {watchVendorName} from "./vendorNameSaga/vendorNameSaga";

function* rootSaga() {
  yield all([
    watchForgotPasswordSaga(),
    watchResetPasswordSaga(),
    watchSignInSaga(),
    watchSignUpSaga(),
    watchCustomerName(),
    watchCustomerNotification(),
    watchCollectorName(),
    watchVendorName(),
  ]);
}

export default rootSaga;
