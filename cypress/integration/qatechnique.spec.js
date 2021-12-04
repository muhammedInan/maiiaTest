describe("test technique", ()=>{
    it("choix du médecin", ()=>{
        cy.visit("https://www.staging.maiia.com/")
        cy.get('#downshift_input_0').type("test qatechnique")
        cy.get(".search-item").click()
        cy.get("#consultationReasonName").click()
        cy.get('[data-cy="Ablation de fils"]').click()
        cy.get('[class="search-card__rdv availability-calendar percy-hidden"]').should('have.class', 'search-card__rdv availability-calendar')
    })
})