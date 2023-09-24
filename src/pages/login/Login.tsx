import axios from "axios";

export default function Login() {
  async function login() {
    const res = await axios.get("http://localhost:8080/login");

    // 스포티파이에서 제공한 로그인 페이지로 이동
    window.location.href = res.data;
  }

  return (
    <>
      <button onClick={login}>로그인</button>
    </>
  );
}
