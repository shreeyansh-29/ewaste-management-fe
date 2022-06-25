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

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  customerName: customerNameReducer,
  customerNotificationCount: customerNotificationCountReducer,
  customerNotificationData: customerNotificationDataReducer,
  customerProfile: customerProfileReducer,
  collectorName: collectorNameReducer,
  collectorNotificationCount: collectorNotificationCountReducer,
  collectorNotificationData: collectorNotificationDataReducer,
  collectorProfile: collectorProfileReducer,
  vendorName: vendorNameReducer,
  vendorProfile: vendorProfileReducer,
});

export default rootReducer;
