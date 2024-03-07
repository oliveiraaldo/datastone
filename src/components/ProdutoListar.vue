<template>
  <div>
    <div>
      <table class="tabela-produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="produto in produtosAtivos" :key="produto.id">
            <td>{{ produto.id }}</td>
            <td>{{ produto.nome }}</td>
            <td>
              <button class="btn-edit" @click="abrirModalEdicao(produto)">Editar</button>
              <button class="btn-del" @click="apagar(produto.id)">Apagar</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <ProdutoEditarModal
      :produto="produtoSelecionado"
      :visivel="modalVisivel"
      @close="modalVisivel = false"
      @atualizar-produto="atualizarProduto"
    />
  </div>
</template>

<script>
  import { computed, ref } from 'vue';
  import { store } from '../store/store';
  import ProdutoEditarModal from './ProdutoEditarModal.vue';

  export default {
    components: {
      ProdutoEditarModal,
    },
    setup() {
      const produtosAtivos = computed(() => store.produtos.filter(produto => produto.ativo));
      const produtoSelecionado = ref(null);
      const modalVisivel = ref(false);

      const abrirModalEdicao = (produto) => {
        produtoSelecionado.value = produto;
        modalVisivel.value = true;
      };

      const apagar = (id) => {
        if (confirm("Tem certeza que deseja apagar este produto?")) {
          store.apagarProduto(id);
        }
      };

      const atualizarProduto = (produtoAtualizado) => {
        store.editarProduto(produtoAtualizado.id, { nome: produtoAtualizado.nome });
        modalVisivel.value = false;
      };

      return {
        produtosAtivos,
        abrirModalEdicao,
        apagar,
        produtoSelecionado,
        modalVisivel,
        atualizarProduto,
      };
    },
  };
</script>
