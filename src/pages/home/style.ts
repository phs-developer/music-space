import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  padding: 50px 5%;
  > h2 {
    font-size: 2.3rem;
    font-weight: bold;
    margin-bottom: 3rem;
    > span {
      font-size: 3rem;
    }
  }
  > div {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem;
  }

  @media screen and (max-width: 768px) {
    > h2 {
      font-size: 1.8rem;
      margin-bottom: 2rem;
      > span {
        font-size: 2rem;
      }
    }
    > div {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      gap: 1.5rem;
    }
  }
`;

const Container = styled.div`
  background: rgba(255, 255, 255, 0.4);
  border-radius: 10px;
  padding: 2rem;
  width: 100%;
  h3 {
    font-size: 1.7rem;
    font-weight: 800;
    margin-bottom: 2rem;
  }
  > div {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
    justify-items: center;
  }
  @media screen and (max-width: 768px) {
    h3 {
      font-size: 1.4rem;
    }
  }
`;

export { Section, Container };
