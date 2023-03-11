<template>
  <div class="modal fade" id="modalPedido" tabindex="-1" aria-labelledby="modalPedidoLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-body">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Cliente" name="first">
                <table>
                  <tr>
                    <td>
                      <div class="text-dark">ID:</div>
                      <div class="text-muted">{{ data?.user_id }}</div>
                    </td>
                    <td>
                      <div class="text-dark">Nome:</div>
                      <div class="text-muted">{{ data?.nome }}</div>
                    </td>
                
                    <td>
                      <div class="text-dark">Email:</div>
                      <div class="text-muted">{{ data?.email }}</div>
                    </td>
                  </tr>
                  <tr>
                
                    <td>
                      <div class="text-dark">Telefone:</div>
                      <div>{{ data?.telefone }}</div>
                    </td>
                    <td>
                      <div class="text-dark">Telefone:</div>
                      <div>{{ data?.telefone_two ? data?.telefone_two : 'Sem Contato' }}</div>
                    </td>
                  </tr>
                </table>


              <!-- <div class="d-flex flex-wrap mb-3">
                <div class="me-4 ">
                  <div class="text-dark">ID:</div>
                  <div class="text-muted">{{ data?.user_id }}</div>
                </div>
                <div class="me-4">
                  <div class="text-dark">Nome:</div>
                  <div class="text-muted">{{ data?.nome }}</div>
                </div>
                <div class="me-4">
                  <div class="text-dark">Email:</div>
                  <div class="text-muted">{{ data?.email }}</div>
                </div>
                            
                <div class="me-4 ">
                  <div class="text-dark">Telefone:</div>
                  <div>{{ data?.telefone }}</div>
                </div>
                <div class="me-4 ">
                  <div class="text-dark">Telefone:</div>
                  <div>{{ data?.telefone_two ?  data?.telefone_two  : 'Sem Contato' }}</div>
                </div>
              </div>              -->
            </el-tab-pane>
            <el-tab-pane label="Endereço" name="second">
              <table>
                <tr>
                  <tr>
                  <div class="text-dark">Cep:</div>
                  <div class="text-muted">{{ data?.cep }}</div>                  
                  </tr>
                
                <td>
                  <div class="text-dark">Uf:</div>
                  <div class="text-muted">{{ data?.uf }}</div>            
                  </td>

                  <td>
                    <div class="text-dark">Cidade:</div>
                  <div class="text-muted">{{ data?.cidade }}</div>        
                  </td>
                </tr>

                
              </table>

              <!-- <div class="d-flex mb-3 flex-wrap ">
                <div class="me-4">
                  <div class="text-dark">Cep:</div>
                  <div class="text-muted">{{ data?.cep }}</div>
                </div>
                <div class="me-4">
                  <div class="text-dark">Uf:</div>
                  <div class="text-muted">{{ data?.uf }}</div>
                </div>
                <div class="me-4">
                  <div class="text-dark">Cidade:</div>
                  <div class="text-muted">{{ data?.cidade }}</div>
                </div>
                <div class="me-4">
                  <div class="text-dark">Bairro:</div>
                  <div class="text-muted">{{ data?.bairro }}</div>
                </div> 
                <div class="me-4">
                  <div class="text-dark">Logradouro:</div>
                  <div class="text-muted">{{data?.logradouro}}</div>               
              </div>
            </div> -->
            </el-tab-pane>
            <el-tab-pane label="Pedidos" name="third">
              <div class="d-flex">
                <div class="col-6">
                  <div class="text-dark">Total de pedidos:</div>
                  <div class="text-muted">{{ data?.pedidos.length == 0 ? 'Sem pedido' :  data?.pedidos.length }}</div>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
  
        </div>
  
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref,Ref, watch} from 'vue'
import type { TabsPaneContext } from 'element-plus'
import type {Cliente} from '@/models/Cliente'
export  default defineComponent({
    props: {
        data: Array<Cliente>
    },
setup(props){

  const activeName = ref('first')
 
  
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
return {
  activeName,
  handleClick
}
}
})
</script>
<style>
.demo-tabs > .el-tabs__content {  
  color: #6b778c;
 
}</style>