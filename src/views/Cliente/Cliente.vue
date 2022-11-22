<template>
  <div class="card mb-5">
    <span class="pt-3 ps-3"
      ><router-link :to="{ name: 'clientes' }">clientes</router-link
      >-><router-link :to="{ name: 'clientes' }">{{
        clienteNome
      }}</router-link></span
    >
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">cliente</span>
        </h3>
      </div>
    </div>
    <div class="card-body py-3 pb-10">
      <Form
        class="form"
        id="kt_modal_new_address_form"
        @submit="submit"
        :validation-schema="validationSchema"
      >
        <div class="row">
          <div class="col-sm-6">
            <label class="fs-5 fw-bold mb-2">Nome</label>

            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.nome"
              v-model="vModelUser.nome"
              name="firstName"
            />
          </div>

          <div class="col-sm-6">
            <label class="fs-5 fw-bold mb-2">Telefone</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.telefone"
              v-model="vModelUser.telefone"
              name="telefone"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">email</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.email"
              v-model="vModelUser.email"
              name="email"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">estado</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.estado"
              v-model="vModelUser.estado"
              name="estado"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">estado</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.cidade"
              v-model="vModelUser.cidade"
              name="cidade"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">Data do cadastro</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              :placeholder="dataCliente?.created_at"
              v-model="vModelUser.dataDoCadastro"
              name="dataCadastro"
            />
          </div>
        </div>
      </Form>
    </div>
  </div>
  <div class="card card-body py-3">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Pedidos do CLiente</span>
        </h3>
      </div>
    </div>
    <div class="card-body py-3 pb-10 pt-5">
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
                <th class="w-150px">Data</th>
                <th class="min-w-50px text-center">Preço do Pedido</th>
                <th class="min-w-50px text-center">Quantidade de INV</th>
                <th class="min-w-50px text-center">Vendendor</th>
              </tr>
            </thead>
            <!--end::Table head-->

            <!--begin::Table body-->
            <tbody>
              <template v-for="(item, index) in pedidos" :key="index">
                <tr>
                  <td>
                    <div class="d-flex align-items-center">
                      <span
                        class="bullet bullet-vertical h-40px me-3"
                        :class="`bg-06080`"
                      ></span>
                      <div class="d-flex justify-content-start flex-column">
                        <div class="text-dark fw-bolder fs-6">
                          {{ item.created_at }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p class="text-dark fw-bolder d-block fs-6 text-center">
                      {{ item.preco_pedido }}
                    </p>
                  </td>
                  <td>
                    <p class="text-dark fw-bolder d-block fs-6 text-center">
                      {{ item.quantidade_de_inversor }}
                    </p>
                  </td>
                  <td>
                    <p class="text-dark fw-bolder d-block fs-6 text-center">
                      {{ item.vendedor }}
                    </p>
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
    </div>
  </div>
</template>
<script lang="ts">
import { Cliente } from "@/models/Cliente";
import router from "@/router";
import ApiCliente from "@/services/Cliente/ApiCliente";
import { onMounted, ref, Ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { Pedido } from "@/models/Pedido";

export default {
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const clienteId: any = router.currentRoute.value.params.id;
    const clienteNome: any = router.currentRoute.value.params.nome;
    const dataCliente: Ref<Cliente | null> = ref(null);
    const pedidos: Ref<Pedido | null> = ref(null);
    const vModelUser = reactive({
      nome: dataCliente.value?.nome,
      email: dataCliente.value?.email,
      telefone: dataCliente.value?.telefone,
      estado: dataCliente.value?.estado,
      cidade: dataCliente.value?.estado,
      dataDoCadastro: dataCliente.value?.created_at,
    });

    const validationSchema = Yup.object().shape({
      firstName: Yup.string().required().label("First name"),
      lastName: Yup.string().required().label("Last name"),
      country: Yup.string().required().label("Country"),
      address1: Yup.string().required().label("Address Line 1"),
      address2: Yup.string().required().label("Address Line 2"),
      town: Yup.string().required().label("Town"),
      state: Yup.string().required().label("State/Province"),
      postCode: Yup.string().required().label("Post code"),
    });

    console.log(router.currentRoute.value);
    onMounted(() => {
      ApiCliente.clientesGet(clienteId).then(({ data }) => {
        dataCliente.value = data.data.cliente;
        pedidos.value = data.data.cliente.pedidos;
        console.log(pedidos.value);
      });
    });

    const submit = () => {};

    console.log();
    return {
      validationSchema,
      submit,
      clienteNome,
      dataCliente,
      vModelUser,
      pedidos,
    };
  },
};
</script>
<style lang=""></style>
