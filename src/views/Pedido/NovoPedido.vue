<template lang="">



<div class="modal fade" id="modalNovoPedido" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <router-link  type="button" class="btn-close" aria-label="Close" to="/dashboard"> </router-link> 
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Novo pedido</button>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import { onMounted } from 'vue';
import { Modal } from "bootstrap";

export default {
  setup(){
    

    onMounted(() => {
      modal()
    })

    

    function modal() : void {
      let auxModal;
      const modalElement : HTMLElement | null = document.getElementById('modalNovoPedido')
      auxModal = new Modal(modalElement)
      auxModal.show()
    }

   
     
      return {
        
      }
  }
}
</script>
<style lang="">
  
</style>