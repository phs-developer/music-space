import { NavContainer, Ul, Logo } from "./style";
import { Link } from "react-router-dom";
import bg from "../../assets/login.png";

export default function Nav() {
  return (
    <NavContainer>
      <Logo>MUSIC SPACE</Logo>
      <Ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="search">검색하기</Link>
        </li>
        <li>
          <Link to="playList">라이브러리</Link>
        </li>
        <li>
          <Link to="login">로그인</Link>
        </li>
      </Ul>
    </NavContainer>
  );
}
