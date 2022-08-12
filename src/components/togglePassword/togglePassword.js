import {PASSWORD, TEXT} from "../../container/constant/constants";

export const togglePassword = (passwordType) => {
  if (passwordType === PASSWORD) {
    passwordType = TEXT;
  } else {
    passwordType = PASSWORD;
  }

  return passwordType;
};
