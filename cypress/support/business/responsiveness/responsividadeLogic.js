/// <reference types="cypress" />
import ResponsividadePage from '../responsiveness/responsividadePage'
class ResponsividadeLogic{
verificarHomeVisivel(){
cy.get(ResponsividadePage.getLinkHome()).should('exist')
.and('be.visible')
}

ajustarTamanhoNavegador(){
cy.viewport(500, 700)
}

verificarHomeNaoVisivel(){
    cy.get(ResponsividadePage.getLinkHome()).should('exist')
    .and('be.not.visible')
    }
    
    ajustarTamanhoIPhone(){
        cy.viewport('iphone-5')
        }

        ajustarTamanhoIPad(){
            cy.viewport('ipad-2')
            }
        
        
}
export default new ResponsividadeLogic;