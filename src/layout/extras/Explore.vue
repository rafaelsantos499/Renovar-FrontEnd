<template>
  <!--begin::Exolore drawer toggle-->
  <button
    id="kt_explore_toggle"
    class="
      btn btn-sm btn-white btn-active-primary
      shadow-sm
      position-fixed
      px-5
      fw-bolder
      zindex-2
      top-50
      mt-10
      end-0
      transform-90
      fs-6
    "
    data-bs-toggle="tooltip"
    data-bs-placement="right"
    data-bs-trigger="hover"
  >
    <span id="kt_explore_toggle_label">Explore</span>
  </button>
  <!--end::Exolore drawer toggle-->

  <!--begin::Exolore drawer-->
  <div
    id="kt_explore"
    class="bg-body"
    data-kt-drawer="true"
    data-kt-drawer-name="explore"
    data-kt-drawer-activate="true"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'350px', 'lg': '475px'}"
    data-kt-drawer-direction="end"
    data-kt-drawer-toggle="#kt_explore_toggle"
    data-kt-drawer-close="#kt_explore_close"
  >
    <!--begin::Card-->
    <div class="card shadow-none w-100">
      <!--begin::Header-->
      <div class="card-header" id="kt_explore_header">
        <h3 class="card-title fw-bolder text-gray-700">
          {{ themeName }} Metronic
        </h3>

        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-active-light-primary me-n5"
            id="kt_explore_close"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr061.svg" />
            </span>
          </button>
        </div>
      </div>
      <!--end::Header-->

      <!--begin::Body-->

      <!--end::Body-->
    </div>
    <!--end::Card-->
  </div>
  <!--end::Exolore drawer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { themeName, demo } from "@/core/helpers/documentation";

export default defineComponent({
  name: "kt-explore",
  setup() {
    return {};
  },
});
</script>
