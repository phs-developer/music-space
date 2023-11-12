import { styled } from "styled-components";

const NavContainer = styled.nav`
  width: 230px;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  padding: 10px 15px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5px;
  z-index: 20;
  @media screen and (max-width: 1024px) {
    width: 100vw;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 3rem;
    background: rgba(255, 255, 255, 0.8);
    position: static;
    border-radius: 0px;
  }
  @media screen and (max-width: 768px) {
    gap: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    justify-content: space-between;
    gap: 0px;
  }
`;

const Logo = styled.h1`
  font-weight: 800;
  font-size: 2rem;
  margin: 1.5rem 0px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    margin: 0px;
    font-size: 1rem;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
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
  @media screen and (max-width: 1024px) {
    height: auto;
    background: none;
    font-size: 1rem;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    li {
      padding: 10px;
    }
  }
`;

export { NavContainer, Ul, Logo };
