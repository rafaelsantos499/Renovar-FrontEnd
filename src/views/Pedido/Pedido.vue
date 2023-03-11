<template>
  <div class="card mb-5">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Pedido</span>
        </h3>
      </div>
    </div>
    <div class="card-body py-3 pb-10">
      <div class="fw-bolder fs-5 text-gray-800 pe-1">
        Numero do pedido: {{ pedido?.id }}
      </div>
      <div class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">
        Cliente: {{ pedido?.nome_cliente }}
      </div>

      <div class="row mt-7">
        <div class="col-md-4">
         <div class="d-flex ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-primary`" class="symbol-label">
                  <span
                    :class="`svg-icon-primary`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Produto : {{ pedido?.produtos?.length }}
                </div>
              </div>
              </div>
         </div>
         <div class="d-flex  mt-4 ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-warning`" class="symbol-label">
                  <span
                    :class="`svg-icon-warning`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Inversores : {{ totalInversor }}
                </div>
              </div>
              </div>
         </div>
         <div v-if="totalBomba > 0" class="d-flex  mt-4 ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-success`" class="symbol-label">
                  <span
                    :class="`svg-icon-success`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Bombas : {{ totalBomba }}
                </div>
              </div>
              </div>
         </div>  
        </div>

        <div class="col-md-8  mt-4 mt-sm-0 d-flex flex-column justify-content-start">
          <div class="d-flex">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-danger`" class="symbol-label">
                  <span
                    :class="`svg-icon-danger`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Vendendor : 2
                </div>
              </div>
              </div>
         </div>
         <div class="d-flex mt-4 ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-info`" class="symbol-label">
                  <span
                    :class="`svg-icon-info`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Data do pedido : 16/01/1663
                  <!-- {{ pedido.created_at }} -->
                </div>
              </div>
              </div>
         </div>
         <div class="d-flex  mt-4 ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-dark`" class="symbol-label">
                  <span
                    :class="`svg-icon-dark`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/general/gen024.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class="mb-1 pe-3 flex-grow-1">
                <div class="fs-5 text-gray-800 fw-bolder">
                  Observação : {{ pedido?.observacao ? pedido?.observacao : ' Sem observação'  }}
                </div>
              </div>
              </div>
         </div>
        </div>

        

        </div>

        <div class="d-flex mt-4 ">
          <div class="symbol symbol-45px ">
            <span :class="`bg-light-info`" class="symbol-label">
                  <span
                    :class="`svg-icon-info`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg src="media/icons/duotune/ecommerce/ecm002.svg" />
                  </span>
                </span>
              </div>

              <div class="ms-5 d-flex align-items-center">
                <div class=" pe-3 flex-grow-1">
                <div class=" fs-5 text-gray-800 fw-bolder">
                  Total  : {{ pedido?.preco_pedido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
                  <!-- {{ pedido.created_at }} -->
                </div>
              </div>
              </div>
         </div>
        <!-- <div class="col-6">
          <template v-for="(item, index) in itensInfo" :key="index">
            <div v-if="itens" class="d-flex align-items-end">
              <div class="symbol symbol-45px me-5 mt-6">
                <span :class="`bg-light-${item.color}`" class="symbol-label">
                  <span
                    :class="`svg-icon-${item.color}`"
                    class="svg-icon svg-icon-2x"
                  >
                    <inline-svg :src="item.icon" />
                  </span>
                </span>
              </div>
              <div class="mb-1 pe-3 flex-grow-1">
                <a
                  href="#"
                  class="fs-5 text-gray-800 text-hover-primary fw-bolder"
                  >{{ item.title }}</a
                >
                <div class="text-gray-400 fw-bold fs-7">
                  {{ item.date }}
                </div>
              </div>
            </div>
          </template>
        
      </div> -->

      <!-- ########## PRECO ############ -->

      <!-- <div class="d-flex justify-content-start mt-9">
        <div class="d-flex align-items-right">
          <div class="symbol symbol-45px w-40px me-5">
            <span class="symbol-label bg-lighten">
              <span class="svg-icon svg-icon-1">
                <inline-svg src="media/icons/duotune/maps/map004.svg" />
              </span>
            </span>
          </div>

          <div class="d-flex align-items-center flex-wrap w-100">
            <div class="mb-1 pe-3 flex-grow-1">
              <p
                href="#"
                class="fs-5 text-gray-800 text-hover-primary fw-bolder"
              >
                Preço do pedido: {{ pedido?.preco_pedido }}
              </p>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
  <div class="card mb-5">   
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">        
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Endereço</span>         
        </h3>
      </div>
    </div>
    <div class="card-body py-3 pb-10">
        <div>
        
          <p class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">Cep : {{ pedido?.cep }}</p>
          <div class="d-flex flex-wrap justify-content-between">
          <p class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">Estado : {{ pedido?.uf?.toUpperCase() }}</p>
          <p class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">Cidade : {{ pedido?.cidade?.toUpperCase() }}</p>
          <p class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">Bairro : {{ pedido?.bairro?.toUpperCase() }}</p>
          <p class="fw-bolder fs-5 text-gray-800 pe-1 mt-4">Logradouro : {{ pedido?.logradouro?.toUpperCase() }}</p>
          
          </div>
        </div>
    </div>
  </div>
  <div class="card mb-5">   
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5 d-flex justify-content-between">        
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Produtos</span>         
        </h3>
        <router-link
          class="btn btn-sm btn-light-primary"
          :to="{ name: 'novoCliente' }"
        >
          <span class="svg-icon svg-icon-3">
            <i class="bi bi-plus-lg"></i>
          </span>
          Produto
        </router-link>
      </div>
    </div>
    <div class="card-body py-3 pb-10">
    
      <div class="table-responsive">
        <!--begin::Table-->
        <table
          class="
            table table-row-dashed table-row-gray-300
            align-middle
            gs-0
            gy-2
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th >Produto</th>
              <th >Label</th>
              <th >Potencia</th>
              <th >preco</th>
              <th >QTD</th>       
              <th >QTD Placas</th>        
              <th >Poço</th>        
              <th >Marca</th>        
              <th >Açoes</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(produto, index) in pedido?.produtos" :key="produto.id">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        
                      </div>
                      {{produto?.nome_produto?.toUpperCase()}}
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        ></span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">                      
                      {{produto?.label?.toUpperCase()}}
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        ></span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        
                      </div>
                      {{produto?.potencia}}
                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        ></span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        {{ produto?.info_produto?.preco_unitario?.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }}
                      </div>

                      <span class="text-muted fw-bold text-muted d-block fs-7"> 
                        <!-- {{pedido?.uf}} -->
                        </span>
                    </div>
                  </div>
                </td>

                <td>
                  <div href="#" class="text-dark fw-bolder d-block fs-6">
                     {{produto?.info_produto?.quantidade }}
                  </div>
                  <span class="text-muted fw-bold text-muted d-block fs-7">
                   <!-- ### -->
                  </span>
                </td>
                <td>
                  <span>
                    {{produto?.info_produto?.qtd_placas ? produto?.info_produto?.qtd_placas : 's/info'}}
                  </span>
                </td>

                <td>   
                <span>
                  {{produto?.info_produto?.profundidade_poco ? produto?.info_produto?.profundidade_poco : 's/info'}}
                </span>
                </td>
                <td>   
                <span>
                  {{produto?.info_produto?.marca ? produto?.info_produto?.marca : 's/info'}}
                </span>
                </td>
                <td class="text-center"> 
                 <router-link 
                 :to="{
                   name: 'produto',
                   params: {
                      id_cliente: pedido?.cliente_id,
                     id_pedido: pedido?.id,
                     id_produto: produto?.info_produto?.id,
                   },
                 }"                    
                    class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        w-25px
                        h-25px                       
                        me-2
                      "
                    >
                 
                 </router-link>  
                  <!-- <a                 
                  data-bs-toggle="modal" data-bs-target="#modalEditarProduto"
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        w-25px
                        h-25px                       
                        me-2
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <i class="bi bi-eye-fill"></i>
                      </span>
                    </a> -->
                    <a
                    @click="produtoSelecionado(produto)"
                    data-bs-toggle="modal" data-bs-target="#modalEditarProduto"
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        w-25px
                        h-25px 
                        me-2
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <i class="bi bi-pencil-fill"></i>
                      </span>
                    </a>
                    <a
                  
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        w-25px
                        h-25px                         
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <i class="bi bi-trash3-fill"></i>
                      </span>
                    </a>
                </td>
              </tr>
            </template>
          </tbody>
          <!--end::Table body-->
        </table>
        <!--end::Table-->
      </div>
      <div>         
        </div>
    </div>
  </div>
  <ModalEditarProduto :produto="produtoModal" :pedidoID="pedido?.id" :cliente-id="pedido?.cliente_id" ></ModalEditarProduto>
</template>
<script lang="ts">
import { Cliente } from "@/models/Cliente";
import router from "@/router";
import ApiAuth from "@/services/ApiAuth";
import ApiCliente from "@/services/Cliente/ApiCliente";
import ApiPedido from "@/services/Pedido/ApiPedido";
import { onMounted, Ref, ref } from "vue";
import ModalEditarProduto from "./components/ModalEditarProduto.vue";

export default {
  component: {
    ModalEditarProduto
  },
    setup() {
        const pedido: any = ref();
        const idCliente: any = router.currentRoute.value.params.id_cliente;
        const idPedido = router.currentRoute.value.params.id_pedido;
        const dataCliente: Ref<Cliente | null> = ref(null);
        const itens = ref();
        const itensInfo = ref();
        const totalInversor = ref();
        const totalBomba = ref();
        const todosProdutoPedido = ref();
        const produtoModal = ref()
        onMounted(async () => {       
            await ApiPedido.get(idPedido).then(async ({ data }) => {
                pedido.value = await data.data.pedido;
                totalInversor.value = tipoDeProduto("Inversor");
                totalBomba.value = tipoDeProduto("Bomba");
                console.log(pedido.value);
            }).catch((err)=> console.log(err));
        });
        function tipoDeProduto(tipoProduto: string) {
            return pedido.value.produtos.filter(teste => teste.nome_produto == tipoProduto).length;
        }

        function produtoSelecionado(produto){
          produtoModal.value = produto
        }
        return {
            dataCliente,
            pedido,
            itens,
            itensInfo,
            totalInversor,
            totalBomba,
            todosProdutoPedido,
            produtoSelecionado,
            produtoModal
        };
    },
    components: { ModalEditarProduto }
};
</script>
<style lang=""></style>
