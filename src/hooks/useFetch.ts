import axios from "axios";
import { useEffect, useState } from "react";

interface TopListsProps {
  images: {
    url: string;
  }[];
  name: string;
  description: string;
  id: string;
}
interface SearchProps {
  images: {
    url: string;
  }[];
  name: string;
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

const token = localStorage.getItem("token");

function useCategoryFetch(url: string) {
  const [list, setList] = useState<Array<TopListsProps> | []>([]);

  useEffect(() => {
    (async function () {
      const data: CategoryData = await axios(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setList(data.data.playlists.items);
    })();
  }, [url, token]);

  return list;
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

interface Item {
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
  const [list, setList] = useState<Array<Item> | []>([]);
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
