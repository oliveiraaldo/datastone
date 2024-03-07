import { createRouter, createWebHistory } from 'vue-router';
import ProdutosView from '../views/ProdutosView.vue';
import ClientesView from '../views/ClientesView.vue';
import AssociacaoView from '../views/AssociacaoView.vue';

const routes = [
  {
    path: '/produtos',
    name: 'Produtos',
    component: ProdutosView
  },
  {
    path: '/clientes',
    name: 'ClienteForm',
    component: ClientesView
  },
  {
    path: '/',
    name: 'AssociacaoView',
    component: AssociacaoView
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
