import {
  FaBrain,
  FaBullseye,
  FaClock,
  FaTools,
  FaBolt,
  FaMagic,
} from "react-icons/fa";

import {
  StyledSection,
  StyledContentContainer,
  StyledTitle,
  StyledFeatureCard,
  StyledIconContainer,
  StyledFeatureTitle,
  StyledFeatureDescription,
  StyledFeatureGrid,
} from "./styles";

function LearnMorePage() {
  return (
    <>
      <StyledSection>
        <StyledContentContainer>
          <StyledTitle>Why AtlasCoach AI is Awesome</StyledTitle>
          <StyledFeatureGrid>
            <StyledFeatureCard>
              <StyledIconContainer color="#e74c3c">
                <FaBrain size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>Smart Personalization</StyledFeatureTitle>
              <StyledFeatureDescription>
                Our AI takes your goals and preferences to create a workout and
                meal plan just for you.
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledIconContainer color="#3498db">
                <FaBullseye size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>Goal-Oriented</StyledFeatureTitle>
              <StyledFeatureDescription>
                Whether you're aiming to lose weight, gain muscle, or improve
                endurance, we've got the perfect plan.
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledIconContainer color="#f39c12">
                <FaClock size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>
                Quick & Efficient Workouts
              </StyledFeatureTitle>
              <StyledFeatureDescription>
                Get the most out of your time with efficient, tailor-made
                workout routines.
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledIconContainer color="#2ecc71">
                <FaTools size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>Equipment Flexibility</StyledFeatureTitle>
              <StyledFeatureDescription>
                No matter your setup, whether you're at home or in the gym, your
                plan adapts to whatever equipment you have.
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledIconContainer color="#9b59b6">
                <FaBolt size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>Adjust as You Go</StyledFeatureTitle>
              <StyledFeatureDescription>
                As you make progress, your plan evolves to keep you motivated
                and pushing forward.
              </StyledFeatureDescription>
            </StyledFeatureCard>

            <StyledFeatureCard>
              <StyledIconContainer color="#1abc9c">
                <FaMagic size={40} />
              </StyledIconContainer>
              <StyledFeatureTitle>Complete Health Journey</StyledFeatureTitle>
              <StyledFeatureDescription>
                We focus on the whole you! Physical, mental, and emotional
                health because it's all connected.
              </StyledFeatureDescription>
            </StyledFeatureCard>
          </StyledFeatureGrid>
        </StyledContentContainer>
      </StyledSection>
    </>
  );
}

export default LearnMorePage;
