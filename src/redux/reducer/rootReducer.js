import {combineReducers} from "redux";
import {customerNameReducer} from "./customer/customerNameReducer/customerNameReducer";
import {collectorNameReducer} from "./collector/collectorNameReducer/collectorNameReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer/forgotPasswordReducer";
import {resetPasswordReducer} from "./resetPasswordReducer/resetPasswordReducer";
import {signInReducer} from "./signInReducer/signInReducer";
import {signUpReducer} from "./signUpReducer/signUpReducer";
import {customerNotificationCountReducer} from "./customer/customerNotificationReducer/customerNotificationCountReducer";
import {vendorNameReducer} from "./vendor/vendorNameReducer/vendorNameReducer";
import {collectorNotificationCountReducer} from "./collector/collectorNotificationReducer/collectorNotificationCountReducer";
import {collectorNotificationDataReducer} from "./collector/collectorNotificationReducer/collectorNotificationDataReducer";
import {customerNotificationDataReducer} from "./customer/customerNotificationReducer/customerNotificationDataReducer";
import {customerProfileReducer} from "./customer/customerProfileReducer/customerProfileReducer";
import {collectorProfileReducer} from "./collector/collectorProfileReducer/collectorProfileReducer";
import {vendorProfileReducer} from "./vendor/vendorProfileReducer/vendorProfileReducer";
import {customerEWasteReducer} from "./customer/customerEWasteReducer/customerEWasteReducer";
import {customerDropOffReducer} from "./customer/customerDropOffReducer/customerDropOffReducer";
import {customerViewCollectorsReducer} from "./customer/customerViewCollectorReducer/customerViewCollectorReducer";
import {customerWasteGeneratedReducer} from "./customer/analyticsReducer/customerWasteGeneratedReducer";
import {customerCollectorCategoriesReducer} from "./customer/analyticsReducer/customerCollectorCategoriesReducer";
import {customerDrivesReducer} from "./customer/analyticsReducer/customerDrivesReducer";
import {collectorEWasteDrivesReducer} from "./collector/analyticsReducer/collectorEWasteDrivesReducer";
import {collectorEWasteItemsReducer} from "./collector/analyticsReducer/collectorEWasteItemsReducer";
import {collectorRevenueChartReducer} from "./collector/analyticsReducer/collectorRevenueChartReducer";
import {collectorUsersReducer} from "./collector/analyticsReducer/collectorUsersReducer";
import {collectorVendorReducer} from "./collector/analyticsReducer/collectorVendorReducer";
import {vendorCategoryReducer} from "./vendor/analyticsReducer/VendorCategoryReducer";
import {vendorCatgItemsReducer} from "./vendor/analyticsReducer/VendorCatgItemsReducer";
import {vendorCollectorDataReducer} from "./vendor/analyticsReducer/VendorCollectorDataReducer";
import {vendorVendorDataReducer} from "./vendor/analyticsReducer/VendorVendorDataReducer";
import {vendorMyOrdersReducer} from "./vendor/vendorMyOrdersReducer/vendorMyOrdersReducer";
import {vendorViewItemsReducer} from "./vendor/vendorSalesReducer/vendorViewItemsReducer";
import {vendorAcceptItemsReducer} from "./vendor/vendorSalesReducer/vendorAcceptItemsReducer";
import {collectorOrganizeDriveReducer} from "./collector/collectorOrganizeDriveReducer/collectorOrganizeDriveReducer";
import {collectorForSaleReducer} from "./collector/collectorForSaleReducer/collectorForSaleReducer";
import {collectorMyDrivesReducer} from "./collector/collectorMyDrivesReducer/collectorMyDrivesReducer";
import {collectorMyDrivesStatusReducer} from "./collector/collectorMyDrivesStatusReducer/collectorMyDrivesStatusReducer";
import {collectorAvailableReducer} from "./collector/collectorAvailableReducer/collectorAvailableReducer";
import {collectorSoldReducer} from "./collector/collectorSoldReducer/collectorSoldReducer";
import {viewColProfileReducer} from "./vendor/viewColProfileReducer";
import {viewAcceptColReducer} from "./vendor/viewAcceptColReducer";
import {viewCollectorProfileReducer} from "./customer/viewCollectorProfileReducer";
import {viewCustomerProfileReducer} from "./collector/viewCustomerProfileReducer";
import {vendorProfileEditReducer} from "./vendor/vendorProfileReducer/vendorProfileEditReducer";
import {customerProfileEditReducer} from "./customer/customerProfileReducer/customerProfileEditReducer";
import {collectorProfileEditReducer} from "./collector/collectorProfileReducer/collectorProfileEditReducer";
import {customerCountCollReducer} from "./customer/customerPickUpReducer/customerCountCollReducer";
import {customerPickUpReducer} from "./customer/customerPickUpReducer/customerPickUpReducer";
import {collectorPendingReducer} from "./collector/collectorPendingReducer/collectorPendingReducer";
import {collectorPendingAcceptReducer} from "./collector/collectorPendingAcceptReducer/collectorPendingAcceptReducer";
import {collectorSummaryReducer} from "./collector/collectorSummaryReducer/collectorSummaryReducer";
import {customerCompletedRequestReducer} from "./customer/customerCompletedRequestReducer/customerCompletedRequestReducer";
import {customerPendingRequestReducer} from "./customer/customerPendingRequestReducer/customerPendingRequestReducer";
import {customerExpiredRequestReducer} from "./customer/customerExpiredRequestReducer/customerExpiredRequestReducer";

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  customerName: customerNameReducer,
  customerNotificationCount: customerNotificationCountReducer,
  customerNotificationData: customerNotificationDataReducer,
  customerProfile: customerProfileReducer,
  customerProfileEdit: customerProfileEditReducer,
  customerPickUp: customerPickUpReducer,
  customerCountColl: customerCountCollReducer,
  customerDropOff: customerDropOffReducer,
  customerViewCollector: customerViewCollectorsReducer,
  customerEWasteDrives: customerEWasteReducer,
  customerWasteGenerated: customerWasteGeneratedReducer,
  customerDrives: customerDrivesReducer,
  customerCollectorCategories: customerCollectorCategoriesReducer,
  customerCompletedRequest: customerCompletedRequestReducer,
  customerPendingRequest: customerPendingRequestReducer,
  customerExpiredRequest: customerExpiredRequestReducer,
  collectorName: collectorNameReducer,
  collectorNotificationCount: collectorNotificationCountReducer,
  collectorNotificationData: collectorNotificationDataReducer,
  collectorProfile: collectorProfileReducer,
  collectorProfileEdit: collectorProfileEditReducer,
  collectorEWasteDrives: collectorEWasteDrivesReducer,
  collectorEWasteItems: collectorEWasteItemsReducer,
  collectorRevenueChart: collectorRevenueChartReducer,
  collectorUsers: collectorUsersReducer,
  collectorVendor: collectorVendorReducer,
  collectorOrganizeDrive: collectorOrganizeDriveReducer,
  collectorForSale: collectorForSaleReducer,
  collectorMyDrives: collectorMyDrivesReducer,
  collectorMyDrivesStatus: collectorMyDrivesStatusReducer,
  collectorAvailable: collectorAvailableReducer,
  collectorSold: collectorSoldReducer,
  collectorPending: collectorPendingReducer,
  collectorPendingAccept: collectorPendingAcceptReducer,
  collectorSummary: collectorSummaryReducer,
  vendorName: vendorNameReducer,
  vendorProfile: vendorProfileReducer,
  vendorProfileEdit: vendorProfileEditReducer,
  vendorCategory: vendorCategoryReducer,
  vendorCatgItems: vendorCatgItemsReducer,
  vendorCollectorData: vendorCollectorDataReducer,
  vendorData: vendorVendorDataReducer,
  vendorMyOrders: vendorMyOrdersReducer,
  vendorViewItems: vendorViewItemsReducer,
  vendorAcceptItems: vendorAcceptItemsReducer,
  viewColProfileReducer: viewColProfileReducer,
  viewAcceptColReducer: viewAcceptColReducer,
  viewCollectorProfileReducer: viewCollectorProfileReducer,
  viewCustomerProfileReducer: viewCustomerProfileReducer,
});

export default rootReducer;
