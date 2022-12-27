<template>
  <KTLoader v-if="loaderEnabled" :logo="loaderLogo"></KTLoader>
  <el-form
    @submit.prevent="submit()"
    :model="newCliente"
    :rules="rules"
    ref="formRef"
    class="demo-ruleForm row"
    status-icon
  >
    <div class="card mb-5">
      <div class="card-header d-flex flex-column mb-5">
        <div class="border-0 pt-5">
          <h3 class="card-title">
            <span class="card-label fw-bolder fs-3 mb-1"
              >Cadastro de cliente</span
            >
          </h3>
        </div>
      </div>
      <div class="row card-body">
        <div class="col-md-6">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">Nome:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="nome">
              <el-input
                v-model="newCliente.nome"
                placeholder="Nome Completo"
                name="nome"
                size="small"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-6">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">Email:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="email">
              <el-input
                v-model="newCliente.email"
                placeholder="email Completo"
                name="email"
                size="small"
              ></el-input>
            </el-form-item>
          </div>
        </div>

        <div class="col-md-4">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">telefone:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="telefone">
              <el-input
                size="small"
                type="phone"
                v-model="newCliente.telefone"
                placeholder="(00) 00000-0000"
                v-maska="['(##) #####-####', '(##) ####-####']"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-4">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span>Outro telefone:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="telefoneTwo">
              <el-input
                size="small"
                type="phone"
                v-model="newCliente.telefone_two"
                placeholder=" 00000000"
                v-maska="['(##) #####-####', '(##) ####-####']"
              ></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
    <div class="card mt-5 mb-5">
      <div class="card-header d-flex flex-column">
        <div class="border-0 pt-5">
          <h3 class="card-title">
            <span class="card-label fw-bolder fs-3 mb-1">Endereço</span>
          </h3>
        </div>
      </div>
      <div class="row card-body">
        <div class="col-md-4">
          <!--begin::Label-->
          <label class="d-flex align-items-center fs-6 fw-bold mb-2">
            <span class="required">Cep:</span>
          </label>
          <!--end::Label-->

          <el-form-item prop="cep">
            <el-input
              size="small"
              type="text"
              v-model="newCliente.cep"
              placeholder="00000-000"
              v-maska="'#####-###'"
            ></el-input>
          </el-form-item>
        </div>
        <div class="col-md-8">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">Logradouro:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="logradouro">
              <el-input
                size="small"
                type="text"
                v-model="newCliente.logradouro"
                placeholder="Rua barragem do retiro"
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">Bairro:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="bairro">
              <el-input
                size="small"
                type="text"
                v-model="newCliente.bairro"
                placeholder=""
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">Cidade:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="cidade">
              <el-input
                size="small"
                type="text"
                v-model="newCliente.cidade"
                placeholder=""
              ></el-input>
            </el-form-item>
          </div>
        </div>
        <div class="col-md-3">
          <div>
            <!--begin::Label-->
            <label class="d-flex align-items-center fs-6 fw-bold mb-2">
              <span class="required">UF:</span>
            </label>
            <!--end::Label-->

            <el-form-item prop="uf">
              <el-input
                size="small"
                type="text"
                v-model="newCliente.uf"
                placeholder=""
              ></el-input>
            </el-form-item>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-end p-0">
      <div>
        <button
          :data-kt-indicator="loading ? 'on' : null"
          class="btn btn-lg btn-primary"
          type="submit"
        >
          <span v-if="!loading" class="indicator-label">
            Novo Cliente
            <span class="svg-icon svg-icon-3 ms-2 me-0">
              <inline-svg src="icons/duotune/arrows/arr064.svg" />
            </span>
          </span>
          <span v-if="loading" class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </div>
  </el-form>
</template>
<script lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
import { reactive, Ref, ref,onMounted } from "vue";
import * as Yup from "yup";
import { NewCliente } from "@/models/Cliente";
import ApiCliente from "@/services/Cliente/ApiCliente";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import router from "@/router";
import { useRouter } from "vue-router";
import KTLoader from "@/components/Loader.vue";
import {
  loaderEnabled,
  loaderLogo,
} from "@/core/helpers/config";


export default {
  components: {
    ErrorMessage,
    Field,
    Form,
    KTLoader
  },
  setup() {
    const router = useRouter()
    const loading = ref(false);
    const formRef = ref<null | HTMLFormElement>(null);

    const newCliente: Ref<NewCliente> = ref({
      email: "",
      nome: "",
      telefone: "",
      telefone_two: "",
      cep: "",
      logradouro: "",
      bairro: "",
      uf: "",
      cidade: "",
    });
   

    const submit = () => {
      if (!formRef.value) {
        return;
      }
      console.log(newCliente.value);
      formRef.value.validate((valid) => {
        if (valid) {
          loading.value = true;

          ApiCliente.newCliente(newCliente.value)
            .then(({ data }) => {
              console.log(data);
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
                router.push({name: 'clientes'})
                return;
              } else {
                Swal.fire({
                  text: data.message,
                  icon: "error",
                  buttonsStyling: false,
                  confirmButtonText: "Tentar Novamente!",
                  customClass: {
                    confirmButton: "btn fw-bold btn-light-danger",
                  },
                });
                loading.value = false;
              }
              
              return false;
            })
            .catch((err) => {
              loading.value = false;
              Swal.fire({
                text: "error",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Tentar Novamente!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
            });
        }
      });
    };

    function validateCep(rule: any, value: any, callback: any) {
      if (value === "") {
        callback(new Error("Digite um cep"));
      } else {
        fetch(`https://viacep.com.br/ws/${value}/json/`)
          .then((r) => r.json())
          .then((response) => {
            newCliente.value.logradouro = response.logradouro;
            newCliente.value.bairro = response.bairro;
            newCliente.value.cidade = response.localidade;
            newCliente.value.uf = response.uf;
          })
          .catch((error) => {
            console.log(error);
          });

        return true;
      }
    }

    const rules = ref({
      nome: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
      email: [
        {
          required: true,  
          message: "Email obrigatorio",
        },{
          type: "email",
          message: "Email inválido",
          trigger: "change",
        }
      ],
      telefone: [
        {
          required: true,
          trigger: "change",
          message: "Telefone obrigatório",
        },
      ],
      telefoneTwo: [
        {
          trigger: "change",
        },
      ],
      cep: [
        {
          required: true,
          trigger: "blur",
          validator: validateCep,
        },
      ],
      logradouro: [
        {
          required: true,
          message: "Preencha o campo.",
          trigger: "change",
        },
      ],
      uf: [
        {
          required: true,
          message: "Preencha o campo.",
          trigger: "change",
        },
      ],
      bairro: [
        {
          required: true,
          message: "Preencha o campo.",
          trigger: "change",
        },
      ],
      cidade: [
        {
          required: true,
          message: "Preencha o campo.",
          trigger: "change",
        },
      ],
    });

    return {
      submit,
      newCliente,
      rules,
      loading,
      formRef,
      loaderEnabled,
      loaderLogo
    };
  },
};
</script>
<style lang=""></style>
