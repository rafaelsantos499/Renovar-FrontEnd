<template>
   <div class="card mb-5">
    <div class="card-header d-flex flex-column">
      <div class="border-0 pt-5 d-flex justify-content-between ">
        <h3 class="card-title ">
          <span class="card-label fw-bolder fs-3 mb-1">Editar : {{produtoInfo?.nome_produto}}   
          <p class=" text-muted fs-7 mb-1"> {{produtoInfo?.label}} </p> 
          </span> 
        </h3>
        <button class="btn btn-lg btn-primary d-flex justify-content-center align-items-center" style="width: 100px; height: 30px"  @click.prevent=" goTo()">
          <span class="indicator-label">
                  Voltar
                  
            </span>
        </button> 
      </div>
    </div>
  
   <div class="card-body py-3 pb-10">
    <el-form @submit.prevent="submit()" 
              :model="updateProduto" 
              :rules="rules" 
              ref="formRef" 
              class="demo-ruleForm row"
              status-icon>                    
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
                       <el-input-number   v-model="updateProduto.qtd_string"  :min="1" :max="10" size="small"  />
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
                <div class="row mt-5  mb-5">
                  <div class=" col-3">                
                    <p class=" required">Quantidade:</p>           
                    <el-input-number v-model="updateProduto.quantidade" :min="1" :max="10" size="small" @change="handleChangeQuantidade" />
                  </div> 
                  <div class="col-4">
                    <p class="required">Preço unitario:</p>
                      <el-input   v-model="updateProduto.preco_unitario" @changer="handleChangePrecoUnitario" size="small" />
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
</template>
<script lang="ts">
import { Produto, UpdateProduto } from '@/models/Produto';
import router from '@/router';
import ApiPedido from '@/services/Pedido/ApiPedido';
import { number } from '@intlify/core-base';
import { onMounted,ref,Ref,toRef,reactive, defineComponent ,watch} from 'vue';
import {useAlert}  from '@/composables/Alert'

export default defineComponent({
    setup() {
    const {showTimeAlert} = useAlert()
    const params =  ref() 
    const produtoInfo : Ref<any> = ref()
    const IDPEDIDO = ref()    
    const IDPRODUTO =  ref()
    const IDCLIENTE =  ref()
    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref(false);
    const updateProduto: UpdateProduto = reactive({
      codigo_produto: '',
      profundidade_poco: '',
      marca: '',
      qtd_string: 0,
      quantidade: 0,
      preco_unitario: 0,
      qtd_placas: 0,
      preco_total: 0,
    })
   
        onMounted( async()=> {
          params.value = router.currentRoute.value.params    
          IDCLIENTE.value = params.value.id_cliente
          IDPEDIDO.value = params.value.id_pedido    
          IDPRODUTO.value = params.value.id_produto
          getProduto() 
        })

        const getProduto = async () => {       
          
          try {            
            const {data} = await ApiPedido.get(IDPEDIDO.value)
            produtoInfo.value = await data.data.pedido.produtos.find(produto => produto.info_produto.id == IDPRODUTO.value)
            console.log(produtoInfo.value)
            if(data.error || !produtoInfo.value) router.back()
            const produto : UpdateProduto = produtoInfo.value.info_produto 
            updateProduto.codigo_produto = produto.codigo_produto 
            updateProduto.marca = produto.marca
            updateProduto.profundidade_poco = produto.profundidade_poco
            updateProduto.quantidade = produto.quantidade
            updateProduto.preco_unitario = produto.preco_unitario
            updateProduto.preco_total = produto.preco_total
            updateProduto.qtd_placas = produto.qtd_placas
            updateProduto.qtd_string = produto.qtd_string            
            console.log(produto)
          } catch (error) {
            console.log(error)
            router.back()
          }

        }

        
      const handleChangeQuantidade = (value: number) => {        
        updateProduto.preco_total = value * Number(updateProduto.preco_unitario)
      }

      const handleChangePrecoUnitario = () => {        
        updateProduto.preco_total = updateProduto.quantidade * Number(updateProduto.preco_unitario)
      }

        const submit = () => {
          if (!formRef.value) {
        return;
      }
      formRef.value.validate((valid) => {
        if (valid) {        
          const data = {
            pedido :  {
              cliente_id : IDCLIENTE.value,
              pedido_id: IDPEDIDO.value,
              produto_id : IDPRODUTO.value
            },
            produto: updateProduto
          }
          ApiPedido.PutProduto(data).then(() => {
            showTimeAlert('Produto editado com sucesso')
          }).finally(()=> goTo() )
        }
      })
        }

        function goTo(){
          router.push(`/pedido/cliente=${IDCLIENTE.value}&Pedido=${IDPEDIDO.value}`)
        }

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
          type: number,
          message: "Nome obrigatória",
          trigger: "change",
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
        
        return {
            produtoInfo,
            formRef,
            updateProduto,
            loading,
            submit,
            rules,
            handleChangeQuantidade,
            handleChangePrecoUnitario,
            goTo
        }
    },
})
</script>
<style lang="">
    
</style>