import styled from "styled-components";

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px 0px 20px;
  h2 {
    font-size: 2rem;
    font-weight: 800;
    padding: 10px;
  }
  .listBox {
    display: flex;
    justify-content: center;
    column-gap: 50px;
    height: 90%;
    padding: 100px;
    > div {
      width: 50%;
    }
  }
`;

const CoverImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: red;
  }
`;

const List = styled.ul`
  width: 50%;
  li {
    margin-bottom: 10px;
    div {
      flex-direction: row;
      column-gap: 30px;
      span {
        display: block;
      }
    }
  }
`;

export { Section, CoverImg, List };
