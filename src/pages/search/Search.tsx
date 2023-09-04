import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  useState,
  useEffect,
} from "react";
import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Input, SearchList } from "./style";
import { useSearchFetch, useCategoryFetch } from "../../hooks/useFetch";
import axios from "axios";

interface Data {
  imgURL: string;
  name: string;
  description: string;
  id: string;
}
interface listType {
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

interface Props {
  addPlaylist: (id: string, img: string, title: string) => void;
}

export default function Search({ addPlaylist }: Props) {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<Array<listType> | []>([]);

  function searchData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) {
      return alert("키워드를 입력하세요!");
    } else {
      const token = localStorage.getItem("token");
      (async function () {
        const res = await axios(
          `https://api.spotify.com/v1/search?q=remaster%2520track%3A${value}&type=track&market=ES&limit=15`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        console.log(res);
        setList(res.data.tracks.items);
      })();
    }
  }

  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Section>
      <form onSubmit={searchData}>
        <Input
          type="text"
          placeholder="노래명 입력"
          onChange={onChangeHandler}
        />
      </form>
      <SearchList>
        {list?.map((e) => {
          return (
            <ProdItem
              addPlaylist={addPlaylist}
              key={e.id}
              id={e.id}
              imgURL={e.album.images[0].url}
              trackName={e.name}
              name={e.artists[0].name}
            />
          );
        })}
      </SearchList>
    </Section>
  );
}
