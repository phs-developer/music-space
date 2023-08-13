import styled from "styled-components";

const ProdBox = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  .small {
    max-width: 230px;
    max-height: 230px;
  }
  .playlist {
    max-width: 100px;
    max-height: 100px;
  }
`;

const ProdImg = styled.img`
  width: 280px;
  height: 280px;
  background: gray;
`;

const ProdInfo = styled.div`
  p {
    padding: 5px 0px 0px 5px;
  }
`;

export { ProdBox, ProdImg, ProdInfo };
