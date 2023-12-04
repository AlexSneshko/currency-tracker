import { cy } from 'local-cypress'

describe('Routing', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(2000)
  })

  it('should go to timeline page', () => {
    cy.get('li').contains('Timeline').click()
    cy.url().should('include', '/timeline')
  })

  it('should go to bank card page', () => {
    cy.get('li').contains('Bank Card').click()
    cy.url().should('include', '/bankcard')
  })

  it('should go to contacts page', () => {
    cy.get('li').contains('Contact').click()
    cy.url().should('include', '/contact')
  })

  it('should go to home page', () => {
    cy.get('li').contains('Home').click()
    cy.url().should('include', '/')
  })
})
