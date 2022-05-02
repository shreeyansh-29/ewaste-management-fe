import { COLLECTOR_ANALYTICS_V1, COLLECTOR_ANALYTICS_V2, COLLECTOR_ANALYTICS_V4, COLLECTOR_ANALYTICS_V5, COLLECTOR_REQUEST_SUMMARY, COLLECTOR_SELL_SUMMARY, CUSTOMER_ANALYTICS_V1, CUSTOMER_ANALYTICS_V2, VENDOR_ANALYTICS_V1, VENDOR_ANALYTICS_V2 } from "../constant/constant";

export async function apicall(value) {
  const tokens = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let url;
  if (value === "summary") {
    url = COLLECTOR_REQUEST_SUMMARY;
  }
  if (value === "vendordata") {
    url = VENDOR_ANALYTICS_V1;
  }
  if (value === "collectordata") {
    url = VENDOR_ANALYTICS_V1;
  }
  if (value === "EwasteDrive") {
    url = COLLECTOR_ANALYTICS_V1;
  }
  if (value === "vendor") {
    url = COLLECTOR_ANALYTICS_V4;
  }
  if (value === "users") {
    url = COLLECTOR_ANALYTICS_V5;
  }
  if (value === "Drives") {
    url = CUSTOMER_ANALYTICS_V2;
  }
  if (value === "wastegenerated") {
    url = CUSTOMER_ANALYTICS_V1;
  }
  if (value === "items") {
    url = VENDOR_ANALYTICS_V2;
  }
  if (value === "ewaste") {
    url = COLLECTOR_ANALYTICS_V2;
  }
  if (value === "summarysell") {
    url = COLLECTOR_SELL_SUMMARY;
  }
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokens,
      EMAIL: email,
    },
  });
  console.log(response);
  return response.json();
}
