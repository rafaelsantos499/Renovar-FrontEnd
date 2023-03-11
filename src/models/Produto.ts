export interface Produto {
    id: number;
    potencia: number;
    label: string;
    preco:number;
    tipo_produto: number;
    obs: string | null;
    nome_produto: string
    info_produto : Info_produto
}

export interface Info_produto {
    codigo_produto: string;
    id: number;
    marca: string | null;
    pedidos_id: number,
    preco_total: number,
    preco_unitario: number,
    produtos_id: number,
    profundidade_poco: string | null,
    qtd_string: number;
    qtd_placas: number,
    quantidade: number
}


export interface UpdateProduto {
  codigo_produto: string,
  profundidade_poco: string,
  marca: string,
  quantidade: number,
  preco_unitario: number,
  qtd_string: number
  qtd_placas: number,
  preco_total: number,
}