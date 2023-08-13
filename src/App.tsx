import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./conponents/nav/Nav";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import { Main } from "./App.style";
import Search from "./pages/search/Search";
import PlayList from "./pages/playList/PlayList";
import ProdCard from "./pages/prodCard/ProdCard";

function App() {
  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="playList" element={<PlayList />} />
          <Route path="prod" element={<ProdCard />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
