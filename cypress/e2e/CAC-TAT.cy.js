describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(20)

    cy.get('#firstName').type('Tiago')
    cy.get('#lastName').type('Mota')
    cy.get('#email').type('123@hotmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })
})

