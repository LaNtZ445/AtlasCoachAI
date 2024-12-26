import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  StyledHeroSection,
  StyledHeroOverlay,
  StyledHeroTitle,
  StyledHeroDescription,
  StyledButtonContainer,
  StyledButton,
} from "./styles";

function LandingPage() {
  return (
    <>
      <Header />
      <StyledHeroSection>
        <StyledHeroOverlay>
          <StyledHeroTitle>Transform Your Fitness Journey</StyledHeroTitle>
          <StyledHeroDescription>
            Unlock personalized training and meal plans designed to fuel your
            body and achieve your goals. Take control of your fitness, starting
            today!
          </StyledHeroDescription>
          <StyledButtonContainer>
            <StyledButton href="/quiz">Get Started</StyledButton>
            <StyledButton href="/learn-more" secondary>
              Learn More
            </StyledButton>
          </StyledButtonContainer>
        </StyledHeroOverlay>
      </StyledHeroSection>
      <Footer />
    </>
  );
}

export default LandingPage;
