describe('Cypress ilk test', () => {
    
    it('ilk test', () => {
        cy.visit('https://automationexercise.com/')
        cy.title().should('eq', 'Automation Exercise')
        cy.url().should('eq', 'https://automationexercise.com/')
    });

});