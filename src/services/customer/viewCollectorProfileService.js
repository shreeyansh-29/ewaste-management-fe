import api from "../../core/utilities/httpProvider";

export const viewCollectorProfileService = (data) => {
  return api.get(
    `http://localhost:8083/customer/request/all/collectorProfile?id=${data.payload}`
  );
};
