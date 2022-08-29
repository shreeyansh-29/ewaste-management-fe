import axios from "axios";
import { decryptData } from "./utils";
let tokens = localStorage.getItem("token") || "";
let email = localStorage.getItem("email") || "";
if (tokens !== "") {
  email = decryptData(email);
  tokens = decryptData(tokens);
}

const api = axios.create({});
if (tokens !== null) {
  api.defaults.headers.common.Authorization = `Bearer ${tokens}`;
  api.defaults.headers.EMAIL = email;
  api.defaults.headers.common["Content-Type"] = "application/json";
}

const requestHandler = (request) => {
  return request;
};

const responseHandler = (response) => {
  return response.data;
};

const errorHandler = (error) => {
  return Promise.reject(error);
};

api.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

api.interceptors.response.use(
  (response) => responseHandler(response),
  (error) => errorHandler(error)
);

export default api;