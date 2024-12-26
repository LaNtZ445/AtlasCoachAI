import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 1rem 2rem;
  font-size: 0.7rem; 
  font-weight: 600;
  text-transform: uppercase;
  backdrop-filter: blur(1px);
  z-index: 10;
`;
