import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Nav from "./conponents/nav/Nav";
import GlobalStyles from "./styles/GlobalStyles";
import "./App.css";
import { Main } from "./App.style";
import Search from "./pages/search/Search";
import { PlayList } from "./pages/playList/PlayList";
import bg from "./assets/bg.jpg";
import useGetToken from "./hooks/useGetToken";
import Login from "./pages/login/Login";
import { LoginSuccess } from "./pages/login/LoginSuccess";

function App() {
  useGetToken();

  return (
    <>
      <GlobalStyles />
      <Main background={bg}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="playList" element={<PlayList />} />
          <Route path="login" element={<Login />} />
          <Route path="loginSeuccess" element={<LoginSuccess />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;
