describe("Quiz Page", () => {
  it("should load the quiz page", () => {
    cy.visit("/quiz");
    cy.contains("Choose Your Gender");
  });

  it('should navigate to the next step when "Male" button is clicked', () => {
    cy.visit("/quiz");
    cy.contains("Male").click();
    cy.contains("What is your fitness goal?");
  });

  it('should navigate to the next step when "Female" button is clicked', () => {
    cy.visit("/quiz");
    cy.contains("Female").click();
    cy.contains("What is your fitness goal?");
  });

  it("should navigate to the next step when a fitness goal is selected", () => {
    cy.visit("/quiz");
    cy.contains("Gain Muscle").click();
    cy.contains("Do You Have Any Dietary Preferences?");
  });

  it("should display error message for invalid age input", () => {
    cy.visit("/quiz");
    cy.contains("Male").click();
    cy.contains("Gain Muscle").click();
    cy.contains("Next").click();
    cy.get('input[name="age"]').type("10");
    cy.contains("Please enter a valid age.");
  });

  it("should submit the form and navigate to the next page", () => {
    cy.visit("/quiz");
    cy.contains("Male").click();
    cy.contains("Gain Muscle").click();
    cy.contains("Vegetarian").click();
    cy.contains("Yes").click();
    cy.get('input[name="age"]').type("25");
    cy.get('input[name="height"]').type("175");
    cy.get('input[name="weight"]').type("70");
    cy.contains("Get Plan").click();
    cy.url().should("include", "/plan-generation");
  });
});
