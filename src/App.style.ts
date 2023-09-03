import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  background: linear-gradient(
    to bottom right,
    white,
    rgb(189, 214, 252),
    80%,
    rgb(231, 168, 261)
  );
  background-size: 200%;
  z-index: -10;
  animation: gradient 5s infinite;
  @keyframes gradient {
    50% {
      background-position: 100% 50%;
    }
  }
`;
