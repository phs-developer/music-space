import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./conponents/nav/Nav";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import { Main } from "./App.style";
import Search from "./pages/search/Search";
import { PlayList } from "./pages/playList/PlayList";
import ProdCard from "./pages/prodCard/ProdCard";
import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    (async function () {
      const token = localStorage.getItem("token");
      // 새로고침 시 토큰 재발급 방지
      if (!token) {
        const res = await axios.get("http://localhost:8080");
        localStorage.setItem("token", res.data.access_token);
      }
    })();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="playList" element={<PlayList />} />
          <Route path="card" element={<ProdCard />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
