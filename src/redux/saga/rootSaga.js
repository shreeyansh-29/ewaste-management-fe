import {all} from "redux-saga/effects";
import {watchCustomerName} from "./customer/customerNameSaga/customerNameSaga";
import {watchCustomerNotificationCount} from "./customer/customerNotificationSaga/customerNotificationCountSaga";
import {watchCollectorNotificationData} from "./collector/collectorNotificationSaga/collectorNotificationDataSaga";
import {watchForgotPasswordSaga} from "./forgotPasswordSaga/forgotPasswordSaga";
import {watchResetPasswordSaga} from "./resetPasswordSaga/resetPasswordSaga";
import {watchSignInSaga} from "./signInSaga/signInSaga";
import {watchSignUpSaga} from "./signUpSaga/signUpSaga";
import {watchCollectorName} from "./collector/collectorNameSaga/collectorNameSaga";
import {watchVendorName} from "./vendor/vendorNameSaga/vendorNameSaga";
import {watchCollectorNotificationCount} from "./collector/collectorNotificationSaga/collectorNotificationCountSaga";
import {watchCustomerNotificationData} from "./customer/customerNotificationSaga/customerNotificationDataSaga";
import {watchCustomerProfile} from "./customer/customerProfileSaga/customerProfileSaga";
import {watchVendorProfile} from "./vendor/vendorProfileSaga/vendorProfileSaga";
import {watchCollectorProfile} from "./collector/collectorProfileSaga/collectorProfileSaga";

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
