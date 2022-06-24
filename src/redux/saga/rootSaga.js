import {all} from "redux-saga/effects";
import {watchCustomerName} from "./customerNameSaga/customerNameSaga";
import {watchCustomerNotificationCount} from "./customerNotificationSaga/customerNotificationCountSaga";
import {watchCollectorNotificationData} from "./collectorNotificationSaga/collectorNotificationDataSaga";
import {watchForgotPasswordSaga} from "./forgotPasswordSaga/forgotPasswordSaga";
import {watchResetPasswordSaga} from "./resetPasswordSaga/resetPasswordSaga";
import {watchSignInSaga} from "./signInSaga/signInSaga";
import {watchSignUpSaga} from "./signUpSaga/signUpSaga";
import {watchCollectorName} from "./collectorNameSaga/collectorNameSaga";
import {watchVendorName} from "./vendorNameSaga/vendorNameSaga";
import {watchCollectorNotificationCount} from "./collectorNotificationSaga/collectorNotificationCountSaga";
import {watchCustomerNotificationData} from "./customerNotificationSaga/customerNotificationDataSaga";
import {watchCustomerProfile} from "./customerProfileSaga/customerProfileSaga";
import {watchVendorProfile} from "./vendorProfileSaga/vendorProfileSaga";
import {watchCollectorProfile} from "./collectorProfileSaga/collectorProfileSaga";

function* rootSaga() {
  yield all([
    watchForgotPasswordSaga(),
    watchResetPasswordSaga(),
    watchSignInSaga(),
    watchSignUpSaga(),
    watchCustomerName(),
    watchCustomerNotificationCount(),
    watchCustomerNotificationData(),
    watchCustomerProfile(),
    watchCollectorName(),
    watchCollectorNotificationCount(),
    watchCollectorNotificationData(),
    watchCollectorProfile(),
    watchVendorName(),
    watchVendorProfile(),
  ]);
}

export default rootSaga;
