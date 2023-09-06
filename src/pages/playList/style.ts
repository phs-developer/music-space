import styled from "styled-components";

interface BtnType {
  onClick: () => void;
}

const Section = styled.section<{ background: boolean }>`
  width: 85vw;
  padding: 50px 20px;
  background-color: ${(props) => !props.background && "white"};
  z-index: 10;
  h2 {
    font-size: 2rem;
    font-weight: 800;
    padding: 10px;
  }
  .listBox {
    display: flex;
    justify-content: center;
    column-gap: 3rem;
    height: 90%;
    margin: 80px 100px 0px 100px;
    border-radius: 10px;
  }
`;

const CurrentItem = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  font-size: 1.4rem;
  img {
    width: 600px;
    height: 600px;
  }
  span {
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0.5rem 5px;
    font-weight: bold;
    color: #444544;
  }
  span:nth-of-type(2) {
    font-size: 1.1rem;
  }
  span:nth-of-type(3) {
    margin-bottom: 1.5rem;
    font-size: 1rem;
    font-weight: normal;
  }
  a {
    font-size: 1rem;
  }
`;

const List = styled.ul`
  width: 700px;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: auto;
  height: 750px;
  &::-webkit-scrollbar {
    width: 13px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #535354;
    border-radius: 10px;
    background-clip: padding-box;
    border: 4px solid transparent;
  }
  &::-webkit-scrollbar-track {
    background-color: grey;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  div {
    display: flex;
    align-items: flex-end;
    img {
      width: 70px;
      margin-right: 10px;
    }
    span {
      color: red;
      margin-bottom: 10px;
    }
  }
`;
const Btn = styled.button<BtnType>`
  background-color: green;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  align-self: center;
  img {
    padding: 10px;
    width: 30px;
    height: 30px;
  }
`;

const Bg = styled.div<{ background: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  -webkit-filter: blur(20px);
  opacity: 0.5;
  z-index: -1;
`;
export { Section, CurrentItem, List, ListItem, Btn, Bg };
