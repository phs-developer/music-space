import styled from "styled-components";

const ProdBox = styled.div`
  display: flex;
  width: 200px;
  flex-direction: column;
  justify-content: center;
  span {
    padding: 5px 0px 0px 5px;
  }
  .small {
    max-width: 230px;
    max-height: 230px;
  }
`;

const ProdImg = styled.img`
  width: 280px;
  height: 280px;
  background: gray;
`;

export { ProdBox, ProdImg };
