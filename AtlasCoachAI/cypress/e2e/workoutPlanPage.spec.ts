describe("Workout Plan Page", () => {
  it("should load the page and check if title exists", () => {
    cy.visit("/workoutPlanPage");
    cy.get("h1").should("exist");
  });

  it("should display 'Craft Your Ideal Workout Plan' when no workout plan is available", () => {
    cy.visit("/workoutPlanPage");
    cy.contains("Craft Your Ideal Workout Plan");
  });

  it("should navigate to quiz page when clicking 'Take the quiz'", () => {
    cy.visit("/workoutPlanPage");
    cy.contains("Take the quiz").click();
    cy.url().should("include", "/quiz");
  });

  it("should display workout plan content if workout plan exists", () => {
    localStorage.setItem("workoutPlan", "Sample Workout Plan");
    cy.visit("/workoutPlanPage");
    cy.contains("Your Personalized Workout Plan");
    cy.contains("Sample Workout Plan");
  });
});
