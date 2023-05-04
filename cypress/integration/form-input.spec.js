describe('Form input', ()=> {
    beforeEach(()=>{
        cy.visit('/');
    })

    //teste 1
    it('Focus no input ao carregar', ()=>{
        cy.focused().should('have.id','title');
    });

    //teste 2
    it('aceita input do usuario', ()=> {//it.only para rodar somente este teste
        const valor = 'New task'

        cy.get('#title')
        .type(valor)
        .should('have.value',valor);
    });

})