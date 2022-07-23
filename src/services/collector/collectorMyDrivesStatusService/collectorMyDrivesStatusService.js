import api from "../../../core/utilities/httpProvider";

export const collectorMyDrivesStatusService = (data) => {
  return api.put(
    `http://localhost:8083/collector/drive/myDrive/edit?id=${data.payload.id}&status=${data.payload.status}`
  );
};
