import styled from "styled-components";

const ProdBox = styled.div`
  display: flex;
  max-width: 200px;
  flex-direction: column;
  cursor: pointer;
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

export { ProdBox, ProdImg, ProdInfo };
