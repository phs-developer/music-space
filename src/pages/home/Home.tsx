import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Container } from "./style";
import { useCategoryFetch } from "../../hooks/useFetch";

interface TopListsProps {
  images: {
    url: string;
  }[];
  name: string;
  description: string;
  id: string;
}

export default function Home() {
  const topLists = useCategoryFetch(
    "https://api.spotify.com/v1/browse/categories/toplists/playlists?limit=5"
  );
  const popLists = useCategoryFetch(
    "https://api.spotify.com/v1/browse/categories/0JQ5DAqbMKFEC4WFtoNRpw/playlists?limit=5"
  );

  function Category({
    category,
    title,
  }: {
    category: Array<TopListsProps> | null;
    title: string;
  }) {
    return (
      <Container>
        <h2>{title}</h2>
        <div>
          {category &&
            category.map((item) => {
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
      </Container>
    );
  }

  return (
    <Section>
      <Category category={topLists} title="TOP" />
      <Category category={popLists} title="POP" />
    </Section>
  );
}
