<template>
  <!--begin::Tables Widget 9-->
  <div class="card" :class="widgetClasses">
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
            @keyup="search"
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
        <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Novo Cliente
        </a>
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
            gy-4
          "
        >
          <!--begin::Table head-->
          <thead>
            <tr class="fw-bolder text-muted">
              <th class="w-150px">Cliente</th>
              <th class="min-w-70px">Localidade</th>
              <th class="min-w-140px">Telefone</th>
              <th class="min-w-50px text-center">Pedidos</th>
              <th class="min-w-100px text-end">Ação</th>
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

                <td class="text-end">
                  <router-link
                    :to="{
                      name: 'cliente',
                      params: { nome: item.nome, id: item.id },
                    }"
                    class="
                      btn btn-bg-light btn-active-color-primary btn-sm
                      me-1
                    "
                  >
                    Ver mais
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
  <!--end::Tables Widget 9-->
</template>

<script lang="ts">
import JwtService from "@/core/services/JwtService";
import ApiServicee from "@/services/ApiServicee";
import ApiCliente from "@/services/Cliente/ApiCliente";

import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const token = JwtService.getToken();
    const todosClientes = ref();
    const inputSearch = ref();

    onMounted(() => {
      ApiCliente.clientesGet().then(({ data }) => {
        todosClientes.value = data.data.clientes;
      });
    });

    // todosClientes.value = [
    //   {
    //     image: "media/avatars/150-11.jpg",
    //     name: "Ana Simmons",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "Intertico",
    //     companySkills: "Web, UI/UX Design",
    //     value: "50",
    //     color: "primary",
    //   },
    //   {
    //     image: "media/avatars/150-3.jpg",
    //     name: "Jessie Clarcson",
    //     skills: "C#, ASP.NET, MS SQL",
    //     companyName: "Agoda",
    //     companySkills: "Houses & Hotels",
    //     value: "70",
    //     color: "danger",
    //   },
    //   {
    //     image: "media/avatars/150-4.jpg",
    //     name: "Lebron Wayde",
    //     skills: "PHP, Laravel, VueJS",
    //     companyName: "RoadGee",
    //     companySkills: "Transportation",
    //     value: "60",
    //     color: "success",
    //   },
    //   {
    //     image: "media/avatars/150-5.jpg",
    //     name: "Natali Goodwin",
    //     skills: "Python, PostgreSQL, ReactJS",
    //     companyName: "The Hill",
    //     companySkills: "Insurance",
    //     value: "50",
    //     color: "warning",
    //   },
    //   {
    //     image: "media/avatars/150-6.jpg",
    //     name: "Kevin Leonard",
    //     skills: "HTML, JS, ReactJS",
    //     companyName: "RoadGee",
    //     companySkills: "Art Director",
    //     value: "90",
    //     color: "info",
    //   },
    // ];

    return {
      todosClientes,
      inputSearch,
    };
  },
});
</script>
