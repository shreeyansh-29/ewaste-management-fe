import api from "../../core/utilities/httpProvider";

export const resetPasswordService = (data) => {
  const token = data.payload.token;
  return api.post(`http://localhost:8083/password/save?token=${token}`, {
    oldPassword: data.payload.values.password,
    newPassword: data.payload.values.confirmPassword,
  });
};
