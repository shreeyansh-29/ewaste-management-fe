import api from "../../../../core/utilities/httpProvider";

export const customerDropOffService = (data) => {
  // console.log(data);
  return api.get(
    `http://localhost:8083/customer/request/dropOff/viewCollectors?category=${data.payload}`
  );
};
