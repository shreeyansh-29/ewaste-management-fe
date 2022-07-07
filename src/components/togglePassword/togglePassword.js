import {PASSWORD, TEXT} from "../../container/constant/constant";

export const togglePassword = (passwordType) => {
  if (passwordType === PASSWORD) {
    passwordType = TEXT;
  } else {
    passwordType = PASSWORD;
  }

  return passwordType;
};
