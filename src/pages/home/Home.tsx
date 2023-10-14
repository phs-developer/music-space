import { Section } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { useState } from "react";
import axios from "axios";
import { Category } from "./Category";

export default function Home() {
  const [userName, setUserName] = useState(null);
  const token = useSelector((state: RootState) => state.setAccessToken.token);

  if (token) {
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
        <h1>
          Welcome, <span>{userName}</span> MUSIC SPACE!
        </h1>
      ) : (
        <h1>Welcome, MUSIC SPACE!</h1>
      )}
      <div>
        <Category />
      </div>
    </Section>
  );
}
