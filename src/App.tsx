import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./conponents/nav/Nav";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import { Main } from "./App.style";
import Search from "./pages/search/Search";
import { PlayList } from "./pages/playList/PlayList";
import { useState } from "react";
import bg from "./assets/bg.jpg";
import useGetToken from "./hooks/useGetToken";
import Login from "./pages/login/Login";
import axios from "axios";

interface listType {
  id: string;
  imgUrl: string;
  title: string;
}

function App() {
  useGetToken();
  const [playlist, setPlaylist] = useState<Array<listType> | []>([]);

  function addPlaylist(id: string, img: string, title: string) {
    const newItem: listType = {
      id: id,
      imgUrl: img,
      title: title,
    };
    setPlaylist([newItem, ...playlist]);
    console.log(playlist);
  }

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   (async function () {
  //     const data = await axios("https://api.spotify.com/v1/me/player", {
  //       headers: {
  //         Authorization: "Bearer " + token,
  //       },
  //     });
  //     console.log(data);
  //   })();
  // }, []);

  return (
    <>
      <GlobalStyles />
      <Main background={bg}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home addPlaylist={addPlaylist} />} />
          <Route path="search" element={<Search addPlaylist={addPlaylist} />} />
          <Route path="playList" element={<PlayList list={playlist} />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
