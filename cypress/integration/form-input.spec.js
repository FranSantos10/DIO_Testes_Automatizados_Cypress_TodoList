describe('Form input', ()=> {
    //teste 1
    it('Focus no input ao carregar', ()=>{
        cy.visit('/');
        cy.focused().should('have.id','title');
    });
    //teste 2
    it.only('aceita input do usuario', ()=> {
        cy.visit('/');
        cy.get('#title').type('nova tarefa')
    })
})