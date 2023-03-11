import JwtService from "@/core/services/JwtService";
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

const token = JwtService.getToken();
const headers = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

const ApiServicee = {
  post(resource: string, body: any = null) {
    return axiosIstance.post(resource, body, headers);
  },
  postLogin(resource: string, params: any) {
    return axiosIstance.post(resource, params);
  },
  get(resource: string,) {
    return axiosIstance.get(resource, headers);
  },
  put(resource: string, body: any) {
    return axiosIstance.put(resource, body, headers);
  },

  validateToken(resource: string, token: string) {
    return axiosIstance.get(resource, {
      headers: {
        Authorization: "Bearer" + token,
      },
    });
  },
};

export default ApiServicee;
