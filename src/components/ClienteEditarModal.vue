<template>
  <div v-if="visivel" class="modal">
    <div class="modal-overlay" @click.self="closeModal">
      <h2>Editar Cliente</h2>
      <form @submit.prevent="salvarEdicao">
        <div class="form-group">
          <label for="nome">Nome:</label>
          <input id="nome" v-model="clienteEditavel.nome" type="text">
        </div>
        <div class="form-group">
          <label for="documento">Documento:</label>
          <input id="documento" v-model="clienteEditavel.documento" type="text">
        </div>
        <div class="form-group">
          <label for="telefone">Telefone:</label>
          <input id="telefone" v-model="clienteEditavel.telefone" type="tel">
        </div>
        <div class="form-group">
          <label for="email">E-mail:</label>
          <input id="email" v-model="clienteEditavel.email" type="email">
        </div>
        <button type="submit" class="btn-primary">Salvar</button>
      </form>
      <button @click="closeModal" class="btn-close">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cliente', 'visivel'],
  emits: ['atualizar-cliente', 'fechar'],
  data() {
    return {
      clienteEditavel: {},
    };
  },
  watch: {
    cliente: {
      immediate: true,
      handler(novoValor) {
        this.clienteEditavel = { ...novoValor };
      },
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    salvarEdicao() {
      this.$emit('atualizar-cliente', this.clienteEditavel);
    },
  },
};
</script>
