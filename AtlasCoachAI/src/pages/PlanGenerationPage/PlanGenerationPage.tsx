import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../components/Spinner/Spinner";
import { generatePlan } from "../../api/openai";
import {
  StyledPlanGenerationContainer,
  StyledTitle,
  StyledSpinnerContainer,
  StyledSpinnerText,
  StyledPlansContainer,
  StyledPlanSection,
  StyledPlanItem,
  StyledPlanText,
} from "./styles";

const PlanGenerationPage = () => {
  const location = useLocation();
  const { formData } = location.state || {};

  const [isLoading, setIsLoading] = useState(true);
  const [planText, setPlanText] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (formData) {
      handleGeneratePlans();
    } else {
      setError("No form data provided. Please try again.");
      setIsLoading(false);
    }
  }, [formData]);

  const handleGeneratePlans = async () => {
    try {
      const workoutPlan = await generatePlan("workout", formData);
      const mealPlan = await generatePlan("meal", formData);

      if (workoutPlan && mealPlan) {
        setPlanText(workoutPlan + "\n\n" + mealPlan);
        localStorage.setItem("workoutPlan", workoutPlan);
        localStorage.setItem("mealPlan", mealPlan);
      } else {
        setError("No plans generated.");
      }

      setIsLoading(false);
    } catch (error) {
      console.error("Error generating plans:", error);
      setError("Something went wrong while generating your plans.");
      setIsLoading(false);
    }
  };

  return (
    <StyledPlanGenerationContainer>
      {isLoading ? (
        <>
          <StyledSpinnerContainer>
            <LoadingSpinner />
            <StyledSpinnerText>Generating your plan...</StyledSpinnerText>
          </StyledSpinnerContainer>
        </>
      ) : (
        <>
          <StyledTitle>Your Plan</StyledTitle>
          {error && <StyledSpinnerText>{error}</StyledSpinnerText>}

          {!error && planText && (
            <StyledPlansContainer>
              <StyledPlanSection>
                <StyledPlanItem>
                  <StyledPlanText>{planText}</StyledPlanText>
                </StyledPlanItem>
              </StyledPlanSection>
            </StyledPlansContainer>
          )}

          {!error && !planText && (
            <StyledSpinnerText>
              No plans available. Please try again later.
            </StyledSpinnerText>
          )}
        </>
      )}
    </StyledPlanGenerationContainer>
  );
};

export default PlanGenerationPage;
