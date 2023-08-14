import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Category } from "./style";
import { useFetch, useFetch2 } from "../../hooks/useFetch";

export default function Home() {
  const topLists = useFetch(
    "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=5"
  );
  const popLists = useFetch(
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists?limit=5"
  );

  return (
    <Section>
      <Category>
        <h2>TOP</h2>
        <div>
          {topLists &&
            topLists.map((item) => {
              return (
                <ProdItem
                  key={item.id}
                  imgURL={item.images[0].url}
                  name={item.name}
                  description={item.description}
                  id={item.id}
                />
              );
            })}
        </div>
      </Category>
      <Category>
        <h2>Best</h2>
        <div className="hiddenContainer">
          {popLists &&
            popLists.map((item) => {
              return (
                <ProdItem
                  key={item.id}
                  imgURL={item.images[0].url}
                  name={item.name}
                  description={item.description}
                  id={item.id}
                />
              );
            })}
        </div>
      </Category>
    </Section>
  );
}
