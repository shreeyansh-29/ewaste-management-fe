import { COLLECTOR_NOTIFICATION_URL, CUSTOMER_NOTIFICATION_URL } from "../constant/constant";

export async function notificationcount(value) {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let url;
  if (value === "collector") {
    url = COLLECTOR_NOTIFICATION_URL;
  }
  if (value === "customer") {
    url = CUSTOMER_NOTIFICATION_URL;
  }
  const response5 = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      EMAIL: email,
    },
  });
  console.log(response5);
  return response5.json();
}
