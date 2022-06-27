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

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  customerName: customerNameReducer,
  customerNotificationCount: customerNotificationCountReducer,
  customerNotificationData: customerNotificationDataReducer,
  customerProfile: customerProfileReducer,
  customerDropOff: customerDropOffReducer,
  customerViewCollector: customerViewCollectorsReducer,
  customerEWasteDrives: customerEWasteReducer,
  customerWasteGenerated: customerWasteGeneratedReducer,
  customerDrives: customerDrivesReducer,
  customerCollectorCategories: customerCollectorCategoriesReducer,
  collectorName: collectorNameReducer,
  collectorNotificationCount: collectorNotificationCountReducer,
  collectorNotificationData: collectorNotificationDataReducer,
  collectorProfile: collectorProfileReducer,
  collectorEWasteDrives: collectorEWasteDrivesReducer,
  collectorEWasteItems: collectorEWasteItemsReducer,
  vendorName: vendorNameReducer,
  vendorProfile: vendorProfileReducer,
});

export default rootReducer;
