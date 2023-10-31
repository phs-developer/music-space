import SpotifyBtn from "../../conponents/SpotifyBtn";
import { Bg, CurrentItem } from "./style";
import white from "../../assets/white_bg.jpg";

interface CurrentProps {
  album: {
    images: {
      url: string;
    }[];
    release_date: string;
  };
  artists: {
    name: string;
  }[];
  name: string;
  uri: string;
}

export const CurrentPlay = ({ item }: { item: CurrentProps | null }) => {
  // 데이터 없을 시 기본값
  if (item === null) {
    item = {
      album: {
        images: [{ url: white }],
        release_date: "발매일",
      },
      artists: [
        {
          name: "아티스트",
        },
      ],
      name: "노래명",
      uri: "/",
    };
  }
  return (
    <>
      <Bg background={item.album.images[0].url} />
      <CurrentItem>
        <img src={item.album.images[0].url} alt="이미지" />
        <div>
          <span>{item.name}</span>
          <span>{item.artists[0].name}</span>
          <span>{item.album.release_date}</span>
          <SpotifyBtn uri={item.uri} />
        </div>
      </CurrentItem>
    </>
  );
};
