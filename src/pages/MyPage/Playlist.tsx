import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store/reducer/reducer";
import axios from "axios";
import { useEffect, useState } from "react";
import deleteBtn from "../../assets/delete.png";

type PlaylistType = {
  name: string;
  id: string;
};

export function Playlist({ id }: { id: string }) {
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const [playlist, setPlaylist] = useState<Array<PlaylistType>>();
  const [listName, setListName] = useState<string>();

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
          setPlaylist(res.data.items);
        })
        .catch((err) => console.log("재생 목록 받기 error " + err));
  }, []);

  function createList() {
    // 재생목록 생성 api
    if (!listName) {
      return alert("재생 목록 이름을 입력하세요.");
    }
    token &&
      axios({
        method: "post",
        url: `https://api.spotify.com/v1/users/${id}/playlists`,
        headers: {
          Authorization: "Bearer " + token.number,
          "Content-Type": "application/json",
        },
        data: {
          name: `${listName}`,
        },
      })
        .then((res) => {
          console.log("재생 목록 생성 성공");
        })
        .catch((err) => console.log("재생 목록 생성 error" + err));
  }

  function getListTrack(id: string) {
    token &&
      axios({
        method: "get",
        url: `https://api.spotify.com/v1/playlists/${id}/tracks`,
        headers: {
          Authorization: "Bearer " + token.number,
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log("트랙 실패" + err));
  }

  return (
    <List>
      <h3>재생 목록</h3>
      <UlContainer>
        {playlist?.map((item) => {
          return <li onClick={() => getListTrack(item.id)}>{item.name}</li>;
        })}
      </UlContainer>
      <AddList>
        <input
          onChange={(e) => setListName(e.target.value)}
          placeholder="재생 목록 명"
        ></input>
        <button onClick={createList}>생성</button>
      </AddList>
    </List>
  );
}

const AddList = styled.div`
  > input {
    padding: 0.4rem 1rem;
    border-radius: 10px;
    border: none;
    margin-right: 10px;
  }
  > button {
    font-weight: bold;
  }
`;

const List = styled.div`
  min-width: 300px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  > h3 {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const UlContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0px;
  > li {
    line-height: 30px;
    padding: 0.3rem 1rem;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
  }
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 3px;
  right: 3px;
  > img {
    max-width: 20px;
  }
`;
