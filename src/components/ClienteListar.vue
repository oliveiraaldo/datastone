<template>
  <div>
    <div>
      <table class="tabela-produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Documento</th>
            <th>Telefone</th>
            <th>E-mail</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientesAtivos" :key="cliente.id">
            <td>{{ cliente.id }}</td>
            <td>{{ cliente.nome }}</td>
            <td>{{ cliente.documento }}</td>
            <td> {{ cliente.telefone }}</td>
            <td> {{ cliente.email }}</td>
            <td>
              <button class="btn-edit" @click="abrirModalEdicao(cliente)">Editar</button>
              <button class="btn-del" @click="apagar(cliente.id)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ClienteEditarModal
      :cliente="clienteSelecionado"
      :visivel="modalVisivel"
      @close="modalVisivel = false"
      @atualizar-cliente="atualizarCliente"
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { store } from '../store/store';
import ClienteEditarModal from './ClienteEditarModal.vue';

export default {
  components: {
    ClienteEditarModal,
  },
  setup() {
    const clientesAtivos = computed(() => store.clientes.filter(cliente => cliente.ativo));
    const clienteSelecionado = ref(null);
    const modalVisivel = ref(false);

    const abrirModalEdicao = (cliente) => {
      clienteSelecionado.value = { ...cliente };
      modalVisivel.value = true;
    };

    const apagar = (id) => {
      if (confirm("Tem certeza que deseja apagar este cliente?")) {
        store.apagarCliente(id);
      }
    };

    const atualizarCliente = (clienteAtualizado) => {
      store.editarCliente(clienteAtualizado.id, clienteAtualizado);
      modalVisivel.value = false;
    };

    return {
      clientesAtivos,
      abrirModalEdicao,
      apagar,
      clienteSelecionado,
      modalVisivel,
      atualizarCliente,
    };
  },
};
</script>
