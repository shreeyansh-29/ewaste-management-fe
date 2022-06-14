const GetRequest = async (method, url) => {
  const tokens = localStorage.getItem("token");
  const email = localStorage.getItem("email");
  const headerconfig = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + tokens || "",
    EMAIL: email || "",
  };
  const options = {
    method,
    credentials: "same-origin",
    headers: headerconfig,
  };
  try {
    const res = fetch(url, options);
    return (await res).json();
  } catch (e) {
    return Promise.reject(e);
  }
};
const ApiRequest = async (method, url, data) => {
  const tokens = localStorage.getItem("token") || "";
  const email = localStorage.getItem("email") || "";
  const headerconfig = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + tokens || "",
    EMAIL: email || "",
  };
  const options = {
    method,
    credentials: "same-origin",
    headers: headerconfig,
    body: JSON.stringify(data),
  };
  try {
    const res = fetch(url, options);
    return await res;
  } catch (e) {
    return Promise.reject(e);
  }
};
export default {
  get(url) {
    return GetRequest("GET", url);
  },
  put(url, data) {
    return ApiRequest("PUT", url, data || "");
  },
  post(url, data) {
    return ApiRequest("POST", url, data || "");
  },
};
