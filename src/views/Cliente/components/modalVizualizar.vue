<template>
  <div class="modal fade" id="modalCliente" tabindex="-1" aria-labelledby="modalClienteLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-body">
          <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
            <el-tab-pane label="Cliente" name="first">
            <div class="row mb-3">
              <div class="col-2 ">
                <div class="text-muted">ID:</div>
                <div>{{ data?.user_id }}</div>
              </div> 
              <div class="col-10 ">
                <div class="text-muted">Nome:</div>
                <div>{{ data?.nome }}</div>
              </div>             
            </div>
            <div class="row mb-3">
              <div class="col-6  ">
                <label>Telefone:</label>
                <div>{{ data?.telefone }}</div>
              </div>
              <div class="col-6  ">
                <label>Telefone:</label>
                <div>{{ data?.telefone_two ?? 'Sem Contato' }}</div>
              </div>
              </div>
            <div class="row mb-3">
              <div class="col-5 ">
                <div class="text-muted">Email:</div>
                <div>{{ data?.email }}</div>
              </div>
            </div>
            </el-tab-pane>
            <el-tab-pane label="Endereço" name="second">Config</el-tab-pane>
            <el-tab-pane label="Role" name="third">Role</el-tab-pane>
            <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
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