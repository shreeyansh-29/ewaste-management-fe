import api from "../../../../core/utilities/httpProvider";

export const collectorMyDrivesStatusService = (data) => {
  console.log("data", data);
  return api.post(
    `http://localhost:8083/collector/drive/myDrive/edit?id=${data.payload.id}&status=${data.payload.status}`
  );
};
