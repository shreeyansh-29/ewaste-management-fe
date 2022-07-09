import axios from "axios";

const tokens = localStorage.getItem("token") || "";
const email = localStorage.getItem("email") || "";
const api = axios.create({});
if (tokens !== null) {
  api.defaults.headers.common.Authorization = `Bearer ${tokens}`;
  api.defaults.headers.EMAIL = email;
  api.defaults.headers.common["Content-Type"] = "application/json";
}

const requestHandler = (request) => {
  return request;
};

/* istanbul ignore next */
const responseHandler = (response) => {
  return response.data;
};

/* istanbul ignore next */
const errorHandler = (error) => {
  return Promise.reject(error);
};

/* istanbul ignore next */
api.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

/* istanbul ignore next */
api.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default api;
