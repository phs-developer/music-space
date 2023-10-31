import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer/reducer";

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
type ListItemType = {
  img: string;
  artists_name: string;
  id: string;
  track_name: string;
  uri: string;
};

export type ListType = {
  name: string;
  list: ListItemType[];
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
        let list: Array<ListItemType> = [];
        for (let i = 0; i < 4; i++) {
          list.push({
            img: res.data.tracks.items[i].track.album.images[0].url,
            artists_name: res.data.tracks.items[i].track.artists.name,
            id: res.data.tracks.items[i].track.id,
            track_name: res.data.tracks.items[i].track.name,
            uri: res.data.tracks.items[i].track.uri,
          });
        }

        setList({ name: name, list: list });
      })();
  }, [listID, token]);

  return list;
}

export { useCategoryFetch, useSearchFetch, useCategoryListFetch };
