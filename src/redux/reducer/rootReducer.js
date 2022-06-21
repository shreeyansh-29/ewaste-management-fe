import {combineReducers} from "redux";
import {forgotPasswordReducer} from "./forgotPasswordReducer";

const rootReducer = combineReducers({
  forgotPassword: forgotPasswordReducer,
});

export default rootReducer;
