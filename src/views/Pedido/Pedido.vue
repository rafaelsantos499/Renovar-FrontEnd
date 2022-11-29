<template>
  <div class="card mb-5">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Pedido</span>
        </h3>
      </div>
    </div>
    <div class="w-75 card-body py-3 pb-10">
      <p class="h3">{{ dataCliente?.nome }}</p>
      <div
        class="
          mt-10
          shadow-xs
          card-rounded
          mx-9
          mb-9
          px-6
          py-9
          position-relative
          z-index-1
          bg-white
        "
      >
        <div class="fw-bolder fs-5 text-gray-800 pe-1">
          Numero do pedido: {{ pedido?.id }}
        </div>

        <div class="row">
          <div class="col-5">
            <!-- ########## produto ############ -->

            <template v-for="(item, index) in itens" :key="index">
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
                  <p class="fs-5 text-gray-800 fw-bolder">
                    {{ item.title }}: {{ item.date }}
                  </p>
                </div>
              </div>
            </template>
          </div>
          <div class="col-7">
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
          </div>
        </div>

        <!-- ########## PRECO ############ -->

        <div class="d-flex justify-content-end mt-9">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Cliente } from "@/models/Cliente";
import router from "@/router";
import ApiAuth from "@/services/ApiAuth";
import ApiCliente from "@/services/Cliente/ApiCliente";
import ApiPedido from "@/services/Pedido/ApiPedido";
import { onMounted, Ref, ref } from "vue";

export default {
  setup() {
    const pedido: any = ref();
    const idCliente: any = router.currentRoute.value.params.id_cliente;
    const idPedido = router.currentRoute.value.params.id_pedido;
    const dataCliente: Ref<Cliente | null> = ref(null);
    const itens = ref();
    const itensInfo = ref();

    onMounted(() => {
      ApiPedido.get(idPedido).then(({ data }) => {
        pedido.value = data.data.pedido;

        console.log(pedido.value);

        itens.value = [
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "Produtos",
            color: "primary",
            date: pedido?.value.produtos.length,
          },
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "Inversores",
            color: "warning",
            date: pedido?.value.inversores.length,
          },
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "Bombas",
            color: "success",
            date: 0,
          },
        ];

        itensInfo.value = [
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "Vendendor",
            color: "primary",
            date: pedido?.value.vendedor,
          },
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "Observação",
            color: "warning",
            date: pedido?.value.observacao ?? "Sem observação",
          },
          {
            icon: "media/icons/duotune/general/gen024.svg",
            title: "data do Pedido",
            color: "dark",
            date: pedido?.value.created_at,
          },
        ];
      });

      ApiCliente.clientesGet(idCliente).then(({ data }) => {
        dataCliente.value = data.data.cliente;
      });
    });

    return {
      dataCliente,
      pedido,
      itens,
      itensInfo,
    };
  },
};
</script>
<style lang=""></style>
