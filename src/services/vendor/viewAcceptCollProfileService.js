import api from "../../core/utilities/httpProvider";

export const viewAcceptCollProfileService = (data) => {
  return api.get(
    `http://localhost:8083/vendor/view/items/accept/collectorProfile?id=${data.payload}`
  );
};
