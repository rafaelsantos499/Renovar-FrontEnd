import JwtService from "@/core/services/JwtService";
import ApiServicee from "@/services/ApiServicee";
import { AxiosPromise } from "axios";

// const token = JwtService.getToken();
// const headers = {
//   headers: {
//     Authorization: "Bearer " + token,
//   },
// };

const ApiPedido = {
  get(id: number | string | null = null): AxiosPromise {
    let url = id ? `pedidos/${id}` : "pedidos"
    
    return ApiServicee.get(url)
  },
  PutProduto(payload){
   return ApiServicee.put('pedido/update-produto', payload)
  }
};

export default ApiPedido;
