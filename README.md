
🧪 Testes Automatizados - Swag Labs (Sauce Demo)

Este projeto contém testes automatizados end-to-end para o site Sauce Demo, uma aplicação de e-commerce simulada para prática de testes. Os testes foram desenvolvidos com Cypress e cobrem os principais fluxos de login e catálogo de produtos.

Funcionalidades Testadas:

1. Módulo de Login (meu-login.cy.js)
   - Login com sucesso (standard_user)
   - Login com usuário problemático (problem_user)
   - Login com usuário de desempenho (performance_glitch_user)
   - Bloqueio de usuário (locked_out_user)
   - Senha inválida
   - Redirecionamento ao tentar acessar carrinho sem login

2. Módulo de Produtos (produtos.cy.js)
   - Exibição de todos os produtos do catálogo
   - Validação de preços corretos
   - Contagem de itens (6 produtos)
   - Adicionar e remover item do carrinho
   - Adicionar múltiplos itens ao carrinho
   - Resetar estado do aplicativo
   - Ordenação por menor preço

Tecnologias Utilizadas:
- Cypress (v12+)
- JavaScript
- Node.js

Pré-requisitos:
- Node.js instalado (v16 ou superior)
- NPM ou Yarn

Instalação:
1. Clone o repositório
2. Instale as dependências com "npm install" ou "yarn"
3. Para executar os testes:
   - Modo interativo: npx cypress open
   - Modo headless: npx cypress run
   - Executar um arquivo específico: npx cypress run --spec "cypress/e2e/meu-login.cy.js"

Observação: Este é um projeto educacional para fins de estudo e prática de testes automatizados. O site testado é uma aplicação de demonstração da Sauce Labs.






🧪 Automated Testing Portfolio – Swag Labs (Cypress)






Projeto de automação end-to-end validando fluxos críticos da aplicação demo da Sauce Labs:
👉 https://www.saucedemo.com/

Desenvolvido com Cypress, com integração contínua via GitHub Actions e geração de relatório HTML.

🎯 Objetivo

Garantir qualidade e confiabilidade nos principais fluxos:

Autenticação

Catálogo de produtos

Carrinho de compras

Ordenação de preços

Reset do estado da aplicação

Foco em organização, escalabilidade e execução automatizada.

🧠 Habilidades Demonstradas

✔ Testes E2E estruturados
✔ Cenários positivos e negativos
✔ Validação de regras de negócio
✔ Organização modular de suítes
✔ Integração contínua (CI)
✔ Relatório HTML profissional
✔ Execução headless (pipeline-ready)

🔍 Cobertura
🔐 Login

Login válido (standard_user)

Usuário bloqueado (locked_out_user)

Usuários com comportamento especial

Senha inválida

Bloqueio de rota sem autenticação

🛒 Produtos

Validação dos 6 produtos

Conferência de preços

Adição e remoção de itens

Múltiplos itens no carrinho

Reset da aplicação

Ordenação por menor preço

⚙️ Stack Tecnológica

Cypress v12+

JavaScript (ES6+)

Node.js LTS

GitHub Actions

Mochawesome

🚀 Instalação
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
▶ Execução

Modo interativo:

npx cypress open

Modo headless:

npx cypress run

Executar arquivo específico:

npx cypress run --spec "cypress/e2e/meu-login.cy.js"
📊 Relatórios

Após execução:

cypress/reports/

Relatório HTML gerado via Mochawesome.

🔄 CI/CD

Pipeline configurado com GitHub Actions:

Executa a cada push na main

Executa em Pull Requests

Ambiente Linux

Chrome headless

Upload de vídeos e screenshots

Status badge automático

📁 Estrutura
cypress/
├── e2e/
│   ├── meu-login.cy.js
│   └── produtos.cy.js
├── fixtures/
├── support/
│   ├── commands.js
│   └── e2e.js
.github/
└── workflows/
    └── cypress.yml
📈 Roadmap

Execução multi-browser

Paralelização

Cypress Dashboard

Testes de API

Estratégia de cobertura

📄 Licença

MIT