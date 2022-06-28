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
import {watchCustomerEWaste} from "./customer/customerEWasteSaga/customerEWasteSaga";
import {watchCustomerDropOff} from "./customer/customerDropOffSaga/customerDropOffSaga";
import {watchCustomerViewCollectors} from "./customer/customerViewCollectorSaga/customerViewCollectorSaga";
import {watchCustomerWasteGenerated} from "./customer/analyticsSaga/customerWasteGeneratedSaga";
import {watchCustomerCollectorCategories} from "./customer/analyticsSaga/customerCollectorCategoriesSaga";
import {watchCustomerDrives} from "./customer/analyticsSaga/customerDrivesSaga";
import {watchCollectorEWasteDrives} from "./collector/analyticsSaga/collectorEWasteDrivesSaga";
import {watchCollectorEWasteItems} from "./collector/analyticsSaga/collectorEWasteItemsSaga";
import {watchCollectorRevenueChart} from "./collector/analyticsSaga/collectorRevenueChartSaga";
import {watchCollectorUsers} from "./collector/analyticsSaga/collectorUsersSaga";
import {watchCollectorVendor} from "./collector/analyticsSaga/collectorVendorSaga";
import {watchVendorCategory} from "./vendor/analyticsSaga/vendorCategorySaga";
import {watchVendorCatgItems} from "./vendor/analyticsSaga/vendorCatgItemsSaga";
import {watchVendorVendorData} from "./vendor/analyticsSaga/vendorVendorDataSaga";
import {watchVendorCollectorData} from "./vendor/analyticsSaga/vendorCollectorDataSaga";

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
    watchCustomerEWaste(),
    watchCustomerDropOff(),
    watchCustomerViewCollectors(),
    watchCustomerWasteGenerated(),
    watchCustomerCollectorCategories(),
    watchCustomerDrives(),
    watchCollectorName(),
    watchCollectorNotificationCount(),
    watchCollectorNotificationData(),
    watchCollectorProfile(),
    watchCollectorEWasteDrives(),
    watchCollectorEWasteItems(),
    watchCollectorRevenueChart(),
    watchCollectorUsers(),
    watchCollectorVendor(),
    watchVendorName(),
    watchVendorProfile(),
    watchVendorCatgItems(),
    watchVendorCategory(),
    watchVendorCollectorData(),
    watchVendorVendorData(),
  ]);
}

export default rootSaga;
