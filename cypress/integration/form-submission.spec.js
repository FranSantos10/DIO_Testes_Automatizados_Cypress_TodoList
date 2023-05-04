describe('Form submit', () => {
    it('Adicionar um novo item', () => {
        //novo item
        const newTodo = {id: 10, title: 'Buy pizza', completed:false}
        cy.server()
        cy.route({
            method: 'POST', url: '/ToDoModels', response: newTodo }).as('save')
        
        cy.seedAndVisit();
        cy.fixture('todo').then(todo => {
            cy.route('GET', '/ToDoModels', [...todo, newTodo]).as('second-load')
        })

        cy.get('#title').type(newTodo.title).type('{enter}')

        cy.wait('@save')
        cy.wait('@second-load')

        //compara o tamanho das tasks
        cy.get('.task-wrapper').should('have.length',5);

    });

    it('Mostra mensagem de falha ao enviar o item', ()=> {
        
         cy.server()
         cy.route({
             method: 'POST', 
             url: '/ToDoModels', 
             status: 500, 
             response: {} 
            }).as('save')
         
         cy.seedAndVisit();

         cy.get('#title').type('Buy pizza').type('{enter}')
         cy.wait('@save')

         cy.on('window:alert', text =>{
            expect(text).toBe.contains('500')
         })
         
         cy.get('.task-wrapper').should('have.length',4);
 
    });
})