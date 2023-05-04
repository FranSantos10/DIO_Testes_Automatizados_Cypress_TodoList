describe('Inicialização do app', () =>{
    it('Exibe todos o from da API ao carregar', () =>{
        cy.seedAndVisit();
        
        cy.get('.task-wrapper').should('have.length',4);
    })
})