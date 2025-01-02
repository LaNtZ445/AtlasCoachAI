describe("Landing Page", () => {
  it("should load the landing page with the correct title", () => {
    cy.visit("/");
    cy.contains("Transform Your Fitness Journey");
  });

  it("should navigate to quiz page when clicking 'Get Started'", () => {
    cy.visit("/");
    cy.contains("Get Started").click();
    cy.url().should("include", "/quiz");
  });

  it("should navigate to learn more page when clicking 'Learn More'", () => {
    cy.visit("/");
    cy.contains("Learn More").click();
    cy.url().should("include", "/learn-more");
  });
});
