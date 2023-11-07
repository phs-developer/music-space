import { NavContainer, Ul, Logo } from "./style";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";

export default function Nav() {
  const token = useSelector((state: RootState) => state.token.token);

  return (
    <NavContainer>
      <Logo>MUSIC SPACE</Logo>
      <Ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="search">노래검색</Link>
        </li>
        <li>
          <Link to="playList">플레이리스트</Link>
        </li>
        <li>
          {token?.name === "personal" ? (
            <Link to="myPage">프로필</Link>
          ) : (
            <Link to="login">로그인</Link>
          )}
        </li>
      </Ul>
    </NavContainer>
  );
}
