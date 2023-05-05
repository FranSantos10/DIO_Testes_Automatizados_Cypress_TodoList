describe('form-delete', () => {
    // Executa antes de cada teste
    beforeEach(() => {
      cy.visit('/')
    });
  
    it('Deletar um item', () => {
      const valor = 'teste';
  
      // Verifica se o item existe
      cy.get(`.title:contains(${valor})`).should('have.text', valor);
  
      // Clica no botão "Delete" do primeiro item
      cy.get('button').contains('Delete').click()

      // Intercepta a requisição de DELETE e espera pela resposta
      cy.wait(500)
      // Verifica se a lista de itens foi atualizada
      cy.get('.task-wrapper').should('have.length', 3);
  
    });
  });
  