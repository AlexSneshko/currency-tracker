import { cy } from 'local-cypress'

describe('Home Page', () => {
  const waitSecValue = 2000

  beforeEach(() => {
    cy.visit('/')
  })

  it('the elements of the Home page should be visible', () => {
    const currencyCount = 9

    cy.wait(2000)
    cy.get('[data-cy="currency-card"]')
      .should('be.visible')
      .its('length')
      .should('eq', currencyCount)
  })

  it('when you click on the currency, a modal window should open', () => {
    cy.get('[data-cy="currency-card"]:nth-child(3)').click()
    cy.get('[data-cy="modal"]').should('be.visible')
  })

  it('the operation when clicking on select must be correct (selecting the currency and getting the conversion value)', () => {
    cy.get('[data-cy="currency-card"]:nth-child(3)').click()
    cy.get('[data-cy="currency-select"]').should('be.visible').select(1)

    cy.get('[data-cy="amount-input"]').clear().type('2')

    cy.get('[data-cy="modal-convert-value"]').should('be.visible')
  })

  it('close a modal  window', () => {
    cy.get('[data-cy="currency-card"]:nth-child(3)').click()
    cy.get('[data-cy="modal"]').should('be.visible')
    cy.get('button').click()
    cy.get('[data-cy="modal"]').should('not.exist')
  })
})
