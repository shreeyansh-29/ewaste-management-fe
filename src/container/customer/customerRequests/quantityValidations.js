import {TOAST_ERROR4, TOAST_WARN1} from "../../constant/constant";
import Toast from "../../../components/toast";
export const QuantityValidation = ({category, name, quantity, date, time}) => {
  /*istanbul ignore next*/
  if (
    category == undefined ||
    name == "" ||
    quantity === null ||
    date === undefined ||
    time === undefined
  ) {
    Toast.error(TOAST_ERROR4);
    return false;
  }
  /*istanbul ignore next*/
  if (quantity === 0 || quantity > 20 || quantity < 0) {
    Toast.warn(TOAST_WARN1);
    return false;
  }
  return true;
};
