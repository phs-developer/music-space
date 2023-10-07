import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 5%;
  overflow: auto;
  height: 100vh;
  > h1 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 5rem;
    > span {
      font-size: 3rem;
    }
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
  }
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    justify-items: center;
    }
  }
`;

export { Section, Container };
