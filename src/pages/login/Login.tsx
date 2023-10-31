import axios from "axios";
import { LoginForm, LoginButn } from "./style";

export default function Login() {
  async function login() {
    // 스포티파이 연동 동의 페이지로 이동
    const res = await axios.get("http://localhost:8080/login");
    window.location.href = res.data;
  }

  return (
    <LoginForm>
      <p>버튼을 클릭하면 스포티파이 계정과 연동됩니다.</p>
      <LoginButn onClick={login}>스포티파이로 로그인</LoginButn>
    </LoginForm>
  );
}
