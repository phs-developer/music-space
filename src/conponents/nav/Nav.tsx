import { NavContainer, Ul, Logo } from "./style";
import { Link } from "react-router-dom";
import bg from "../../assets/login.png";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer/reducer";
import { resetToken } from "../../store/reducer/accessToken";

export default function Nav() {
  const isLogin = useSelector((state: RootState) => state.setAccessToken.token);
  const dispatch = useDispatch();

  function tokenReset() {
    // 로그아웃 시 토큰 초기화
    dispatch(resetToken());
  }

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
          {isLogin ? (
            <div onClick={tokenReset}>로그아웃</div>
          ) : (
            <Link to="login">로그인</Link>
          )}
        </li>
      </Ul>
    </NavContainer>
  );
}
