import { Btn, List, ListItem } from "./style";
import play from "../../assets/play.png";
import x from "../../assets/x.png";
import { useDispatch, useSelector } from "react-redux";
import { deleteList } from "../../store/reducer/myList";
import { useEffect, useState } from "react";
import { RootState } from "../../store/reducer/reducer";
import axios from "axios";

type Props = {
  listID: string;
  onChangeCurrentItem: (id: string) => void;
};

type CurrentListType = {
  track: {
    album: {
      images: {
        url: string;
      }[];
    };
    id: string;
    name: string;
    uri: string;
  };
};
// type Props = {
//   list: {
//     id: string;
//     imgURL: string;
//     name: string;
//   }[];
//   onChangeCurrentItem: (id: string) => void;
// };

export default function CurrentList({ listID, onChangeCurrentItem }: Props) {
  const [currentList, setCurrentList] = useState<CurrentListType[]>([]);
  const token = useSelector((state: RootState) => state.setAccessToken.token);
  const dispatch = useDispatch();
  function deleteItem(id: string) {
    dispatch(deleteList(id));
  }

  useEffect(() => {
    listID === "PLAYLIST"
      ? console.log("현재리스트")
      : token &&
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
  }, [listID, token]);

  return (
    <List>
      {currentList.length <= 0 && (
        <ListItem>
          <div>리스트 없음</div>
        </ListItem>
      )}
      {currentList.map((item) => {
        return (
          <ListItem key={item.track.id}>
            <div>
              <img src={item.track.album.images[0].url} alt="이미지" />
              <span>{item.track.name}</span>
            </div>
            <div>
              <Btn
                type="button"
                color="green"
                onClick={() => onChangeCurrentItem(item.track.id)}
              >
                <img src={play} alt="재생버튼" />
              </Btn>
              <Btn
                type="button"
                color="red"
                onClick={() => deleteItem(item.track.id)}
              >
                <img src={x} alt="삭제버튼" />
              </Btn>
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}

// 항목추가 api
// function addTrack(uri: string) {
//   token &&
//     axios({
//       method: "post",
//       url: `https://api.spotify.com/v1/playlists/추가할 재생목록 ID/tracks`,
//       headers: {
//         Authorization: "Bearer " + token.number,
//         "Content-Type": "application/json",
//       },
//       data: {
//         uris: [`${uri}`],
//       },
//     })
//       .then((res) => {
//         console.log("항목 추가 성공");
//       })
//       .catch((err) => console.log("헝목 추가 실패" + err));
// }
