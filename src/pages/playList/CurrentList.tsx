import { Btn, List, ListItem } from "./style";
import play from "../../assets/play.png";
import x from "../../assets/x.png";
import { useDispatch } from "react-redux";
import { CurrentItemType, deleteList } from "../../store/reducer/myList";

type Props = {
  listData: CurrentItemType[];
  onChangeCurrentItem: (track: CurrentItemType) => void;
  isAddBtn?: string | undefined;
};

export default function CurrentList({
  listData,
  onChangeCurrentItem,
  isAddBtn,
}: Props) {
  const dispatch = useDispatch();
  function deleteItem(id: string) {
    dispatch(deleteList(id));
  }

  const onAddList = () => {
    console.log("재생목록 추가");
  };

  return (
    <List>
      {listData.length <= 0 && (
        <ListItem>
          <div>리스트 없음</div>
        </ListItem>
      )}
      {listData.map((item) => {
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
                onClick={() => onChangeCurrentItem(item)}
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
              {isAddBtn && (
                <Btn type="button" color="gray" onClick={onAddList}>
                  재생목록추가
                </Btn>
              )}
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
