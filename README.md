# BugBank - Testes Automatizados com Cypress

## Sobre o Projeto

Este projeto consiste em testes automatizados para a aplicação web BugBank, simulando funcionalidades básicas de um banco digital, como cadastro, login, transferências, pagamentos, visualização de extrato e saque.

Os testes foram desenvolvidos utilizando Cypress, com foco em garantir a qualidade do sistema e evitar regressões em funcionalidades críticas.

---

## Funcionalidades Testadas

- Cadastro de usuário com validações (nome, email, senha, confirmação de senha)
- Login com credenciais válidas e inválidas
- Transferência para a própria conta (mesmo número de conta)
- Testes de pagamento
- Visualização de extrato
- Realização de saque
- Validação de mensagens de erro e sucesso
- Limpeza dos campos antes da digitação (uso de `.clear({force: true})`)
- Uso do comando `{ force: true }` para lidar com elementos ocultos ou com problemas de visibilidade

---

## Como Rodar os Testes

1. Clone este repositório:

```bash
git clone https://github.com/WellingtonBrasil00/Bug_Bank_test.git
Instale as dependências do projeto:

bash
Copiar
Editar
npm install
Execute os testes no Cypress:

bash
Copiar
Editar
npx cypress open
ou para rodar no modo headless:

bash
Copiar
Editar
npx cypress run
Estrutura dos Testes
Os testes estão organizados utilizando o framework Mocha (usado pelo Cypress), com blocos describe e it para definir as suítes e os casos de teste.

Exemplo de um caso de teste:

js
Copiar
Editar
it('Deve fazer login com usuário válido', () => {
  cy.visit('/login');
  cy.get('input[name="email"]').type('usuario@example.com', { force: true });
  cy.get('input[name="senha"]').type('senha123', { force: true });
  cy.get('button[type="submit"]').click();
  cy.contains('Bem vindo').should('be.visible');
});
Configurações Git
Certifique-se de configurar seu usuário Git local antes de fazer commits:

bash
Copiar
Editar
git config --global user.name "Seu Nome"
git config --global user.email "seuemail@example.com"
Contato
Wellington Martins
GitHub
LinkedIn
Email: wellingtonbrasil69@gmail.com

Observações
Alguns elementos na aplicação possuem problemas de visibilidade, por isso usamos o { force: true } para forçar ações do Cypress.

O saldo inicial é zero, portanto testes de transferência e saque consideram validação de saldo.


Contato
Wellington Martins
GitHub
LinkedIn
Email: wellingtonbrasil69@gmail.com

