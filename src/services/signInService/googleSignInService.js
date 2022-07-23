import api from "../../core/utilities/httpProvider";

export const googleSignInService = (data) => {
  return api.post(`http://localhost:8083/signin/google?email=${data.payload}`);
};
