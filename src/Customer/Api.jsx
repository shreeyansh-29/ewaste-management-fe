export async function apicall(value) {
  const tokens = localStorage.getItem("token");
  const email = document.cookie.split("=");
  let url;
  if (value === "summary") {
    url = "http://localhost:8083/collector/request/summary";
  }
  if (value === "vendordata") {
    url = "http://localhost:8083/vendor/analytics/v1";
  }
  if (value === "collectordata") {
    url = "http://localhost:8083/vendor/analytics/v1";
  }
  if (value === "EwasteDrive") {
    url = "http://localhost:8083/collector/analytics/v1";
  }
  if (value === "vendor") {
    url = "http://localhost:8083/collector/analytics/v4";
  }
  if (value === "users") {
    url = "http://localhost:8083/collector/analytics/v5";
  }
  if (value === "Drives") {
    url = "http://localhost:8083/customer/analytics/v2";
  }
  if (value === "wastegenerated") {
    url = "http://localhost:8083/customer/analytics/v1";
  }
  if (value === "items") {
    url = "http://localhost:8083/vendor/analytics/v2";
  }
  if (value === "ewaste") {
    url = "http://localhost:8083/collector/analytics/v2";
  }
  if (value === "summarysell") {
    url = "http://localhost:8083/collector/sell/summary";
  }
  
 
  
  const response = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + tokens,
      EMAIL: email[1],
    },
  });
  console.log(response);
  return response.json();
}
