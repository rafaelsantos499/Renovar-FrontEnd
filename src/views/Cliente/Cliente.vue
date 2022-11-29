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
      <Form class="form" @submit="submit" :validation-schema="validationSchema">
        <div class="row">
          <div class="col-sm-6">
            <label class="fs-5 fw-bold mb-2">Nome</label>

            <Field
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.nome"
              name="firstName"
            />
          </div>

          <div class="col-sm-6">
            <label class="fs-5 fw-bold mb-2">Telefone</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.telefone"
              name="telefone"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">email</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.email"
              name="email"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">estado</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.estado"
              name="estado"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">estado</label>
            <Field
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.cidade"
              name="cidade"
            />
          </div>
          <div class="col-sm-4 mt-3">
            <label class="fs-5 fw-bold mb-2">Data do cadastro</label>
            <Field
              disabled
              type="text"
              class="form-control form-control-solid"
              v-model="vModelUser.dataDoCadastro"
              name="dataCadastro"
            />
          </div>
        </div>
        <button @click="submit" class="btn btn-primary mt-10">
          <span v-if="submitButton" class="indicator-label">
            Atualizar dados
          </span>
          <span v-else class="indicator-label">
            Atualizando...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
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

    <div v-if="pedidos" class="card-body py-3 pb-10 pt-5">
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
                <th class="min-w-100px text-end">Açoes</th>
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
                  <td class="text-end">
                    <router-link
                      :to="{
                        name: 'pedido',
                        params: {
                          id_cliente: item.cliente_id,
                          id_pedido: item.id,
                        },
                      }"
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        btn-sm
                        me-1
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotune/general/gen019.svg"
                        /> </span
                    ></router-link>

                    <a
                      href="#"
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        btn-sm
                        me-1
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg src="media/icons/duotune/art/art005.svg" />
                      </span>
                    </a>

                    <a
                      href="#"
                      class="
                        btn
                        btn-icon
                        btn-bg-light
                        btn-active-color-primary
                        btn-sm
                      "
                    >
                      <span class="svg-icon svg-icon-3">
                        <inline-svg
                          src="media/icons/duotune/general/gen027.svg"
                        />
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
    </div>

    <div v-else>
      <div class="fw-bolder text-muted text-center my-10">
        Esse cliente não tem Pedido.
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
import Swal from "sweetalert2/dist/sweetalert2.min.js";

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
    const pedidos: Ref<any> = ref(null);
    const submitButton = ref(true);

    interface clienteView {
      nome: string;
      email: string;
      telefone: string;
      estado: string;
      cidade: string;
      dataDoCadastro: string;
    }

    const vModelUser: clienteView = reactive({
      nome: "",
      email: "",
      telefone: "",
      estado: "",
      cidade: "",
      dataDoCadastro: "",
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

    onMounted(() => {
      ApiCliente.clientesGet(clienteId).then(({ data }) => {
        vModelUser.nome = data.data.cliente.nome;
        vModelUser.email = data.data.cliente.email;
        vModelUser.cidade = data.data.cliente.cidade;
        vModelUser.estado = data.data.cliente.estado;
        vModelUser.telefone = data.data.cliente.telefone;
        vModelUser.dataDoCadastro = data.data.cliente.created_at;

        if (data.data.cliente.pedidos.length > 0)
          pedidos.value = data.data.cliente.pedidos;
        else pedidos.value = null;
      });
    });

    const submit = () => {
      submitButton.value = false;
      ApiCliente.putCliente(clienteId, vModelUser).then(({ data }) => {
        if (data.error) {
          Swal.fire({
            text: data.message,
            icon: "error",
            buttonsStyling: false,
            confirmButtonText: "Tentar Novamente!",
            customClass: {
              confirmButton: "btn fw-bold btn-light-danger",
            },
          });
          return;
        }

        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Cliente cadastrado com sucesso",
        });

        submitButton.value = true;
      });
    };

    console.log();
    return {
      validationSchema,
      submit,
      submitButton,
      clienteNome,
      dataCliente,
      vModelUser,
      pedidos,
    };
  },
};
</script>
<style>
input:disabled {
  opacity: 1;
}
</style>
