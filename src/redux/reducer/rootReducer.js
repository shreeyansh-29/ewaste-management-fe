import {combineReducers} from "redux";
import {customerNameReducer} from "./customerNameReducer/customerNameReducer";
import {collectorNameReducer} from "./collectorNameReducer/collectorNameReducer";
import {forgotPasswordReducer} from "./forgotPasswordReducer/forgotPasswordReducer";
import {resetPasswordReducer} from "./resetPasswordReducer/resetPasswordReducer";
import {signInReducer} from "./signInReducer/signInReducer";
import {signUpReducer} from "./signUpReducer/signUpReducer";
import {customerNotificationReducer} from "./customerNotificationReducer/customerNotificationReducer";
import {vendorNameReducer} from "./vendorNameReducer/vendorNameReducer";

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
  signIn: signInReducer,
  signUp: signUpReducer,
  customerName: customerNameReducer,
  collectorName: collectorNameReducer,
  customerNotification: customerNotificationReducer,
  vendorName: vendorNameReducer,
});

export default rootReducer;
