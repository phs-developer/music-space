import { styled } from "styled-components";

export const Main = styled.div<{ background: string }>`
  padding-left: 230px;
  > .bg {
    background-image: url(${(props) => props.background});
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    background-size: cover;
    z-index: -10;
    animation: gradient 8s infinite;
    > section {
      min-height: 100vh;
    }
    @keyframes gradient {
      50% {
        background-position: 100% 50%;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    padding-left: 0px;
  }
`;
