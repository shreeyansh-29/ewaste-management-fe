import api from "../../../../core/utilities/httpProvider";

export const customerPendingDeclineService = async (data) => {
  return api.delete(
    `http://localhost:8083/customer/deleteById?orderId=${data.payload}`
  );
};
