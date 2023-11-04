import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentItemType, deleteList } from "../../../store/reducer/myList";
import { itemsType } from "../PlayList";
import { AddToTrack } from "./AddToTrack";
import { Btn, List, ListItem } from "../style";
import play from "../../../assets/play.png";
import x from "../../../assets/x.png";
import add from "../../../assets/plus2.png";
import { RootState } from "../../../store/reducer/reducer";
import axios from "axios";

type Props = {
  listData: {
    id: string;
    data: CurrentItemType[];
  };
  onChangeCurrentItem: (track: CurrentItemType) => void;
  myList: itemsType[];
  tokenType?: string | undefined;
};

export default function CurrentList({
  listData,
  onChangeCurrentItem,
  myList,
  tokenType,
}: Props) {
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const [readyToAdd, setReadyToAdd] = useState({ active: false, uri: "" });
  const dispatch = useDispatch();

  function deleteItem(trackID: string, trackURI: string) {
    if (tokenType === "personal") {
      token &&
        axios({
          method: "delete",
          url: `https://api.spotify.com/v1/playlists/${listData.id}/tracks`,
          headers: {
            Authorization: "Bearer " + token.number,
            "Content-Type": "application/json",
          },
          data: {
            uris: [`${trackURI}`],
          },
        })
          .then((res) => {
            alert("재생 목록에서 삭제되었습니다.");
          })
          .catch((err) => console.log("헝목 삭제 실패" + err));
    } else {
      dispatch(deleteList(trackURI));
    }
  }

  return (
    <div className="currentList">
      <List>
        {listData.data.length <= 0 && (
          <ListItem>
            <div>리스트 없음</div>
          </ListItem>
        )}
        {listData.data.map((item) => {
          return (
            <ListItem key={item.track.id}>
              <div>
                <img src={item.track.album.images[0].url} alt="이미지" />
                <div>
                  <p>{item.track.name}</p>
                  <p>{item.track.artists[0].name}</p>
                </div>
              </div>
              <div>
                <Btn
                  type="button"
                  color="green"
                  onClick={() => onChangeCurrentItem(item)}
                >
                  <img src={play} alt="재생버튼" />
                </Btn>
                <Btn
                  type="button"
                  color="red"
                  onClick={() => deleteItem(item.track.id, item.track.uri)}
                >
                  <img src={x} alt="삭제버튼" />
                </Btn>
                {tokenType === "addTrack" && (
                  <Btn
                    type="button"
                    color="lightgray"
                    onClick={() =>
                      setReadyToAdd({
                        active: !readyToAdd.active,
                        uri: item.track.uri,
                      })
                    }
                    className="addTrackBtn"
                  >
                    <img src={add} alt="추가버튼" />
                  </Btn>
                )}
              </div>
            </ListItem>
          );
        })}
      </List>
      {readyToAdd.active && (
        // 추가 할 재생목록 리스트
        <AddToTrack
          myList={myList}
          trackURI={readyToAdd.uri}
          closeMyList={() => setReadyToAdd({ active: false, uri: "" })}
        />
      )}
    </div>
  );
}
