import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px;
`;

const Category = styled.div`
  margin-bottom: 50px;
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

export { Section, Category };
