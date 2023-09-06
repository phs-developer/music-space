import { styled } from "styled-components";

const NavContainer = styled.nav`
  width: 15vw;
  height: 100vh;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  z-index: 20;
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
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  font-family: "Noto Sans KR";
  li {
    padding: 20px;
    &:hover {
      font-weight: 800;
    }
  }
`;

export { NavContainer, Ul, Logo };
