const { it } = require("mocha");

describe('Temel Komutlar', () => {
    it('Temel Komutlar cy visit kullanimi', () => {
        cy.visit("/") // baseurl tanimlandiysa bu sekil tanimlanmadiysa normal url ver gec
    });

    it('Temel Komutlar cy.title kullanimi', () => {
        cy.title().should('eq', "cypress.io")
        cy.title().should('include', "cypress")
    });

    it('cy.url ve cy.location kullanimi', () => {
        cy.url().should('eq', 'https://navlungo.com/') //url tam esitlik olursa dogrudur

        cy.location('pathname').should('eq', '/commands') //gidilen pathi dogrular
        cy.location('protocol').should('eq', 'https') //gidilen protocolu dogrular

    });

    it(' cy.get kullanimi', () => {
        cy.get("#button")
        cy.get("#button").as('deneme') //cy.get('@deneme')
        cy.get("a[href='example.cypress.io']")
        cy.get(".dropdown-menu-list")
        cy.get('div.button')
        cy.get('uul li:first')
    });

    it('cy.log kullsnimi', () => {
        cy.log('icine yazdirmak istedigim her sey')
        
    });
});