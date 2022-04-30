import { COLLECTOR_AUTH_URL, CUSTOMER_AUTH_URL, VENDOR_AUTH_URL } from "../constant/constant";
export async function profile(value) {
  const token = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let url;
  if (value === "vendor") {
    url = VENDOR_AUTH_URL;
  }
  if (value === "collector") {
    url = COLLECTOR_AUTH_URL;
  }
  if (value === "customer") {
    url = CUSTOMER_AUTH_URL;
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
