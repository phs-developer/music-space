import axios from "axios";
import { useEffect, useState } from "react";

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
interface CategoryList {
  album: {
    images: {
      url: string;
    }[];
  };
  artists: {
    name: string;
  }[];
  id: string;
  name: string;
}

function useCategoryListFetch(listID: string) {
  const [list, setList] = useState<Array<CategoryList> | []>([]);
  useEffect(() => {
    (async function () {
      let items = [];
      const res = await axios(
        `https://api.spotify.com/v1/playlists/${listID}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      for (let i = 0; i < 4; i++) {
        items.push(res.data.tracks.items[i].track);
      }
      setList(items);
    })();
  }, [listID]);
  return list;
}

export { useCategoryFetch, useSearchFetch, useCategoryListFetch };
