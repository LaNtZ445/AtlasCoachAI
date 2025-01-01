import styled from "styled-components";

export const StyledPlanGenerationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding-top: 100px;
  background-color: #497972;
  overflow: hidden;
`;

export const StyledTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 600;
  color: white;
  margin-top: 10px;
  text-align: center;
  position: sticky;
  top: 0;
  padding: 25px 0;
  z-index: 10;
  border-bottom: 1px solid #e5e5e5;
`;

export const StyledSpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledSpinnerText = styled.p`
  font-size: 1.6rem;
  color: white;
  font-weight: 600;
  margin-top: 30px;
`;

export const StyledPlansContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  background-color: #fff;
  padding: 40px;
  border-radius: 15px;
  margin-top: 30px;
  font-size: 1.1rem;
  line-height: 1.6;
  overflow-y: auto;
  max-height: 70vh;
  padding-bottom: 30px;
`;

export const StyledPlanSection = styled.div`
  margin-bottom: 40px;
`;

export const StyledPlanTitle = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 20px;
  text-transform: uppercase;
  border-bottom: 2px solid #f33434;
  padding-bottom: 12px;
  letter-spacing: 1px;
`;

export const StyledPlanItem = styled.div`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 20px;
  padding-left: 25px;
  list-style-type: disc;
  line-height: 1.7;
  font-family: "Roboto", sans-serif;
`;

export const StyledPlanText = styled.pre`
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size: 1.2rem;
  color: #444;
  margin: 20px 0;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  line-height: 1.8;
  word-break: break-word;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  font-family: "Roboto", sans-serif;
`;

export const StyledPlanItemTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  color: #2d3e50;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Roboto", sans-serif;
  text-align: left;
  position: relative;
`;

export const StyledSpinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid #f5f5f7;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`;
