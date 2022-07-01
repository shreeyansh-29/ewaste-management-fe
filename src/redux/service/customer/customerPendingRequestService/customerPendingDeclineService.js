export const customerPendingDeclineService = async (data) => {
  const tokens = localStorage.getItem("token");
  const email = localStorage.getItem("email");

  const response = await fetch(
    `http://localhost:8083/customer/deleteById?orderId=${data.payload}`,
    {
      method: "DELETE",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokens,
        EMAIL: email,
      },
    }
  );
  return response;
};
