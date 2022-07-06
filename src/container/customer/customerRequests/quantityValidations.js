import {TOAST_ERROR4, TOAST_WARN1} from "../../constant/constant";
import Toast from "../../../components/toast";
export const quantityValidation = (data) => {
  if (
    data.category === undefined ||
    data.name === "" ||
    data.quantity === null ||
    data.date === undefined ||
    data.time === undefined
  ) {
    Toast.error(TOAST_ERROR4);
    return false;
  }
  if (data.quantity === 0 || data.quantity > 20 || data.quantity < 0) {
    Toast.warn(TOAST_WARN1);
    return false;
  }
  return true;
};
