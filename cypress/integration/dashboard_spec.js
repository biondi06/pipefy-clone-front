describe('Dashboard Page', () => {
    it('should load dashboard with correct data', () => {
      cy.visit('http://localhost:3000/dashboard');
      cy.contains('Dashboard').should('be.visible');
      cy.get('canvas').should('have.length', 2); // Assuming there are two charts
    });
  });
  