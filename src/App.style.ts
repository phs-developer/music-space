import { styled } from "styled-components";

export const Main = styled.div<{ background: string }>`
  display: flex;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-size: 200%;
  z-index: -10;
  animation: gradient 8s infinite;
  @keyframes gradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;
