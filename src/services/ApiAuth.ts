import { login } from "@/models/User";
import { AxiosResponse } from "axios";
import { Api } from "./ApiServiceAxios";
import ApiService from "@/services/ApiServicee";

const ApiAuth = {
  login(credentials: any): Promise<AxiosResponse> {
    return ApiService.post("login", credentials);
  },
  validateUser(token: string) {
    return ApiService.validateToken("user", token);
  },
};

export default ApiAuth;
