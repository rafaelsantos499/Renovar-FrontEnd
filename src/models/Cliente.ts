import { Pedido } from "@/models/Pedido";

export interface Cliente {
  email: string,
  nome: string,
  telefone: string,
  telefone_two: string,
  cep: string,
  logradouro: string,
  bairro: string,
  uf: string,
  cidade: string,
  pedidos: Array<[]>,
  user_id: number,
  id: number,
}

export interface NewCliente {
  email: string;
  nome: string;
  telefone: string;
  telefone_two: string;
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
  cidade: string;
}
