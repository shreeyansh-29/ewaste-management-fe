import api from "../../../../core/utilities/httpProvider";

export const collectorPendingAcceptService = (data) => {
  return api.post(
    `http://localhost:8083/collector/request/pending/accept?order=${data.payload}`
  );
};
