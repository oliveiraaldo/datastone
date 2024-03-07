<template>
  <div class="pages">
    <h1 class="text-center">Associação de Produtos</h1>
    <div class="flex2">
    <AssociaProdutoCliente />
    </div>
  </div>
</template>


<script>
  import AssociaProdutoCliente from '../components/AssociaProdutoCliente.vue';

  export default {
    components: {
      AssociaProdutoCliente
    },
  }
</script>

