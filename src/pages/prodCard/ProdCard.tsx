import styled from "styled-components";
import { AlbumBox, AlbumInfo, Btn } from "./style";
import axios from "axios";

export default function ProdCard() {
  const id = sessionStorage.getItem("id");

  // const data = useFetch2(`https://api.spotify.com/v1/tracks/${id}`);

  (async function () {
    const topData = await axios(
      "https://api.spotify.com/v1/tracks/37i9dQZF1DXcF6B6QPhFDv",
      {
        headers: {
          Authorization:
            "Bearer " +
            "BQCtMCwciT8S3JuAw8kcbTXpuqw5_wsB7Smm67BR-s3TOr9M_c24MdZIWBwPzc4D63qPJp0v8hgCuHT9N4CcW6GmmM5Sd90bgw16mNJEx2dL4lq71ag",
        },
      }
    );
    console.log(topData);
  })();

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
