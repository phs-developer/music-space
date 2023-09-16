// 토큰 유효성 검사
import axios from "axios";

export default function useGetToken() {
  const token = sessionStorage.getItem("token");

  async function getToken() {
    const setDate = new Date();
    const res = await axios.get("http://localhost:8080");
    localStorage.setItem("token", res.data.access_token);
    localStorage.setItem("tokenTime", String(setDate.getTime()));
  }
  // 토큰이 있으면 유효시간 확인 후 사용, 없으면 발급
  if (!token) {
    getToken();
  } else {
    const tokenTime = localStorage.getItem("tokenTime");
    const currentTime = new Date();
    const validTime = (currentTime.getTime() - Number(tokenTime)) / 1000;
    console.log(validTime);
    return validTime >= 3000 ? getToken() : token;
  }

  return;
}
