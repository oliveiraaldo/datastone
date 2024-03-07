<template>
  <div class="flex2">
    <div>
      <h2 class="text-center">Fazer Associações</h2>
      <form @submit.prevent="associarProdutosAoClienteHandler" class="bg-light">
        <div class="form-group">
          <label for="clienteSelecionado">Selecionar Cliente:</label>
          <select v-model="clienteSelecionado">
            <option disabled value="">Por favor, selecione um cliente</option>
            <option v-for="cliente in clientesAtivos" :key="cliente.id" :value="cliente.id">
              {{ cliente.nome }}
            </option>
          </select>
        </div>
        <div class="form-check2">
          <div class="form-group">
            <label>Selecionar Produtos:</label>
          </div>
          <div v-for="produto in produtosAtivos" :key="produto.id">
            <input type="checkbox" :value="produto.id" v-model="produtosSelecionados">
            <label for="checkbox">{{ produto.nome }}</label>
          </div>
        </div>
        <button type="submit" class="btn-primary">Associar</button>
      </form>
    </div>

    <div>
      <h2 class="text-center">Associações Realizadas</h2>
      <table class="tabela-produtos">
        <thead>
          <tr>
            <th>Clientes</th>
            <th>Produtos Associados</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="associacao in associacoes" :key="associacao.clienteId">
            <td>{{ nomeCliente(associacao.clienteId) }}</td>
            <td>
              <ul>
                <li v-for="produtoId in associacao.produtoIds" :key="produtoId">
                  {{ nomeProduto(produtoId) }}
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>    
</template>

<script>
import { computed, ref, watch } from 'vue';
import { store, associarProdutosAoCliente } from '../store/store';

export default {
  setup() {
    const clienteSelecionado = ref(null);
    const produtosSelecionados = ref([]);

    watch(clienteSelecionado, () => {
      if (clienteSelecionado.value) {
        const associacaoExistente = store.associacoes.find(assoc => assoc.clienteId === clienteSelecionado.value);
        if (associacaoExistente) {
          produtosSelecionados.value = [...associacaoExistente.produtoIds];
        } else {
          produtosSelecionados.value = [];
        }
      } else {
        produtosSelecionados.value = [];
      }
    }, { immediate: true });


    const associarProdutosAoClienteHandler = () => {
      if (!clienteSelecionado.value || produtosSelecionados.value.length === 0) {
        alert("Por favor, selecione um cliente e pelo menos um produto.");
        return;
      }
      associarProdutosAoCliente(clienteSelecionado.value, produtosSelecionados.value);
      alert("Produtos associados ao cliente com sucesso!");
    };

    const clientesAtivos = computed(() => store.clientes.filter(c => c.ativo));
    const produtosAtivos = computed(() => store.produtos.filter(p => p.ativo));
    const associacoes = computed(() => store.associacoes);

    const nomeCliente = (clienteId) => {
      const cliente = store.clientes.find(c => c.id === clienteId);
      return cliente ? cliente.nome : 'Cliente desconhecido';
     };

    const nomeProduto = (produtoId) => {
      const produto = store.produtos.find(p => p.id === produtoId);
      return produto ? produto.nome : 'Produto desconhecido';
    };

    return {
      clienteSelecionado,
      produtosSelecionados,
      associarProdutosAoClienteHandler,
      clientesAtivos,
      produtosAtivos,
      associacoes,
      nomeCliente,
      nomeProduto,
    };
  },
};
</script>
