// 토큰 유효성 검사
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducer/reducer";
import { setToken, tokenObj } from "../store/reducer/accessToken";

export default function useGetToken() {
  const token = useSelector((state: RootState) => state.token.token);
  const dispatch = useDispatch();

  async function getToken() {
    const res = await axios.get("http://localhost:8080");
    const token: tokenObj = {
      number: res.data.access_token,
      name: "official",
      time: new Date().getTime(),
    };
    dispatch(setToken(token));
  }
  // 토큰이 있으면 유효시간 확인 후 사용, 없으면 발급
  if (!token) {
    getToken();
  } else {
    const tokenTime = token.time;
    const currentTime = new Date();
    const validTime = (currentTime.getTime() - tokenTime) / 1000;
    return validTime >= 3000 ? getToken() : token;
  }

  return;
}
