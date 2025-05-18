# Sistema de Gestão Bicicletaria

Este projeto é um sistema simples de gestão para uma bicicletaria, que inclui funcionalidades de login, visualização de dashboard e cadastro de produtos. O sistema foi desenvolvido com HTML, CSS e JavaScript. Cada funcionalidade está organizada em arquivos separados para facilitar a manutenção e o entendimento do código.


## Funcionalidades

### 1. **Login (login.html)**

A tela de login permite que os usuários se autentiquem para acessar o sistema. Neste momento, a validação de login é feita localmente, com o nome de usuário e senha sendo verificados por meio de JavaScript.

- **Usuário:** admin
- **Senha:** admin123

Se o login for bem-sucedido, o usuário será redirecionado para a tela do **Dashboard**.

### 2. **Dashboard (dashboard.html)**

Após o login, o usuário será redirecionado para o **Dashboard**, onde poderá visualizar e gerenciar produtos cadastrados. Nesta tela, há links para acessar o cadastro de novos produtos e fazer logout.

### 3. **Cadastro de Produto (cadastro-produto.html)**

Na tela de **Cadastro de Produto**, os usuários podem preencher um formulário para cadastrar novos produtos no sistema, fornecendo informações como descrição, fabricante, preço de venda, etc. Além disso, a tela permite o upload de uma imagem do produto.

## Funcionalidade do JavaScript

O JavaScript foi utilizado para implementar a lógica das páginas, incluindo:

### **login.js**
- Valida as credenciais inseridas pelo usuário.
- Armazena informações de login no `localStorage` e redireciona para o dashboard em caso de login bem-sucedido.

### **dashboard.js**
- Verifica se o usuário está autenticado antes de permitir o acesso ao dashboard.
- Gerencia a exibição e interação com a lista de produtos cadastrados.

### **cadastro-produto.js**
- Gera a lógica para o formulário de cadastro de produtos.
- Faz a manipulação de arquivos de imagem e armazena as informações do produto no `localStorage`.

## Como Usar

 **Clone o Repositório**: Clone este repositório em seu computador.
```bash
   git clone https://github.com/seu-usuario/bicicletaria.git
```
## Tecnologias Usadas
**HTML5**: Estruturação das páginas web.

**CSS3**: Estilização das páginas com um único arquivo de estilo.

**JavaScript**: Lógica do sistema, incluindo validação de login, manipulação de dados e interações com o DOM.
   
   

