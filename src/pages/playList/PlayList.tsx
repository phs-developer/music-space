import { ChangeEvent, useEffect } from "react";
import { Section, Title } from "./style";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { MyList } from "./myList/MyList";
import axios from "axios";
import { ChangeTitle } from "./changeTitle/ChangeTitle";

export type itemsType = {
  id: string;
  name: string;
};

export type Mylist2 = {
  items: itemsType[];
};

// 트랙의 spotify ID가 있는 리스트를 props로 받아와야 함. (=전역 상태 관리, 장바구니 역할)
export function PlayList() {
  const token = useSelector((state: RootState) => state.token.token);
  const onLogin = token?.name === "personal" ? true : false;
  const [myList, setMyList] = useState<itemsType[]>([
    { id: "PLAYLIST", name: "PLAYLIST" },
  ]);
  const [selectedList, setSelectedList] = useState<itemsType>(myList[0]);

  useEffect(() => {
    // 로그인 했을 경우 user의 재생 목록 가져오기
    if (token?.name === "personal") {
      const userList: itemsType[] = [myList[0]];
      axios({
        method: "get",
        url: "https://api.spotify.com/v1/me/playlists",
        headers: {
          Authorization: "Bearer " + token.number,
        },
      })
        .then((res) => {
          res.data.items.forEach((item: itemsType) => {
            userList.push({
              id: item.id,
              name: item.name,
            });
          });
          setMyList(userList);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  function onSeleted(event: ChangeEvent<HTMLSelectElement>) {
    const selected = myList.find((item) => item.name === event.target.value);
    selected && setSelectedList(selected);
  }

  function updateMyList(id: string, changedTitle: string) {
    // 변경된 제목 반영
    const changedIndex = myList.findIndex((item) => item.id === id);
    const res = [...myList];
    res[changedIndex].name = changedTitle;
    setMyList(res);
  }

  return (
    <Section>
      <Title>
        <h2>{selectedList.name}</h2>
        {selectedList.name !== "PLAYLIST" && token && (
          <ChangeTitle
            listID={selectedList}
            token={token}
            updateMyList={updateMyList}
          />
        )}
      </Title>
      {onLogin && (
        <select value={selectedList.name} onChange={onSeleted}>
          {myList.map((item) => {
            return (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            );
          })}
        </select>
      )}
      <MyList listID={selectedList.id} myList={myList} token={token} />
    </Section>
  );
}
