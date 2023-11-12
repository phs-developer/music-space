import ProdItem from "../../conponents/prodItem/ProdItem";
import { Container } from "./style";
import {
  ListType,
  useCategoryListFetch,
} from "../../hooks/useCategoryListFetch";

export function Category() {
  /*    카테고리 api 코드
  인기 리스트 : toplists "37i9dQZF1DXcBWIGoYBM5M"
  팝 : "0JQ5DAqbMKFEC4WFtoNRpw" "37i9dQZF1DWVuUd3Ffrcx8"
  힙합 : "0JQ5DAqbMKFQ00XGBls6ym"
  운동 : "0JQ5DAqbMKFAXlCG6QvYQ4"
  드라이빙 : "0JQ5DAqbMKFIRybaNTYXXy"
  알앤비 : "0JQ5DAqbMKFEZPnFQSFB1T"
  어쿠스틱 : "0JQ5DAqbMKFy78wprEpAjl" */

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
        <h3>{category.name}</h3>
        <div>
          {category.list.map((item) => {
            return (
              <ProdItem
                key={item.id}
                imgURL={item.imgURL}
                trackName={item.trackName}
                artistsName={item.artistsName}
                id={item.id}
                uri={item.uri}
                releaseDate={item.releaseDate}
                maxwidth={item.maxwidth}
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
