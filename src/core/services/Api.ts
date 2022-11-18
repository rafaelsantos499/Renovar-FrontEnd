import axios from "axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosIstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

// axiosIstance.interceptors.request.use(
//   function (config) {
//     const token = window.localStorage.token;

//     if (token) {
//       config.headers.Authorization = token;
//     }
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

export const api = {
  post(resource: string, params: AxiosResponse) {
    return axiosIstance.post(resource, params);
  },
  get(resource: string, params: any) {
    return axiosIstance.post(resource, params);
  },
  login(body) {
    return axios.post(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token",
      body
    );
  },
  validateToken() {
    return axiosIstance.post(
      "https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate"
    );
  },
};
