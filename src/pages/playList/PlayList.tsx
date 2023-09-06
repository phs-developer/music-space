import { useEffect } from "react";
import { Section, CurrentItem, List, ListItem, Btn, Bg } from "./style";
import { useState } from "react";
import axios from "axios";
import SpotifyBtn from "../../conponents/SpotifyBtn";
import play from "../../assets/play.png";
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

export interface ListProps {
  id: string;
  imgUrl: string;
  title: string;
}
interface listType {
  id: string;
  imgUrl: string;
  title: string;
}

// 트랙의 spotify ID가 있는 리스트를 props로 받아와야 함. (=전역 상태 관리, 장바구니 역할)
export function PlayList({ list }: { list: Array<listType> | [] }) {
  const [currentItem, setCurrentItem] = useState<CurrentProps | null>(null);
  const token = localStorage.getItem("token");
  console.log(currentItem);

  useEffect(() => {
    list.length > 0 && onChangeCurrentItem(list[0].id);
  }, [list]);

  function onChangeCurrentItem(id: string) {
    (async function () {
      const res = await axios(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return setCurrentItem(res.data);
    })();
  }

  return (
    <Section background={!list[0]}>
      <h2>Playlist</h2>
      <div className="listBox">
        <Play item={currentItem} />
        <List>
          {list.length === 0 && (
            <ListItem>
              <div>리스트 없음</div>
            </ListItem>
          )}
          {list.map((item) => {
            return (
              <ListItem>
                <div>
                  <img src={item.imgUrl} alt="이미지" />
                  <span>{item.title}</span>
                </div>
                <Btn type="button" onClick={() => onChangeCurrentItem(item.id)}>
                  <img src={play} alt="재생버튼" />
                </Btn>
              </ListItem>
            );
          })}
        </List>
      </div>
    </Section>
  );
}

function Play({ item }: { item: CurrentProps | null }) {
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
}
