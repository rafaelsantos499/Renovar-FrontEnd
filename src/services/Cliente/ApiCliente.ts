import JwtService from "@/core/services/JwtService";
import ApiServicee from "@/services/ApiServicee";
import { AxiosPromise } from "axios";
const token = JwtService.getToken();
export default {
  clientesGet(id: number | string | null = null): AxiosPromise {
    let url = id ? `clientes/${id}` : "clientes";

    return ApiServicee.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  },
};
