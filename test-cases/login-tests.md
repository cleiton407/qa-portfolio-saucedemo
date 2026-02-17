# Casos de Teste - Módulo de Login

## CT-001: Login com sucesso

**Descrição:** Verificar se o usuário consegue fazer login com credenciais válidas  
**Pré-condição:** Usuário está na página de login (https://www.saucedemo.com)

| Passo | Ação | Resultado Esperado |
|-------|------|--------------------|
| 1 | Digitar "standard_user" no campo **Username** | Campo preenchido corretamente |
| 2 | Digitar "secret_sauce" no campo **Password** | Campo preenchido corretamente (oculto) |
| 3 | Clicar no botão **Login** | Usuário é redirecionado para a página de produtos |
| 4 | Verificar se a URL mudou | URL deve conter "inventory.html" |
| 5 | Verificar se o título "Products" aparece | Título visível no topo da página |

**Evidência:** `screenshots/CT-001-login-sucesso.png`