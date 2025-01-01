import styled from "styled-components";

export const StyledPageSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 60vh;
  background-color: #497972;
  padding: 2rem;
  margin-top: 320px;
  position: sticky;
`;

export const StyledContentContainer = styled.div`
  max-width: 900px;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  overflow: hidden;
  word-wrap: break-word;
  max-height: 80vh;
  overflow-y: auto;
  position: sticky;
  margin-bottom: 130px;
`;

export const StyledPageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 15px;
`;

export const StyledActionButton = styled.button`
  background-color: #f33434;
  color: white;

  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease,
    box-shadow 0.3s ease;
  width: 100%;
  max-width: 250px;
  margin: auto;
  display: block;

  &:hover {
    background-color: #c12f2f;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: #a12424;
    transform: scale(1);
  }
`;

export const StyledPlanContainer = styled.div`
  width: 100%;
  padding: 1.5rem;
  border-radius: 15px;
  text-align: left;
`;

export const StyledPlanContent = styled.pre`
  font-size: 1.1rem;
  color: #333;
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.7;
  background-color: #fafafa;
  border-radius: 8px;
`;
