import styled from "styled-components";

const ProdBox = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  cursor: pointer;
  position: relative;
  &: hover {
    > .hoverAction {
      display: flex;
    }
    > img {
      filter: blur(1px);
    }
  }
  .playlist {
    max-width: 100px;
    max-height: 100px;
  }
`;

const ProdImg = styled.img`
  width: 200px;
  height: 200px;
`;

const ProdInfo = styled.div`
  margin-top: 10px;
  .name {
    font-weight: 800;
  }
  .description {
    margin-top: 5px;
    font-size: 0.8rem;
    line-height: 16px;
    color: gray;
  }
`;

const AddBtn = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.4);
  display: none;
  justify-content: center;
  align-items: center;
  > img {
    width: 4rem;
    height: 4rem;
    margin-bottom: 50px;
  }
`;

export { ProdBox, ProdImg, ProdInfo, AddBtn };
