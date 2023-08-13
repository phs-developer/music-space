import styled from "styled-components";
import { AlbumBox, AlbumInfo, Btn } from "./style";

export default function ProdCard() {
  return (
    <Section>
      <AlbumBox>
        <Btn type="button"> 리스트 추가 </Btn>
        <img src="" alt="cover" />
        <AlbumInfo className="Album">
          <span>title</span>
          <span>name</span>
          <span>출시일</span>
          <span>저작권</span>
          <span>에피소드</span>
          <span></span>
        </AlbumInfo>
      </AlbumBox>
    </Section>
  );
}

const Section = styled.section`
  background-image: url();
  width: 85vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
