import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import {
  StyledPageSection,
  StyledContentContainer,
  StyledPageTitle,
  StyledActionButton,
  StyledPlanContainer,
  StyledPlanContent,
} from "./styles";

const MealPlansPage = () => {
  const [mealPlan, setMealPlan] = useState<string | null>(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchMealPlan = () => {
      const plan = localStorage.getItem("mealPlan");
      setMealPlan(plan);
    };
    fetchMealPlan();
  }, []);

  const handleQuizRedirect = () => {
    navigate("/quiz");
  };

  return (
    <StyledPageSection>
      <StyledContentContainer>
        {!mealPlan ? (
          <>
            <StyledPageTitle>Discover Your Perfect Meal Plan</StyledPageTitle>
            <StyledActionButton onClick={handleQuizRedirect}>
              Take the quiz
            </StyledActionButton>
          </>
        ) : (
          <>
            <StyledPageTitle>Your Customized Meal Plan</StyledPageTitle>
            <StyledPlanContainer>
              <StyledPlanContent>{mealPlan}</StyledPlanContent>
            </StyledPlanContainer>
          </>
        )}
      </StyledContentContainer>
    </StyledPageSection>
  );
};

export default MealPlansPage;
