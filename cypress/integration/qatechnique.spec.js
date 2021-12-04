import search from "../pageObjectModel/search"

describe("test technique", ()=>{
    it("choix du médecin", ()=>{
        let search_ = new search()
        cy.visit("https://www.staging.maiia.com/")
        search_.searchDoctor()
        .type("test qatechnique")
        search_.specialiste().click()
        search_.choiceSelect().click()
        search_.consultationReason().click()
        search_.calendar().should('have.class', 'search-card__rdv availability-calendar')
    })
})