import axios from "axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosPadrao = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});

// axiosPadrao.interceptors.request.use(
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

export const Api = {
  get(endpoint: string) {
    return axiosPadrao.get(endpoint);
  },
  post(endpoint: string, body: any): Promise<AxiosResponse> {
    return axiosPadrao.post(endpoint, body);
  },
  delete(endpoint) {
    return axiosPadrao.delete(endpoint);
  },
  put(endpoint, body) {
    return axiosPadrao.put(endpoint, body);
  },
  validateToken(
    endpoint: string,
    token: string | null
  ): Promise<AxiosResponse> {
    return axiosPadrao.get(endpoint, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};

export function getCep(cep) {
  return axios.get(`https://viacep.com.br/ws/${cep}/json/`);
}
