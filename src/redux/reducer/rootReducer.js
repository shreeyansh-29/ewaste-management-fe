import {combineReducers} from "redux";
import {forgotPasswordReducer} from "./forgotPasswordReducer";
import {resetPasswordReducer} from "./resetPasswordReducer";

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
  resetPassword: resetPasswordReducer,
});

export default rootReducer;
