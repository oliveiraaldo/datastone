<template>
  <h2>Cadastro de Produtos</h2>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="nome">Nome:</label>
      <input v-model="produto.nome" id="nome" type="text"/>
    </div>
    <div class="form-check">
      <label for="ativo">{{ produto.ativo ? 'Ativo: ' : 'Inativo: ' }}</label>
      <input v-model="produto.ativo" id="ativo" type="checkbox" />
    </div>
      <button type="submit" class="btn-primary">Cadastrar</button>
  </form>
  <button @click="closeModal" class="btn-close">X</button>
</template>

<script>
import { ref } from 'vue';
import { addProduto } from '../store/store';

export default {
  setup() {
    const produto = ref({
      nome: '',
      ativo: false,
    });

    const submitForm = () => {
      addProduto(produto.value);
      produto.value = { nome: '', ativo: false };
      alert("Produto cadastrado com sucesso!");
    };

    return {
      produto,
      submitForm,
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>
