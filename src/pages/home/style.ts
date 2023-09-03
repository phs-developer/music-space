import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px;
  overflow: auto;
  height: 100vh;
  > h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 5rem;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 5rem;
    column-gap: 3rem;
  }
`;

const Container = styled.div`
  width: 80%;
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  > div {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`;

export { Section, Container };
