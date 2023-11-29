import { cy } from 'local-cypress'

describe('Timeline Page', () => {
  beforeEach(() => {
    cy.visit('/timeline')
  })

  it('displays the chart and form', () => {
    cy.get('[data-cy="bar-chart"]').should('exist')

    cy.get('[data-cy="ohlc-forms-list"]').should('exist')
  })

  it('submits form changes successfully', () => {
    cy.get('[data-cy=price-open-input]').type('100')

    cy.get('[data-cy=chart-changes-submit-button]').click()

    cy.get('[data-cy=notification]').should('exist')
    cy.get('[data-cy=notification]').should('contain.text', 'Data is valid')
  })

  it('displays an error notification for invalid form data', () => {
    cy.get('[data-cy=price-open-input]').type('-50')

    cy.get('[data-cy=chart-changes-submit-button]').click()

    cy.get('[data-cy=notification]').should('exist')
    cy.get('[data-cy=notification]').should(
      'contain.text',
      'Invalid chart data'
    )
  })

  it('updates chart data when form data changes', () => {
    cy.get('[data-cy=price-open-input]').clear().type('150')
    cy.get('[data-cy=chart-changes-submit-button]').click()
    cy.get('[data-cy=bar-chart]').should('exist')
    cy.get('[data-cy=ohlc-forms-list]').should('exist')
  })

  it('dismisses notification after a certain time', () => {
    cy.get('[data-cy=price-open-input]').type('100')
    cy.get('[data-cy=chart-changes-submit-button]').click()

    cy.get('[data-cy=notification]').should('exist')

    cy.get('[data-cy=notification]').should('not.exist', { timeout: 4000 })
  })
})
