describe('Testes de Registro BugBank', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
    cy.get('.ihdmxA').click() // abrir o modal de registro antes de cada teste
  })

  it('Teste de email vazio', () => {
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('wellingtonqa', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('123456', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('123456', { force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
  })

  it('Teste de senhas diferentes', () => {
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('wellingtonqa', { force: true })
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type('email@teste.com', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('senha123', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('senhaDiferente', { force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
    cy.get('#btnCloseModal').click({ force: true })
  })

  it('Nome com número', () => {
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('wellingt0n123', { force: true })
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type('teste@email.com', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('senha123', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('senha123', { force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
  })

  it('Confirmação de senha vazia', () => {
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type('teste@email.com', { force: true })
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('Wellington', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('senha123', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }) // deixa vazio
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
  })

  it('Cadastro com credenciais fixas', () => {
    cy.get(':nth-child(3) > .input__default').clear({ force: true }).type('wellingtonqa', { force: true })
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type('wellingtonqa@gmail.com', { force: true })
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('12345678', { force: true })
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('12345678', { force: true })
    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })
    cy.get('#btnCloseModal').click({ force: true })
  })
})
