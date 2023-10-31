import { ChangeEvent, FormEvent, useState } from "react";
import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Input, SearchList } from "./style";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";

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
  uri: string;
}

export default function Search() {
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<Array<listType> | []>([]);
  const token = useSelector((state: RootState) => state.setAccessToken.token);

  function searchData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!value) {
      return alert("키워드를 입력하세요!");
    } else {
      token &&
        (async function () {
          const res = await axios(
            `https://api.spotify.com/v1/search?q=remaster%2520track%3A${value}&type=track&market=ES&limit=15`,
            {
              headers: {
                Authorization: "Bearer " + token.number,
              },
            }
          );
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
              key={e.id}
              id={e.id}
              imgURL={e.album.images[0].url}
              trackName={e.name}
              name={e.artists[0].name}
              uri={e.uri}
            />
          );
        })}
      </SearchList>
    </Section>
  );
}
