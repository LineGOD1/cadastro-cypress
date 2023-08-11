describe('Testando Meu PC.net', () => {
  it('Validando cadastro', () => {
    // Entrando no website escolhido
    cy.visit('https://meupc.net/')

// Esperando 1 segundo para executar as funções abaixo
cy.wait(1000)

// Clicado no botão de menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()

// Clicando no botão de cadastro
    cy

    .get('ul.menu-list') //Pegando a ul com a classe .menu-list
    .children('li') // Pegando os filhos da ul
    .children('a[href="https://meupc.net/cadastro"]') //pegando o filho da li que tem o href com o valor https://meupc.net/cadastro
    .click()

    // Preenchendo o campo nome do cadastro com o valor João teste
    cy.get('input[name="nome"]').type('João teste')

    //preenchendo o campo email do cadastro com o valor johndoe@example.com
    cy.get('input[name="email"]').type('jonhdoe@example.com')

    //preenchendo o campo senha do cadastro com o valor 12345678
    cy.get('input[placeholder="Defina uma senha"]').type('12345678')
    
//Clicando no checkbox de aceitar os termos
    cy.get('input[type="checkbox"]').check({force:true})

    //Clicando no botão de cadastrar
    cy.contains('Cadastrar-se').click()

    //Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible')
  })
})