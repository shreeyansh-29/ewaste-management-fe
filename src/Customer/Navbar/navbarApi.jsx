export async function navbarapi(value) {
  const tokens = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  let url;
  if(value ==="customer"){
    url = "http://localhost:8083/customer/notification/markAsRead";
  }
  if(value ==="collector"){
    url =  "http://localhost:8083/collector/notification/markAsRead";
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
