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

function useCategoryFetch(url: string) {
  const [list, setList] = useState<Array<TopListsProps> | []>([]);
  const token = localStorage.getItem("token");

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
  const token = localStorage.getItem("token");

  (async function () {
    const data: tracksData = await axios(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    const items = data.data.albums.items;
    console.log(items[0]);
    return items[0] ? ["1"] : items;
  })();
  // useEffect(() => {
  //   (async function () {
  //     const data: tracksData = await axios(url, {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     console.log(data);
  //     setList(data.data.albums.items);
  //   })();
  // }, [url, token]);
  // return list;
}

export { useCategoryFetch, useSearchFetch };
