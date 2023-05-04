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
    })
})