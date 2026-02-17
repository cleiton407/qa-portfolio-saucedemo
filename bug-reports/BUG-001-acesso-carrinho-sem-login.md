# Relatório de Bug - BUG-001

**Título:** Mensagem confusa ao acessar carrinho sem estar logado

**Ambiente:** https://www.saucedemo.com (Chrome / Mac)

**Pré-condição:** Usuário não está logado

**Passos para reproduzir:**
1. Acessar o site Sauce Demo
2. Clicar no ícone do carrinho (canto superior direito)
3. Observar a mensagem exibida

**Resultado atual:**  
Aparece uma mensagem dizendo:  
"Que triste: Você só pode acessar '/cart.html' quando estiver logado."

**Resultado esperado:**  
Deveria redirecionar para a página de login com uma mensagem amigável, tipo:  
"Faça login para acessar seu carrinho."

**Severidade:** Baixa (não impede o uso, mas causa má experiência)

**Evidência:** `screenshots/BUG-001-acesso-carrinho-sem-login.png`