<template>
  <!--begin::Mixed Widget 1-->
  <div class="card card-xxl-stretch">
    <div class="card-p">
      <div class="row m-0">
        <router-link class="col" to="">
          <div class="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
              <inline-svg src="/public/media/icons/duotune/arrows/arr075.svg" />
            </span>
            <a href="#" class="text-warning fw-bold fs-6"> Novo Pedido </a>
          </div>
        </router-link>

        <router-link class="col" to="">
          <div class="col bg-light-primary px-6 py-8 rounded-2 mb-7">
            <span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
              <inline-svg src="/public/media/icons/duotune/arrows/arr075.svg" />
            </span>
            <a href="#" class="text-primary fw-bold fs-6"> Novo cliente </a>
          </div>
        </router-link>
      </div>

      <!--end::Row-->
      <!--begin::Row-->
      <!-- <div class="row m-0">
          <div class="col bg-light-danger px-6 py-8 rounded-2 me-7">
            <span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
              <inline-svg src="/public/media/icons/duotune/abstract/abs027.svg" />
            </span>
            <a href="#" class="text-danger fw-bold fs-6 mt-2"> Item Orders </a>
          </div>
          <div class="col bg-light-success px-6 py-8 rounded-2">
            <span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
              <inline-svg src="/public/media/icons/duotune/communication/com010.svg" />
            </span>
            <a href="#" class="text-success fw-bold fs-6 mt-2"> Bug Reports </a>
          </div>
        </div> -->
      <!--end::Row-->
    </div>
    <!--end::Stats-->
    <!--end::Body-->

    <!--end::Mixed Widget 1-->
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import { MenuComponent } from "@/assets/ts/components/MenuComponent";
import { getCSSVariableValue } from "@/assets/ts/_utils";

export default defineComponent({
  name: "widget-1",
  components: {
    Dropdown3,
  },
  props: {
    widgetClasses: String,
    widgetColor: String,
    strokeColor: String,
  },
  setup(props) {
    const labelColor = getCSSVariableValue("--bs-gray-500");
    const borderColor = getCSSVariableValue("--bs-gray-200");

    const color = getCSSVariableValue("--bs-" + props.widgetColor);

    const strokeColor = ref(props.strokeColor);

    onMounted(() => {
      MenuComponent.reinitialization();
    });

    return {};
  },
});
</script>
