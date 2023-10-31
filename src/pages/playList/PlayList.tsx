import { ChangeEvent, useEffect } from "react";
import { Section } from "./style";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { MyList } from "./MyList";
import axios from "axios";

export interface ListProps {
  id: string;
  imgUrl: string;
  title: string;
}

type itemsType = {
  id: string;
  name: string;
};

// 트랙의 spotify ID가 있는 리스트를 props로 받아와야 함. (=전역 상태 관리, 장바구니 역할)
export function PlayList() {
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const storageList = useSelector((state: RootState) => state.setList.list);
  const [myList, setMyList] = useState<itemsType[]>([
    { id: "PLAYLIST", name: "PLAYLIST" },
  ]);
  const [selectedList, setSelectedList] = useState<itemsType>(myList[0]);

  // useEffect(() => {
  //   list.length > 0 && onChangeCurrentItem(list[0].id);
  // }, [list]);

  useEffect(() => {
    token &&
      axios({
        method: "get",
        url: `https://api.spotify.com/v1/me/playlists`,
        headers: {
          Authorization: "Bearer " + token.number,
        },
      })
        .then((res) => {
          const ids: Array<itemsType> = [myList[0]];
          res.data.items.forEach((item: itemsType) => {
            ids.push({
              id: item.id,
              name: item.name,
            });
          });
          setMyList(ids);
        })
        .catch((err) => console.log("재생 목록 받기 error " + err));
  }, [token]);

  const onSeleted = (event: ChangeEvent<HTMLSelectElement>) => {
    const selected = myList.find((item) => item.name === event.target.value);
    selected && setSelectedList(selected);
  };

  return (
    <Section background={storageList[0] && "white"}>
      <h2>{selectedList.name}</h2>
      <select value={selectedList.name} onChange={onSeleted}>
        {myList.length > 0 &&
          myList.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
      </select>
      <MyList listID={selectedList.id} />
    </Section>
  );
}
