import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #2d3e50; /* Dark background for the whole page */
  background-image: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85));
  padding: 5rem 2rem;
  margin-top: 0;
  color: white;
  flex-direction: column;
  position: sticky;
`;

export const StyledContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  overflow: hidden;
`;

export const StyledTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
  color: white;
`;

export const StyledFeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;
  justify-items: center;
`;

export const StyledFeatureCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2.5rem 2rem;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  min-height: 280px;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.1);
  }
`;

export const StyledIconContainer = styled.div`
  background-color: ${(props) => props.color || "#f33434"};
  border-radius: 50%;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;

  svg {
    color: white;
    filter: drop-shadow(1px 1px 6px rgba(0, 0, 0, 0.3));
  }

  &:hover {
    background-color: #f33434;
    transform: translateY(-3px);
    box-shadow: 0 0 20px 4px rgba(255, 255, 255, 0.2);
  }
`;

export const StyledFeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
`;

export const StyledFeatureDescription = styled.p`
  font-size: 1.1rem;
  font-weight: 300;
  color: white;
  line-height: 1.4;
  text-align: center;
  margin-top: 0.5rem;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
`;
