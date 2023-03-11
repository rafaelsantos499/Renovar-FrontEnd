<template >
    <div class="modal fade" id="modalEditarProduto" tabindex="-1" role="dialog" aria-labelledby="modalEditarProduto" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">{{ produto?.label }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       
            <el-form @submit.prevent="submit()" 
              :model="updateProduto" 
              :rules="rules" 
              ref="formRef" 
              class="demo-ruleForm row"
              status-icon>
                <div>                
                    <p class="required">Quantidade:</p>           
                    <el-input-number v-model="updateProduto.quantidade" :min="1" :max="10" size="small" @change="handleChangeQuantidade" />
                  </div>     
                <div class="row mt-5">
                  <div class="col-6" >
                    <p class="required">Marca:</p>
                    <el-form-item prop="marca">
                      <el-input v-model="updateProduto.marca" size="small" />
                    </el-form-item>
                  </div>
                  <div class="col-6 ">
                    <p class="required">Profundidade do poço:</p>
                    <el-form-item prop="profundidade_poco">
                      <el-input v-model="updateProduto.profundidade_poco" size="small" />
                    </el-form-item>                
                  </div>
                </div>
                <div class="row mt-5">
                    <div class="col-6">
                      <p class="required">String:</p>      
                      <el-form-item prop="string">   
                       <el-input-number   v-model="updateProduto.string"  :min="1" :max="10" size="small"  />
                    </el-form-item>  
                    </div>
                    <div class="col-6">
                      <p class="required">Placas:</p>           
                      <el-input-number v-model="updateProduto.qtd_placas" :min="1" :max="10" size="small"  />
                    </div>
                  </div>
                <div class="mt-5">
                    <p class="required">Codigo:</p>
                  <el-form-item prop="codigo_produto">
                    <el-input v-model="updateProduto.codigo_produto" size="small" />
                  </el-form-item>  
                </div>
                <div class="row mt-5">
                  <div class=" col-4">
                    <p class="required">Preço unitario:</p>
                      <el-input @change="handleChangeValorUnitario"  v-model="updateProduto.preco_unitario" size="small" />
                  </div>
                  <div class="col-4">
                    <p >Preço Total:</p>
                      <el-input disabled v-model="updateProduto.preco_total" size="small" />
                  </div>
                </div>
             
              <div class="modal-footer">
             <button
                :data-kt-indicator="loading ? 'on' : null"
                class="btn btn-lg btn-primary"
                type="submit"
              >
                <span v-if="!loading" class="indicator-label">
                  Editar Produto
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
        </el-form>
      </div>
      
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { defineComponent,ref , Ref,reactive,toRefs , toRef ,watch} from 'vue'
import {Produto, UpdateProduto} from '@/models/Produto'
import type { PropType } from 'vue'
import ApiPedido from '@/services/Pedido/ApiPedido'
import { number } from '@intlify/core-base'
export default defineComponent({
  props: {
    produto: {
      type: Object  as PropType<Produto>,
      required: true
    },
    pedidoID: {
      type: Number,
      required: true
    },
    clienteId: {      
      type: Number,
      required: true
    }
  },
  setup(props, ctx) {
    
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref(false);
    const updateProduto : UpdateProduto = reactive({
      codigo_produto:'',
      profundidade_poco: '',
      marca: '',
      string: 0,
      quantidade: 0,
      preco_unitario: 0,
      qtd_placas: 0,
      preco_total: 0,
    })

    watch(()=> props.produto , ()=> {
      const produto : UpdateProduto = props?.produto?.info_produto
      updateProduto.codigo_produto = produto?.codigo_produto
      updateProduto.marca = produto?.marca
      updateProduto.profundidade_poco = produto?.profundidade_poco
      updateProduto.quantidade = produto?.quantidade
      updateProduto.preco_unitario = produto?.preco_unitario
      updateProduto.qtd_placas = produto?.qtd_placas
      updateProduto.string = 2
      updateProduto.preco_total = produto?.preco_total
    })

    const rules = ref({
      codigo_produto: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
      marca: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
      profundidade_poco: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
      preco_unitario: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
      preco_total: [
        {
          required: true,
          message: "Nome obrigatória",
          trigger: "blur",
        },
      ],
    })

    const handleChangeQuantidade = (value: number) => {
      updateProduto.preco_total = value * Number(updateProduto.preco_unitario)
    }

    const handleChangeValorUnitario = () => {
      updateProduto.preco_total = updateProduto.quantidade * Number(updateProduto.preco_unitario)
    }

    function valorTotal(){

    }

  //   {
  // //  "pedido" :{
  // //              "cliente_id":2,
  // //               "pedido_id" : 152,
  // //               "produto_id": 75                
  // //  },
  // //  "produto":  
  // //      {               
  // //          "quantidade" : 1,
  // //          "garantia" : 1,
  // //          "qtd_placas" : 7,               
  // //           "marca": "teste 2",
  // //           "profundidade_poco": "30mt",
  // //           "codigo_produto": "askjdhajksdasd65+465456+456",
  // //     }
  // }

    const submit = () => {
      console.log('não passou')

      if (!formRef.value) {
        return;
      }
      formRef.value.validate((valid) => {
        console.log(props)
        if (valid) {
          const data = {
            pedido :  {
              cliente_id : props.clienteId,
              pedido_id: props.pedidoID,
              produto_id : props.produto.info_produto.id
            },
            produto: updateProduto
          }
          console.log(data)
        ApiPedido.PutProduto(data)

        }
      })
    }

    return {
      handleChangeQuantidade,
      handleChangeValorUnitario,
      submit,
      formRef,
      updateProduto,
      rules,
      valorTotal,
      loading,
    }
  },
})
</script>
<style lang="">
    
</style>