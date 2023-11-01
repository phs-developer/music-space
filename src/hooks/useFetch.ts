import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer/reducer";
import { ProdItemType } from "../conponents/prodItem/ProdItem";

const token = localStorage.getItem("token");

//카테고리 API
interface CategoryProps {
  images: {
    url: string;
  }[];
  name: string;
  description: string;
  id: string;
}
interface CategoryData {
  data: {
    playlists: {
      items: {
        images: {
          url: string;
        }[];
        name: string;
        description: string;
        id: string;
      }[];
    };
  };
}
function useCategoryFetch(url: string) {
  const [list, setList] = useState<Array<CategoryProps> | []>([]);

  useEffect(() => {
    (async function () {
      const data: CategoryData = await axios(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setList(data.data.playlists.items);
    })();
  }, [url]);

  return list;
}

//검색 API
interface tracksData {
  data: {
    albums: {
      items: {
        images: {
          url: string;
        }[];
        name: string;
        id: string;
      }[];
    };
  };
}
function useSearchFetch(url: string) {
  (async function () {
    const data: tracksData = await axios(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const items = data.data.albums.items;
    return items[0] ? ["1"] : items;
  })();
}

//카테고리 리스트 API
export type ListType = {
  name: string;
  list: ProdItemType[];
};

function useCategoryListFetch(listID: string) {
  const [list, setList] = useState<ListType | null>(null);
  const token = useSelector((state: RootState) => state.setAccessToken.token);
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

        const name: string = res.data.name;
        const item = res.data.tracks.items;

        let list: ProdItemType[] = [];
        for (let i = 0; i < 4; i++) {
          list.push({
            imgURL: item[i].track.album.images[0].url,
            artistsName: item[i].track.artists.name,
            id: item[i].track.id,
            trackName: item[i].track.name,
            uri: item[i].track.uri,
            releaseDate: item[i].track.album.release_date,
          });
        }
        setList({ name: name, list: list });
      })();
  }, [listID, token]);

  return list;
}

export { useCategoryFetch, useSearchFetch, useCategoryListFetch };
