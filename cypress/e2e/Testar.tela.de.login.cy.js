describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://bugbank.netlify.app/')
  })

  it('não deve logar com email inexistente', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('fakeuser@email.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('123456')
    cy.contains('button', 'Acessar').click()
    cy.contains('button', 'Acessar').should('be.visible')
  })

  it('não deve logar com senha incorreta', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('usuario@email.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senhaerrada')
    cy.contains('button', 'Acessar').click()
    cy.contains('button', 'Acessar').should('be.visible')
  })

  it('não deve logar com email em formato inválido', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('usuarioemail.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('senha123')
    cy.contains('button', 'Acessar').click()
    cy.contains('button', 'Acessar').should('be.visible')
  })

  it('não deve logar com senha vazia', () => {
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('usuario@email.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear()
    cy.contains('button', 'Acessar').click()
    cy.contains('button', 'Acessar').should('be.visible')
  })

  })