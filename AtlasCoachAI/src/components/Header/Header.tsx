import { Link } from "react-router-dom";
import { StyledHeader, StyledNav, StyledLink, StyledLogo } from "./styles";

function Header() {
  return (
    <StyledHeader>
      <Link to="/" style={{ textDecoration: "none" }}>
        <StyledLogo>AtlasCoach AI</StyledLogo>
      </Link>
      <StyledNav>
        <StyledLink href="/workouts">Workouts</StyledLink>
        <StyledLink href="/meal-plans">Meal Plans</StyledLink>
        <StyledLink href="/quiz">Quiz</StyledLink>
      </StyledNav>
    </StyledHeader>
  );
}

export default Header;
