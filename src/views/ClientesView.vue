<template>
  <div class="pages">
    <h1 class="text-center">Clientes</h1>
    <div class="flex">
      <h3>Lista de Clientes</h3>
      <button @click="toggleModal" class="btn-primary">Cadastrar Cliente</button>
    </div>
    <ClienteListar />
    <div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
      <ClienteForm @close="toggleModal" />
    </div>
  </div>
</template>


<script>
  import ClienteForm from '../components/ClienteForm.vue';
  import ClienteListar from '../components/ClienteListar.vue';

  export default {
    components: {
      ClienteForm,
      ClienteListar
    },
    data() {
      return {
        showModal: false
      };
    },
    methods: {
      toggleModal() {
        this.showModal = !this.showModal;
      }
    }
  }
</script>

