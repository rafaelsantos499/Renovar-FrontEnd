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
