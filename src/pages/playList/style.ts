import styled from "styled-components";

type BtnType = {
  onClick: () => void;
  color: string;
};

const Section = styled.section`
  width: 100%;
  padding: 50px 5%;
  z-index: 10;
  height: 100vh;
  select {
    border-radius: 10px;
    padding: 2px 5px;
    margin-bottom: 1rem;
  }
  @media screen and (max-width: 1024px) {
    width: 100vw;
    padding: 50px 20px;
  }
`;

const Title = styled.div`
  position: relative;
  h2 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  img {
    position: absolute;
    top: -15px;
    left: -20px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  form {
    position: absolute;
    top: 0px;
    left: 0px;
    input {
      width: 180px;
      height: 2.1rem;
      border-radius: 5px;
      border: 1px solid gray;
      margin-right: 5px;
      padding: 0px 5px;
    }
    button {
      &:hover {
        font-weight: bold;
      }
    }
  }
`;

const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2rem;
  border-radius: 10px;
  height: 90%;
  .currentList {
    position: relative;
    height: 70%;
  }
`;

const CurrentItem = styled.div`
  display: flex;
  column-gap: 20px;
  font-size: 1.4rem;
  align-items: flex-end;
  width: 750px;
  img {
    width: 200px;
    height: 200px;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
  > div {
    display: flex;
    flex-direction: column;
    width: 600px;
  }
  span {
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
    width: fit-content;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
  background-color: rgba(255, 255, 255, 0.2);
  overflow: auto;
  height: 100%;
  width: 750px;
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
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
  display: flex;
  margin-bottom: 1rem;
  gap: 1rem;
  > div {
    display: flex;
    gap: 10px;
  }
  div:first-child {
    align-items: flex-end;
    width: 90%;
    img {
      width: 70px;
    }
    > div {
      p {
        margin-bottom: 5px;
      }
      p:last-child {
        font-size: 0.8rem;
      }
    }
  }
  @media screen and (max-width: 768px) {
    font-size: ;
  }
`;
const Btn = styled.button<BtnType>`
  background-color: ${(props) => props.color};
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

const UserPlaylist = styled.ul`
  position: absolute;
  top: 0px;
  right: 150px;
  background-color: rgba(255, 255, 255, 0.5);
  max-height: 50%;
  width: 200px;
  border-radius: 10px;
  padding: 5px;
  li {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 5px 10px;
    &: hover {
      font-weight: bold;
    }
  }
`;

export {
  Section,
  CurrentItem,
  List,
  ListItem,
  Btn,
  Bg,
  UserPlaylist,
  ListBox,
  Title,
};
