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
