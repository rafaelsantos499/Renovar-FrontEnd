<template>
  <!--begin::Toolbar-->
  <div class="toolbar py-5 py-lg-15" id="kt_toolbar">
    <!--begin::Container-->
    <div
      id="kt_toolbar_container"
      :class="{
        'container-fluid': toolbarWidthFluid,
        'container-xxl': !toolbarWidthFluid,
      }"
      class="d-flex flex-stack flex-wrap"
    >
      <!--begin::Page title-->
      <div class="page-title d-flex flex-column me-3">
        <!--begin::Title-->
        <h1 class="d-flex text-white fw-bolder my-1 fs-3">
          {{ title }}
        </h1>
        <!--end::Title-->

        <!--begin::Breadcrumb-->
        <ul
          v-if="breadcrumbs"
          class="breadcrumb breadcrumb-separatorless fw-bold fs-7 my-1"
        >
          <li class="breadcrumb-item text-white opacity-75">
            <router-link to="/dashboard" class="text-white"> Home </router-link>
          </li>
          <li class="breadcrumb-item text-white opacity-75">
            <span class="bullet bg-gray-200 w-5px h-2px"></span>
          </li>
          <template v-for="(item, index) in breadcrumbs" :key="index">
            <li class="breadcrumb-item text-white opacity-75">
              {{ item }}
            </li>
            <li class="breadcrumb-item text-white opacity-75">
              <span class="bullet bg-gray-200 w-5px h-2px"></span>
            </li>
          </template>
          <li class="breadcrumb-item text-white opacity-75">
            {{ title }}
          </li>
        </ul>
        <!--end::Breadcrumb-->
      </div>
      <!--end::Page title-->

      <!--begin::Actions-->
      <div class="d-flex align-items-center py-3 py-md-1">
        <!--begin::Wrapper-->
        <div class="me-4">
          <!--begin::Menu-->
          <router-link
            class="btn btn-sm btn-light-danger"
            :to="{ name: 'novo-pedido' }"
          >
            <span class="svg-icon svg-icon-3">
              <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
            </span>
            Pedido
          </router-link>

          <Dropdown1></Dropdown1>
          <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Button-->
        <router-link
          class="btn btn-sm btn-light-primary"
          :to="{ name: 'novoCliente' }"
        >
          <span class="svg-icon svg-icon-3">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Cliente
        </router-link>
        <!--end::Button-->
      </div>
      <!--end::Actions-->
    </div>
    <!--end::Container-->
  </div>
  <!--end::Toolbar-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import { toolbarWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "KToolbar",
  props: {
    breadcrumbs: Array,
    title: String,
  },
  components: {
    Dropdown1,
  },
  setup() {
    return {
      toolbarWidthFluid,
    };
  },
});
</script>
