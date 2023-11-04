import { useSelector } from "react-redux";
import { itemsType } from "../PlayList";
import { RootState } from "../../../store/reducer/reducer";
import axios from "axios";
import { UserPlaylist } from "../style";

type AddToTrackType = {
  myList: itemsType[];
  trackURI: string;
  closeMyList: () => void;
};
export const AddToTrack = ({
  myList,
  trackURI,
  closeMyList,
}: AddToTrackType) => {
  const token = useSelector((state: RootState) => state.setAccessToken.token);

  function addTrack(listID: string) {
    token &&
      axios({
        method: "post",
        url: `https://api.spotify.com/v1/playlists/${listID}/tracks`,
        headers: {
          Authorization: "Bearer " + token.number,
          "Content-Type": "application/json",
        },
        data: {
          uris: [`${trackURI}`],
        },
      })
        .then((res) => {
          alert("재생 목록에 추가되었습니다!");
        })
        .catch((err) => console.log("헝목 추가 실패" + err))
        .finally(() => closeMyList());
  }

  return (
    <UserPlaylist>
      {myList.map((item) => {
        return (
          <li key={item.id} onClick={() => addTrack(item.id)}>
            {item.name}
          </li>
        );
      })}
    </UserPlaylist>
  );
};
