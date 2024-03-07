<template>
  <div class="pages">
    <h1 class="text-center">Produtos</h1>
    <div class="flex">
      <h3>Lista de Produtos</h3>
      <button @click="toggleModal" class="btn-primary">Cadastrar Produto</button>
    </div>
    <ProdutoListar />
    <div v-if="showModal" class="modal-overlay" @click.self="toggleModal">
      <ProdutoForm @close="toggleModal" />
    </div>
  </div>
</template>


<script>
  import ProdutoForm from '../components/ProdutoForm.vue';
  import ProdutoListar from '../components/ProdutoListar.vue';

  export default {
    components: {
      ProdutoForm,
      ProdutoListar
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

