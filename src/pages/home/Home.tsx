import { Section } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { useState } from "react";
import axios from "axios";
import { Category } from "./Category";

export default function Home() {
  const [userName, setUserName] = useState(null);
  const token = useSelector((state: RootState) => state.token.token);

  if (token) {
    // user 로그인 했을 경우 프로필 정보 받아오기
    token.name === "personal" &&
      (async function () {
        const res = await axios(`https://api.spotify.com/v1/me`, {
          headers: {
            Authorization: "Bearer " + token.number,
          },
        });
        setUserName(res.data.display_name);
      })();
  }

  return (
    <Section>
      {userName ? (
        <h2>
          Welcome, <span>{userName}</span> !
        </h2>
      ) : (
        <h2>Welcome, MUSIC SPACE!</h2>
      )}
      <div>
        <Category />
      </div>
    </Section>
  );
}
