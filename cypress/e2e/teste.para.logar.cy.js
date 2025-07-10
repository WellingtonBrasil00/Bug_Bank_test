describe('Cadastro e Login BugBank', () => {
  it('Deve cadastrar um usuário e depois logar', () => {
    cy.visit('https://bugbank.netlify.app/')
    
    // Clica no botão de registrar
    cy.get('.ihdmxA').click()

    // Preenche os dados do cadastro
    cy.get(':nth-child(3) > .input__default').type('wellingtonqa', { force: true })         // nome
    cy.get(':nth-child(2) > .input__default').clear({ force: true }).type('wellingtonqa@gmail.com', { force: true }) // email
    cy.get(':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('12345678', { force: true }) // senha
    cy.get(':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').clear({ force: true }).type('12345678', { force: true }) // confirmar senha

    cy.get('.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0').click({ force: true })

    // Fecha o modal se aparecer
    cy.get('#btnCloseModal').click({ force: true })

    // Agora tenta logar com a conta criada
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('wellingtonqa@gmail.com')
    cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('12345678')
    cy.get('.otUnI').click()

    //logout teste
    cy.get('.home__ContainerLink-sc-1auj767-2').click({ force: true })
  })
})
