import { COLLECTOR_NOTIFICATION_MARKASREAD, CUSTOMER_NOTIFICATION_MARKASREAD } from "../constant/constant";

export async function navbarapi(value) {
  const tokens = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let url;
  if(value ==="customer"){
    url = CUSTOMER_NOTIFICATION_MARKASREAD;
  }
  if(value ==="collector"){
    url = COLLECTOR_NOTIFICATION_MARKASREAD;
  }
 
  const response = await fetch(
    url,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + tokens,
        EMAIL: email,
      },
    }
  );
  console.log(response);
  return response.json();
}
