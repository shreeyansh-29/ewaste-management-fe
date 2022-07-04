export const togglePassword = (passwordType) => {
  if (passwordType === "password") {
    passwordType = "text";
  } else {
    passwordType = "password";
  }

  return passwordType;
};
