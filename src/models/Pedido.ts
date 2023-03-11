export interface Pedido {
  cliente_id: number;
  created_at: string;
  id: number;
  nome_cliente: string;
  observacao: string;
  preco_pedido: number;
  quantidade_de_inversor: number;
  vendedor: string;
  cep: string;
  logradouro: string;
  bairro: string;
  uf: string;
  cidade: string;
}
