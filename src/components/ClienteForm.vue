<template>
  <h2>Cadastro de Clientes</h2>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="nome">Nome:</label>
      <input v-model="cliente.nome" id="nome" type="text" />
    </div>
    <div class="form-group">
      <label for="documento">Documento:</label>
      <input v-model="cliente.documento" id="documento" type="text" />
    </div>
    <div class="form-group">
      <label for="telefone">Telefone:</label>
      <input v-model="cliente.telefone" id="telefone" type="text" />
    </div>
    <div class="form-group">
      <label for="email">E-mail:</label>
      <input v-model="cliente.email" id="email" type="email" />
    </div>
    <div class="form-check">
      <label for="ativo">{{ cliente.ativo ? 'Ativo: ' : 'Inativo: ' }}</label>
      <input v-model="cliente.ativo" id="ativo" type="checkbox" />
    </div>
    <button type="submit" class="btn-primary">Cadastrar</button>
  </form>
  <button @click="closeModal" class="btn-close">X</button>
</template>

<script>
import { ref } from 'vue';
import { addCliente } from '../store/store';

export default {
  setup() {
    const cliente = ref({
      nome: '',
      documento: '',
      telefone: '',
      email: '',
      ativo: false,
    });


    const submitForm = () => {
      addCliente(cliente.value);
      cliente.value = { nome: '', documento: '', telefone: '', email: '', ativo: false }; // Reset após adicionar
      alert("Cliente cadastrado com sucesso!");
    };

    return {
      cliente,
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
