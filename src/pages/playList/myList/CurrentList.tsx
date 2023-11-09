import { useState } from "react";
import { useDispatch } from "react-redux";
import { CurrentItemType, deleteList } from "../../../store/reducer/myList";
import { itemsType } from "../PlayList";
import { AddToTrack } from "./AddToTrack";
import { Btn, List, ListItem } from "../style";
import play from "../../../assets/play.png";
import x from "../../../assets/x.png";
import add from "../../../assets/plus2.png";
import axios from "axios";
import { tokenObj } from "../../../store/reducer/accessToken";

type Props = {
  listData: {
    id: string;
    data: CurrentItemType[];
  };
  onChangeCurrentItem: (track: CurrentItemType) => void;
  setCurrentList: (updateList: CurrentItemType[]) => void;
  myList: itemsType[];
  token: tokenObj | null;
  isAddBtn: boolean;
};

export default function CurrentList({
  listData,
  onChangeCurrentItem,
  setCurrentList,
  myList,
  token,
  isAddBtn,
}: Props) {
  const [readyToAdd, setReadyToAdd] = useState({ active: false, uri: "" });
  const dispatch = useDispatch();

  // 재생목록에서 track 제거
  function deleteItem(trackID: string, trackURI: string) {
    if (listData.id === "PLAYLIST") {
      // store에서 track 제거
      dispatch(deleteList(trackID));
    } else {
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
          .then(() => {
            alert("재생 목록에서 삭제되었습니다.");
            const updateList: CurrentItemType[] = listData.data.filter(
              (track) => track.track.uri !== trackURI
            );
            setCurrentList(updateList);
          })
          .catch((err) => console.log("항목 삭제 실패" + err));
    }
  }

  return (
    <div className="currentList">
      <List>
        {listData.data.length <= 0 ? (
          <ListItem>
            <div>리스트 없음</div>
          </ListItem>
        ) : (
          <>
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
                    {isAddBtn && (
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
          </>
        )}
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
