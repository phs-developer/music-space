import { useEffect } from "react";
import { Container, Section, CurrentItem, List } from "./style";
import { useState } from "react";
import axios from "axios";
import SpotifyBtn from "../../conponents/SpotifyBtn";

interface ItemProps {
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

export default function PlayList() {
  const items = [
    {
      id: "11dFghVXANMlKmJXsNCbNl",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
      title: "Cut To The Feeling",
    },
    {
      id: "11dFghVXANMlKmJXsNCbNl",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
      title: "Cut To The Feeling",
    },
    {
      id: "11dFghVXANMlKmJXsNCbNl",
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b2737359994525d219f64872d3b1",
      title: "Cut To The Feeling",
    },
  ];
  const [currentItem, setCurrentItem] = useState<ItemProps>();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = items[0].id;
    (async function () {
      const res = await axios(`https://api.spotify.com/v1/tracks/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return setCurrentItem(res.data);
    })();
  }, []);

  return (
    <>
      {currentItem && (
        <Container>
          <div
            style={{
              backgroundImage: `url(${currentItem.album.images[0].url})`,
            }}
          />
          <Section>
            <h2>뮤직 라이브러리</h2>
            <div className="listBox">
              <CurrentItem>
                <img src={currentItem.album.images[0].url} alt="이미지" />
                <div>
                  <span>{currentItem.name}</span>
                  <span>{currentItem.artists[0].name}</span>
                  <span>{currentItem.album.release_date}</span>
                  <SpotifyBtn uri={currentItem.uri} />
                </div>
              </CurrentItem>
              <List>
                {items.map((item) => {
                  return (
                    <li>
                      <img src={item.imgUrl} alt="이미지" />
                      <span>{item.title}</span>
                    </li>
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
