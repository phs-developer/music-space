import SpotifyBtn from "../../../conponents/SpotifyBtn";
import { Bg, CurrentItem } from "../style";
import white from "../../../assets/white_bg.jpg";
import { CurrentPlayProps } from "./MyList";
import React from "react";

const CurrentPlay = ({ item }: { item: CurrentPlayProps | null }) => {
  console.log("바뀌니?");
  if (item === null) {
    // 초기 상태 기본값
    item = {
      imgURL: white,
      artists_name: "가수명",
      track_name: "노래명",
      uri: "/",
      release_date: "발매일",
    };
  }
  return (
    <>
      <Bg background={item.imgURL} />
      <CurrentItem>
        <img src={item.imgURL} alt="이미지" />
        <div>
          <span>{item.track_name}</span>
          <span>{item.artists_name}</span>
          <span>{item.release_date}</span>
          <SpotifyBtn uri={item.uri} />
        </div>
      </CurrentItem>
    </>
  );
};
export default React.memo(CurrentPlay);
