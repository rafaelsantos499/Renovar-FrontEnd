import JwtService from "@/core/services/JwtService";
import ApiServicee from "@/services/ApiServicee";
import { AxiosPromise } from "axios";
const token = JwtService.getToken();
// const headers = {
//   headers: {
//     Authorization: "Bearer " + token,
//   },
// };
export default {
  clientesGet(id: number | string | null = null): AxiosPromise {
    let url = id ? `clientes/${id}` : "clientes";

    return ApiServicee.get(url);
  },
  newCliente(date) {
    return ApiServicee.post("clientes",  date);
  },
  putCliente(id: number | string , date) {
    return ApiServicee.put(`clientes/${id}`, date);
  },
};
