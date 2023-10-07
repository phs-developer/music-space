import ProdItem from "../../conponents/prodItem/ProdItem";
import { Container } from "./style";
import { useCategoryListFetch } from "../../hooks/useFetch";

export function Category() {
  /*    카테고리 api 코드
  인기 리스트 : toplists "37i9dQZF1DXcBWIGoYBM5M"
  팝 : "0JQ5DAqbMKFEC4WFtoNRpw" "37i9dQZF1DWVuUd3Ffrcx8"
  힙합 : "0JQ5DAqbMKFQ00XGBls6ym"
  운동 : "0JQ5DAqbMKFAXlCG6QvYQ4"
  드라이빙 : "0JQ5DAqbMKFIRybaNTYXXy"
  알앤비 : "0JQ5DAqbMKFEZPnFQSFB1T"
  어쿠스틱 : "0JQ5DAqbMKFy78wprEpAjl" */

  type ListItemType = {
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
  };

  type ListType = {
    name: string;
    list: Array<ListItemType>;
  };

  const pop = useCategoryListFetch("37i9dQZF1DWVuUd3Ffrcx8");
  const top = useCategoryListFetch("37i9dQZF1DXcBWIGoYBM5M");
  const hippop = useCategoryListFetch("37i9dQZF1DWW46Vfs1oltB");
  const workOut = useCategoryListFetch("37i9dQZF1DX3ZeFHRhhi7Y");
  const driving = useCategoryListFetch("37i9dQZF1DWWMOmoXKqHTD");
  const rnb = useCategoryListFetch("37i9dQZF1DX4SBhb3fqCJd");
  const list = [pop, top, hippop, workOut, driving, rnb];

  function CategorySection({ category }: { category: ListType }) {
    return (
      <Container>
        <h2>{category.name}</h2>
        <div>
          {category.list.map((item) => {
            return (
              <ProdItem
                key={item.id}
                imgURL={item.album.images[0].url}
                trackName={item.name}
                name={item.artists[0].name}
                id={item.id}
              />
            );
          })}
        </div>
      </Container>
    );
  }

  return (
    <>
      {list.map((e) => {
        return e && <CategorySection category={e} key={e.name} />;
      })}
    </>
  );
}
