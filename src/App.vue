<template>
  <div id="app">
    <header class="cabecalho">
      <nav class="container">
        <div class="menu">
          <ul>
            <li><router-link to="/" class="logo">Home</router-link></li>
            <li><router-link to="/clientes">Clientes</router-link></li>
            <li><router-link to="/produtos">Produtos</router-link></li>
          </ul>
        </div>
        <ul class="menu-links">

        </ul>
        <div class="user">
          <ul>
            <li>Perfil</li>
            <li>Sair</li>
          </ul>
        </div>
      </nav>
    </header>

    <main class="container">
      <router-view></router-view>
    </main>

    <footer class="rodape">
      <p>Todos os direitos reservados &copy; 2024</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'App',
  setup() {
  },
}
</script>
