<template>
  <div class="card mb-5">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1"
            >Cadastro de cliente</span
          >
        </h3>
      </div>
      <div class="card-body">
        {{ newCliente }}
        <Form
          class="form"
          @submit="submit"
          :validation-schema="validationSchema"
        >
          <div class="row">
            <div class="col-sm-4 mt-3">
              <label class="fs-5 fw-bold mb-2 required">Nome</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                v-model="newCliente.nome"
                name="nome"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="nome" />
                </div>
              </div>
            </div>
            <div class="col-sm-4 mt-3">
              <label class="fs-5 fw-bold mb-2 required">Email</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                v-model="newCliente.email"
                name="email"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <div class="col-sm-4 mt-3">
              <label class="fs-5 fw-bold mb-2 required">Telefone</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                v-model="newCliente.telefone"
                name="telefone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="telefone" />
                </div>
              </div>
            </div>
            <div class="col-sm-3 mt-3">
              <label class="fs-5 fw-bold mb-2 required">cidade</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                v-model="newCliente.cidade"
                name="cidade"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="cidade" />
                </div>
              </div>
            </div>
            <div class="col-sm-2 mt-3">
              <label class="fs-5 fw-bold mb-2 required">Estado</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                v-model="newCliente.estado"
                name="estado"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="estado" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary mt-10">
            <span class="indicator-label"> Cadastrar </span>
            <span class="indicator-progress">
              Please wait...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </Form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { reactive, Ref, ref } from "vue";
import * as Yup from "yup";
import { NewCliente } from "@/models/Cliente";
import ApiCliente from "@/services/Cliente/ApiCliente";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default {
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const validationSchema = Yup.object().shape({
      nome: Yup.string()
        .min(2, "Ops! deve possuir no minimo 2 Caracteres.")
        .max(50, "Ops! deve possuir no maximo 50 Caracteres.")
        .required("Campo Obrigatorio")
        .label("nome"),
      email: Yup.string()
        .required("Campo Obrigatorio")
        .email("Ops! email inválido."),
      telefone: Yup.string()
        .required("Campo Obrigatorio")
        .max(20, "Ops! telefone inválido"),
      cidade: Yup.string().required("Campo Obrigatorio"),
      estado: Yup.string().required("Campo Obrigatorio"),
    });
    const newCliente: Ref<NewCliente> = ref({
      nome: "",
      telefone: "",
      cidade: "",
      estado: "",
      email: "",
    });

    const submit = () => {
      ApiCliente.newCliente(newCliente.value).then(({ data }) => {
        if (!data.error) {
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
          return;
        }
      });
    };
    return {
      submit,
      validationSchema,
      newCliente,
    };
  },
};
</script>
<style lang=""></style>
