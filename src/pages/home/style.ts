import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px 0px 20px;
`;

const Top3 = styled.div`
  h2 {
    font-size: 2rem;
    font-weight: 800;
    padding: 10px;
  }
  > div {
    display: flex;
    column-gap: 10px;
    justify-content: space-around;
    padding-top: 30px;
  }
`;

const Best = styled(Top3)`
  margin-top: 3rem;
  .hiddenContainer {
    position: relative;
    overflow: hidden;
  }
`;

export { Section, Top3, Best };
