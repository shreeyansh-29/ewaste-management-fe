export async function notificationcount(value) {
  const token = localStorage.getItem("token");
  const email = document.cookie.split("=");
  let url;
  if (value === "collector") {
    url = "http://localhost:8083/collector/notification";
  }
  if (value === "customer") {
    url = "http://localhost:8083/customer/notification";
  }
  const response5 = await fetch(url, {
    method: "GET",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
      EMAIL: email[1],
    },
  });
  console.log(response5);
  return response5.json();
}
