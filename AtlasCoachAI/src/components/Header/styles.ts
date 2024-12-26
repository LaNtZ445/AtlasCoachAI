import styled from "styled-components";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2.5rem 2rem;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  backdrop-filter: blur(1px);
  font-family: "Poppins", sans-serif;
  z-index: 10;
`;

export const StyledNav = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: red;
    transform: translateY(-3px);
    transition: transform 0.2s ease;
  }
`;

export const StyledLogo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: white;
`;
