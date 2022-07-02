import api from "../../../core/utilities/httpProvider";

export const viewCustomerProfileService = (data) => {
  return api.get(
    `http://localhost:8083/collector/request/pending/customerProfile?id=${data.response}`
  );
};
