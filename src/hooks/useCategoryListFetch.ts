import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer/reducer";
import { ProdItemType } from "../conponents/prodItem/ProdItem";

//카테고리 리스트 API
export type ListType = {
  name: string;
  list: ProdItemType[];
};

export function useCategoryListFetch(listID: string) {
  // home 카테고리 재생목록의 track 리스트 가져올 때 사용
  const [list, setList] = useState<ListType | null>(null);
  const token = useSelector((state: RootState) => state.token.token);

  useEffect(() => {
    token &&
      (async function () {
        const res = await axios(
          `https://api.spotify.com/v1/playlists/${listID}`,
          {
            headers: {
              Authorization: "Bearer " + token.number,
            },
          }
        );
        const initialValue = {
          imgURL: "이미지 경로",
          artistsName: "가수명",
          id: "아이디",
          trackName: "노래명",
          uri: "스포티파이 URI",
          releaseDate: "출시일",
          maxwidth: "150",
        };
        const name: string = res.data.name;
        const item = res.data.tracks.items;
        let list: ProdItemType[] = [];

        for (let i = 0; i < 6; i++) {
          list.push({
            ...initialValue,
            imgURL: item[i].track.album.images[0].url,
            artistsName: item[i].track.artists[0].name,
            id: item[i].track.id,
            trackName: item[i].track.name,
            uri: item[i].track.uri,
            releaseDate: item[i].track.album.release_date,
            maxwidth: "150",
          });
        }
        setList({ name: name, list: list });
      })();
  }, [listID, token]);

  return list;
}
