import { Pedido } from "@/models/Pedido";

export interface Cliente {
  cidade: string;
  created_at: string;
  email: string;
  estado: string;
  id: number;
  nome: string;
  pedidos: Pedido;
  telefone: string;
  updated_at: string;
  user_id: number;
}
