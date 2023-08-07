import { styled } from "styled-components";

const NavContainer = styled.nav`
  color: white;
  width: 15vw;
  height: 100vh;
  padding: 50px 15px;
  background: rgba(0, 0, 0, 0.9);
`;

const Ul = styled.ul`
  min-height: 100%;
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  li {
    padding: 20px;
    &:hover {
      font-weight: 600;
    }
  }
`;

export { NavContainer, Ul };
