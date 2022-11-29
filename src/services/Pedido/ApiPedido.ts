import JwtService from "@/core/services/JwtService";
import ApiService from "@/services/ApiServicee";
import { AxiosResponse } from "axios";
const token = JwtService.getToken();

const headers = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

const ApiPedido = {
  get(id) {
    return ApiService.get(`pedidos/${id}`, headers);
  },
};

export default ApiPedido;
