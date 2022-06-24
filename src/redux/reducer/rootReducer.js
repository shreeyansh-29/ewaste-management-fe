import {combineReducers} from "redux";
import {customerNameReducer} from "./customerNameReducer/customerNameReducer";
import {collectorNameReducer} from "./collectorNameReducer/collectorNameReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer/forgotPasswordReducer";
import {resetPasswordReducer} from "./resetPasswordReducer/resetPasswordReducer";
import {signInReducer} from "./signInReducer/signInReducer";
import {signUpReducer} from "./signUpReducer/signUpReducer";
import {customerNotificationCountReducer} from "./customerNotificationReducer/customerNotificationCountReducer";
import {vendorNameReducer} from "./vendorNameReducer/vendorNameReducer";
import {collectorNotificationCountReducer} from "./collectorNotificationReducer/collectorNotificationCountReducer";
import {collectorNotificationDataReducer} from "./collectorNotificationReducer/collectorNotificationDataReducer";
import {customerNotificationDataReducer} from "./customerNotificationReducer/customerNotificationDataReducer";
import {customerProfileReducer} from "./customerProfileReducer/customerProfileReducer";
import {collectorProfileReducer} from "./collectorProfileReducer/collectorProfileReducer";
import {vendorProfileReducer} from "./vendorProfileReducer/vendorProfileReducer";

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
