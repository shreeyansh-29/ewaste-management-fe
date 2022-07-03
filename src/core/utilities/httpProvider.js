const ApiRequest = async (method, url, data) => {
  const tokens = localStorage.getItem("token") || "";
  const email = localStorage.getItem("email") || "";
  const headerconfig = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + tokens || "",
    EMAIL: email || "",
  };
  let options;
  if (method !== "GET") {
    options = {
      method,
      credentials: "same-origin",
      headers: headerconfig,
      body: JSON.stringify(data),
    };
  } else {
    options = {
      method,
      credentials: "same-origin",
      headers: headerconfig,
    };
  }
  try {
    const res = fetch(url, options);
    if (method !== "GET") {
      return await res;
    }
    return (await res).json();
  } catch (e) {
    return Promise.reject(e);
  }
};
export default {
  get(url, data) {
    return ApiRequest("GET", url, data || "");
  },
  put(url, data) {
    return ApiRequest("PUT", url, data || "");
  },
  post(url, data) {
    return ApiRequest("POST", url, data || "");
  },
  delete(url, data) {
    return ApiRequest("DELETE", url, data || "");
  },
};
