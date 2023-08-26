import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px;
  > div {
    position: relative;
  }
  > div::before {
    content: "";
    position: absolute;
    background-color: black;
    width: 100%;
    height: 1px;
    top: -30px;
  }
  > div:first-child::before {
    display: none;
  }
`;

const Container = styled.div`
  margin-bottom: 80px;
  h2 {
    font-size: 1.7rem;
    font-weight: 800;
  }
  > div {
    display: flex;
    column-gap: 30px;
    padding-top: 15px;
  }
`;

export { Section, Container };
