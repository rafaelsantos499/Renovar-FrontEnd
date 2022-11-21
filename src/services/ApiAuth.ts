
import { login } from "@/models/User";
import { AxiosResponse } from "axios";
import { Api } from "./ApiServiceAxios";

export const ApiAuth = {
  login(credentials: login) {
    return Api.post("login", credentials);
  },
  validateToken(token: string | null): Promise<AxiosResponse> {
    return Api.validateToken("user", token);
  },
};

import ApiService from "@/services/ApiServicee";
import { AxiosResponse } from "axios";

const ApiAuth = {
  login(credentials: any): Promise<AxiosResponse> {
    return ApiService.post("login", credentials);
  },
  validateUser(token: string) {
    return ApiService.validateToken("user", token);
  },
};

export default ApiAuth;

