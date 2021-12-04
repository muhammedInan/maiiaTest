import search from "../pageObjectModel/search"

describe("test technique", ()=>{
    it("choix du médecin", ()=>{
        let search_ = new search()
        cy.visit("https://www.staging.maiia.com/")
        search_.searchDoctor()
        .type("test qatechnique")
        cy.get(".search-item").click()
        cy.get("#consultationReasonName").click()
        cy.get('[data-cy="Ablation de fils"]').click()
        cy.get('[class="search-card__rdv availability-calendar percy-hidden"]').should('have.class', 'search-card__rdv availability-calendar')
    })
})