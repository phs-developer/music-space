import ProdItem from "../../conponents/prodItem/ProdItem";
import { Section, Container } from "./style";
import { useCategoryListFetch } from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { useEffect, useState } from "react";
import axios from "axios";

// 인기 리스트 : toplists "37i9dQZF1DXcBWIGoYBM5M"
// 팝 : "0JQ5DAqbMKFEC4WFtoNRpw" "37i9dQZF1DWVuUd3Ffrcx8"
// 힙합 : "0JQ5DAqbMKFQ00XGBls6ym"
// 운동 : "0JQ5DAqbMKFAXlCG6QvYQ4"
// 드라이빙 : "0JQ5DAqbMKFIRybaNTYXXy"
// 알앤비 : "0JQ5DAqbMKFEZPnFQSFB1T"
// 어쿠스틱 : "0JQ5DAqbMKFy78wprEpAjl"
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

export default function Home() {
  const pop = useCategoryListFetch("37i9dQZF1DWVuUd3Ffrcx8");
  const top = useCategoryListFetch("37i9dQZF1DXcBWIGoYBM5M");
  const hippop = useCategoryListFetch("37i9dQZF1DWW46Vfs1oltB");
  const workOut = useCategoryListFetch("37i9dQZF1DX3ZeFHRhhi7Y");
  const driving = useCategoryListFetch("37i9dQZF1DWWMOmoXKqHTD");
  const rnb = useCategoryListFetch("37i9dQZF1DX4SBhb3fqCJd");
  const [userName, setUserName] = useState(null);

  const token = useSelector((state: RootState) => state.setAccessToken.token);
  console.log("토큰 : " + token);
  token.length > 0 &&
    (async function () {
      const res = await axios(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserName(res.data.display_name);
      console.log(res);
    })();

  return (
    <Section>
      {userName ? (
        <h1>Welcome, {userName} Music Space!</h1>
      ) : (
        <h1>Welcome, Your Music Space!</h1>
      )}
      {/* <h1></h1> */}
      <div>
        <Category category={pop} title="TOP" />
        <Category category={top} title="POP" />
        <Category category={hippop} title="HIP-POP" />
        <Category category={workOut} title="WORK-OUT" />
        <Category category={driving} title="DRIVING" />
        <Category category={rnb} title="R&B" />
      </div>
    </Section>
  );
}

function Category({
  category,
  title,
}: {
  category: Array<Item> | null;
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
