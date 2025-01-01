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

const WorkoutsPage = () => {
  const [workoutPlan, setWorkoutPlan] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkoutPlan = () => {
      const plan = localStorage.getItem("workoutPlan");
      setWorkoutPlan(plan);
    };
    fetchWorkoutPlan();
  }, []);

  const handleQuizRedirect = () => {
    navigate("/quiz");
  };

  return (
    <StyledPageSection>
      <StyledContentContainer>
        {!workoutPlan ? (
          <>
            <StyledPageTitle>Craft Your Ideal Workout Plan</StyledPageTitle>
            <StyledActionButton onClick={handleQuizRedirect}>
              Take the quiz
            </StyledActionButton>
          </>
        ) : (
          <>
            <StyledPageTitle>Your Personalized Workout Plan</StyledPageTitle>
            <StyledPlanContainer>
              <StyledPlanContent>{workoutPlan}</StyledPlanContent>
            </StyledPlanContainer>
          </>
        )}
      </StyledContentContainer>
    </StyledPageSection>
  );
};

export default WorkoutsPage;
