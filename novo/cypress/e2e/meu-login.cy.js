/// <reference types="cypress" />

const USUARIOS = {
  padrao: 'standard_user',
  bloqueado: 'locked_out_user',
  problematico: 'problem_user',
  desempenho: 'performance_glitch_user',
  erro: 'error_user',
  visual: 'visual_user'
}

const SENHA_VALIDA = 'secret_sauce'

describe('Módulo de Login – Swag Labs', () => {
  beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com/')
  })

  it('CT-001: Login com sucesso (standard_user)', () => {
    cy.get('[data-test="username"]').type(USUARIOS.padrao)
    cy.get('[data-test="password"]').type(SENHA_VALIDA)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('have.text', 'Products')
  })

  it('Login com usuário problemático (problem_user)', () => {
    cy.get('[data-test="username"]').type(USUARIOS.problematico)
    cy.get('[data-test="password"]').type(SENHA_VALIDA)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html')
  })

  it('Login com usuário de desempenho (performance_glitch_user)', () => {
    cy.get('[data-test="username"]').type(USUARIOS.desempenho)
    cy.get('[data-test="password"]').type(SENHA_VALIDA)
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory.html', { timeout: 10000 })
  })

  it('Deve mostrar erro para usuário bloqueado (locked_out_user)', () => {
    cy.get('[data-test="username"]').type(USUARIOS.bloqueado)
    cy.get('[data-test="password"]').type(SENHA_VALIDA)
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]', { timeout: 8000 }).should('contain', 'Epic sadface: Sorry, this user has been locked out.')
  })

  it('Deve mostrar erro para senha inválida', () => {
    cy.get('[data-test="username"]').type(USUARIOS.padrao)
    cy.get('[data-test="password"]').type('senha_errada')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
  })

  it('Deve mostrar erro ao tentar acessar o carrinho sem login', () => {
    cy.visit('https://www.saucedemo.com/cart.html', { failOnStatusCode: false })
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="error"]').should('contain', 'You can only access')
  })
})
