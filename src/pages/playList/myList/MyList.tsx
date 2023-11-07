import { useSelector } from "react-redux";
import { CurrentItemType } from "../../../store/reducer/myList";
import CurrentList from "./CurrentList";
import { CurrentPlay } from "./CurrentPlay";
import { useEffect, useState } from "react";
import { RootState } from "../../../store/reducer/reducer";
import axios from "axios";
import { ListBox } from "../style";
import { itemsType } from "../PlayList";
import { tokenObj } from "../../../store/reducer/accessToken";

export type CurrentPlayProps = {
  imgURL: string;
  artists_name: string;
  track_name: string;
  uri: string;
  release_date: string;
};

export const MyList = ({
  listID,
  myList,
  token,
}: {
  listID: string;
  myList: itemsType[];
  token: tokenObj | null;
}) => {
  const storageList = useSelector((state: RootState) => state.myList.list);
  const [currentItem, setCurrentItem] = useState<CurrentPlayProps | null>(null);
  const [currentList, setCurrentList] = useState<CurrentItemType[]>([]);

  useEffect(() => {
    // 보여질 리스트가 PLAYLIST라면 redux store에서 호출하고,
    // user 재생목록이라면 api로 호출해서 CurrentList에 데이터 전달.
    if (listID !== "PLAYLIST") {
      // 선택된 재생목록의 track리스트 받기
      token &&
        (async function () {
          const res = await axios(
            `https://api.spotify.com/v1/playlists/${listID}/tracks`,
            {
              headers: {
                Authorization: "Bearer " + token.number,
              },
            }
          );
          setCurrentList(res.data.items);
        })();
    }
  }, [token, listID]);

  function onChangeCurrentItem(item: CurrentItemType) {
    // 재생버튼 click 시 CurrentItem에 데이터 전달 (play)
    const track = item.track;
    setCurrentItem({
      imgURL: track.album.images[0].url,
      artists_name: track.artists[0].name,
      track_name: track.name,
      uri: track.uri,
      release_date: track.album.release_date,
    });
  }

  return (
    <ListBox>
      <CurrentPlay item={currentItem} />
      <CurrentList
        listData={{
          id: listID,
          data: listID === "PLAYLIST" ? storageList : currentList,
        }}
        onChangeCurrentItem={onChangeCurrentItem}
        myList={myList}
        token={token}
        isAddBtn={listID === "PLAYLIST" ? false : true}
      />
    </ListBox>
  );
};

/**
 * 재생목록의 id를 가져오면 항목 조회가 가능. props로 재생목록 id를 받아야함.
 * props가 '현재' 이면 redux로 가져오고, id자체면 api연결해서 리스트 받으면됨.
 *
 * currentPlay에는 url, artists_name, track_name, uri 필요 (trackID로 api연결)
 * currentList 에는 id, imgurl, track_name 필요 (id가 있어야 currentPlay 변경 가능)
 *
 * **/
