import { api } from "@/core/services/Api";

export interface credentialsUser {
  email: string;
  password: string;
}

export const ApiAuth = {
  login(credentials) {
    return api.post("login", credentials);
  },
};
