<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
    <!-- <span class="pt-3 ps-3"
      ><router-link :to="{ name: 'clientes' }">clientes</router-link
      >-><router-link :to="{ name: 'clientes' }">{{
        clienteNome
      }}</router-link></span
    > -->

    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">Clientes</span>
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
            v-model="inputSearch"
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
              <th class="w-150px p">Cliente</th>
              <th class="min-w-70px">Localidade</th>
              <th class="min-w-140px">Telefone</th>
              <th class="min-w-50px text-center">Pedidos</th>
              <th class="min-w-100px text-center">Ação</th>
            </tr>
          </thead>
          <!--end::Table head-->

          <!--begin::Table body-->
          <tbody>
            <template v-for="(item, index) in todosClientes" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="item.image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        {{ item.nome }}
                      </div>

                      <span
                        class="text-muted fw-bold text-muted d-block fs-7"
                        >{{ item.email }}</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <div class="d-flex align-items-center">
                    <!-- <div class="symbol symbol-45px me-5">
                      <img :src="item.image" alt="" />
                    </div> -->
                    <div class="d-flex justify-content-start flex-column">
                      <div class="text-dark fw-bolder fs-6">
                        {{ item.estado }}
                      </div>

                      <span class="text-muted fw-bold text-muted d-block fs-7"
                        >MG</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <div href="#" class="text-dark fw-bolder d-block fs-6">
                    {{ item.telefone }}
                  </div>
                  <span class="text-muted fw-bold text-muted d-block fs-7">{{
                    item.companySkills
                  }}</span>
                </td>

                <td>
                  <p class="text-dark fw-bolder d-block fs-6 text-center">
                    {{ item.pedidos.length }}
                  </p>
                </td>

                <td class="text-center">   
                  <a
                  @click="clienteEspecificoDadosModal(item)"
                  data-bs-toggle="modal" data-bs-target="#modalCliente"
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
                      name: 'cliente',
                      params: { nome: item.nome, id: item.id },
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
                    <router-link
                  :to="{
                      name: 'cliente',
                      params: { nome: item.nome, id: item.id },
                    }"
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
                    </router-link>
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
   <ModalVizualizar :data="clienteDadosModal" />
 
  <!-- Button trigger modal -->


<!-- Modal -->

</template>

<script lang="ts">
import JwtService from "@/core/services/JwtService";
import router from "@/router";
import ApiServicee from "@/services/ApiServicee";
import ApiCliente from "@/services/Cliente/ApiCliente";
import KTLoader from "@/components/Loader.vue";

import { defineComponent, onMounted, reactive, ref } from "vue";
import MapaRouter from "@/components/MapaRouter.vue";
import ModalVizualizar from "./components/modalVizualizar.vue";

export default defineComponent({
  name: "clientes",
  components: {
    KTLoader,
    ModalVizualizar
},
  props: {
    widgetClasses: String,
  },
  setup() {
    const token = JwtService.getToken();
    const modal = ref(false)
    const todosClientes = ref();
    const inputSearch = ref();
    const clienteNome: any = router.currentRoute.value;
    const clienteDadosModal = ref()
   

    const  clienteEspecificoDadosModal = (cliente) => {
      clienteDadosModal.value = cliente
    }

    onMounted(() => {
      ApiCliente.clientesGet().then(({ data }) => {
        todosClientes.value = data.data.clientes;
      });
    });


    const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
    return {
      clienteEspecificoDadosModal,
      clienteDadosModal,
      todosClientes,
      inputSearch,
      modal,
      gridData
    };
  },
});
</script>
