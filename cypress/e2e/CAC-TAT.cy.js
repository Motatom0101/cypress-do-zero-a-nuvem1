// Suite de testes APP Central de Atendimento ao Cliente TAT
describe('Central de Atendimento ao Cliente TAT', () => {
  // Executa antes de cada teste
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  // 1º caso teste: Verifica o título da aplicação
  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  })

  // 2º caso teste: Preenche os campos obrigatórios e envia o formulário
  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = 'Lorem ipsum dolor sit amet!'.repeat(20) // Variável com texto longo para preencher o campo de texto

    cy.get('#firstName').type('Tiago')
    cy.get('#lastName').type('Mota')
    cy.get('#email').type('123@hotmail.com')
    cy.get('#phone').type('1234567890')
    cy.get('#open-text-area').type(longText, { delay: 0 }) // Uso da variável e do delay para preencher rapido
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  // 3º caso teste: Exibe mensagem de erro email com formatação inválida
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.get('#firstName').type('Tiago')
    cy.get('#lastName').type('Mota')
    cy.get('#email').type('123@hotmail,com')
    cy.get('#phone').type('1234567890')
    cy.get('#open-text-area').type('Test!')
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })

  // 4º caso teste: Exibe mensagem de erro telefone obrigatório não preenchido
  it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
    cy.get('#phone')
      .type('abcdefghij') // valor não numérico
      .should('have.value', '') // verifica se o campo continua vazio, pois só aceita números
  })

})