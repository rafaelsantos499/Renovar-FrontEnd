<template>  
   
    <el-form
    @submit.prevent="submit()"
    :model="formCliente"
    :rules="rules"
    ref="formRef"
    class="demo-ruleForm row"
    status-icon
    >
    <div class="card mb-5">
      <!-- <span class="pt-3 ps-3"
      ><router-link :to="{ name: 'clientes' }">clientes</router-link
      >-><router-link :to="{ name: 'clientes' }">{{
        routeParams.nome
      }}</router-link></span
     > -->
    
      <div class="card-header d-flex flex-column mb-5">
        <div class="border-0 pt-5">
          <h3 class="card-title">
            <span class="card-label fw-bolder fs-3 mb-1"
              >Cliente : {{ routeParams.nome }}</span
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
                v-model="formCliente.nome"
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
                v-model="formCliente.email"
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
                v-model="formCliente.telefone"
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
                v-model="formCliente.telefone_two"
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
              v-model="formCliente.cep"
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
                v-model="formCliente.logradouro"
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
                v-model="formCliente.bairro"
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
                v-model="formCliente.cidade"
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
                v-model="formCliente.uf"
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
          :data-kt-indicator="loadingButton ? 'on' : null"
          class="btn btn-lg btn-primary"
          type="submit"
          :disabled="loadingButton"
        >
          <span v-if="!loadingButton" class="indicator-label">
            Editar Cliente
            <span class="svg-icon svg-icon-3 ms-2 me-0">
              <inline-svg src="icons/duotune/arrows/arr064.svg" />
            </span>
          </span>
          <span v-if="loadingButton" class="indicator-progress">
            Aguarde...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </div>
  </el-form>
    <div class="card-body py-3 pb-10">
     
    </div>
  
  <div v-if="true" class="card card-body py-3">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5">
        <h3 class="card-title">
          <span class="card-label fw-bolder fs-3 mb-1">Pedidos do CLiente</span>
        </h3>
      </div>
    </div>
    <template v-if="formCliente.pedidos?.length > 0">
  
      <div class="card-body py-3 pb-10 pt-5">
        <div class="card-body py-3">
          <!--begin::Table container-->
          <div class="table-responsive">
            <!--begin::Table-->
            <table class="
                table table-row-dashed table-row-gray-300
                align-middle
                gs-0
                gy-4
              ">
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
                <template  v-for="(item, index) in formCliente?.pedidos" :key="index">
                  <tr>
                    <td>
                      <div class="d-flex align-items-center">
                        <span class="bullet bullet-vertical h-40px me-3" :class="`bg-06080`"></span>
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
                      <router-link :to="{
                          name: 'pedido',
                          params: {
                            id_cliente: item.cliente_id,
                            id_pedido: item.id,
                          },
                        }" class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                          me-1
                        ">
                        <span class="svg-icon svg-icon-3">
                          <inline-svg src="media/icons/duotune/general/gen019.svg" /> </span></router-link>
  
                      <a href="#" class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                          me-1
                        ">
                        <span class="svg-icon svg-icon-3">
                          <inline-svg src="media/icons/duotune/art/art005.svg" />
                        </span>
                      </a>
  
                      <a href="#" class="
                          btn
                          btn-icon
                          btn-bg-light
                          btn-active-color-primary
                          btn-sm
                        ">
                        <span class="svg-icon svg-icon-3">
                          <inline-svg src="media/icons/duotune/general/gen027.svg" />
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
    </template>
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
import { ErrorMessage, Field, Form } from "vee-validate";
import Swal from "sweetalert2/dist/sweetalert2.min.js";
import { useRouter } from "vue-router";

export default {
  components: {
    ErrorMessage,
    Field,
    Form,
  },
  setup() {
    const router = useRouter()
    const formRef = ref<null | HTMLFormElement>(null);  
    const routeParams = reactive(router.currentRoute.value.params)
    const loadingButton: Ref<boolean> = ref(false)


    const formCliente: Cliente = reactive({
      email: '',
      nome: '',
      telefone: '',
      telefone_two: '',
      cep: '',
      logradouro: '',
      bairro: '',
      uf: '',
      cidade: '',
      pedidos: [],
      user_id: 0,
      id: 0,
    });

  

    onMounted( async () => {
     await routeParams.id
     await routeParams.nome
     if(routeParams.id)  getCliente(routeParams.id) 
    });   

    
    const getCliente =  (ClienteID) => {
      ApiCliente.clientesGet(ClienteID)
      .then(({ data }) => {
        const cliente = data.data.cliente

        formCliente.id = cliente.id
        formCliente.nome = cliente.nome
        formCliente.email = cliente.email
        formCliente.telefone = cliente.telefone
        formCliente.telefone_two = cliente.telefone_two
        formCliente.cep = cliente.cep
        formCliente.uf = cliente.uf
        formCliente.cidade = cliente.cidade
        formCliente.bairro = cliente.bairro
        formCliente.logradouro = cliente.logradouro 
        formCliente.pedidos = cliente.pedidos
        formCliente.user_id = cliente.user_id


        console.log(formCliente)
      })
      .catch(error => console.log(error));     
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

    const submit = async (formEl) => {    
      if (!formRef.value) return;
      formRef.value.validate((valid) => {
        if (valid) {
          loadingButton.value = true         
          ApiCliente.putCliente(routeParams.id, formCliente)
            .then(({ data }) => {
              loadingButton.value = true
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
                  title: "Cliente editado com sucesso",
                });
                router.push({ name: 'clientes' })
                loadingButton.value = false
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
                loadingButton.value = false

              }
            }).catch((erro) => {
              Swal.fire({
                text: "error",
                icon: "error",
                buttonsStyling: false,
                confirmButtonText: "Tentar Novamente!",
                customClass: {
                  confirmButton: "btn fw-bold btn-light-danger",
                },
              });
              loadingButton.value = false

            })
        }
      })
    }

    function validateCep(rule: any, value: any, callback: any){
      if (value === "") {
        callback(new Error("Digite um cep"));
      } else {
        fetch(`https://viacep.com.br/ws/${value}/json/`)
          .then((r) => r.json())
          .then((response) => {
            formCliente.logradouro = response.logradouro;
            formCliente.bairro = response.bairro;
            formCliente.cidade = response.localidade;
            formCliente.uf = response.uf;
          })
          .catch((error) => {
            console.log(error);
          });

        return true;
      }
    }
  

    return {
      formRef,
      rules,
      routeParams,
      formCliente,
      submit, 
      loadingButton
    };
  },
};
</script>
<style>
input:disabled {
  opacity: 1;
}
</style>
