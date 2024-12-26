import styled from "styled-components";

export const StyledHeroSection = styled.section`
  height: 100vh;
  background: url("/src/assets/images/atlas-landingpage.jpg") center/cover
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

export const StyledHeroOverlay = styled.div`
  max-width: 600px;
  text-align: left;
  color: white;
`;

export const StyledHeroTitle = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: white;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
`;

export const StyledHeroDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: white;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const StyledButton = styled.a<{ secondary?: boolean }>`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ secondary }) => (secondary ? "white" : "white")};
  background-color: ${({ secondary }) =>
    secondary ? "transparent" : "rgb(182, 23, 21)"};
  border: ${({ secondary }) => (secondary ? "2px solid white" : "none")};
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    background-color: ${({ secondary }) => (secondary ? "black" : "#f33434")};
    color: ${({ secondary }) => (secondary ? "white" : "white")};
    transform: translateY(-3px);
    box-shadow: ${({ secondary }) =>
      secondary
        ? "0 0 10px 4px rgba(255, 255, 255, 1)"
        : "0 0 20px 4px rgba(255, 255, 255, 1)"};
  }
`;
