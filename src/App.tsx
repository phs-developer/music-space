import { Routes, Route, BrowserRouter } from "react-router-dom";
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
import { MyPage } from "./pages/MyPage/MyPage";

function App() {
  // official 토큰 가져오기
  useGetToken();

  return (
    <>
      <GlobalStyles />
      <Main background={bg}>
        <Nav />
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="search" element={<Search />} />
            <Route path="playList" element={<PlayList />} />
            <Route path="login" element={<Login />} />
            <Route path="loginSuccess" element={<LoginSuccess />} />
            <Route path="myPage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </Main>
    </>
  );
}

export default App;
