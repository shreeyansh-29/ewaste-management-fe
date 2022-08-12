import api from "../../../core/utilities/httpProvider";

export const customerCountCollService = (data) => {
  return api.get(
    `http://localhost:8083/customer/request/pickUp/viewCollectors?category=${data.payload}`
  );
};
