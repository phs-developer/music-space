import styled from "styled-components";

const AlbumBox = styled.div`
  position: relative;
  background: gray;
  display: flex;
  img {
    min-width: 500px;
    height: 500px;
  }
`;

const AlbumInfo = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

const Btn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export { AlbumBox, AlbumInfo, Btn };
