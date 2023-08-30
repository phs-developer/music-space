import { styled } from "styled-components";

const NavContainer = styled.nav`
  color: white;
  width: 15vw;
  height: 100vh;
  padding: 10px 15px;
  background: rgba(0, 0, 0);
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  margin: 1.5rem 0px;
  text-align: center;
`;

const Ul = styled.ul`
  height: 90%;
  font-size: 1.2rem;
  background: #242424;
  border-radius: 10px;
  li {
    padding: 20px;
    &:hover {
      font-weight: 600;
    }
  }
`;

export { NavContainer, Ul, Logo };
