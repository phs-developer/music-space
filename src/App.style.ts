import { styled } from "styled-components";

export const Main = styled.div<{ background: string }>`
  padding-left: 230px;
  background-image: url(${(props) => props.background});
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

  @media screen and (max-width: 1024px) {
    padding-left: 0px;
  }
`;
