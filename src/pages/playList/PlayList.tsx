import { MouseEventHandler, useEffect } from "react";
import { Container, Section, CurrentItem, List, ListItem, Btn } from "./style";
import { useState } from "react";
import axios from "axios";
import SpotifyBtn from "../../conponents/SpotifyBtn";
import play from "../../assets/play.png";

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
  const [currentItem, setCurrentItem] = useState<CurrentProps>();
  const [id, setId] = useState(list[0].id);

  useEffect(() => {
    const token = localStorage.getItem("token");
    (async function () {
      const res = await axios(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return setCurrentItem(res.data);
    })();
  }, [id]);

  function onChangeCurrentItem(id: string) {
    setId(id);
  }

  return (
    <>
      {currentItem && (
        <Container background={currentItem.album.images[0].url}>
          <div className="bg" />
          <Section>
            <h2>Playlist</h2>
            <div className="listBox">
              <Play item={currentItem} />
              <List>
                {list.map((item) => {
                  return (
                    <ListItem>
                      <div>
                        <img src={item.imgUrl} alt="이미지" />
                        <span>{item.title}</span>
                      </div>
                      <Btn
                        type="button"
                        onClick={() => onChangeCurrentItem(item.id)}
                      >
                        <img src={play} alt="재생버튼" />
                      </Btn>
                    </ListItem>
                  );
                })}
              </List>
            </div>
          </Section>
        </Container>
      )}
    </>
  );
}

function Play({ item }: { item: CurrentProps }) {
  return (
    <CurrentItem>
      <img src={item.album.images[0].url} alt="이미지" />
      <div>
        <span>{item.name}</span>
        <span>{item.artists[0].name}</span>
        <span>{item.album.release_date}</span>
        <SpotifyBtn uri={item.uri} />
      </div>
    </CurrentItem>
  );
}
