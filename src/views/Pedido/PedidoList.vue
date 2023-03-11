<template >
  <!-- Button trigger modal -->

<!-- Modal -->

     <div class="card" >
    <!-- <span class="pt-3 ps-3"
      ><a :to="{ name: 'clientes' }">clientes</a
      >-><router-link :to="{ name: 'clientes' }">{{
        clienteNome
      }}</router-link></span
    > -->

    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Pedidos</span>
      </h3>

      <div class="card-toolbar">
        <div class="input-group rounded">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Pesquisa"
            aria-label="Search"
            aria-describedby="search-addon"
            style="height: 40px"
            
          />
          <span class="input-group-text border-0" id="search-addon">
            <i class="fas fa-search"></i>
          </span>
        </div>
      </div>
      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <router-link
          class="btn btn-sm btn-light-primary"
          :to="{ name: 'novoCliente' }"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Novo Cliente
        </router-link>
      </div>
    </div>
    <!--end::Header-->

    <!--begin::Body-->
    <div class="card-body py-3">
    
      <!--begin::Table container-->
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
              <th >Nº</th>
              <th class="w-100px p">data pedido</th>
              <th class="w-150px p">Cliente</th>
              <th >UF</th>
              <th >QTD</th>              
              <th class="">Ação</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(pedido, index) in pedidos" :key="pedido.id">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        
                      </div>
                      {{pedido?.id}}
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
                      {{pedido?.created_at }}
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
                      {{pedido?.clientes?.nome}}
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
                        {{ pedido?.cidade }}
                      </div>

                      <span class="text-muted fw-bold text-muted d-block fs-7"
                        > {{pedido?.uf}}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <div href="#" class="text-dark fw-bolder d-block fs-6">
                     {{ pedido?.produtos?.length }}
                  </div>
                  <span class="text-muted fw-bold text-muted d-block fs-7">
                   <!-- ### -->
                  </span>
                </td>
                <td class="text-center">   
                  <a
                  data-bs-toggle="modal" data-bs-target="#modalPedido"
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
                        <inline-svg src="/public/media/açoes/view-show.svg" />
                      </span>
                    </a>
                    <router-link
                  :to="{
                      name: 'pedido',
                      params: { id_cliente: pedido.cliente_id, id_pedido: pedido.id},
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
                      <span class="svg-icon svg-icon-3">
                        <inline-svg src="/public/media/açoes/edit.svg" />
                      </span>
                    </router-link>
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
                        <inline-svg src="/public/media/açoes/edit.svg" />
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
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
 
  <ModalVizualizar :data="pedidoDadosModal"  /> 

</template>
<script lang="ts">
import ApiPedido from '@/services/Pedido/ApiPedido'
import ModalVizualizar from './components/modalVizualizar.vue'
import {Pedido} from '@/models/Pedido'
import { Modal } from "bootstrap";
import {defineComponent,ref,onMounted,Ref} from 'vue'
export default defineComponent({
    name: 'pedidosList',
    components: {
      ModalVizualizar
    },
    props: {
    widgetClasses: String,
  },
    setup() {
        const pedidos : Ref<Pedido | undefined> = ref()
        const pedidoDadosModal = ref()

        function getPedidos(){
           ApiPedido.get().then(({data}) =>  {
            pedidos.value = data.data.pedidos

             console.log(pedidos.value)
           })
           
        }
        

        onMounted(() => {
            getPedidos()
        })



    //   function modal(): void {
    //     let auxModal;
    //     const modalElement: HTMLElement | null = document.getElementById('exampleModal')
    //     auxModal = new Modal(modalElement)
    //     auxModal.show()
    // }

        const  pedidoEspecificoDadosModal = (cliente) => {
          console.log(cliente)
          pedidoDadosModal.value = cliente
    }

        return {
            pedidos,
            pedidoDadosModal,
            pedidoEspecificoDadosModal,
          
            
        }
    }
})
</script>
<style lang="">
    
</style>