import { useSelector } from "react-redux";
import CurrentList from "./CurrentList";
import { CurrentPlay } from "./CurrentPlay";
import axios from "axios";
import { useState } from "react";
import { RootState } from "../../store/reducer/reducer";

type Props = {
  listID: string;
};

type CurrentItemProps = {
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
};

export const MyList = ({ listID }: Props) => {
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const [currentItem, setCurrentItem] = useState<CurrentItemProps | null>(null);
  console.log(listID);
  // @@@@@ listID === '현재' ? redux연결 : id로 api조회 @@@@@

  function onChangeCurrentItem(id: string) {
    token &&
      (async function () {
        const res = await axios(`https://api.spotify.com/v1/tracks/${id}`, {
          headers: {
            Authorization: "Bearer " + token.number,
          },
        });
        return setCurrentItem(res.data);
      })();
  }

  return (
    <div className="listBox">
      {/* <CurrentPlay item={currentItem} /> */}
      <CurrentList listID={listID} onChangeCurrentItem={onChangeCurrentItem} />
    </div>
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
