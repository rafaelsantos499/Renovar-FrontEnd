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

const ApiServicee = {
  post(resource: string, params: AxiosResponse) {
    return axiosIstance.post(resource, params);
  },
  get(resource: string, params: any) {
    return axiosIstance.get(resource, params);
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
