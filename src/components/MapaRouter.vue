<template lang="">
  <span class="pt-3 ps-3"
    ><router-link :to="prevRouter">{{ prevRouterName }}</router-link
    >-><router-link :to="router">{{ routerName }}</router-link></span
  >
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  name: "mapRouter",
  props: {
    prevRouter: String,
    prevRouterName: String,
    router: String,
    routerName: String,
  },
  setup(props) {
    console.log(props.prevRouter);
    console.log;
    return {};
  },
});
</script>
<style lang=""></style>
