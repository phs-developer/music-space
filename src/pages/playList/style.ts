import styled from "styled-components";

const Container = styled.div`
  position: "relative";
  > div {
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    filter: blur(20px);
    -webkit-filter: blur(20px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const Section = styled.section`
  width: 85vw;
  padding: 50px 20px;
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
    padding: 100px 50px;
    > div {
      width: 50%;
    }
  }
`;

const CurrentItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 1.2rem;
  img {
    width: 500px;
    height: 500px;
  }
  span {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0.5rem 5px;
    font-weight: bold;
    color: #444544;
  }
  span:nth-of-type(3) {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: normal;
  }
  a {
    padding: 5px 8px;
    font-size: 1rem;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid black;
  padding: 1rem;
  li {
    display: flex;
    column-gap: 10px;
    align-items: flex-end;
    margin-bottom: 10px;
    img {
      width: 70px;
    }
    span {
      margin-bottom: 10px;
    }
  }
`;

export { Container, Section, CurrentItem, List };
