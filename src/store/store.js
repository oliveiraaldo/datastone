import { reactive } from 'vue';

export const store = reactive({
  produtos: [
    {id: 101, nome: 'Detergente', ativo: true },
    {id: 102, nome: 'Sabonete', ativo: true },
    {id: 103, nome: 'Cotonete', ativo: false },
    {id: 104, nome: 'Esponja', ativo: true },
    {id: 105, nome: 'Alvejante', ativo: true },
    {id: 106, nome: 'Bola', ativo: true },
    {id: 107, nome: 'Raquete', ativo: true },
    {id: 108, nome: 'Peteca', ativo: true },
    {id: 109, nome: 'Fogão', ativo: true },
    {id: 110, nome: 'Geladeira', ativo: true },
  ],
  apagarProduto(id) {
    this.produtos = this.produtos.filter(produto => produto.id !== id);
  },
    editarProduto(id, dadosAtualizados) {
    const index = this.produtos.findIndex(produto => produto.id === id);
    if (index !== -1) {
      this.produtos[index] = { ...this.produtos[index], ...dadosAtualizados };
    }
  },
  clientes: [
    {id: 1, nome: 'Maria José', documento: '123456789', telefone: '11999999999', email: 'cliente1@exemplo.com', ativo: true },
    {id: 2, nome: 'Carlos Maia', documento: '987654321', telefone: '11988888888', email: 'cliente2@exemplo.com', ativo: true },
    {id: 3, nome: 'Joaquim Felício', documento: '987654321', telefone: '11988888888', email: 'cliente2@exemplo.com', ativo: true },
    {id: 4, nome: 'Beatriz Fonseca', documento: '987654321', telefone: '11988888888', email: 'cliente2@exemplo.com', ativo: true },
    {id: 5, nome: 'Mariana Lafetá', documento: '987654321', telefone: '11988888888', email: 'cliente2@exemplo.com', ativo: true },
  ],
  apagarCliente(id) {
    this.clientes = this.clientes.filter(cliente => cliente.id !== id);
  },
  editarCliente(id, dadosAtualizados) {
    const index = this.clientes.findIndex(cliente => cliente.id === id);
    if (index !== -1) {
      this.clientes[index] = { ...this.clientes[index], ...dadosAtualizados };
    }
  },

  associacoes: [
    {
      clienteId: 1,
      produtoIds: [104, 105, 106]
    },
    {
      clienteId: 2,
      produtoIds: [101, 102, 103]
    },
    {
      clienteId: 3,
      produtoIds: [107, 108, 109]
    },
    {
      clienteId: 5,
      produtoIds: [110]
    },
  ]
});

export function addProduto(produto) {
  const novoId = store.produtos.length + 1;
  store.produtos.push({ ...produto, id: novoId });
}

export function addCliente(cliente) {
  const novoId = store.clientes.length + 1;
  store.clientes.push({ ...cliente, id: novoId });
}

export function associarProdutosAoCliente(clienteId, produtoIds) {
  const index = store.associacoes.findIndex(assoc => assoc.clienteId === clienteId);
  if (index === -1) {
    store.associacoes.push({ clienteId, produtoIds });
  } else {
    store.associacoes[index].produtoIds = produtoIds;
  }
}
