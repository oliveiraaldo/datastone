# Desafio Front End Data Stone

## Descrição

Este projeto foi desenvolvido como parte de um teste para demonstrar habilidades em Vue.js, incluindo a criação de componentes reutilizáveis, gerenciamento de estado com Vuex (ou outra forma de gerenciamento de estado se aplicável), e estilização com SCSS. O objetivo principal era construir uma interface de usuário para associação de produtos a clientes, permitindo a criação, edição e visualização dessas associações de forma intuitiva e eficiente.

## Decisões Tomadas

Durante o desenvolvimento, optei por utilizar Vue 3 devido aos seus recursos reativos avançados e à API de Composição, que nos permitiu organizar o código de forma mais modular e reutilizável. Para a estilização, adotamos SCSS pela sua capacidade de criar estilos mais organizados e manuteníveis com o uso de variáveis, mixins e aninhamento.

A estrutura do projeto foi dividida em componentes, views e store, seguindo boas práticas de desenvolvimento para facilitar a manutenção e escalabilidade do código. Além disso, foi dado um foco especial à usabilidade e acessibilidade da interface, garantindo que a aplicação seja fácil de usar e acessível a todos os usuários.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

- `/src/components`: Componentes reutilizáveis do Vue, como campos de entrada, botões e modais.
- `/src/views`: Telas da aplicação que utilizam os componentes definidos.
- `/src/store`: Gerenciamento de estado da aplicação, (dados mocados) contendo a lógica para gerenciar clientes, produtos e associações.
- `/src/assets/styles`: Arquivos SCSS para estilização global e específica de componentes.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga estas etapas:

1. **Clone o Repositório**

```bash
git clone https://github.com/oliveiraaldo/datastone.git
cd datastone
```

2. **Instale as Dependências**

```bash
npm install
```

3. **Inicie o Servidor de Desenvolvimento**

```bash
npm run serve
```

Após iniciar o servidor, você pode acessar a aplicação no navegador através do endereço http://localhost:8080.
