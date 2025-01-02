describe("Learn More Page", () => {
  before(() => {
    cy.visit("/learn-more");
  });

  it("should load the Learn More page", () => {
    cy.get("h1").should("contain", "Why AtlasCoach AI is Awesome");
  });

  it("should display feature cards", () => {
    cy.get(".StyledFeatureCard").should("have.length", 6);
  });

  it("should have the correct content for the first feature card", () => {
    cy.get(".StyledFeatureCard").eq(0).contains("Smart Personalization");
    cy.get(".StyledFeatureCard")
      .eq(0)
      .contains(
        "Our AI takes your goals and preferences to create a workout and meal plan just for you."
      );
  });

  it("should have correct icons in the feature cards", () => {
    cy.get(".StyledIconContainer svg").should("have.length", 6);
  });
});
