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

interface TopData {
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

function useFetch(url: string) {
  const [data, setData] = useState<Array<TopListsProps> | null>(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    (async function () {
      const topData: TopData = await axios(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(topData);
      setData(topData.data.playlists.items);
    })();
  }, [url, token]);
  return data;
}

function useFetch2(url: string) {
  const [data, setData] = useState<Array<TopListsProps> | null>(null);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    (async function () {
      const topData = await axios(url, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(topData);
      return topData;
    })();
  }, [url, token]);
  // return data;
}

export { useFetch, useFetch2 };
