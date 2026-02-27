/// <reference types="cypress" />

const PRODUTOS = [
  { nome: 'Sauce Labs Backpack', preco: '$29.99' },
  { nome: 'Sauce Labs Bolt T-Shirt', preco: '$15.99' },
  { nome: 'Sauce Labs Onesie', preco: '$7.99' },
  { nome: 'Sauce Labs Bike Light', preco: '$9.99' },
  { nome: 'Sauce Labs Fleece Jacket', preco: '$49.99' },
  { nome: 'Test.allTheThings() T-Shirt (Red)', preco: '$15.99' }
]

describe('Catálogo de Produtos – Swag Labs', () => {
  beforeEach(() => {
    // Limpa cookies e localStorage para garantir estado limpo
    cy.clearCookies()
    cy.clearLocalStorage()
    
    // Login direto com usuário padrão
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    
    // Aguarda a URL de inventário com timeout maior
    cy.url({ timeout: 10000 }).should('include', '/inventory.html')
  })

  it('Deve exibir todos os produtos do catálogo', () => {
    PRODUTOS.forEach(produto => {
      cy.contains('.inventory_item', produto.nome).should('be.visible')
    })
  })

  it('Deve verificar os preços corretos de cada produto', () => {
    PRODUTOS.forEach(produto => {
      cy.contains('.inventory_item', produto.nome)
        .find('.inventory_item_price')
        .should('have.text', produto.preco)
    })
  })

  it('Deve validar que existem 6 produtos na tela', () => {
    cy.get('.inventory_item').should('have.length', 6)
  })

  it('Deve adicionar e remover um item (independente)', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt')
      .find('button').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt')
      .find('button').click()
    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('Deve adicionar múltiplos itens ao carrinho', () => {
    const itensParaAdicionar = [
      'Sauce Labs Backpack',
      'Sauce Labs Bolt T-Shirt',
      'Sauce Labs Bike Light'
    ]

    itensParaAdicionar.forEach(item => {
      cy.contains('.inventory_item', item).find('button').click()
    })

    cy.get('.shopping_cart_badge').should('have.text', '3')
    cy.get('.shopping_cart_link').click()
    cy.get('.cart_item').should('have.length', 3)

    itensParaAdicionar.forEach(item => {
      cy.contains('.cart_item', item).should('be.visible')
    })
  })

  it('Deve resetar o estado do aplicativo pelo menu', () => {
    cy.contains('.inventory_item', 'Sauce Labs Bolt T-Shirt').find('button').click()
    cy.get('.shopping_cart_badge').should('have.text', '1')

    cy.get('.bm-burger-button').click()
    cy.contains('Reset App State').click()

    cy.get('.shopping_cart_badge').should('not.exist')
  })

  it('Deve ordenar produtos por menor preço (low to high)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi')
    cy.get('.inventory_item_price').then($prices => {
      const precosExibidos = [...$prices].map(el => 
        parseFloat(el.innerText.replace('$', ''))
      )
      const precosOrdenados = [...precosExibidos].sort((a, b) => a - b)
      expect(precosExibidos).to.deep.equal(precosOrdenados)
    })
  })
})