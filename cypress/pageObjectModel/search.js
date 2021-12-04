class search{

    searchDoctor(){
        return cy.get('#downshift_input_0')
    }

    specialiste(){
        return cy.get(".search-item")
    }

    choiceSelect(){
        return cy.get("#consultationReasonName")
    }

    consultationReason(){
        return cy.get('[data-cy="Ablation de fils"]')
    }

    calendar(){
        return cy.get('[class="search-card__rdv availability-calendar percy-hidden"]')
    }
}

export default search