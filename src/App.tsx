import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./conponents/nav/Nav";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import { Main } from "./App.style";
import Search from "./pages/search/Search";
import { PlayList } from "./pages/playList/PlayList";
import ProdCard from "./pages/prodCard/ProdCard";
import { useEffect, useState } from "react";
import axios from "axios";
import bg from "./assets/bg.jpg";
import { time } from "console";
import { useGetToken } from "./hooks/useFetch";

interface listType {
  id: string;
  imgUrl: string;
  title: string;
}

function App() {
  // 토큰 확인
  useGetToken();

  const [playlist, setPlaylist] = useState<Array<listType> | []>([]);

  function addPlaylist(id: string, img: string, title: string) {
    const newItem: listType = {
      id: id,
      imgUrl: img,
      title: title,
    };
    setPlaylist([newItem, ...playlist]);
  }

  return (
    <>
      <GlobalStyles />
      <Main background={bg}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home addPlaylist={addPlaylist} />} />
          <Route path="search" element={<Search addPlaylist={addPlaylist} />} />
          <Route path="playList" element={<PlayList list={playlist} />} />
          <Route path="card" element={<ProdCard />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
