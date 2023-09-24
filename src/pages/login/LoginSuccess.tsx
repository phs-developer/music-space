import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { setToken } from "../../store/reducer/accessToken";

export function LoginSuccess() {
  const [searchParams, setSearchParams] = useSearchParams();
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const tokenUpdate = (token: string) => {
    dispatch(setToken(token));
  };

  useEffect(() => {
    (async function () {
      const res = await axios({
        method: "post",
        url: "http://localhost:8080/loginSuccess",
        data: {
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            code: code,
          },
        },
      });
      tokenUpdate(res.data.access_token);
      navigate("/");
    })();
  }, [code]);

  return <>로그인 성공페이지</>;
}
