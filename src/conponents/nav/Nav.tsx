import { NavContainer, Ul } from "./style";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <NavContainer>
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
      </Ul>
    </NavContainer>
  );
}
