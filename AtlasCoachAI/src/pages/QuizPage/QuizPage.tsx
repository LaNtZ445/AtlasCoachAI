import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import MuscleGainImage from "../../assets/images/gain-weight.jpg";
import WeightLossImage from "../../assets/images/weight-loss.jpg";
import GainMuscleLoseWeightImage from "../../assets/images/gainmusle-looseweight.jpg";
import {
  StyledQuizSection,
  StyledQuizTitle,
  StyledButton,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledTextContainer,
  StyledProgressBar,
  StyledGoalContainer,
  StyledGoalButton,
  StyledGoalImage,
  StyledError,
  StyledGoalImageText,
  StyledSubmitButton,
} from "./styles";

function QuizPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    height: "",
    weight: "",
  });
  const [errors, setErrors] = useState({
    age: "",
    height: "",
    weight: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleValidation = () => {
    const newErrors = { age: "", height: "", weight: "" };
    let isValid = true;

    const age = Number(formData.age);
    const height = Number(formData.height);
    const weight = Number(formData.weight);

    if (isNaN(age) || age <= 15) {
      newErrors.age = "Please enter a valid age.";
      isValid = false;
    }

    if (isNaN(height) || height <= 140) {
      newErrors.height = "Please enter a valid height.";
      isValid = false;
    }

    if (isNaN(weight) || weight <= 40) {
      newErrors.weight = "Please enter a valid weight.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (handleValidation()) {
      navigate("/plan-generation", { state: { formData } });
    }
  };

  return (
    <>
      <Header />
      <StyledQuizSection>
        <StyledProgressBar>
          <div style={{ width: `${(step / 6) * 100}%` }} />
        </StyledProgressBar>
        <StyledTextContainer>
          {step === 1 && <StyledQuizTitle>Choose Your Gender</StyledQuizTitle>}
          {step === 2 && (
            <StyledQuizTitle>What is your fitness goal?</StyledQuizTitle>
          )}
          {step === 3 && (
            <StyledQuizTitle>
              Do You Have Any Dietary Preferences?
            </StyledQuizTitle>
          )}
          {step === 4 && (
            <StyledQuizTitle>Do you have a gym membership?</StyledQuizTitle>
          )}
          {step === 5 && (
            <>
              <StyledQuizTitle>
                Get signed up at your local gym!
              </StyledQuizTitle>
              <StyledButton onClick={() => setStep(6)}>
                Makes Sense!
              </StyledButton>
            </>
          )}
          {step === 6 && (
            <StyledQuizTitle>
              Complete Your Info to Receive Your Plan
            </StyledQuizTitle>
          )}
        </StyledTextContainer>

        {step === 1 && (
          <div>
            <StyledButton onClick={() => setStep(2)}>Male</StyledButton>
            <StyledButton onClick={() => setStep(2)}>Female</StyledButton>
          </div>
        )}

        {step === 2 && (
          <div>
            <StyledGoalContainer>
              <StyledGoalButton onClick={() => setStep(3)}>
                <StyledGoalImage src={MuscleGainImage} alt="Muscle Gain" />
                <StyledGoalImageText>Gain Muscle</StyledGoalImageText>
              </StyledGoalButton>
              <StyledGoalButton onClick={() => setStep(3)}>
                <StyledGoalImage src={WeightLossImage} alt="Weight Loss" />
                <StyledGoalImageText>Weight Loss</StyledGoalImageText>
              </StyledGoalButton>
              <StyledGoalButton onClick={() => setStep(3)}>
                <StyledGoalImage
                  src={GainMuscleLoseWeightImage}
                  alt="Gain Muscle & Lose Weight"
                />
                <StyledGoalImageText>
                  Gain Muscle & Lose Weight
                </StyledGoalImageText>
              </StyledGoalButton>
            </StyledGoalContainer>
          </div>
        )}

        {step === 3 && (
          <div>
            <StyledButton onClick={() => setStep(4)}>Vegetarian</StyledButton>
            <StyledButton onClick={() => setStep(4)}>Vegan</StyledButton>
            <StyledButton onClick={() => setStep(4)}>All eater </StyledButton>
          </div>
        )}

        {step === 4 && (
          <div>
            <StyledButton onClick={() => setStep(5)}>Yes</StyledButton>
            <StyledButton onClick={() => setStep(5)}>No</StyledButton>
          </div>
        )}

        {step === 6 && (
          <StyledForm onSubmit={handleSubmit}>
            <div>
              <StyledLabel htmlFor="age">Age</StyledLabel>
              <StyledInput
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                placeholder="Enter your age"
              />
              {errors.age && <StyledError>{errors.age}</StyledError>}
            </div>
            <div>
              <StyledLabel htmlFor="height">Height</StyledLabel>
              <StyledInput
                type="number"
                id="height"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                placeholder="Enter your height in cm"
              />
              {errors.height && <StyledError>{errors.height}</StyledError>}
            </div>
            <div>
              <StyledLabel htmlFor="weight">Weight</StyledLabel>
              <StyledInput
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                placeholder="Enter your weight in kg"
              />
              {errors.weight && <StyledError>{errors.weight}</StyledError>}
            </div>
            <StyledSubmitButton type="submit">Get Plan</StyledSubmitButton>
          </StyledForm>
        )}
      </StyledQuizSection>
      <Footer />
    </>
  );
}

export default QuizPage;
