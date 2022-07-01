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
import {watchVendorViewItems} from "./vendor/vendorSalesSaga/vendorViewItemsSaga";
import {watchVendorAcceptItems} from "./vendor/vendorSalesSaga/vendorAcceptItemsSaga";
import {watchVendorMyOrders} from "./vendor/vendorMyOrdersSaga/vendorMyOrdersSaga";
import {watchCollectorOrganizeDrive} from "./collector/collectorOrganizeDriveSaga/collectorOrganizeDriveSaga";
import {watchCollectorForSale} from "./collector/collectorForSaleSaga/collectorForSaleSaga";
import {watchCollectorMyDrives} from "./collector/collectorMyDrivesSaga/collectorMyDrivesSaga";
import {watchCollectorMyDrivesStatus} from "./collector/collectorMyDrivesStatusSaga/collectorMyDrivesStatusSaga";
import {watchCollectorAvailable} from "./collector/collectorAvailableSaga/collectorAvailableSaga";
import {watchCollectorSold} from "./collector/collectorSoldSaga/collectorSoldSaga";
import {watchViewAcceptColProfileSaga} from "./vendor/viewAcceptColProfileSaga";
import {watchViewCollProfileSaga} from "./vendor/viewCollProfileSaga";
import {watchViewCollectorProfileSaga} from "./customer/viewCollectorProfileSaga";
import {watchVendorProfileEdit} from "./vendor/vendorProfileSaga/vendorProfileEditSaga";
import {watchCustomerProfileEdit} from "./customer/customerProfileSaga/customerProfileEditSaga";
import {watchCollectorProfileEdit} from "./collector/collectorProfileSaga/collectorProfileEditSaga";
import {watchCustomerCountColl} from "./customer/customerPickUpSaga/customerCountCollSaga";
import {watchCustomerPickUp} from "./customer/customerPickUpSaga/customerPickUpSaga";
import {watchCollectorPending} from "./collector/collectorPendingSaga/collectorPendingSaga";
import {watchCollectorPendingAccept} from "./collector/collectorPendingAcceptSaga/collectorPendingAcceptSaga";
import {watchCollectorSummary} from "./collector/collectorSummarySaga/collectorSummarySaga";
import {watchCustomerCompletedRequest} from "./customer/customerCompletedRequestSaga/customerCompletedRequestSaga";
import {watchCustomerPendingRequest} from "./customer/customerPendingRequestSaga/customerPendingRequestSaga";
import {watchCustomerExpiredRequest} from "./customer/customerExpiredRequestSaga/customerExpiredRequestSaga";
import {watchCustomerPendingDecline} from "./customer/customerPendingRequestSaga/customerPendingDeclineSaga";

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
    watchCustomerProfileEdit(),
    watchCustomerEWaste(),
    watchCustomerPickUp(),
    watchCustomerCountColl(),
    watchCustomerDropOff(),
    watchCustomerViewCollectors(),
    watchCustomerWasteGenerated(),
    watchCustomerCollectorCategories(),
    watchCustomerDrives(),
    watchCustomerCompletedRequest(),
    watchCustomerPendingRequest(),
    watchCustomerExpiredRequest(),
    watchCustomerPendingDecline(),
    watchCollectorName(),
    watchCollectorNotificationCount(),
    watchCollectorNotificationData(),
    watchCollectorProfile(),
    watchCollectorProfileEdit(),
    watchCollectorEWasteDrives(),
    watchCollectorEWasteItems(),
    watchCollectorRevenueChart(),
    watchCollectorUsers(),
    watchCollectorVendor(),
    watchCollectorOrganizeDrive(),
    watchCollectorForSale(),
    watchCollectorAvailable(),
    watchCollectorSold(),
    watchCollectorMyDrives(),
    watchCollectorMyDrivesStatus(),
    watchCollectorPending(),
    watchCollectorPendingAccept(),
    watchCollectorSummary(),
    watchVendorName(),
    watchVendorProfile(),
    watchVendorProfileEdit(),
    watchVendorCatgItems(),
    watchVendorCategory(),
    watchVendorCollectorData(),
    watchVendorVendorData(),
    watchVendorMyOrders(),
    watchVendorViewItems(),
    watchVendorAcceptItems(),
    watchViewAcceptColProfileSaga(),
    watchViewCollProfileSaga(),
    watchViewCollectorProfileSaga(),
  ]);
}

export default rootSaga;
