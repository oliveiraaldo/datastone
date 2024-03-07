<!-- ProdutoEditarModal.vue -->
<template>
  <div v-if="visivel" class="modal">
    <div class="modal-overlay" @click.self="closeModal">
      <h2>Editar Produto</h2>
      <form @submit.prevent="salvarEdicao">
        <div class="form-group">
          <input v-model="nomeProduto" placeholder="Nome do Produto" />
        </div>  
        <button type="submit" class="btn-primary">Salvar</button>
      </form>
      <button @click="closeModal" class="btn-close">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['produto', 'visivel'],
  emits: ['atualizar-produto', 'fechar'],
  data() {
    return {
      nomeProduto: '',
    };
  },
  watch: {
    produto: {
      immediate: true,
      handler(novoProduto) {
        if (novoProduto) {
          this.nomeProduto = novoProduto.nome;
        }
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    salvarEdicao() {
      this.$emit('atualizar-produto', { ...this.produto, nome: this.nomeProduto });
    },
  },
};
</script>