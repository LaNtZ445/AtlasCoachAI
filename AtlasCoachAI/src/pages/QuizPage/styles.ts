import styled from "styled-components";

export const StyledQuizSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
  width: 100%;
  min-height: 100vh;
  background-color: #497972;
  color: white;
`;

export const StyledQuizTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-align: center;
`;

export const StyledProgressBar = styled.div`
  position: fixed;
  top: 112px;
  left: 0;
  right: 0;
  height: 10px;
  background-color: #f4f4f4;
  z-index: 1000;
  div {
    height: 100%;
    background-color: #f33434;
    transition: width 0.3s ease;
  }
`;

export const StyledTextContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  max-width: 700px;
  margin: 0 auto;
`;

export const StyledButton = styled.button`
  background-color: #f33434;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.2rem 2rem;
  border: none;
  margin: 15px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 220px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: #c12f2f;
    transform: scale(1.1);
  }
`;

export const StyledGoalContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const StyledGoalButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const StyledGoalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

export const StyledGoalImageText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 15px;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%;
  font-size: 20px;
  letter-spacing: 2px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin-top: 3rem;
`;

export const StyledLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

export const StyledInput = styled.input`
  padding: 1.2rem;
  font-size: 1.1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  width: 100%;
  background-color: #f9f9f9;
  margin-bottom: 2rem;
  margin-top: 5px;
  transition: border-color 0.3s ease;
  position: relative;
  &:focus {
    border-color: #f33434;
    outline: none;
  }
  &:hover {
    border-color: #f33434;
  }
`;

export const StyledError = styled.div`
  color: #f33434;
  font-size: 0.9rem;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  text-align: left;
  padding-left: 10px;
`;

export const StyledSubmitButton = styled.button`
  background-color: #f33434;
  color: white;
  font-size: 1.3rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  width: 100%;
  max-width: 250px;
  margin: auto;
  &:hover {
    background-color: #c12f2f;
    transform: scale(1.1);
  }
`;
