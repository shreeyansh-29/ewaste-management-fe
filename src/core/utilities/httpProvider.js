import axios from "axios";
import {decryptData} from "./utils";

var tokens = localStorage.getItem("token") || "";
var email = localStorage.getItem("email") || "";
tokens = decryptData(tokens);
email = decryptData(email);
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
