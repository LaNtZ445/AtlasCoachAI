import { StyledHeader, StyledNav, StyledLink, StyledLogo } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <StyledLogo>AtlasCoach AI</StyledLogo>
      <StyledNav>
        <StyledLink href="/workouts">Workouts</StyledLink>
        <StyledLink href="/meal-plans">Meal Plans</StyledLink>
        <StyledLink href="/quiz">Quiz</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
