import { Section } from "./style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { useState } from "react";
import axios from "axios";
import { Category } from "./Category";

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
  const [userName, setUserName] = useState(null);

  const token = useSelector((state: RootState) => state.setAccessToken.token);
  token.length > 0 &&
    (async function () {
      const res = await axios(`https://api.spotify.com/v1/me`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setUserName(res.data.display_name);
    })();

  return (
    <Section>
      {userName ? (
        <h1>Welcome, {userName} Music Space!</h1>
      ) : (
        <h1>Welcome, Your Music Space!</h1>
      )}
      <div>
        <Category />
      </div>
    </Section>
  );
}
