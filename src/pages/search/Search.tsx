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

export default function Search() {
  const [keyword, setKeyword] = useState<string | number>("");
  const [value, setValue] = useState<string>("");
  // const items = useSearchFetch(
  //   `https://api.spotify.com/v1/search?q=remaster%25artist%3A${keyword}&type=album`
  // );

  const topLists = useCategoryFetch(
    "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=5"
  );

  function searchData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) {
      return alert("키워드를 입력하세요!");
    }
    setKeyword(value);
  }
  function onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <Section>
      <form onSubmit={searchData}>
        <Input
          type="text"
          placeholder="가수명 입력"
          onChange={onChangeHandler}
        />
      </form>
      <SearchList>
        {topLists?.map((e) => {
          return (
            <ProdItem
              key={e.id}
              imgURL={e.images[0].url}
              name={e.name}
              description={e.name}
              id={e.id}
            />
          );
        })}
      </SearchList>
    </Section>
  );
}
