import api from "../../../../core/utilities/httpProvider";

export const customerExpiredRequestService = () => {
  return api.get();
};
