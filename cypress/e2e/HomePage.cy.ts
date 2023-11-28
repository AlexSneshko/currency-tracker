import { cy } from 'local-cypress'

describe('Home Page', () => {
  const waitSecValue = 2000

  beforeEach(() => {
    cy.visit('/')
  })
  it('the elements of the Home page should be visible', () => {
    const currencyCount = 10

    cy.get('.sc-dAOort').should('be.visible')
    cy.get('[data-cy="currencyCard"]')
      .should('be.visible')
      .its('length')
      .should('eq', 1)
    cy.get('[data-cy="currencyItem"]')
      .should('be.visible')
      .its('length')
      .should('eq', currencyCount)
  })

  it('when you click on the currency, a modal window should open', () => {
    cy.get('[data-cy="currencyCard"] > :nth-child(1)').click()
    cy.get('[data-cy="modalCurrency"]').should('be.visible')
  })

  it('the operation when clicking on select must be correct (selecting the currency and getting the conversion value)', () => {
    cy.get('[data-cy="currencyCard"] > :nth-child(1)').click()
    cy.get('[data-cy="currencySelect"]').should('be.visible').click()
    cy.get('[data-cy="selectCurrencyOption"] > :nth-child(1)').click()

    cy.wait(waitSecValue)
    cy.get('[data-cy="modalConvertValue"]').should('be.visible')
  })
})
