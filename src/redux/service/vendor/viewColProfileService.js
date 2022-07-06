import api from "../../../core/utilities/httpProvider";

export const viewColProfileService = (data) => {
  return api.get(
    `http://localhost:8083/vendor/view/items/collectorProfile?id=${data.payload}`
  );
};
